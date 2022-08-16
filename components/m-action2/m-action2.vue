<template>
	<view class="list">
		<view class="ul">
			<view class="li">
				<div class="left">
					<image src="../../static/my/icon5.png" mode=""></image>
					<p>我的优惠卷</p>
				</div>
				<div class="right">></div>
			</view class="li">
			<view class="li">
				<div class="left">
					<image src="../../static/my/icon6.png" mode=""></image>
					<p>常见问题</p>
				</div>
				<div class="right">></div>
			</view class="li">
			<view class="li">
				<div class="left">
					<image src="../../static/my/icon7.png" mode=""></image>
					<p>设置</p>
				</div>
				<div class="right">></div>
			</view class="li">
		</view>
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
.list{
	width: 100%;
	height: 360rpx;
	margin-top: 20rpx;
}
.ul{
	width: 100%;
	height: 100%;
}
.li{
	width: 100%;
	height: 33%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 40rpx;
	list-style: none;
	border-bottom: 1rpx solid #ddd;
}
.li image{
	width: 45rpx;
	height: 45rpx;
}
.li .left{
	display: flex;
	align-items: center;
}
.li .right{
	color: #aaa;
	font-size: 35rpx
}
</style>
