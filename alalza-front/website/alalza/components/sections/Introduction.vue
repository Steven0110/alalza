<template lang="pug">
	v-row.introduction
		v-col.d-none.d-md-block(cols="12", md="6")
			.block-1

		v-col(cols="12", md="6")
			.block-2
				h2
					|¿Qué es AlAlza?
				p
					|Al Alza tiene como objetivo permitir a cualquier inversionista participar en estrategias de alto rendimiento del mercado de valores de Norteamérica y de México. Nos enfocamos en empresas que basen su modelo de negocio en la innovación y el dominio de sus mercados.
		v-col.big-text(cols="12")
			h3
				|Estrategias de Alto Rendimiento
</template>

<style lang="sass">
	.introduction
		background-color: white
		.block-2
			position: relative
			padding-left: 75px
			padding-right: 20%
			padding-top: 300px
			padding-bottom: 300px
			&:before
				content: ''
				position: absolute
				left: 0
				width: 50%
				background-color: #000000
				bottom: 0
				height: 80%
				z-index: 10
			&:after
				content: ''
				position: absolute
				left: 50%
				width: 50%
				background-color: #20201f
				bottom: 10%
				height: 60%
				z-index: 10
			h2
				position: relative
				z-index: 11
				color: white
				font-family: Roboto
				font-size: 3rem
				margin-bottom: 30px
			p
				position: relative
				z-index: 11
				color: white
				font-size: 1.4rem
				font-family: Roboto
				font-weight: 300
		.big-text
			display: inline-block
			font-size: 3rem
			background-color: #c6b5a3
			text-align: center
			padding-top: 25px
			padding-bottom: 25px
			margin-top: -250px
			height: calc(3rem + 80px)
			z-index: 12
	@media only screen and (max-width: 600px)
	.introduction
		.block-2
			padding-left: 15px
			padding-right: 15px
			padding-top: 150px
			padding-bottom: 50px
			text-align: center
			&:before
				height: 90%
				bottom: 0
			&:after
				height: 80%
				bottom: 0
		.big-text
			margin-top: -15px
			font-size: 1.5rem
			height: auto
</style>