<template>
	<view class="container group mt-2">
		<view class="group-list" v-for="item in data" :key="item.id">
			<view class="top">
				<image :src="item.cover"></image>
				<span>{{types[item.type]}}</span>
				<p>{{item.title}}</p>
				<p class='desc' v-html="item.try"></p>
				<p> <text class="red">￥{{item.price}}</text> <s>￥{{item.t_price}}</s> </p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['data'],
		name:"i-group-list",
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
	.group{
		display: flex;
		overflow-x: scroll;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
.red{
	color: red;
	font-size: 30rpx;
}
.group-list{
	margin-right: 20rpx;
	position: relative;
	image{
		height: 190rpx;
		width: 345rpx;
	}
}
p{
	font-size: 30rpx;
	width: 345rpx;
	line-height: 40rpx;
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
	right: 14rpx;
}
</style>