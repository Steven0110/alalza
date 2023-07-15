<template lang="pug">
	footer
		v-row
			v-col(cols="12", md="4")
				.footer-logo
					img(src="/images/logo3.png")
			v-col(cols="12", md="4")
				.footer-contact
					.footer-email
						|demo@alalza.mx
					.footer-phone
						|+52 55 1234 5678
			v-col(cols="12", md="4")
				.footer-social-icons
					a.social-icon(href="#", title="Instagram")
						img(src="https://iyadsughayer.com/wp-content/uploads/2018/11/Instagram-icon-WHITE.png")
					a.social-icon(href="#", title="Linkedin")
						img(src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png")
					a.social-icon(href="#", title="Facebook")
						img(src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/facebook-icon-18-256.png")
					a.social-icon(href="#", title="Twitter")
						img(src="https://icon-library.com/images/twitter-icon-black-background/twitter-icon-black-background-8.jpg")
</template>

<style lang="sass">
	footer
		background-color: black
		text-align: center
		padding: 25px
		.footer-logo
			display: flex
			justify-content: center
			align-content: center
			height: 100%
			img
				display: inline-block
				height: 120px
				max-width: 100%
		.footer-contact
			display: flex
			justify-content: center
			align-content: center
			height: 100%
			flex-direction: column
			.footer-email
				font-family: Roboto
				font-size: 0.8rem
				display: block
				color: #dbdbdb
			.footer-phone
				display: block
				font-family: Roboto
				font-size: 0.8rem
				color: #dbdbdb
		.footer-social-icons
			display: flex
			justify-content: center
			align-content: center
			height: 100%
			flex-wrap: wrap
			a.social-icon
				display: inline-block
				margin-right: 8px
				margin-left: 8px
				img
					width: 45px
					display: inline-block
</style>