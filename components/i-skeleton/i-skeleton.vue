<template>
	<view class="skeleton" :class="getClass" :style="getStyle">

	</view>
</template>

<script>
	export default {
		name: "i-skeleton",
		props: {
			width: {
				type: [Number, String],
				default: 0
			},
			height: {
				type: [Number, String],
				default: 0
			},
			circle: {
				type: Boolean,
				default: false
			},
			oClass : {
				type : String,
				default : ""
			}
		},
		computed: {
			getStyle() {
				return `width:${this.width};height:${this.height};`
			},
			getClass(){
				let c = ''
				if(this.circle){
					c += 'rounded-circle'
				}
				return `${c} ${this.oClass}`
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.skeleton {
		background-color: rgb(245, 245, 241);
	}
</style>
