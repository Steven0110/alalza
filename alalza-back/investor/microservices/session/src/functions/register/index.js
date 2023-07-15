'use strict';

const jwt = require('jsonwebtoken')
const mongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const mailgun = require("mailgun-js")
const mg = mailgun({ apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN })

const sha512 = require('js-sha512').sha512

const connectionStringURI = process.env.MONGO_CONNSTRING
const dbName = process.env.DB_NAME
const cookieDefinition = process.env.COOKIE_DEF
const apiBaseURL = process.env.API_BASE_URL

const AWS = require("aws-sdk")
AWS.config.update({ accessKeyId: process.env.AWS_KEY_ID, secretAccessKey: process.env.AWS_SECRET, region: "us-west-2" })

const sendMail = params => {
	return new Promise((resolve, reject) => {
		mg.messages().send(params, function (error, body) {
			if( error )
				reject( error )
			else
				resolve({ message: "ok" })
		});
	})
}

const randomString = length => {
    let result           = ''
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for( let i = 0; i < length; i++ )
       result += characters.charAt(Math.floor(Math.random() * charactersLength))

    return result
}

const generateSessionToken = async (user, ip, db) => {
    let params = {
        id: user._id
    }

    let sessionToken = jwt.sign( params, ip, {
        expiresIn: "20m"
    })

    // Stores Token to User
    let s = {
        $set: {
            sessionToken: sessionToken,
            failedLoginAttempts: 0,
            lastAction: new Date()
        }
    }
    let q = {_id: ObjectId( user._id )}
    //console.log("Debug Session Token: ", sessionToken)
    await db.collection( "investors" ).updateOne( q, s )

    return sessionToken
}

const sanitizeUser = user => {
    delete user._id
    delete user.otpToken
    delete user.otpTmpToken
    delete user.origins
    delete user.blocked
    delete user.suspended
    delete user.active
    delete user.sessionToken

    user.securityQuestions = (user.securityQuestions || []).length
    user.secretImage = !!user.secretImage

    //if( user.profilePicture )
    //    user.profilePicture = presignURL( user.profilePicture )

    return user
}

module.exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false

	// Registro de auditoría individual
	console.info(`Email de entrada=${event.body.username}`)
	
	let client = new mongoClient( connectionStringURI, { useNewUrlParser: true, useUnifiedTopology: true })
	let db

	try{
		await client.connect()
	}catch( e ){
		console.error( e )
		throw e
	}

	db = client.db( dbName )

	let q = {
		username: event.body.username
	}

	let user = await db.collection( "investors" ).findOne( q )
    if( user ){
        console.log("Email ya registrado en una cuenta")
        throw "[duplicated]"
    }else{

        let user = {
            username: event.body.username,
            password: sha512(event.body.password),
            origins: [event.identity.sourceIp],
            createdAt: new Date()
        }

        const { ops } = await db.collection( "investors" ).insertOne( user )

        //Énvía email de verificación
        const verificationHash = randomString(30)
        const verificationURL = apiBaseURL + "session/validate/" + verificationHash
        const html = `<div> <h2 style="text-align: center; color: #8396d3; font-family: Arial;">¡Bienvenido a Al Alza!<br/></h2> <p style="text-align: center;border-radius: 7px;border: 1px solid black;padding: 15px">Tu cuenta ha sido creada exitosamente, pero aún necesita ser verificada. Por favor entra al siguiente enlace para verificarla:</p><p style="text-align:center;margin-top: 25px;"> <a href="${verificationURL}" style="text-decoration: none;background-color: #113f67;padding-left: 40px;padding-right:40px;padding-top: 10px;padding-bottom:10px;color:white;font-weight: 700; font-size: 20px;border-radius: 5px">Verificar cuenta</a> </p></div>`
        const params = {
            html: html,
            from: "Al Alza <no-reply@alalza.mx>",
            to: event.body.username,
            subject: "Verificación de cuenta | Al Alza"
        }

        await sendMail( params )
        console.info(`Email de verificación enviado a ${event.body.username}`)
        
        const sessionToken = await generateSessionToken(ops[0], event.identity.sourceIp, db)
        const cookie = `token=${sessionToken}; ${cookieDefinition}`
        console.log("Cookie: " + cookie)

        let q = {
            username: event.body.username
        }
        let s = {
            $set: {
                sessionToken: sessionToken
            }
        }

        await db.collection("investors").updateOne(q, s)

        client.close()
        return {message: "ok", user: sanitizeUser( user ), cookie: cookie}
    }

    client.close()
    console.log("Fin de la ejecución")
	return true
}