import { auth } from "boot/axios"
import { ref, reactive } from "vue"

export default function monitorSession() {
	
	const dialog = reactive({
		showError: false,
		showTimeout: false,
		showWarning: false
	})

	const remainingTime = ref(0)

	const monitorLoop = () => {

		//console.log("Monitor Loop Triggered: " + remainingTime.value, dialog)
		auth.get("session/check")
		.then( ({data}) => {

			remainingTime.value = data.remainingTime

			if(remainingTime.value < 120)
				dialog.showWarning = true
			else
				dialog.showWarning = false

			setTimeout( () => {
				monitorLoop()
			}, 30 * 1000) //30 s

		})
		.catch(error => {
			if(error.response?.status == 401){
				dialog.showTimeout = true
				//console.log( dialog.showTimeout.value )

			}else if(error.response?.status == 500){
				dialog.showError.value = true
			}else{
				dialog.showError.value = true
			}
		})
	}


	return {
		monitorLoop,
		dialog,
		remainingTime
	}
}