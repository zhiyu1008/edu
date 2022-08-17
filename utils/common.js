export function goBack(index, url) {
	if (index == 1) { 
		// 关闭当前页，返回上一页面或多级页面。
		uni.navigateBack({
			delta: url,
			animationType: 'pop-out',
			animationDuration: 300
		});
	} else if (index == 2) { 
		// 保留当前页，跳转到非tabbar页面，使用uni.navigateBack可以返回到原页面。
		uni.navigateTo({
			url: url,
			animationType: 'pop-in',
			animationDuration: 300
		})
	} else if (index == 3) {
		// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
		uni.switchTab({
			url: url,
			animationType: 'pop-in',
			animationDuration: 300
		})
	} else if (index == 4) {
		// 关闭所有页面，打开到应用内的某个页面。
		uni.reLaunch({
			url: url,
			animationType: 'pop-in',
			animationDuration: 300
		})
	} else if (index == 5) {
		// 关闭当前页面，跳转到应用内的某个页面。
		uni.redirectTo({
			url: url,
		});
	}
}
