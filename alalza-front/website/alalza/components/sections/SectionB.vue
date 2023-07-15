<template lang="pug">
	.section-b
		v-container
			v-row
				v-col.section-b-col-1(cols="12", md="6")
					.section-b-title
						|Todo lo que necesitas saber
					.section-b-subtitle
						|Estrategias de Alto Rendimiento
					v-layout(justify-center)
						v-img(src="/images/placeholder.png")
				v-col.section-b-col-2(cols="12", md="6")
					.section-b-text
						.section-b-text-title
							|Al Alza considera que el crecimiento de las próximas décadas estará basado en el uso de la innovación dentroDe nuevas industrias e industrias existentes. El cambio tendrá una velocidad agresiva y la flexibilidad será clavepara los inversionistas de la nueva realidad. 
						.section-b-text-paragraph
							|Explora la nueva realidad (botón de acceso) Invierte en empresas con innovación social (botón de acceso)
</template>

<style lang="sass">
	.section-b
		background-color: #f0f0f0
		padding-top: 50px
		padding-bottom: 50px
		.section-b-col-1
			font-family: Roboto
			.section-b-title
				color: black
				font-size: 1.4rem
			.section-b-subtitle
				position: relative
				font-size: 3em
				color: #baa58f
				font-weight: bold
				margin-bottom: 50px
				&:before
					content: ''
					position: absolute
					display: block
					height: 4px
					background-color: #baa58f
					width: 100%
					left: 0
					bottom: -10px

		.section-b-col-2
			.section-b-text
				font-family: Roboto
				font-weight: 400
				font-size: 1.2rem
				color: black
				padding-left: 5%
				padding-right: 5%
				.section-b-text-title
					font-weight: 300
					color: #787878
					margin-top: 100px
					margin-bottom: 25px
				.section-b-text-paragraph
					font-size: 1rem
					color: #787878
					font-weight: 300
	@media only screen and (max-width: 960px)
		.section-b
			text-align: center
</style>