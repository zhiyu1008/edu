// 本地存储
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  uni.setStorageSync(key, value)
}
// 获取本地存储
export const getItem = (key) => {
  const data = uni.getStorageSync(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
// 删除本地数据
export const removeItem = (key) => {
  uni.removeStorageSync(key)
}

// 删除本地所有数据
export const clearItem = () => {
   uni.clearStorageSync()
}
