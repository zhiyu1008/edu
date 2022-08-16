<template>
	<div class="action">
	<!-- 	<view v-for="(item,index) in dataList" :key="index">
			<image :src="item.url" mode=""></image>
			<p>{{item.title}}</p>
		</view> -->
		<ul>
			<li>
				<image src="../../static/my/icon1.png" mode=""></image>
				<p>订单</p>
			</li>
			<li>
				<image src="../../static/my/icon2.png" mode=""></image>
				<p>消息</p>
			</li>
			<li>
				<image src="../../static/my/icon3.png" mode=""></image>
				<p>收藏</p>
			</li>
			<li>
				<image src="../../static/my/icon4.png" mode=""></image>
				<p>在学</p>
			</li>
		</ul>
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
	li{
		list-style: none;
		width: 25%;
	}
li p{
	position: relative;
	left: 10rpx;
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
ul{
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	box-sizing: border-box;
}
image{
	width: 80rpx;
	height: 60rpx;
}
</style>
