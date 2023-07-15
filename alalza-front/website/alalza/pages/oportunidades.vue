<template lang="pug">
	.oportunidades

		//Slider
		content-carousel

		//Portafolio
		portfolio-carousel

		//Seccion A
		section-a

		//Seccion B
		section-b

		//Slider B
		content-carousel-b
</template>

<script>
	
	import ContentCarousel 		from "@/components/carousels/ContentCarousel.vue"
	import PortfolioCarousel 	from "@/components/carousels/PortfolioCarousel.vue"
	import SectionA 			from "@/components/sections/SectionA.vue"
	import SectionB				from "@/components/sections/SectionB.vue"
	import ContentCarouselB		from "@/components/carousels/ContentCarouselB.vue"

	export default{
		layout: "page",
		components: {
			ContentCarousel,
			ContentCarouselB,
			PortfolioCarousel,
			SectionA,
			SectionB,
		},
	}
</script>

<style lang="sass">
</style>