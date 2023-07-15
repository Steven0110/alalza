<template lang="pug">
.dashboard
	q-layout.shadow-2(view="hHh Lpr lff", container, style="height: 100vh")
		q-drawer.alalza-drawer(
			side="left",
			v-model="drawer",
			:mini="miniState",
			@mouseover="miniState = false",
			@mouseout="miniState = true",
			mini-to-overlay,
			show-if-above,
			elevated,
			:width="200",
			dark,
			:breakpoint="500")

			q-scroll-area.fit
				q-list
					q-item(clickable, v-ripple, :to="{path: '/dashboard'}")
						q-item-section(avatar)
							q-icon(name="home")
						q-item-section
							|Inicio
					q-item(clickable, v-ripple, :to="{path: '/dashboard/usuarios'}")
						q-item-section(avatar)
							q-icon(name="people")
						q-item-section
							|Usuarios
					q-item(clickable, v-ripple, , :to="{path: '/dashboard/inversionistas'}")
						q-item-section(avatar)
							q-icon(name="paid")
						q-item-section
							|Inversionistas
					q-item(clickable, v-ripple, :to="{path: '/dashboard/blog'}")
						q-item-section(avatar)
							q-icon(name="article")
						q-item-section
							|Blog
					q-item(clickable, v-ripple, :to="{path: '/dashboard/webinars'}")
						q-item-section(avatar)
							q-icon(name="event")
						q-item-section
							|Webinars
					q-item(clickable, v-ripple, :to="{path: '/dashboard/perfil'}")
						q-item-section(avatar)
							q-icon(name="person")
						q-item-section
							|Perfil
					q-item(clickable, v-ripple, :to="{path: '/dashboard/ajustes'}")
						q-item-section(avatar)
							q-icon(name="settings")
						q-item-section
							|Ajustes
		q-page-container
			router-view(v-slot="{ Component }")
				transition(name="fade")
					component(:is="Component")
	// Dialog de cierre de sesión
	q-dialog(v-model="dialog.showTimeout", persistent, transition-show="scale", transition-hide="scale", @hide="redirect")
		q-card.bg-red-10.text-white(style="width: 300px")
			q-card-section
				|Tu sesión ha expirado
			q-card-actions.bg-white.text-black
				.text-body1
					|Por favor vuelve a iniciar sesión
			q-card-actions.bg-white.text-black(align="right")
				q-btn(flat, label="Cerrar", v-close-popup)

	// Dialog de advertencia de sesión
	q-dialog(v-model="dialog.showWarning", persistent, transition-show="scale", transition-hide="scale", seamless, position="bottom")
		q-card(style="width: 400px")
			q-linear-progress(:value="remainingTime / 180", color="primary")
			q-card-section.row.items-center.no-wrap
				div.q-pr-md
					.text-weight-bold
						|Tu sesión está a punto de expirar
					.text-grey
						|Haz click en el botón para renovar tu sesión
				q-space
				q-btn(color="primary", v-close-popup)
					|Renovar
				q-btn(flat, round, icon="close", v-close-popup)
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import SessionChecker from "@/composition/SessionChecker"
import { useRouter } from 'vue-router'
import { AddressbarColor } from 'quasar'

export default defineComponent({
	name: "Dashboard",
	setup() {
		const router = useRouter()
		const { dialog, monitorLoop, remainingTime } = SessionChecker()
		AddressbarColor.set('#324d68')

		monitorLoop()

		const redirect = () => {
			router.push({path: "/"})
		}

		return {
			dialog,
			monitorLoop,
			remainingTime,
			redirect,
			drawer: ref(false),
			miniState: ref(true),
		}
	}
})
</script>

<style lang="sass">
	.dashboard
		.alalza-drawer
			background-color: #324d68
			.q-item.q-router-link--active
				color: #8796ff
</style>