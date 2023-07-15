<template lang="pug">
	v-app
		app-menu
		transition(name="slide-x-transition", mode="out-in", :duration="{ enter: 500, leave: 800 }")
			Nuxt.nuxt-page
		app-footer
</template>

<script>
	import Menu 	from "@/components/general/Menu.vue"
	import Footer 	from "@/components/general/Footer.vue"
	export default{
		components: {
			"app-menu": Menu,
			"app-footer": Footer
		}
	}
</script>

<style lang="sass">
	.nuxt-page
		background-color: white
	@media only screen and (max-width: 960px)
		.nuxt-page
			margin-top: 56px
</style>