<template>
	<view class="title-bar">
		<h3>{{leftText}}</h3>
		<small>{{rightText}}</small>
	</view>
</template>

<script>
	
	export default {
		props:['leftText','rightText'],
		name:"i-title-bar",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.title-bar{
		display: flex;
		justify-content: space-between;
		padding: 35rpx 17rpx;
	}
h3{
	font-size: 30rpx;
}
small{
	font-size: 20rpx;
	color: #a6a5a1;
}
</style>