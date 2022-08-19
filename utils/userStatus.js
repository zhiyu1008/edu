import store from '@/store/index.js'
import {setItem,getItem} from '@/utils/storage.js'
// 判断用户的登录状态
export const userStatus = () => {
	const userInfo = store.getters.user
	const phone = store.getters.user.phone
	// 用户没有登录
	if (userInfo === '{}') {
		setItem('userStatus','noLogin')
	} else if (userInfo !== '{}' && !phone) {
		// 用户登录绑定手机号
		setItem('userStatus','noTel')
	} else if (userInfo !== '{}' && phone) {
		// 用户登录且绑定手机号
		setItem('userStatus','success')
	}
}
