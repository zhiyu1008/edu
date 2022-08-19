import Http from "@/utils/http.js";
class UserApi extends Http {
  // 注册用户接口
  static userRegister(data) {
    return Http.request({
      url: '/reg',
	  method:'POST',
	  data
    })
  }
  // 登录接口
  static userLogin(data) {
    return Http.request({
		url: '/login',
		method:'POST',
		data
    })
  }
  // 获取手机验证码接口
  static getCode(data) {
    return Http.request({
  		url: '/get_captcha',
  		method:'POST',
  		data
    })
  }
  // 绑定手机号接口
  static userBindTel(data) {
    return Http.request({
  		url: '/bind_mobile',
  		method:'POST',
  		data
    })
  }
}
export default UserApi