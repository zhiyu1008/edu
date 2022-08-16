<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item,index) in data" :key="index">
				<view class="swiper-item">
					<image :src="item.src"></image>
				</view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		props: ['data'],
		name: "i-swiper",
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000
			};
		}
	}
</script>

<style lang="scss">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
		}

		height: 300rpx;
		overflow: hidden;
		background-color: pink;
		border-radius: 10rpx;
	}
</style>
