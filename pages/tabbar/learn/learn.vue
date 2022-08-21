<template>
	<view class="box">
		<view class="nologin_box" v-if="userStatus==='noLogin'">
			<image src="@/static/noLogin.png" mode="" class="nologin_img"></image>
			<p class="nologin_desc">登录后才可以查看我的学习哦</p>
			<button class="nologin_btn" @click="$goBack(2,'/pages/login/login')">立即登录</button>
		</view>
		<view class="" v-else>
			学习页面
		</view>
	</view>
</template>

<script>
	import {getItem} from '@/utils/storage.js'
	export default {
		data() {
			return {
				userStatus:''
			}
		},
		onShow() {
			this.userStatus=getItem('userStatus')
		},
		methods: {
			
		}
	}
</script>

<style>
.box{
	width: 100%;
	height: 100%;
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
</style>
