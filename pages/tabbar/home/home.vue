<template>
	<view>
		<view class="box">
			<div class="nav">
				<m-nav></m-nav>
				<div class="user">
					<div class="user_info"  @click="$goBack(2,'/pages/login/login')">
						<image class="face"></image>
						<div class="desc">
							<h3>{{userStatus!=='noLogin'?user.username:'立即登录'}}</h3>
							<p>{{userStatus!=='noLogin'?'暂无描述':'登录解锁更多功能'}}</p>
						</div>
					</div>
					<uni-icons v-if="userStatus!=='noLogin'" type="phone" color="#fff" size="25"></uni-icons>
				</div>
				<m-action1></m-action1>
			</div>
			<m-action2></m-action2>
		</view>
	</view>
</template>

<script>
	import {userStatus} from '../../../utils/userStatus.js'
	import {getItem} from '@/utils/storage.js'
	export default {
		data() {
			return {
				userStatus:'',
				user:''
			}
		},
		onShow() {
			userStatus()
			this.userStatus=getItem('userStatus')
			this.user=getItem('user')
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
.nav{
	width: 100%;
	height: 440rpx;
	background: #5ccc84;
	border-radius: 0 0 0 90rpx;
	position: relative;
}
.user{
	height: 150rpx;
	width: 100%;
	position: absolute;
	left: 0;
	top: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 30rpx;
	color: #fff;
}
.user_info{
	display: flex;
	align-items: center;

}
.face{
	width: 120rpx;
	height: 120rpx;
	background: #f8f9fa;
	border-radius: 50%;
	margin-right: 20rpx;
}
h3{
	font-weight: normal;
}
p{
	font-size: 26rpx;
	margin-top: 20rpx;
}
</style>
