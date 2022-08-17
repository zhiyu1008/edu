export const navigator = (url, options) => {
	uni.navigateTo({
		url: url,
		...options
	})
}

export const switchTo = (url, options) => {
	uni.switchTab({
		url: url,
		...options
	})
}