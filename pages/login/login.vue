<template>
	<view class="box">
		<div class="nav">
			<span><</span>
		</div>
		<div class="login_box">
			
		</div>
	</view>
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
.box{
	width: 100%;
	height: 100%;
	position: relative;
}
.nav{
	width: 100%;
	height: 230rpx;
	background-image: linear-gradient(120deg,#3bfdaf,#70d6f2);
	box-sizing: border-box;
	padding: 30rpx;
}
.nav span{
	color: #fff;
	font-size: 40rpx;
}
.login_box{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: calc(100% - 200rpx);
	border-radius: 30rpx 30rpx 0 0;
	z-index: 999;
	background: #fff;
}
</style>
