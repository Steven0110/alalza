<template lang="pug">
	.team
		h2
			|Nuestro equipo
		v-container
			v-row(v-if="members.length > 0")
				v-col.team-member(md="3", cols="12", v-for="(member, index) in members", :key="member.name")
					team-member(:member="member", :even="(index+1) % 2 == 0", :last="index == members.length - 1")
		.mobile
</template>

<script>
	import TeamMember 		from "@/components/elements/TeamMember.vue"
	export default {
		data() {
			return {
				members: [
					{
						name: "Iribar",
						description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nulla possimus, ea harum delectus, neque est deserunt! Optio cum blanditiis sed cupiditate deleniti sint rerum aliquam dolor. Veniam, a, commodi!",
						picture: "/images/avatar.png"
					},
					{
						name: "Alan",
						description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nulla possimus, ea harum delectus, neque est deserunt! Optio cum blanditiis sed cupiditate deleniti sint rerum aliquam dolor. Veniam, a, commodi!",
						picture: "/images/avatar.png"
					},
					{
						name: "Paulina",
						description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nulla possimus, ea harum delectus, neque est deserunt! Optio cum blanditiis sed cupiditate deleniti sint rerum aliquam dolor. Veniam, a, commodi!",
						picture: "/images/avatar.png"
					},
					{
						name: "Steven",
						description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nulla possimus, ea harum delectus, neque est deserunt! Optio cum blanditiis sed cupiditate deleniti sint rerum aliquam dolor. Veniam, a, commodi!",
						picture: "/images/avatar.png"
					},
				]
			}
		},
		components: {
			TeamMember,		}
	}
</script>

<style lang="sass">
	.team
		padding-top: 50px
		background-color: white
		padding-bottom: 50px
		h2
			text-align: center
			font-size: 3rem
			color: black
			font-family: Roboto
	@media only screen and (max-width: 960px)
		.team
			h2
				margin-bottom: 40px
</style>