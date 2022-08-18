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
}
export default UserApi