<template>
	<view class="box">
		<div class="item" @click="handleSecurity">
			<p>账号安全</p>
			<uni-icons type="right"></uni-icons>
		</div>
		<div class="item">
			<p>清除缓存</p>
			<span>1.00KB</span>
		</div>
		<div class="item">
			<p>检查更新</p>
			<uni-icons type="right"></uni-icons>
		</div>
		<div class="item">
			<p>当前版本</p>
			<span>1.00</span>
			
		</div>
		<div class="logout" v-if="userStatus!=='noLogin'">退出登录</div>
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
		methods: {
			// 点击账号安全事件
			handleSecurity(){
				if(this.userStatus==='noLogin'){
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}else{
					uni.navigateTo({
						url:'/pages/changePassword/changePassword'
					})
				}
			}
		},
		onShow() {
			this.userStatus = getItem('userStatus')
		}
	}
</script>

<style>
.box{
	width: 100%;
	height: 100%;
}
.item{
	width: 100%;
	height: 90rpx;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 30rpx;
}
p{
	font-size: 26rpx
}
.logout{
	width: 690rpx;
	margin: 45rpx 0 0 30rpx;
	height: 75rpx;
	background: #5ccc84;
	color: #fff;
	border-radius: 10rpx;
	color: #fff;
	line-height: 75rpx;
	text-align: center;
}
</style>
