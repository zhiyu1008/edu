<template>
	<view>
		<view class="p-2">
			<i-skeleton width="100%" height="80rpx"></i-skeleton>
			<i-skeleton width="100%" height="320rpx" oClass="mt-2"></i-skeleton>
		</view>
		<view class="py-2 flex flex-wrap ">
			<view v-for="(item,index) in 8" :key="item" class="flex mb-2 flex-column justify-center align-center" style="width:25%">
				<i-skeleton width="80rpx" height="80rpx" circle></i-skeleton>
				<i-skeleton width="80rpx" height="20rpx" oClass="mt-2"></i-skeleton>
			</view>
		</view>
		<view class="p-2 flex">
			<i-skeleton width="50%" height="130rpx" oClass="mr-2"></i-skeleton>
			<i-skeleton width="50%" height="130rpx"></i-skeleton>
		</view>
		<view class="p-2">
			<i-skeleton width="100rpx" height="50rpx"></i-skeleton>
			<view class="flex mt-2" v-for="(item,index) in 2" :key="item">
				<i-skeleton width="300rpx" height="200rpx"></i-skeleton>
				<view class="flex flex-column ml-2 ">
					<i-skeleton width="350rpx" height="35rpx"></i-skeleton>
					<i-skeleton width="100rpx" height="25rpx" oClass="mt-2"></i-skeleton>
					<i-skeleton width="150rpx" height="45rpx" oClass="mt-2"></i-skeleton>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>