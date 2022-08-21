import {
	getItem,
	removeItem,
	setItem
} from '../../utils/storage'
import {
	TOKEN_KEY,
	USER_KEY
} from "@/config/storage-key"
import UserApi from '@/api/user.js'
export default {
	namespaced: true,
	state: {
		token : getItem(TOKEN_KEY) || "",
		user: getItem(USER_KEY) || "{}"
	},
	mutations: {
		// 将token和用户信息存入本地
		setUser(state, user) {
			state.token = user.token
			state.user = user
			setItem(TOKEN_KEY, user.token)
			setItem(USER_KEY, JSON.stringify(user))
		}
	},
	actions: {
		setUser({
			commit
		}, payload) {
			commit("setUser", payload)
		},
		async logout({
			commit
		}) {
			await UserApi.userLogout()
			removeItem(TOKEN_KEY)
			removeItem(USER_KEY)
			// 重新加载
			window.location.reload()
		}
	}
}
