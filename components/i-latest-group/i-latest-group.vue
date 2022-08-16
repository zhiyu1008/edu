<template>
	<view class="container mt-2">
		<view class="group-list" v-for="item in data" :key="item.id">
			<div class="left">
				<image :src="item.cover"></image>
				<span>{{types[item.type]||'暂无'}}</span>
			</div>
			<div class="right">
				<p class="title">{{item.title}}</p>
<!-- 				<p class='desc' v-html="item.try"></p> -->
				<p> <text class="red">￥{{item.price}}</text> <s>￥{{item.t_price}}</s> </p>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		props:['data'],
		name:"i-latest-group",
		data() {
			return {
				types:{
					column:'专栏',
					media:'媒体',
					audio:'音频',
					video:'视频'
				}
			};
		}
	}
</script>

<style lang="scss">
.red{
	color: red;
	font-size: 30rpx;
}
.group-list{
	margin-bottom: 30rpx;
	display: flex;
	justify-content: space-between;
	image{
		height: 190rpx;
		width: 340rpx;
	}
	.left{
		position: relative;
	}
	.right{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		box-sizing: border-box;
		padding-left: 20rpx;
		.title{
			font-size: 36rpx
		}
	}
}
p{
	font-size: 30rpx;
	width: 345rpx;
	line-height: 70rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.desc{
	font-size: 25rpx;
	color: #a09f9a;
}
s{
	font-size: 19rpx;
	color: #a09f9a;
	margin-left: 10rpx;
}
span{
	position: absolute;
	width: 68rpx;
	height: 44rpx;
	background-color: rgba(0, 0, 0, 0.5);
	overflow: hidden;
	text-align: center;
	line-height: 44rpx;
	color: #fff;
	font-size: 14rpx;
	box-sizing: border-box;
	top: 136rpx;
	left: 265rpx;
}
</style>