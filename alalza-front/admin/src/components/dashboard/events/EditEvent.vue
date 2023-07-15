<template lang="pug">
q-dialog.edit-event(:value="value", persistent, transition-show="scale", transition-hide="scale", @show="init")
	q-card.bg-green-8.text-white(style="width: 500px")
		q-card-section
			.text-h6
				|Editar webinar
		q-card-section.bg-white
			.q-form
				.row
					.col-12.q-pa-sm
						q-input(
							label="Nombre *",
							outlined,
							v-model="obj.name")
					.col-12.q-pa-sm
						q-input(
							label="URL de ingreso *",
							outlined,
							v-model="obj.url")
					.col-12.q-pa-sm
						q-input(
							label="Descripción",
							outlined,
							type="textarea",
							autogrow,
							v-model="obj.description")
				.row
					.col-12.q-pa-sm
						q-input(v-model="event.date", outlined, label="Fecha y hora")
							template(v-slot:prepend)
								q-btn(icon="event", size="12px", round, push, color="secondary")
									q-popup-proxy(transition-show="scale", transition-hide="scale")
										q-date(v-model="obj.date", mask="YYYY-MM-DD HH:mm")
											.row.tems-center.justify-end
												q-btn(v-close-popup label="Cerrar", color="primary", flat)
							template(v-slot:append)
								q-btn(icon="access_time", size="12px", round, push, color="secondary")
									q-popup-proxy(transition-show="scale", transition-hide="scale")
										q-time(v-model="obj.date", mask="YYYY-MM-DD HH:mm", :format24h="false")
											.row.tems-center.justify-end
												q-btn(v-close-popup label="Cerrar", color="primary", flat)

		q-card-actions.bg-white.text-black(align="right")
			q-btn(flat, label="Cancelar", v-close-popup)
			q-btn(label="Guardar", color="primary", @click="save")
</template>

<script>
import { defineComponent, ref, reactive } from "vue"
import Utils from "@/composition/Utils"

export default defineComponent({
	emits: ["edit"],
	props: ["event", "value"],
	setup(props, {emit}) {
		const { clone } = Utils()
		let obj = reactive({
			name: "",
			description: "",
			url: "",
			date: new Date().toISOString().substr(0, 10) + " " + "09:00"
		})

		return {
			obj,
			init: () => {
				obj.name = clone( props.event.name )
				obj.description = clone( props.event.description )
				obj.url = clone( props.event.url )
				obj.date = clone( props.event.date )
			},
			save: () => {
				emit("edit", obj)
			}
		}
	}
})
</script>

<style lang="sass">
	
</style>