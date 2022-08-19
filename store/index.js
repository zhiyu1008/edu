import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import user from '@/store/modules/user.js'
import getters from '@/store/getters.js'

const store=new Vuex.Store({
	getters,
	modules: {
	  user
	}
})
export default store