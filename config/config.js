const APIConfig = {
  'api1': {
    baseURL: 'http://demonuxtapi.dishait.cn/mobile'
  },
  'api2': {
    baseURL: ''
  },
  appid:'bd9d01ecc75dbbaaefce'
}
// 路径白名单
const pathWhiteList = [
  '/login',
  '/404',
  '/401',
  '/setting'
]
export {
  APIConfig,
  pathWhiteList
}