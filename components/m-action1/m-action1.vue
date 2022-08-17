<template>
	<div class="action">
	<!-- 	<view v-for="(item,index) in dataList" :key="index">
			<image :src="item.url" mode=""></image>
			<p>{{item.title}}</p>
		</view> -->
		<div class="ul">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-dingdan" size="20" color="#fec82b"></uni-icons>
				<p>订单</p>
			</div class="li">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-xiaoxi" size="20" color="#fec82b"></uni-icons>
				<p>消息</p>
			</div class="li">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-shoucang" size="20" color="#fec82b"></uni-icons>
				<p>收藏</p>
			</div class="li">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-diannao" size="20" color="#fec82b"></uni-icons>
				<p>在学</p>
			</div class="li">
		</div class="ul">
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// dataList:[
				// 	{
				// 		title:'订单',
				// 		url:'@/static/my/icon1.png'
				// 	},
				// 	{
				// 		title:'消息',
				// 		url:'@/static/my/icon2.png'
				// 	},
				// 	{
				// 		title:'收藏',
				// 		url:'@/static/my/icon3.png'
				// 	},
				// 	{
				// 		title:'共享',
				// 		url:'@/static/my/icon4.png'
				// 	}
				// ]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.li{
		list-style: none;
		width: 25%;
		text-align: center;
	}
.action{
		height: 150rpx;
		width: 700rpx;
		background: #fff;
		position: absolute;
		bottom: 0;
		left: 25rpx;
		border-radius: 10rpx;
		box-shadow: 0 0 8rpx 3rpx #ccc;
	}
.ul{
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	box-sizing: border-box;
}
p{
	color: #999;
	font-size: 28rpx;
	margin-top: 10rpx;
}
</style>
