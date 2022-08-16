import Http from "@/utils/http.js";
class ShopModel extends Http {
  // 首页数据接口
  static getIndexData() {
    return Http.request({
      url: '/index'
    })
  }
  // 获取优惠卷
  static getCoupon() {
    return Http.request({
      url: '/coupon'
    })
  }
  // 获取可用拼团
  static getGroup() {
    return Http.request({
      url: '/group?usable=1'
    })
  }
}
export default ShopModel