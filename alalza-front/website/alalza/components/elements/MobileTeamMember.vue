<template lang="pug">
	.mobile-team-member
		.profile-container
			avatar(:src="member.picture", v-if="member.picture")
		.team-name
			|{{ member.name }}
		.team-description
			|{{ member.description }}
</template>

<script>
	import Avatar from "@/components/images/Avatar.vue"
	export default {
		props: ["member", "even", "last"],
		data() {
			return {
				l: this.last
			}
		},
		components: {
			Avatar
		}
	}
</script>
<style lang="sass">
	.mobile-team-member
		position: relative
		color: black
		text-align: center
		font-family: Roboto
		padding-left: 25px
		padding-right: 25px
		.profile-container
			height: 250px
			padding: 10px
			position: relative
		.team-name
			font-size: 2rem
			font-weight: 400
			text-transform: uppercase
		.team-description
			color: #5c5c5c
			font-weight: 300
	@media only screen and (max-width: 1024px)
		.mobile-team-member
			padding-left: 5px
			padding-right: 5px
	@media only screen and (max-width: 1268px)
		.mobile-team-member
			padding-left: 5px
			padding-right: 5px
	@media only screen and (max-width: 1366px)
		.mobile-team-member
			padding-left: 10px
			padding-right: 10px
	@media only screen and (max-width: 1904px)
		.mobile-team-member
			padding-left: 15px
			padding-right: 15px
</style>