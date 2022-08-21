<template>
	<view class="box">
		<view class="nologin_box" v-if="userStatus==='noLogin'">
			<image src="@/static/noLogin.png" mode="" class="nologin_img"></image>
			<p class="nologin_desc">登录后才可以查看我的学习哦</p>
			<button class="nologin_btn" @click="$goBack(2,'/pages/login/login')">立即登录</button>
		</view>
		<view class="" v-else>
			<div class="ul">
				<div class="li" @click="handleAction('tiezi')">
					<uni-icons custom-prefix="iconfont" type="icon-dingdan" size="20" color="#fec82b"></uni-icons>
					<p>帖子</p>
				</div class="li">
				<div class="li" @click="handleAction('kaoshi')">
					<uni-icons custom-prefix="iconfont" type="icon-xiaoxi" size="20" color="#fec82b"></uni-icons>
					<p>考试</p>
				</div class="li">
				<div class="li" @click="handleAction('book')">
					<uni-icons custom-prefix="iconfont" type="icon-shoucang" size="20" color="#fec82b"></uni-icons>
					<p>电子书</p>
				</div class="li">
			</div class="ul">
		</view>
	</view>
</template>

<script>
	import {getItem} from '@/utils/storage.js'
	import {c,$loading,$toast,$model} from "@/utils/general.js"
	export default {
		data() {
			return {
				userStatus:''
			}
		},
		onShow() {
			this.userStatus=getItem('userStatus')
			if(this.userStatus==='noTel'){
				$toast('请先绑定手机号')
			}
		},
		methods: {
			handleAction(action){
				if(this.userStatus!=='success'){
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}else{
					if(action==='tiezi'){
						uni.navigateTo({
							url:'/pages/my-post/my-post'
						})
					}else if(action==='book'){
						uni.navigateTo({
							url:'/pages/my-book/my-book'
						})
					}
				}
			}
		}
	}
</script>

<style>
.box{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.nologin_box{
	box-sizing: border-box;
	padding-top: 500rpx;
	text-align: center;
}
.nologin_img{
	width: 350rpx;
	height: 350rpx;
}
.nologin_desc{
	margin: 20rpx 0;
	color: #555;
}
.nologin_btn{
	width: 200rpx;
	font-size: 25rpx;
	border: 1px solid #333;
}
.ul{
	margin: 30rpx 0 0 25rpx;
	height: 150rpx;
	width: 700rpx;
	background: #fff;
	border-radius: 10rpx;
	box-shadow: 0 0 5rpx 3rpx #ddd;
	display: flex;
	align-items: center;
	justify-content: space-around;
	box-sizing: border-box;
}
.li{
	list-style: none;
	text-align: center;
}
p{
	color: #999;
	font-size: 28rpx;
	margin-top: 10rpx;
}
</style>
