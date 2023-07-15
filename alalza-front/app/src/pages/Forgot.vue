<template lang="pug">
q-layout.forgot(view="lHh Lpr lFf")
	q-page-container.justify-center.row
		q-card.forgot-card
			q-form(ref="form")
				.row.justify-center.text-center
					q-img.forgot-logo(src="~/assets/logo2.png")
				.row.justify-center
					h5.q-mb-sm.q-mt-sm.text-center
						|Recuperar contraseña
				.row.justify-center
					q-input(
						v-model="user.username",
						label="Correo electrónico",
						style="width: 100%",
						lazy-rules,
						:rules="rules.required",
						outlined)
				.row.justify-center.q-mt-sm.hidden
					q-input(
						v-model="user.passwordA",
						type="password",
						label="Contraseña",
						style="width: 300px",
						:rules="rules.required",
						outlined)
				.row.justify-center.q-mt-sm.hidden
					q-input(
						v-model="user.passwordB",
						type="password",
						label="Repetir contraseña",
						style="width: 300px",
						:rules="rules.password",
						outlined)
				.row.justify-center
					q-btn.q-mt-md(
						push,
						:loading="status.loading",
						padding="5px 50px",
						style="width: 100%",
						color="primary",
						@click="register")
						|Continuar
			.row.justify-center.q-mt-md
				router-link(:to="{path: '/'}")
					|Regresar
		
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { api, session } from 'boot/axios';

export default defineComponent({
	name: 'register',
	setup(){
		const form = ref(null)

		let user = reactive({
			username: "",
			passwordA: "",
			passwordB: "",
			otp: ""
		})

		let status = reactive({
			loading: false
		})


		return {
			user,
			status,
			form,
			rules: {
				required:[
					v => v && v.length > 0 || 'Campo requerido',
				],
				password: [
					v => v && v.length > 0 || 'Campo requerido',
					v => user.passwordA == user.passwordB || 'Las contraseñas deben coincidir'
				]
			},
			register: () => {
				form.value.validate().then(success => {
					if( success ){
						status.loading = true
						session.get("/")
					}
				})
			}
		}
	}
})
</script>

<style lang="sass">
	.forgot
		background-color: rgba(0, 0, 0, 0.1)
		padding-top: 10%
		.forgot-card
			width: 400px
			padding: 15px
			.forgot-logo
				max-width: 125px
				margin-bottom: 25px
	@media only screen and (max-width: 599px)
		.forgot
			padding: 15px
			.forgot-card
				width: 100%
</style>
