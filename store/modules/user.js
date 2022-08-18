import {
  getItem,
  removeItem,
  setItem
} from '../../utils/storage'
import {TOKEN_KEY, USER_KEY} from "@/config/storage-key"
export default {
  namespaced: true,
  state: {
    // user : JSON.parse(getItem(USER_KEY) || "{}") 
  },
  mutations: {
    
  },
  actions: {
  }
}
