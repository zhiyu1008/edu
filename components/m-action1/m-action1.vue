<template>
	<div class="action">
		<div class="ul">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-dingdan" size="20" color="#fec82b" @click="handleAction('dingdan')"></uni-icons>
				<p>订单</p>
			</div class="li">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-xiaoxi" size="20" color="#fec82b" @click="handleAction('xiaoxi')"></uni-icons>
				<p>消息</p>
			</div class="li">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-shoucang" size="20" color="#fec82b" @click="handleAction('shoucang')"></uni-icons>
				<p>收藏</p>
			</div class="li">
			<div class="li">
				<uni-icons custom-prefix="iconfont" type="icon-diannao" size="20" color="#fec82b" @click="handleAction('zaixue')"></uni-icons>
				<p>在学</p>
			</div class="li">
		</div class="ul">
	</div>
</template>

<script>
	import {c,$loading,$toast,$model} from "@/utils/general.js"
	export default {
		data() {
			return {
			}
		},
		props:{
			userStatus:{
				type:String
			}
		},
		methods: {
			// 我的页面的用户功能区域一
			handleAction(action){
				if(this.userStatus!=='success'&&action!=='zaixue'){
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}else{
					if(action==='dingdan'){
						uni.navigateTo({
							url:'/pages/order-list/order-list'
						})
					}else if(action==='xiaoxi'){
						uni.navigateTo({
							url:'/pages/msg-list/msg-list'
						})
					}else if(action==='shoucang'){
						uni.navigateTo({
							url:'/pages/star-list/star-list'
						})
					}else if(action==='zaixue'){
						uni.switchTab({
							url:'/pages/tabbar/learn/learn'
						})
					}
				}
			}
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
