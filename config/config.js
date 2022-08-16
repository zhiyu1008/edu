const APIConfig = {
  'api1': {
    baseURL: 'http://demonuxtapi.dishait.cn/mobile'
  },
  'api2': {
    baseURL: 'http://weixin.itying.com'
  }
}
// 路径白名单
const pathWhiteList = [
  '/login',
  '/404',
  '/401',
  '/setting'
]
const field = {
  loginCredentials: 'token',
  userInfoKey: 'userInfo'
}
export {
  APIConfig,
  pathWhiteList,
  field
}