import colors from 'vuetify/es5/util/colors'

export default {
	head: {
		titleTemplate: '%s - Al Alza',
		title: 'Al Alza',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/main.css',
		//'@/node_modules/vuetify/dist/vuetify.min.css',
	],

	plugins: [
		"@/plugins/typed.js"
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		//'@nuxtjs/eslint-module',
		'@nuxtjs/vuetify'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa'
	],

	axios: {},

	pwa: {
		manifest: {
			lang: 'es'
		}
	},

	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: true,
			themes: {
				dark: {
					primary: "#e0d0b8",
					accent: "#baa58f",
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
