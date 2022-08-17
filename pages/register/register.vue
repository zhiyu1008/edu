<template>
	<view class="container">
		<view class="header px-2">
			<!-- 返回箭头 -->
			<view class="jiantou iconfont icon-fanhuijiantou"></view>
		</view>
		<!-- 注册表单 -->
		<view class="login-wrapper">
			<view class="title">注册</view>
			<view class="login-input">
				<view class="icon-size"><text class="iconfont icon-user"></text></view>
				<input class="uni-input" @input="onKeyInput" placeholder="请输入用户名" />
			</view>
			<view class="login-input">
				<view class="icon-size"><text class="iconfont icon-mima"></text></view>
				<input class="uni-input" type="password" @input="onKeyInput" placeholder="请输入密码" />
			</view>
			<view class="login-input">
				<view class="icon-size"><text class="iconfont icon-mima"></text></view>
				<input class="uni-input" type="password" @input="onKeyInput" placeholder="请确认密码" />
			</view>
			<button class="login-button">注册</button>
			<!-- 去登录   忘记密码 -->
			<view class="regsiter-wrapper">
				<text @click="handleToLogin">去登录</text>
				<text>忘记密码?</text>
			</view>
			<!-- 微信 -->
			<view class="weixin-icon"><text class="iconfont icon-weixin"></text></view>
		</view>
	</view>
</template>

<script>
import { navigator } from '../../utils/navigate.js';
export default {
	data() {
		return {
			inputValue: ''
		};
	},
	methods: {
		onKeyInput: function(event) {
			this.inputValue = event.target.value;
		},
		// 跳转到login页面
		handleToLogin() {
			navigator('/pages/login/login');
		}
	}
};
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.jiantou {
	display: flex;
	align-items: center;
	height: 96rpx;
	font-weight: 700;
	color: #ffffff;
	font-size: 40rpx;
}
.header {
	height: 230rpx;
	background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
}
.login-wrapper {
	position: relative;
	top: -16rpx;
	left: 0;
	right: 0;
	bottom: 0;
	border-top-left-radius: 40rpx;
	border-top-right-radius: 40rpx;
	height: calc(100vh - 230rpx);
	padding: 0 65rpx;
	z-index: 10;
	/* background-color: pink; */
}
.login-wrapper .title {
	height: 160rpx;
	display: flex;
	align-items: center;
	font-size: 46rpx;
	letter-spacing: 16rpx;
	box-sizing: border-box;
}
.login-input {
	border-radius: 12rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	border-radius: ;
	padding-right: 10rpx;
	background-color: #f5f5f5;
	color: #bec0cd;
	margin-bottom: 50rpx;
}
.login-input .icon-size {
	width: 100rpx;
	height: 100rpx;
	display: flex;
	color: #000;
	align-items: center;
	justify-content: center;
}
.uni-input {
	width: 490rpx;
}
.login-button {
	color: #ffffff;
	letter-spacing: 16rpx;
	background-color: #5ccc84;
}
.regsiter-wrapper {
	height: 165rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 34rpx;
}
.regsiter-wrapper text:nth-of-type(1) {
	color: #5ccc84;
}
.regsiter-wrapper text:nth-of-type(2) {
	color: #b1a5a0;
}
.weixin-icon {
	width: 107rpx;
	height: 107rpx;
	margin: auto;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
	border: 1rpx solid #5ccc84;
}
.icon-weixin {
	font-size: 70rpx;
	color: #5ccc84;
}
</style>