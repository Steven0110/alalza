<template lang="pug">
.col-md-4.col-lg-3.col-12.event
	q-card.event-card
		q-img(src="https://www.joedolson.com/wp-content/uploads/banner-772x2501.png")
			.image-overlay
				q-btn.delete-event-btn(fab, icon="delete", color="red-10", @click="$emit('remove')", push)
				q-btn.edit-event-btn(fab, icon="edit", color="green-7", @click="edit = true", push)
		q-card-section.q-pb-xs
			.text-h6
				|{{ event.name }}
			.text-body1
				|{{ event.description }}
		q-card-section.q-pb-xs
			q-icon.q-mr-md(name="event", size="1.2rem")
			span.date
				|{{ date.formatDate(new Date(event.date), 'YYYY/MM/DD') }}
		q-card-section.q-py-xs
			q-icon.q-mr-md(name="access_time", size="1.2rem")
			span.date
				|{{ date.formatDate(new Date(event.date), 'HH:mm') }} hrs.
		q-card-section.q-pt-none
			q-icon.q-mr-md(name="link", size="1.2rem")
			span.link
				a(:href="event.url")
					|{{ event.url }}

	edit-event(v-model="edit", :event="clone(event)", @edit="update")

</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { date } from "quasar"
import EditEvent 	from "@/dashboard/events/EditEvent.vue"
import Utils from "@/composition/Utils"

export default defineComponent({
	props: ["event", "i"],
	name: "Event",
	setup(props, {emit}) {
		const { clone } = Utils()
		let edit = ref(false)

		return {
			date,
			clone,
			edit,
			update: evt => {
				emit("update", {event: evt, index: props.i})
				edit.value = false
			}
		}
	},
	components: {
		Event,
		EditEvent,
	}
})
</script>

<style lang="sass">
	.event
		padding: 15px
		.event-card
			width: 100%
			.date,.link
				font-size: 1rem
			.q-img
				overflow: unset
				.image-overlay
					background-color: transparent
					width: 100%
					height: 100%
				.delete-event-btn
					position: absolute
					bottom: -25px
					right: 10px
					z-index: 999
				.edit-event-btn
					position: absolute
					bottom: -25px
					right: 50px
					z-index: 999
			a
				text-decoration: none
				color: #3e8196
</style>