// 对console.log()进行封装
export const c = console.log.bind(document)
// 对uni.showloading()的封装
export const $loading = (title) => {
	uni.showLoading({
		title,
		mask: false
	})
}
// 对uni.showtoast()的封装
export const $toast = (title) => {
	uni.showToast({
		title,
		icon: 'none',
		duration: 3000
	})
}
// 确认提示框
export const $model = (title,value,action) => {
	uni.showModal({
		title,
		content: value,
		success: (res) => {
			if (res.confirm) {
				console.log('用户点击确定');
				
				// this.$store.dispatch('user/logout')
			} else if (res.cancel) {
				console.log('用户点击取消');
				if(action==='logout'){
					console.log('000')
				}
			}
		}
	})
}
// 在所需要的页面引入
// import {c,$loading,$toast,$model} from "@/utils/general.js"
