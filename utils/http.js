import {
	APIConfig
} from "@/config/config.js";
import exceptionMessage from '../config/exceptionMessage'
import {
	$toast,
	c
} from '@/utils/general.js'
import store from "@/store/index"

class Http {
	// 请求拦截器
	static async _beforeRequest(config) {
		// 获取vuex中token
		const token = store.state.token
		if (token) config.header.token = token
		config.header.appid = APIConfig.appid
		return config
	}
	// http请求
	static async request({
		url,
		method = 'GET',
		data = {},
		header = {},
		...options
	}) {
		const config = await Http._beforeRequest({
			url,
			method,
			data,
			header,
			...options
		})
		config.url = APIConfig.api1.baseURL + config.url
		const response = await uni.request(config)
		return await Http._beforeResponse(response)
	}
	// 响应拦截器
	static async _beforeResponse(response) {
		const [error, res] = response

		// 请求失败
		if (res.statusCode !== 200 || res.data.msg === 'fail') {
			Http._showError(res.statusCode, res.data.data)
		}
		// token过期处理
		return res.data.data
	}

	// static async request({
	//   url,
	//   method = 'GET',
	//   data = {},
	//   name = 'api1'
	// }, options) {
	//   try {
	//     const response = await uniToPromise('request', {
	//       url: APIConfig[name].baseURL + url,
	//       data,
	// header:{
	// 	appid:'bd9d01ecc75dbbaaefce'
	// },
	//       method,
	//       ...options
	//     })
	//     // 请求成功
	//     if (response.statusCode < 400 ) {
	//       return response.data.data
	//     }
	//     // token过期处理
	//     if (response.statusCode === 401) {
	//       return
	//     }
	//     Http._showError(response.data.code, response.data.data)
	//     return response
	//   } catch (error) {

	//     _showError(-1)
	//     console.log(error);
	//   }
	// }

	static _showError(code, msg) {
		let title = ''
		title = exceptionMessage[code] || msg || '发生未知错误'
		$toast(title)
	}
}
export default Http
