<template lang="pug">
	v-app
		v-row.coming-soon
			v-col.d-none.d-md-flex.coming-soon-background(lg="8", md="6", cols="12")
			v-col.coming-soon-display(lg="4", md="6", cols="12")
				.display-wrapper
					.display-cell
						v-img.mx-auto(src="/images/logo2.png", height="275", contain)
						vue-typed-js(
							:strings="strings",
							:backSpeed="20",
							:backDelay="3000",
							:showCursor="$vuetify.breakpoint.mdAndUp",
							loop)
							.typing
						.social
							|Copyright © 2021
</template>

<script>
	export default {
		data() {
			return {
				strings: [
					'Nuestro sitio se encuentra en construcción',
					'Pronto estaremos aquí con un sitio asombroso',
					'Mientras puedes seguirnos en redes sociales',
				]
			}
		},
		head() {
			return {
				title: "Próximamente"
			}
		},
		components: {
		}
	}
</script>

<style lang="sass">
	.coming-soon
		.coming-soon-background
			background-image: url('/images/comingsoon.jpg')
			background-size: cover
			background-repeat: no-repeat
		.coming-soon-display
			overflow: hidden
			.display-wrapper
				display: table
				height: 100%
				width: 100%
				text-align: center
				.display-cell
					display: table-cell
					vertical-align: middle
					text-align: center
					padding-top: 15px
					width: 100%
					.v-image
						margin-bottom: 15px
					.site-title
						text-align: center
						font-family: Roboto
						font-size: 3em
						font-weight: 600
						margin-bottom: 15px
					.typed-element
						display: block
						.typing
							font-family: Roboto
							font-weight: 300
							font-size: 1.5em
							min-height: 1em
							display: inline-block
						.typed-cursor
							display: inline
							font-size: 1.5em
					.social
						margin-top: 100px
						text-align: center
						font-family: 0.8rem
						font-family: Roboto
	@media only screen and (max-width: 600px)
		.coming-soon
			.coming-soon-display
				padding-left: 35px
				.display-wrapper
					display: flex
					.display-cell
						display: grid
						.typed-element
							min-height: 87px
</style>