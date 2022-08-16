<template>
	<div class="user_action">
		<span>    </span>
		<p>我的</p>
		<span class="dian">. . .</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user_action{
	width: 100%;
	height: 80rpx;
	position: absolute;
	left: 0;
	top: 0;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 20rpx;
}
.dian{
	position: relative;
	top: -10rpx;
}
</style>
