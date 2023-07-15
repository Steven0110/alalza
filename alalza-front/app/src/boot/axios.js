import { boot } from 'quasar/wrappers'
import axios from 'axios'

const options = apiName => {
  return {
      timeout: 30000,
      baseURL: `${process.env.API_BASE}/${apiName}`,
      withCredentials: true,
      headers: { "x-api-key": `${apiName}-${process.env.API_KEY}`},
  }
}
const errorHandler = error => {
    if(error.response.status == 403){

        /*  Send notification to Sentry     */
        //Vue.prototype.$sentry.captureException( new Error(error.response.data) )

        //Vue.prototype.$swal("Error al procesar solicitud", "API Key inválida o sesión inválida", "error")

        return Promise.reject(false)

    }else if(error.response.status == 400){
        console.log("Error interceptado")

        /*  Send notification to Sentry     */
        //Vue.prototype.$sentry.captureException( new Error(error.response.data) )

        //Vue.prototype.$swal("Error al procesar solicitud", "Solicitud inválida", "error")
        return Promise.reject(error)
        
    }else if(error.response.status == 500){ // Error en servidor
        console.log("Error interceptado")
        /*  Send notification to Sentry     */
        //Vue.prototype.$sentry.captureException( new Error(error.response.data) )

        //Vue.prototype.$swal("Error inesperado", "Por favor vuelve a intentarlo, si el problema persiste, por favor envíanos un correo a soporte@creedito.mx", "error")
        return Promise.reject(error)
        
    }else
        return Promise.reject(error)
}

const bypass    = value => value
const rejector  = value => Promise.reject( value )

const session = axios.create( options("session") )
session.interceptors.request .use(bypass, rejector)
session.interceptors.response.use(bypass, errorHandler)

export { session }
