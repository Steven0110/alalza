<template lang="pug">
	.main-slider
		vue-slick-carousel(:arrows="false", :dots="false")
			.slider.slider-1
				v-container(fill-height)
					v-layout(row, justify-center, align-center)
						v-flex
							v-img(src="/images/logo3.png", contain, height="270px")
							div.text-center
								.middle-line
							p
								|Inversión de Alto Rendimiento
							div
								|Para inversionistas en búsqueda de crecimiento de largo plazo								
							v-row
								v-spacer
								v-btn(color="#e0d0b8", light)
									|Agilidad e inovación
								v-spacer

				
</template>

<script>
	import VueSlickCarousel from 'vue-slick-carousel'
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
	//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

	export default {
		components: {
			VueSlickCarousel
		}
	}
</script>

<style lang="sass">
	.main-slider
		position: relative
		height: 100vh
		.slick-slider
			position: relative
			height: 100%
			.slick-list,.slick-track
				height: 100%

			.slider 
				padding-top: 30px
				height: 100vh
				&.slider-1
					background-color: black
					text-align: center
					.middle-line
						background-color: #e0d0b8
						display: inline-block
						width: 500px
						height: 2px
						margin-top: 50px
						margin-bottom: 50px
					p
						font-size: 2rem
						color: white
						text-transform: uppercase
						text-align: center
						margin-bottom: 10px
					div
						font-size: 1.5rem
						color: white
						text-transform: uppercase
						text-align: center
						margin-bottom: 50px
	@media only screen and (max-width: 600px)
		.main-slider
			height: calc(100vh - 56px)
			.slick-slider
				.slider 
					padding-top: 0
					&.slider-1
						background-color: black
						text-align: center
						.middle-line
							width: 200px
							margin-top: 30px
							margin-bottom: 30px
						p
							font-size: 1.5rem
							margin-bottom: 30px

</style>