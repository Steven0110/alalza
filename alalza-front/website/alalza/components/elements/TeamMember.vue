<template lang="pug">
	.team-member
		.profile-container(v-if="even")
			avatar(:src="member.picture", v-if="member.picture")
		.team-name
			|{{ member.name }}
		.team-description
			|{{ member.description }}
		.profile-container(v-if="!even")
			avatar(:src="member.picture", :even="even", v-if="member.picture")
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
	.team-member
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
	@media only screen and (max-width: 1904px)
		.team-member
			padding-left: 15px
			padding-right: 15px
	@media only screen and (max-width: 1366px)
		.team-member
			padding-left: 10px
			padding-right: 10px
	@media only screen and (max-width: 1268px)
		.team-member
			padding-left: 5px
			padding-right: 5px
	@media only screen and (max-width: 1024px)
		.team-member
			padding-left: 5px
			padding-right: 5px
	@media only screen and (max-width: 960px)
		.team-member
			padding-left: 15px
			padding-right: 15px
			.profile-container
				position: absolute
				height: auto
				padding: 10px
				top: 25px
				left: 0
				right: 0
				margin-left: auto
				margin-right: auto
			.team-name
				padding-top: 100px
			.team-description
				padding-bottom: 50px

</style>