<template lang="pug">
	.content-carousel
		vue-slick-carousel(:dots="true")
			.slide.slide-1
				v-container(fill-height)
					v-row
						v-col(cols="12", md="6")
							.slide-title
								|Estrategias de Inversión
							.slide-text
								|Al Alza tiene como objetivo permitir a cualquier inversionista participar en estrategias de alto rendimiento del mercado de valores de Norteamérica y de México. Nos enfocamos en empresas que basen su modelo de negocio en la innovación y el dominio de sus mercados.
							.slide-btn
								v-btn(color="#c6b5a3", outlined, to="/site", large, rounded)
									|Leer más
						v-col.d-none.d-md-block(cols="12", md="6")
							.slide-img
								v-img(src="/images/comingsoon.jpg", contain)
			.slide.slide-1
				v-container(fill-height)
					v-row
						v-col.d-none.d-md-block(cols="12", md="6")
							.slide-img
								v-img(src="/images/comingsoon.jpg", contain)
						v-col(cols="12", md="6")
							.slide-title
								|Estrategias de Inversión
							.slide-text
								|Al Alza tiene como objetivo permitir a cualquier inversionista participar en estrategias de alto rendimiento del mercado de valores de Norteamérica y de México. Nos enfocamos en empresas que basen su modelo de negocio en la innovación y el dominio de sus mercados.
							.slide-btn
								v-btn(color="#c6b5a3", outlined, to="/site", large, rounded)
									|Leer más
			.slide.slide-1
				v-container(fill-height)
					v-row
						v-col(cols="12", md="6")
							.slide-title
								|Estrategias de Inversión
							.slide-text
								|Al Alza tiene como objetivo permitir a cualquier inversionista participar en estrategias de alto rendimiento del mercado de valores de Norteamérica y de México. Nos enfocamos en empresas que basen su modelo de negocio en la innovación y el dominio de sus mercados.
							.slide-btn
								v-btn(color="#c6b5a3", outlined, to="/site", large, rounded)
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
	.content-carousel
		position: relative
		background: white
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
					color: black
					.slide-title
						font-family: Roboto
						font-size: 2.5rem
						line-height: 2.5rem
						font-weight: bold
						padding-left: 50px
						padding-right: 100px
						margin-bottom: 40px
					.slide-text
						font-family: Roboto
						padding-left: 50px
						padding-right: 35%
						margin-bottom: 40px
						font-weight: 300
						color: #5c5c5c
					.slide-btn
						padding-left: 50px
	@media only screen and (max-width: 960px)
		.content-carousel
			padding: 15px
			padding-bottom: 35px
			.slick-slider
				.slide
					padding: 30px
					&.slide-1
						color: black
						padding: 0
						.slide-title
							padding-left: 15px
							padding-right: 15px
							margin-bottom: 15px
						.slide-text
							padding-left: 15px
							padding-right: 15px
							margin-bottom: 15px
						.slide-btn
							padding-left: 15px
</style>