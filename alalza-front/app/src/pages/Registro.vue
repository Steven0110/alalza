<template lang="pug">
q-layout.register(view="lHh Lpr lFf")
	q-page-container.justify-center.row
		q-card.register-card
			q-form(ref="form")
				.row.justify-center.text-center
					q-img.register-logo(src="~/assets/logo2.png")
				.row.justify-center
					h5.q-mb-sm.q-mt-sm.text-center
						|Crear nueva cuenta
				.row.justify-center
					q-input(
						v-model="user.username",
						label="Correo electrónico",
						style="width: 100%",
						lazy-rules,
						:rules="rules.email",
						outlined)
				.row.justify-center.q-mt-sm
					q-input(
						v-model="user.passwordA",
						type="password",
						label="Contraseña",
						style="width: 100%",
						:rules="rules.required",
						outlined)
				.row.justify-center.q-mt-sm
					q-input(
						v-model="user.passwordB",
						type="password",
						label="Repetir contraseña",
						style="width: 100%",
						:rules="rules.password",
						outlined)
				.row.justify-center
					transition(name="flip", appear, enter-active-class="animated slow flipInX", leave-active-class="animated slow flipOutX")
						q-chip(color="red", dark, v-model="error.duplicated", removable)
							|Ya existe una cuenta con ese email

				.row.justify-center
					q-btn.q-mt-md(
						push,
						:loading="status.loading",
						padding="5px 50px",
						style="width: 100%",
						color="primary",
						@click="register")
						|Registrar
			.row.justify-center.q-mt-md
				span
					|¿Ya tienes cuenta?&nbsp;
				router-link(:to="{path: '/'}")
					|Inicia sesión

	q-dialog(v-model="dialog.status", persistent, transition-show="scale", transition-hide="scale", @hide="redirect")
		q-card.bg-red-10.text-white(style="width: 300px", :class="background")
			q-card-section
				.text-h6
					|{{ dialog.error ? 'Oops...' : '¡Listo!'}}
			q-card-actions.bg-white.text-black
				.text-body1
					|{{ dialog.message }}
			q-card-actions.bg-white.text-black(align="right")
				q-btn(flat, label="Cerrar", v-close-popup)

		
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import { api, session } from 'boot/axios';

export default defineComponent({
	name: 'register',
	setup(){

		const router = useRouter()
		const background = computed(() => dialog.error ? "bg-red-10" : "bg-green-7")

		const form = ref(null)

		let user = reactive({
			username: "",
			passwordA: "",
			passwordB: "",
		})

		let status = reactive({
			loading: false
		})

		let error = reactive({
			duplicated: false
		})

		let dialog = reactive({
			status: false,
			message: "",
			error: false
		})


		return {
			user,
			status,
			form,
			error,
			dialog,
			background,
			rules: {
				required:[
					v => v && v.length > 0 || 'Campo requerido',
				],
				password: [
					v => v && v.length > 0 || 'Campo requerido',
					v => user.passwordA == user.passwordB || 'Las contraseñas deben coincidir'
				],
				email: [
					v => v && v.length > 0 || 'Correo electrónico requerido',
					v => v.match(/[A-z0-9 .]+@[A-z0-9 .]+/g) || 'Correo electrónico inválido',
				]
			},
			register: () => {
				form.value.validate().then(success => {
					if( success ){
						status.loading = true
						error.duplicated = false

						const body = {
							username: user.username,
							password: user.passwordA
						}

						session.post("register", body)
						.then( ({data: json, status}) => {
							dialog.error = false
							dialog.message = "Cuenta creada exitosamente."
							dialog.status = true
						})
						.catch( e => {
							dialog.error = true

							let status = e.response?.status
							if( status == 401){
								dialog.message = "Ya existe una cuenta registrada con el correo proporcionado."
								dialog.status = true
							}else{
								dialog.message = "Error desconocido."
								dialog.status = true
								console.error( e )
							}
							e.response.status
						})
						.finally(() => {
							status.loading = false
						})
					}
				})
			},
			redirect: () => {
				if( !dialog.error )
					router.push({ path: "/dashboard" })
			}
		}
	}
})
</script>

<style lang="sass">
	.register
		background-color: rgba(0, 0, 0, 0.1)
		padding-top: 10%
		.register-card
			width: 400px
			padding: 15px
			.register-logo
				max-width: 125px
				margin-bottom: 25px
	@media only screen and (max-width: 599px)
		.register
			padding: 15px
			.register-card
				width: 100%
</style>
