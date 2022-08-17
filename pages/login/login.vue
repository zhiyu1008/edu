<template>
	<div class="box">
		<div class="nav">
			<uni-icons type="back" color="#fff" size="20" @click="$goBack(1,1)"></uni-icons>
		</div>
		<div class="login_box">
			<p class="login">{{registerStatus?'注 册':passwordStatus?'找回密码':'登 录'}}</p>
			<div class="input" v-if="!passwordStatus">
				<uni-icons type="person" class="icon"></uni-icons>
				<input type="text" placeholder="请输入用户名">
			</div>
			<div class="input" v-if="passwordStatus">
				<uni-icons type="person" class="icon"></uni-icons>
				<input type="text" placeholder="请输入手机号">
			</div>
			<div class="input" v-if="passwordStatus">
				<uni-icons type="locked-filled" class="icon"></uni-icons>
				<input type="text" placeholder="验证码" class="pass_ipt">
				<p class="send_btn">发送</p>
			</div>
			<div class="input">
				<uni-icons type="locked-filled" class="icon"></uni-icons>
				<input type="password" placeholder="请输入密码">
			</div>
			<div class="input" v-if="registerStatus||passwordStatus">
				<uni-icons type="locked-filled" class="icon"></uni-icons>
				<input type="password" placeholder="请输入确认密码">
			</div>
			<div class="login_btn">{{registerStatus?'注 册':passwordStatus?'立即找回':'登 录'}}</div>
			<div class="action flex" v-if="!passwordStatus">
				<p class="register" @click="handleRegister">{{registerStatus?'去登录':'注册账号'}}</p>
				<p class="password" @click="handlePassword">忘记密码？</p>
			</div>
			<p class="weixin_box" v-if="!passwordStatus">
				<uni-icons type="weixin" size="30" color="#5ccc84"></uni-icons>
			</p>
			<div class="last" v-if="!registerStatus&&!passwordStatus">
				<checkbox/><text></text>
				<p>已阅读并同意用户协议&隐私声明</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				registerStatus:false,
				passwordStatus:false
			}
		},
		methods: {
			// 判断是否为注册状态
			handleRegister(){
				this.registerStatus=!this.registerStatus
			},
			// 判断是否为找回密码状态
			handlePassword(){
				this.registerStatus=false
				this.passwordStatus=!this.passwordStatus
			}
		}
	}
</script>

<style>
	.pass_ipt{
		width: 330rpx;
	}
	.send_btn{
		width: 200rpx;
		background: #5ccc84;
		height: 100rpx;
		border-radius: 5rpx;
		line-height: 100rpx;
		text-align: center;
		color: #fff;
	}
	.box {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.nav {
		width: 100%;
		height: 230rpx;
		background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
		box-sizing: border-box;
		padding: 30rpx;
	}
	.nav span {
		color: #fff;
		font-size: 40rpx;
	}
	.login_box {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 200rpx);
		border-radius: 30rpx 30rpx 0 0;
		z-index: 999;
		background: #fff;
		box-sizing: border-box;
		padding: 0 65rpx;
	}
	.login{
		font-size: 45rpx;
		margin: 65rpx 0 50rpx 0;
	}
	.input{
		width: 620rpx;
		height: 100rpx;
		background: #f5f5f5;
		margin-bottom: 50rpx;
		display: flex;
		align-items: center;
	}
	.icon{
		margin: 0 35rpx;
	}
	.login_btn{
		width: 620rpx;
		height: 100rpx;
		background: #5ccc84;
		color: #fff;
		line-height: 100rpx;
		text-align: center;
		border-radius: 10rpx;
	}
	.action{
		margin: 60rpx 0 65rpx 0;
		justify-content: space-between;
	}
	.register{
		color: #5ccc84;
	}
	.password{
		color: #999;
	}
	.weixin_box{
		height: 95rpx;
		border-radius: 50%;
		width: 95rpx;
		border: 1px solid #5ccc84 ;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 257rpx;
	}
	.last{
		display: flex;
		margin-top: 40rpx;
		font-size: 30rpx;
		color: #999;
		margin-left: 80rpx;
	}
</style>
