import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import user from '@/store/modules/user.js'
import getters from './getters'

const store=new Vuex.Store({
	getters,
	modules: {
	  user
	}
})
export default store