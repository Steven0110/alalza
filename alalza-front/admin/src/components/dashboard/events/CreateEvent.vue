<template lang="pug">
q-dialog.create-event(:value="value", persistent, transition-show="scale", transition-hide="scale")
	q-card.bg-green-8.text-white(style="width: 500px")
		q-card-section
			.text-h6
				|Nuevo webinar
		q-card-section.bg-white
			q-form
				.row
					.col-12.q-pa-sm
						q-input(
							label="Nombre *",
							outlined,
							v-model="event.name")
					.col-12.q-pa-sm
						q-input(
							label="URL de ingreso *",
							outlined,
							v-model="event.url")
					.col-12.q-pa-sm
						q-input(
							label="Descripción",
							outlined,
							type="textarea",
							autogrow,
							v-model="event.description")
				.row
					.col-12.q-pa-sm
						q-input(v-model="event.date", outlined, label="Fecha y hora")
							template(v-slot:prepend)
								q-btn(icon="event", size="12px", round, push, color="secondary")
									q-popup-proxy(transition-show="scale", transition-hide="scale")
										q-date.calendar-picker(v-model="event.date", mask="YYYY-MM-DD HH:mm")
											.row.tems-center.justify-end
												q-btn(v-close-popup label="Cerrar", color="primary", flat)
							template(v-slot:append)
								q-btn(icon="access_time", size="12px", round, push, color="secondary")
									q-popup-proxy(transition-show="scale", transition-hide="scale")
										q-time(v-model="event.date", mask="YYYY-MM-DD HH:mm", :format24h="false")
											.row.tems-center.justify-end
												q-btn(v-close-popup label="Cerrar", color="primary", flat)

		q-card-actions.bg-white.text-black(align="right")
			q-btn(flat, label="Cancelar", v-close-popup)
			q-btn(label="Agregar", color="primary", @click="add")
</template>

<script>
import { defineComponent, ref, reactive } from "vue"
export default defineComponent({
	emits: ["add"],
	props: ["value"],
	setup(props, {emit}) {

		const event = reactive({
			name: "",
			description: "",
			url: "",
			date: new Date().toISOString().substr(0, 10) + " " + "09:00"
		})

		return {
			event,
			add: () => {
				emit("add", event)
			}
		}
	}
})
</script>

<style lang="sass">
	
</style>