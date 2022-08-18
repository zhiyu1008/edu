import {
	getItem,
	removeItem,
	setItem
} from '../../utils/storage'
import {
	TOKEN_KEY,
	USER_KEY
} from "@/config/storage-key"
export default {
	namespaced: true,
	state: {
		token : getItem(TOKEN_KEY) || "",
		user: getItem(USER_KEY) || "{}"
	},
	mutations: {
		setUser(state, user) {
			state.token = user.token
			state.user = user
			uni.setStorageSync(TOKEN_KEY, user.token)
			uni.setStorageSync(USER_KEY, JSON.stringify(user))
		}
	},
	actions: {
		setUser({
			commit
		}, payload) {
			commit("setUser", payload)
		}
	}
}
