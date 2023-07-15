<template lang="pug">
	.index
		main-carousel

		//Introducción
		introduction

		//Equipo
		team

</template>

<script>
	
	import Team 			from "@/components/sections/Team.vue"
	import MainCarousel 	from "@/components/carousels/Main.vue"
	import Introduction 	from "@/components/sections/Introduction.vue"

	export default{
		layout: "page",
		components: {
			"main-carousel": MainCarousel,
			Introduction,
			Team
		},
	}
</script>

<style lang="sass">
</style>