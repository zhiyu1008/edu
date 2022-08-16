<template>
	<view class="flex flex-wrap navContainer">
		<view class="nav_item" v-for="(item, index) in data" @click="change(index)"  :key="index">
			<image :src="item.src"></image>
			<text class="text">{{item.name}}</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		props: ['data'],
		name: "i-nav-bar",
		data() {
			return {
				
			};
		},
		methods: {
			change(index) {
				// uni.showToast({
				// 	title: `点击第${index+1}个宫格`,
				// 	icon: 'none'
				// })
			}
		},
	}
</script>

<style lang="scss">
	image{
		width: 70rpx;
		height: 70rpx;
		border-radius: 40rpx;
	}
	text{
		font-size: 25rpx;
		margin-top: 5rpx;
	}
	.nav_item{
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10rpx 0;
	}
	.navContainer{
		margin-top: 20rpx;
	}
</style>
