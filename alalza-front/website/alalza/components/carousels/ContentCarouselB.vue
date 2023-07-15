<template lang="pug">
	.content-carousel-b
		vue-slick-carousel(:dots="true")
			.slide.slide-1
				v-container(fill-height)
					v-row
						v-col(cols="12", md="6")
							.slide-title
								|Cryptomoneda
							.slide-subtitle
								|Lorem ipsum
							.slide-text
								|Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio dolor, iusto veritatis consectetur commodi ducimus perspiciatis. Omnis, assumenda ullam dolores et quasi aut, eveniet cumque voluptatum magni explicabo, blanditiis!
							.slide-btn
								v-btn(color="primary", to="/site", large, rounded)
									.black--text
										|Leer más
						v-col.d-none.d-md-block(cols="12", md="6")
							.slide-img
								v-img(src="/images/comingsoon.jpg", contain)
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
	.content-carousel-b
		position: relative
		background: black
		padding: 50px
		padding-bottom: 100px
		padding-top: 100px
		.slick-slider
			position: relative
			height: 100%
			.slick-list,.slick-track
				height: 100%
			.slick-dots
				li
					button
						&:before
							opacity: 1
							color: #c6b5a3
							font-size: 20px
							transition: 0.3s linear all
					&.slick-active
						button
							&:before
								opacity: 1
								color: #c6b5a3
								transform: scale(1.3)
								transition: 0.3s linear all

			.slide
				padding: 30px
				&.slide-1
					color: white
					.slide-title
						font-family: Roboto
						font-size: 2.5rem
						line-height: 2.5rem
						font-weight: bold
						padding-left: 50px
						padding-right: 50px
						margin-top: 100px
					.slide-subtitle
						font-family: Roboto
						font-size: 1.5rem
						font-weight: 400
						padding-left: 50px
						padding-right: 50px
						margin-bottom: 20px
					.slide-text
						font-family: Roboto
						padding-left: 50px
						padding-right: 5%
						margin-bottom: 40px
						font-weight: 300
						color: #5c5c5c
					.slide-img
						margin-top: 75px
					.slide-btn
						padding-left: 50px
	@media only screen and (max-width: 960px)
		.content-carousel-b
			padding: 15px
			text-align: center
			.slick-slider
				.slide
					padding: 0px
					&.slide-1
						.slide-title
							padding-left: 0px
							padding-right: 0px
							margin-top: 50px
						.slide-subtitle
							padding-left: 0
							padding-right: 0
							margin-bottom: 20px
						.slide-text
							padding-left: 0
							padding-right: 0
							margin-bottom: 20px
						.slide-btn
							padding-left: 0
</style>