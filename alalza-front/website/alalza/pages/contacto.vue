<template lang="pug">
	.contacto
		.contacto-header
		v-container
			v-row
				v-col.contacto-col-1(cols="12", md="6")
					.contacto-title
						|Contacto
					.contacto-text
						|Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Harum provident minus quo possimus reprehenderit commodi aperiam deserunt eius corrupti. Dolorem voluptas laudantium modi officia sint quia, saepe iusto nihil necessitatibus!
					.contacto-info
						.contacto-email
							|example@alalza.mx
						.contacto-phone
							|+52 55 1234 5678
				v-col.contacto-col-2.d-none.d-md-block(cols="12", md="4")
					v-row.social-networks(align="center")
						v-col(cols="12")
							a(href="#")
								v-row(align="center")
									v-col(cols="3")
										.social-icon(href="#", title="Instagram")
											img(src="https://iyadsughayer.com/wp-content/uploads/2018/11/Instagram-icon-WHITE.png")
									v-col(cols="9")
										.social-name
											|Instagram
							a(href="#")
								v-row(align="center")
									v-col(cols="3")
										.social-icon(href="#", title="Linkedin")
											img(src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png")
									v-col(cols="9")
										.social-name
											|Linkedin
							a(href="#")
								v-row(align="center")
									v-col(cols="3")
										.social-icon(href="#", title="Facebook")
											img(src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/facebook-icon-18-256.png")
									v-col(cols="9")
										.social-name
											|Facebook
							a(href="#")
								v-row(align="center")
									v-col(cols="3")
										.social-icon(href="#", title="Twitter")
											img(src="https://icon-library.com/images/twitter-icon-black-background/twitter-icon-black-background-8.jpg")
									v-col(cols="9")
										.social-name
											|Twitter

</template>

<script>
	export default{
		layout: "page",
		components: {
		},
	}
</script>

<style lang="sass">
	.contacto
		.contacto-header
			background-image: url('https://www.wallpapertip.com/wmimgs/166-1663021_hd-tower-architecture-buildings-skyscrapers-gallery-fondo-de.jpg')
			background-size: cover
			background-repeat: no-repeat
			background-position: top
			height: 450px
			min-height: 250px
		.container
			padding-top: 75px
			padding-bottom: 75px
			.contacto-col-1
				padding-top: 50px
				padding-bottom: 50px
				font-family: Roboto
				.contacto-title
					font-size: 3rem
					font-weight: bold
					position: relative
					color: #c6b5a3
					margin-bottom: 45px
					&:before
						content: ''
						position: absolute
						display: inline-block
						width: 45%
						height: 4px
						left: 0
						bottom: 0
						background-color: #c6b5a3

				.contacto-text
					font-family: Roboto
					font-size: 1.3rem
					font-weight: 300
					margin-bottom: 100px
					color: black
				.contacto-info
					.contacto-email
						font-family: Roboto
						font-size: 1.3rem
						font-weight: 300
						color: black
					.contacto-phone
						font-family: Roboto
						font-size: 1.3rem
						font-weight: 300
						color: black
			.contacto-col-2
				background-color: black
				padding-left: 50px
				padding-right: 50px
				.social-networks
					color: white
					height: 100%
					a
						text-decoration: none
						color: white
						.social-icon
							display: inline-block
							margin-right: 8px
							margin-left: 8px
							img
								width: 45px
								display: inline-block
	@media only screen and (max-width: 960px)
		.contacto
			.container
				padding-top: 0px
				padding-bottom: 0px
				.contacto-col-1
					padding-top: 25px
					text-align: center
					.contacto-title
						&:before
							width: 25%
							left: 0
							right: 0
							margin-left: auto
							margin-right: auto
					.contacto-text
						margin-bottom: 25px
</style>