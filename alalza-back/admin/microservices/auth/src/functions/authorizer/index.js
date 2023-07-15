'use strict';

const mongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const jwt = require('jsonwebtoken')

const connectionStringURI = process.env.MONGO_CONNSTRING
const dbName = process.env.DB_NAME

const generatePolicy = (principalId, effect, resource, params) => {

    var authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {

        var policyDocument = {};
        policyDocument.Version = '2012-10-17'; // default version
        policyDocument.Statement = [];

        var statementOne = {};
        statementOne.Action = 'execute-api:Invoke'; // default action
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }

    if( params )
        authResponse.context = params

    return authResponse
}


const findToken = cookiesString => {
    let cookies = cookiesString.split(";")

    for( let pair of cookies ){
        if( pair.match(/token=/g) ){
            let tokenCookie = pair.split("=")
            return tokenCookie[ 1 ]
        }
    }

    return false
}

module.exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false
    //console.log(JSON.stringify( event ))
    
    // Registro de auditoría genérico
    console.info(`Recurso=${event.path}, Método=${event.httpMethod}, IP de Origen=${event.requestContext.identity.sourceIp}, User Agent=${event.requestContext.identity.userAgent}, Env= ${event.requestContext.stage}`)

    let client = new mongoClient( connectionStringURI, { useNewUrlParser: true, useUnifiedTopology: true })
    let db
    
    if( !event.headers.Cookie ){
        console.info("La petición no contiene token")
        return callback(null, generatePolicy('me', 'Deny', event.methodArn, {message: "Petición sin token"}))
    }

    client.connect()
    .then(() => {

        // Verifica que el token sea válido
        const sessionToken = findToken( event.headers.Cookie )

        try{
            let decoded = jwt.verify( sessionToken, event.requestContext.identity.sourceIp )
            
            // Obtiene al usuario de la sesión
            db = client.db( dbName )
            let query = { sessionToken: sessionToken }
            let project = {
                _id: 1,
                username: 1
            }
            
            db.collection( "admins" ).findOne( query, {projection: project} )
            .then(user => {
                client.close()
                if( user ){
                    user.exp = decoded.exp
                    callback(null, generatePolicy('me', 'Allow', event.methodArn, user))
                }else
                    callback(null, generatePolicy('me', 'Deny', event.methodArn, {message: "Sin acceso al usuario"}))
            })

        }catch(e){
            console.error( e )
            client.close()

            if(e.name == "TokenExpiredError")
                return callback(null, generatePolicy('me', 'Deny', event.methodArn, {message: "Token expirado"}))
            else
                return callback(null, generatePolicy('me', 'Deny', event.methodArn, {message: "Token inválido"}))
        }

    })
};
