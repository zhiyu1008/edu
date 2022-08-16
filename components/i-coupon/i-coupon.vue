<template>
	<view class="Coupon mt-2">
			<view class="couponItem" v-for="item in data" :key="item.id">
				<div class="left">
					<h4>￥100</h4>
					<text>适用课程：{{item.value.title}}</text>
				</div>
				<div class="right flex justify-center align-center">
					领取
				</div>
			</view>
	</view>
</template>

<script>
	export default {
		props:['data'],
		name:"i-coupon",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.Coupon{
	height: 140rpx;
	overflow-y: scroll;
	display: flex;
	margin-left: 20rpx;
}
.couponItem{
	height: 100%;
	background-color:#d39e00;
	color: #fff;
	display: flex;
	margin-right: 30rpx;
	border-radius:5rpx;
	.right{
		width: 133rpx;
		background-color: #fec107;
			border-radius:5rpx;
			border-left: 2px dashed #fff;
	}
	.left{
		
		padding-left: 10rpx;
		padding-right: 10rpx;
		flex-direction: column;
		font-size: 20rpx;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		h4{
			font-size: 35rpx;
			margin-bottom: 5rpx;
		}
		text{
			white-space: nowrap;
		}
	}
}
</style>