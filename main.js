import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// 引入封装的跳转方法
import { goBack } from '@/utils/common.js' //公共方法
Object.assign(Vue.prototype, {
	'$goBack':goBack,
})
// 引入loadsh
import _ from 'lodash'
Vue.prototype.loadsh=_

// 引入vuex
import store from "@/store/index"

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif