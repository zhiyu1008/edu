<template>
	<div class="box">
		<div class="nav">
			<uni-icons type="back" color="#fff" size="20" @click="goback"></uni-icons>
		</div>
		<div class="login_box">
			<p class="login">{{type==='reg'?'注 册':type==='pass'?'找回密码':type==='tel'?'绑定手机号':'登 录'}}</p>
			<div class="input" v-if="type!=='pass'&&type!=='tel'">
				<uni-icons type="person" class="icon"></uni-icons>
				<input type="text" v-model="loginForm.username" placeholder="请输入用户名">
			</div>
			<div class="input" v-if="type==='pass'||type==='tel'">
				<uni-icons type="person" class="icon"></uni-icons>
				<input type="text" v-model="telForm.phone" placeholder="请输入手机号">
			</div>
			<div class="input" v-if="type==='pass'||type==='tel'">
				<uni-icons type="locked-filled" class="icon"></uni-icons>
				<input type="text" v-model="telForm.code" placeholder="验证码" class="pass_ipt">
				<!-- 手机验证码发送组件 -->
				<i-code-button :phone="telForm.phone" @get="getCode"></i-code-button>
			</div>
			<div class="input" v-if="type!=='tel'">
				<uni-icons type="locked-filled" class="icon"></uni-icons>
				<input type="password" v-model="loginForm.password" placeholder="请输入密码">
			</div>
			<div class="input" v-if="type==='reg'||type==='pass'">
				<uni-icons type="locked-filled" class="icon"></uni-icons>
				<input type="password" v-model="loginForm.repassword" placeholder="请输入确认密码">
			</div>
			<div class="login_btn" @click="handleSubmit(type)">
				{{type==='reg'?'注 册':type==='pass'?'立即找回':type==='tel'?'绑定':'登 录'}}
			</div>
			<div class="action flex" v-if="type!=='pass'&&type!=='tel'">
				<p class="register" @click="handleChangeRegister">{{type==='reg'?'去登录':'注册账号'}}</p>
				<p class="password" @click="handleChangePassword">忘记密码？</p>
			</div>
			<p class="weixin_box" v-if="type!=='pass'&&type!=='tel'">
				<uni-icons type="weixin" size="30" color="#5ccc84"></uni-icons>
			</p>
			<div class="last" v-if="type==='login'">
				<checkbox-group @change="handleCheckboxStatus">
					<label class="text-light-muted">
						<checkbox :checked="check" color="#7fd49e" /><text></text>
					</label>
				</checkbox-group>
				<p>已阅读并同意用户协议&隐私声明</p>
			</div>
		</div>
	</div>
</template>
<script>
	import UserApi from '@/api/user.js'
	// 引入封装的通用文件
	import {
		c,
		$loading,
		$toast
	} from '@/utils/general.js'
	import {
		setItem,
		getItem
	} from '../../utils/storage.js'
	import {
		TOKEN_KEY,
		USER_KEY
	} from "@/config/storage-key"
	export default {
		data() {
			return {
				type: getItem(USER_KEY).type || 'login',
				loginForm: {
					username: '',
					password: '',
					repassword: ''
				},
				telForm: {
					phone: '',
					code: ''
				},
				check: false
			}
		},
		methods: {
			// 返回事件
			goback() {
				if (this.type !== 'pass') {
					uni.switchTab({
						url: '/pages/tabbar/home/home'
					})
				} else {
					this.type = 'login'
				}

			},
			// 判断是否为注册状态
			handleChangeRegister() {
				this.type = this.type === 'login' ? 'reg' : 'login'
				this.resetForm()
			},
			// 判断是否为找回密码状态
			handleChangePassword() {
				this.type = this.type === 'reg' || this.type === 'login' ? 'pass' : ''
				this.resetForm()
			},
			// 点击提交按钮事件
			handleSubmit(type) {
				$loading('提交中...')
				this.type === 'login' ? this.handleLogin() : this.type === 'reg' ? this.handleRegister() : this.type ===
					'pass' ? this.handlePass() : this.handleTel()
			},
			// 清空表单功能
			resetForm() {
				this.loginForm = {
					username: '',
					password: "",
					repassword: ''
				},
				this.telForm = {
					phone: '',
					code: ''
				}
			},
			// 注册功能
			async handleRegister() {
				try {
					const data = this.loadsh.cloneDeep(this.loginForm)
					const response = await UserApi.userRegister(data)
					if (response.username) {
						$toast("注册成功")
						this.type = 'login'
						this.resetForm()
					}
				} catch (err) {
					console.log(err)
				} finally {
					uni.hideLoading()
				}
			},
			// 判断是否勾选协议
			handleCheckboxStatus(event) {
				this.check = Boolean(event.detail.value.length)
			},
			// 登录功能
			async handleLogin() {
				if (!this.check) {
					return $toast('请先阅读并同意用户协议&隐私声明')
				}
				try {
					const data = this.loadsh.cloneDeep(this.loginForm)
					delete data.repassword
					const response = await UserApi.userLogin(data)
					this.resetForm()
					$toast('登录成功')
					// 切换手机页面的关键
					response.type = String('tel')
					this.$store.dispatch('user/setUser', response)
					this.handleToTel()
				} catch (err) {
					c(err)
				} finally {
					uni.hideLoading()
				}
			},
			// 登录后切换到绑定手机号页面
			handleToTel() {
				const user = this.$store.getters.user
				this.type = getItem(USER_KEY).type
			},
			// 绑定手机号功能
			async handleTel() {
				try{
					const response =await UserApi.userBindTel(this.telForm)
					if(response==='ok'){
						$toast('绑定成功')
						this.resetForm()
						setTimeout(()=>{
							uni.switchTab({
								url:'/pages/tabbar/home/home'
							})
						},350)
					}
				}catch(err){
					c(err)
				}finally{
					uni.hideLoading()
				}
			},
			// 找回密码功能
			handlePass() {
				alert("pass")
			}

		}
	}
</script>

<style>
	@import url('@/style/login.css');
</style>
