<template>
	<view class="list">
		<view class="ul">
			<view class="li">
				<div class="left">
					<uni-icons custom-prefix="iconfont" color="#19b3f0" type="icon-wodeyouhuijuan" size="20"></uni-icons>
					<p>我的优惠卷</p>
				</div>
				<uni-icons type="right" class="icon"></uni-icons>
			</view class="li">
			<view class="li">
				<div class="left">
					<uni-icons custom-prefix="iconfont" color="#19b3f0" type="icon-changjianwentixiangguanwenti" size="20"></uni-icons>
					<p>常见问题</p>
				</div>
				<uni-icons type="right" class="icon"></uni-icons>
			</view class="li">
			<view class="li">
				<div class="left">
					<uni-icons custom-prefix="iconfont" color="#19b3f0" type="icon-shezhi" size="20"></uni-icons>			
					<p>设置</p>
				</div>
				<uni-icons type="right" class="icon"></uni-icons>
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
.li .left{
	display: flex;
	align-items: center;
}
p{
	margin-left: 20rpx;
}
.li .icon{
	color: #aaa;
	font-size: 35rpx
}
</style>
