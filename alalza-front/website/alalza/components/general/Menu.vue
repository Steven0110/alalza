<template lang="pug">
	.header
		.desktop-header.d-none.d-md-block(:class="{cover: coverMenu}")
			router-link(to="/site", :class="{active: actualPath == '/site'}")
				|Inicio
			router-link(to="/oportunidades", :class="{active: actualPath == '/oportunidades'}")
				|Oportunidades
			router-link(to="/educacion-financiera", :class="{active: actualPath == '/educacion-financiera'}")
				|Educación financiera
			router-link(to="/eventos", :class="{active: actualPath == '/eventos'}")
				|Eventos
			router-link(to="/contacto", :class="{active: actualPath == '/contacto'}")
				|Contacto

		.mobile-header.d-block.d-md-none
			v-toolbar(color="#343434", dark)
				v-toolbar-title
					|{{ pageName }}
				v-spacer
				v-app-bar-nav-icon(@click="drawer = true")

			// Menú mobile
			v-navigation-drawer(right, temporary, v-model="drawer", color="#2B2E3B", dark, app, floating)
				//Main Menu
				v-img(src="/images/logo3.png", height="150px", contain)
				p.mobile-menu-title
					|Menú
				v-list(dense)
					v-list-item(link, @click="$router.push({path: '/site'})")
						v-list-item-icon
							v-icon
								|mdi-home
						v-list-item-content
							v-list-item-title
								|Inicio
					v-list-item(link, @click="$router.push({path: '/oportunidades'})")
						v-list-item-icon
							v-icon
								|mdi-lightbulb
						v-list-item-content
							v-list-item-title
								|Oportunidades
					v-list-item(link, @click="$router.push({path: '/educacion-financiera'})")
						v-list-item-icon
							v-icon
								|mdi-school
						v-list-item-content
							v-list-item-title
								|Educación financiera
					v-list-item(link, @click="$router.push({path: '/eventos'})")
						v-list-item-icon
							v-icon
								|mdi-calendar
						v-list-item-content
							v-list-item-title
								|Eventos
					v-list-item(link, @click="$router.push({path: '/contacto'})")
						v-list-item-icon
							v-icon
								|mdi-account-box
						v-list-item-content
							v-list-item-title
								|Contacto
</template>

<script>
	export default{
		layout: "page",
		data() {
			return {
				scrolled: 0,
				vh: 0,
				drawer: null
			}
		},
		beforeMount() {
				this.vh = Math.round(window.innerHeight)
				window.addEventListener('scroll', this.handleScroll);
		},
		methods: {
			handleScroll: function() {
				this.scrolled = window.scrollY
			}
		},
		computed: {
			actualPath: function() {
				return this.$route.path
			},
			coverMenu: function() {
				if(this.$route.path == '/site' || this.$route.path == '/')
					return this.scrolled > ( Math.abs(50) )
				else
					return true
			},
			pageName: function() {
				if(this.$route.name.toUpperCase == "SITE" || this.$route.name.toUpperCase == "INDEX")
					return "Al Alza"
				else
					return this.$route.name
			}
		}
	}
</script>

<style lang="sass">
	.header
		.desktop-header
			position: fixed
			text-align: right
			padding-top: 10px
			padding-bottom: 10px
			padding-right: 10%
			background-color: transparent
			left: 0
			top: 0
			width: 100%
			z-index: 1000
			transition: .3s linear all
			a
				position: relative
				display: inline-block
				text-transform: uppercase
				color: white
				font-family: Roboto
				transition: .3s linear all
				overflow: hidden
				text-decoration: none
				padding: 10px
				padding-left: 15px
				padding-right: 15px
				&:before
					content: ''
					position: absolute
					width: calc(100% - 20px)
					height: 2px
					background-color: #ab965e
					bottom: 5px
					left: -100%
					transition: .15s linear all
				&:hover
					cursor: pointer
					color: #ab965e
					transition: .15s linear all
					&:before
						left: 10px
						transition: .3s linear all
				&.active
					color: #ab965e
					&:before
						left: 10px
						transition: .3s linear all
			&.cover
				background-color: white
				transition: .3s linear all
				box-shadow: 1px 1px 10px -5px black
				a
					transition: .3s linear all
					color: black

		.mobile-header
			position: fixed
			z-index: 999
			width: 100%
			.v-toolbar
				.v-toolbar__title
					text-transform: capitalize
			.v-navigation-drawer
				padding-top: 25px
				padding-bottom: 25px
				height: calc(100vh + 25px) !important
				.v-image
					.mobile-menu-closer-icon
						top: 0
						left: 85%
				.mobile-menu-title
					position: relative
					text-align: center
					margin-top: 40px
					margin-bottom: 15px
					text-transform: uppercase
					font-family: Roboto
					font-weight: 600
					color: white
					&:before
						content: ''
						position: absolute
						left: 0
						right: 0
						bottom: -10px
						margin-left: auto
						margin-right: auto
						height: 2px
						width: 20px
						background-color: white
</style>