<template lang="pug">
	.avatar
		.top-dot(v-if="even === false")
		.bottom-dot(v-else)

		.exterior-border
			.outter-circle
				.inner-circle
					img(:src="src")
				.connector(:style="connector", v-if="!$parent.last")
</template>

<script>
	export default {
		props: ["src", "even"],
		data() {
			return {
			}
		},
		computed: {
			connector: function() {
				let css = {}
				if( this.even === false ){
					css.transform = `rotate(-${this.params.degrees})`
					css.top = this.params.gap
					css.width = this.params.width || "25vw"
					css.["margin-left"] = this.params.left || "0px"
				}else{
					css.transform = `rotate(${this.params.degrees})`
					css.width = this.params.width || "25vw"
					css.bottom = this.params.gap
					css.["margin-left"] = this.params.left || "0px"
				}

				return css
			},
			params: function() {
				let params = {}

				if( this.$vuetify.breakpoint.width > 2560 ){
					params.gap = "-50px"
					params.degrees = "15deg"
					params.left = "-10px"
					params.width = "20vw"
				}else if( this.$vuetify.breakpoint.width <= 2560 && this.$vuetify.breakpoint.width > 1904){
					params.degrees = "20deg"
					params.gap = "-50px"
					params.left = "-10px"
					params.width = "25vw"
				}else if( this.$vuetify.breakpoint.width <= 1904 && this.$vuetify.breakpoint.width > 1440){
					params.degrees = "40deg"
					params.gap = "-90px"
					params.left = "-10px"
					params.width = "22vw"
				}else if( this.$vuetify.breakpoint.width <= 1440 && this.$vuetify.breakpoint.width > 1264){
					params.degrees = "40deg"
					params.left = "10px"
					params.gap = "-90px"
				}else if( this.$vuetify.breakpoint.width <= 1264 && this.$vuetify.breakpoint.width > 960){
					params.degrees = "50deg"
					params.gap = "-105px"
					params.left = "-15px"
				}else if( this.$vuetify.breakpoint.width <= 960 && this.$vuetify.breakpoint.width > 600){
					params.degrees = "20deg"
					params.gap = "-50px"
				}else if( this.$vuetify.breakpoint.width <= 600 && this.$vuetify.breakpoint.width > 480){
					params.degrees = "20deg"
					params.gap = "-50px"
				}else{
					params.degrees = "0deg"
					params.gap = "0px"
				}

				return params
			}
		}
	}
</script>

<style lang="sass">
	.avatar
		position: absolute
		display: inline-block
		width: 120px
		height: 120px
		left: 0
		right: 0
		top: 0
		bottom: 0
		margin: auto
		.exterior-border
			position: relative
			width: 100%
			height: 100%
			border-radius: 50%
			border: 3px solid white
			z-index: 110
			.outter-circle
				position: relative
				width: 100%
				height: 100%
				border: 10px solid #c6b5a3
				border-radius: 50%
				padding: 4px
				background-color: white
				.inner-circle
					transition: 0.2s linear all
					position: relative
					background-color: white
					width: 100%
					height: 100%
					border: 1px solid #c6b5a3
					border-radius: 50%
					z-index: 11
					img
						width: 100%
						height: 100%
						border-radius: 50%
					&:hover
						transform: scale(1.2)
						transition: 0.2s linear all

			.connector
				display: inline-block
				position: absolute
				height: 10px
				background-color: #c6b5a3
				z-index: -10
		.top-dot
			position: absolute
			top: 0
			width: 100%
			height: 100%
			z-index: 99
			&:before
				content: ''
				position: absolute
				background-color: #c6b5a3
				border-radius: 50%
				width: 20px
				height: 20px
				border: 50%
				left: 0
				right: 0
				top: -180px
				bottom: 0
				margin: auto
				z-index: 99
				transform: translateZ(-10px)

			&:after
				content: ''
				position: absolute
				background-color: #c6b5a3
				height: 50px
				width: 2px
				left: 0
				right: 0
				top: -150px
				bottom: 0
				z-index: 99
				margin: auto
		.bottom-dot
			position: absolute
			bottom: 0
			width: 100%
			height: 100%
			&:before
				content: ''
				position: absolute
				background-color: #c6b5a3
				border-radius: 50%
				width: 20px
				height: 20px
				border: 50%
				left: 0
				right: 0
				top: 0
				bottom: -180px
				margin: auto

			&:after
				content: ''
				position: absolute
				height: 50px
				width: 2px
				background-color: #c6b5a3
				height: 50px
				width: 2px
				left: 0
				right: 0
				top: 0
				bottom: -150px
				margin: auto
	@media only screen and (max-width: 960px)
		.avatar
			.top-dot,.bottom-dot
				display: none
			.exterior-border
				.connector
					display: none

</style>