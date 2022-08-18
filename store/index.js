import Vue from "vue"
import Vuex from "vuex"
// import {TOKEN_KEY, USER_KEY} from "@/config/storage-key"
Vue.use(Vuex)
const store = new Vuex.Store({
	state : {
		// token : uni.getStorageSync(TOKEN_KEY) || "",
		// user : JSON.parse(uni.getStorageSync(USER_KEY) || "{}") 
	},
	getters : {
		
	},
	mutations : {
		// setUser(state, user){
		// 	state.token = user.token
		// 	state.user = user
			
		// 	uni.setStorageSync(TOKEN_KEY, user.token)
		// 	uni.setStorageSync(USER_KEY, JSON.stringify(user))
		// }
	},
	actions : {
		// setUser({commit}, payload){
		// 	commit("setUser", payload)
		// }
	},
	modules : {
		
	}
})

export default store