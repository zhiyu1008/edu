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
  // 退出登录接口
  static userLogout(data) {
    return Http.request({
  		url: '/logout',
  		method:'POST',
  		data
    })
  }
  // 找回密码接口
  static userForget(data) {
    return Http.request({
  		url: '/forget',
  		method:'POST',
  		data
    })
  }
  // 修改资料接口
  static userEdit(data) {
    return Http.request({
  		url: '/update_info',
  		method:'POST',
  		data
    })
  }
  // 修改密码接口
  static userChangePassword(data) {
    return Http.request({
  		url: '/update_password',
  		method:'POST',
  		data
    })
  }
  // 微信app/小程序/H5登录接口
  static userBindTel(data) {
    return Http.request({
  		url: '/weixin_login',
  		method:'POST',
  		data
    })
  }
}
export default UserApi