<template lang="pug">
.events
	.row
		.offset-md-10.col-md-2.q-px-md
			q-btn.full-width(
				name="plus",
				@click="dialog.events.create = true",
				color="accent")
				|Agregar webinar +
	.row
		event(
			v-for="(event, index) in events",
			:event="event",
			:i="index",
			@remove="removeEvent(index)",
			@update="updateEvent",
			:key="event._id")

	create-event(v-model="dialog.events.create", @add="addEvent")
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import Event 		from "@/dashboard/events/Event.vue"
import CreateEvent 	from "@/dashboard/events/CreateEvent.vue"
import { Dialog, useQuasar } from 'quasar'

export default defineComponent({
	name: "Main",
	setup() {
		const $q = useQuasar()

		let events = reactive([
			{
				name: "Trading",
				description: "Aprenda cómo operar en los mercados financieros de manos de expertos en la industria, gracias a nuestros webinar de trading gratuitos.",
				date: new Date("08/26/2020"),
				url: "https://www.goto.com/es/webinar/join"
			},
			{
				name: "Educación Financiera",
				description: "Aprenda cómo operar en los mercados financieros de manos de expertos en la industria, gracias a nuestros webinar de trading gratuitos.",
				date: new Date("08/27/2020"),
				url: "https://www.goto.com/es/webinar/join"
			},
			{
				name: "e-Commerce",
				description: "Aprenda cómo operar en los mercados financieros de manos de expertos en la industria, gracias a nuestros webinar de trading gratuitos.",
				date: new Date("08/26/2020"),
				url: "https://www.goto.com/es/webinar/join"
			},
			{
				name: "Bolsa de Valores",
				description: "Aprenda cómo operar en los mercados financieros de manos de expertos en la industria, gracias a nuestros webinar de trading gratuitos.",
				date: new Date("08/27/2020"),
				url: "https://www.goto.com/es/webinar/join"
			},
		])


		const dialog = reactive({
			events: {
				create: false,
				edit: false
			}
		})


		return {
			events: events,
			dialog,
			addEvent: event => {
				events.push( event )
				dialog.events.create = false
			},
			updateEvent: obj => {
				events[ obj.index ] = obj.event
				$q.notify({
					message: 'Webinar actualizado correctamente',
					type: "positive",
					timeout: 2000
				})
			},
			removeEvent: index => {
				$q.dialog({
					title: '¿Deseas eliminar este evento?',
					message: 'Esta acción no se puede deshacer',
					cancel: true,
					persistent: true
				}).onOk(() => {
					events.splice(index, 1)
				})
			}
		}
	},
	components: {
		Event,
		CreateEvent
	}
})
</script>

<style lang="sass">
	.events
		padding: 15px
</style>