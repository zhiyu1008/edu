import Http from "@/utils/http.js";
class UserApi extends Http {
  // 注册用户接口
  static userRegister() {
    return Http.request({
      url: '/reg'
    })
  }
  // 登录接口
  static userLogin() {
    return Http.request({
      url: '/login'
    })
  }
}
export default UserApi