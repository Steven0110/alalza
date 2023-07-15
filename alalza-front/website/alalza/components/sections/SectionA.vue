<template lang="pug">
	v-container.section-a(fluid)
		v-row.section-a-header
		v-row.section-a-container
			v-col(cols="12")
				//.section-a-title
					.section-a-title-accent
						|Punto&nbsp;
					.section-a-title-text
						|de venta
				.section-a-text
					|Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quia libero inventore repudiandae perferendis earum recusandae, dolorem iusto iste laborum fuga natus assumenda harum, voluptates asperiores nemo iure dolore quasi.
</template>

<style lang="sass">
	.section-a
		.section-a-header
			background-image: url('https://thumbs.dreamstime.com/z/girl-market-young-woman-shopping-73863259.jpg')
			background-size: cover
			background-repeat: no-repeat
			background-position: top
			height: 450px
			min-height: 250px
		.section-a-container
			background-color: white
			padding-top: 50px
			padding-bottom: 50px
			padding-left: 5%
			padding-right: 5%
			.section-a-title
				text-align: center
				font-size: 3rem
				font-weight: bold
				font-family: Roboto
				.section-a-title-accent
					display: inline-block
					color: #e0d0b8
				.section-a-title-text
					display: inline-block
					color: black
			.section-a-text
				font-family: Roboto
				font-weight: 400
				font-size: 1.2rem
				color: black
	@media only screen and (max-width: 960px)
		.section-a
			.section-a-header
				height: 250px
			.section-a-container
				text-align: center
</style>