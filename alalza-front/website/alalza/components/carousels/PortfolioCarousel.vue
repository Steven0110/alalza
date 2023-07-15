<template lang="pug">
	.portfolio-carousel
		vue-slick-carousel(:dots="false")
			.slide.slide-1
				v-container(fill-height, fluid)
					v-row
						v-col.col-text(cols="12", md="6")
							.slide-title
								|Portfolio
							.slide-subtitle
								|Lorem ipsum
							.slide-text
								|Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio dolor, iusto veritatis consectetur commodi ducimus perspiciatis. Omnis, assumenda ullam dolores et quasi aut.
						v-col.col-img.d-none.d-md-block(cols="12", md="6")
							

				
</template>

<script>
	import VueSlickCarousel from 'vue-slick-carousel'
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

	export default {
		components: {
			VueSlickCarousel
		}
	}
</script>

<style lang="sass">
	.portfolio-carousel
		position: relative
		background: white
		padding: 0
		background-color: black
		.slick-slider
			position: relative
			height: 100%
			.slick-list,.slick-track
				height: 100%

			.slide
				padding: 0px
				&.slide-1
					color: black
					.col-text
						padding-top: 100px
						padding-bottom: 100px
						padding-left: 12%
						padding-right: 7%
						.slide-title
							font-family: Roboto
							font-size: 2.5rem
							line-height: 2.6rem
							font-weight: bold
							padding-left: 50px
							padding-right: 100px
							color: #c6b5a3
						.slide-subtitle
							font-family: Roboto
							font-size: 2.5rem
							line-height: 2.6rem
							font-weight: bold
							padding-left: 50px
							padding-right: 100px
							margin-bottom: 40px
							color: white
						.slide-text
							font-family: Roboto
							padding-left: 50px
							margin-bottom: 40px
							font-weight: 300
							color: white
						.slide-btn
							padding-left: 50px
					.col-img
						background-image: url('/images/comingsoon.jpg')
						background-repeat: no-repeat
						background-size: cover
						background-position: center
	@media only screen and (max-width: 960px)
		.portfolio-carousel
			.slick-slider
				.slide
					&.slide-1
						.col-text
							padding-top: 75px
							padding-bottom: 50px
							padding-left: 15px
							padding-right: 15px
							.slide-title
								padding-left: 15px
							.slide-subtitle
								padding-left: 15px
							.slide-text
								padding-left: 15px
								margin-bottom: 0px
							.slide-btn
								padding-left: 15px
</style>