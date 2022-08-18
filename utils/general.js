// 对console.log()进行封装
export const c = console.log.bind(document)
// 对uni.showloading()的封装
export const $loading =(title)=>{
	uni.showLoading({
		title,
		mask: false
	})
} 
// 对uni.showtoast()的封装
export const $toast =(title)=>{
	uni.showToast({
		title,
		icon:'none'
	})
} 
