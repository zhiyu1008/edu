<template>
	<view>
		<p class="send_btn" @click="handleSendCode">{{time > 0 ? (time + 's') : '发送'}}</p>
	</view>
</template>

<script>
	import UserApi from '@/api/user.js'
	import {c,$loading,$toast} from '@/utils/general.js'
	export default {
		props: {
			phone: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				time:0
			}
		},
		methods: {
			// 发送事件
			async handleSendCode(){
				if(this.time>0){
					return
				}
				$loading()
				try{
					const data={
						phone:this.phone
					}
					const response=await UserApi.getCode(data)
					c(response)
					$toast('验证码'+response)
					this.handleTime()
				}catch(err){
					c(err)
				}finally{
					uni.hideLoading()
				}
			},
			// 倒计时事件
			handleTime(){
				this.time=60
				let timer=setInterval(()=>{
					this.time--
					if(this.time<=0){
						clearInterval(timer)
					}
				},1000)
			}
		}
	}
</script>

<style>
	@import url('@/style/login.css');
</style>
