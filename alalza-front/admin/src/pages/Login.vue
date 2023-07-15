<template lang="pug">
q-layout.login(view="lHh Lpr lFf")
	q-page-container.justify-center.row
		q-card.login-card
			q-form(ref="form")
				.row.justify-center.text-center
					q-img.login-logo(src="~/assets/logo2.png")
				.row.justify-center
					h5.q-mb-sm.q-mt-sm.text-center
						|Administrador
				.row.justify-center
					q-input(
						v-model="user.username",
						label="Correo electrónico",
						style="width: 100%",
						lazy-rules,
						name="Email",
						type="email",
						:rules="rules.email",
						outlined)
				.row.justify-center.q-mt-sm
					q-input(
						v-model="user.password",
						type="password",
						name="password",
						label="Contraseña",
						style="width: 100%",
						:rules="[ val => val && val.length > 0 || 'Contraseña requerida']",
						outlined)
				.row.justify-center
					transition(name="flip", appear, enter-active-class="animated slow flipInX", leave-active-class="animated slow flipOutX")
						q-chip(color="red", dark, v-model="error.credentials", removable)
							|Datos incorrectos
				.row.justify-center
					q-btn.q-mt-md(
						push,
						:loading="status.loading",
						style="width: 100%",
						padding="5px 50px",
						color="primary",
						@click="login")
						|Ingresar


	q-dialog(v-model="dialog.status", persistent, transition-show="scale", transition-hide="scale", @hide="redirect")
		q-card.bg-green-7.text-white(style="width: 300px")
			q-card-section
				.text-h6
					|!Acceso correcto!
			q-card-actions.bg-white.text-black
				.text-body1
					|En breve serás redireccionado a tu dashboard
			q-card-actions.bg-white.text-black(align="right")
				q-btn(flat, label="Cerrar", v-close-popup, @click="redirect")
		
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import { api, auth } from 'boot/axios';

export default defineComponent({
	name: 'Login',
	setup(){
		const form = ref(null)
		const router = useRouter()

		let user = reactive({
			username: "",
			password: "",
			otp: ""
		})

		let dialog = reactive({
			status: false
		})

		let error = reactive({
			credentials: false
		})

		let status = reactive({
			loading: false
		})

		const rules = {
			email: [
				v => v && v.length > 0 || 'Correo electrónico requerido',
				v => v.match(/[A-z0-9 .]+@[A-z0-9 .]+/g) || 'Correo electrónico inválido',
			]
		}

		const redirect = () => router.push({ path: "/dashboard" })
		const login = () => {
			form.value.validate().then(success => {
				if( success ){
					status.loading = true
					error.credentials = false

					const body = {
						username: user.username,
						password: user.password,
						otp: user.otp || undefined
					}
					
					auth.post("/admin/login", body)
					.then(({data, status}) => {
						dialog.status = true

						setTimeout(() => {
							dialog.status = false
							redirect()
						}, 3000)
					})
					.catch(err => {
						if(err.response?.status){
							error.credentials = true
						}else{
							console.error( err )
						}
					})
					.finally(() => {
						status.loading = false
					})
				}
			})
		}

		return {
			user,
			status,
			form,
			error,
			rules,
			dialog,
			login,
			redirect
		}
	}
})
</script>

<style lang="sass">
	.login
		background-color: rgba(0, 0, 0, 0.1)
		padding-top: 10%
		.login-card
			width: 400px
			padding: 15px
			.login-logo
				max-width: 125px
				margin-bottom: 25px
	@media only screen and (max-width: 599px)
		.login
			padding: 15px
			.login-card
				width: 100%
</style>
