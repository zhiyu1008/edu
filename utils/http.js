import {
  APIConfig
} from "@/config/config.js";
import uniToPromise from './uni'
import exceptionMessage from '../config/exceptionMessage'

class Http {
  static async request({
    url,
    method = 'GET',
    data = {},
    name = 'api1'
  }, options) {
    try {
      const response = await uniToPromise('request', {
        url: APIConfig[name].baseURL + url,
        data,
		header:{
			appid:'bd9d01ecc75dbbaaefce'
		},
        method,
        ...options
      })
      // 请求成功
      if (response.statusCode < 400 ) {
        return response.data.data
      }
      // token过期处理
      if (response.statusCode === 401) {
        return
      }
      Http._showError(response.data.code, response.data.msg)
      return response
    } catch (error) {

      _showError(-1)
      console.log(error);
    }
  }

  static _showError(code, msg) {
    let title = ''
    title = exceptionMessage[code] || msg || '发生未知错误'
    uni.showToast({
      title,
      icon: 'none',
      duration: 3000
    })
  }
}
export default Http