<template>
	<div class="container">
		<index-skeleton v-if="!loadingStatus"></index-skeleton>
		<view class="animate__animated animate__fadeIn main_box">
			<i-search-bar></i-search-bar>
			<!-- 轮播图 -->
			<i-swiper :data='bannerList'></i-swiper>
			<!-- 八公格 -->
			<i-nav-bar :data='navData'></i-nav-bar>
			<!-- 优惠券部分 -->
			<i-coupon :data='couponData'></i-coupon>
			<!-- 拼团标题 -->
			<view class="divider"></view>
			<i-title-bar leftText='拼团'></i-title-bar>
			<!-- 拼团 -->
			<i-group-list :data='groupData'></i-group-list>
			<!-- 最新列表标题 -->
			<view class="divider"></view>
			<i-title-bar leftText='最新列表' rightText='查看更多'></i-title-bar>
			<!-- 最新拼团列表 -->
			<i-latest-group :data='latestGroup'></i-latest-group>
			<!-- 最后的图片 -->
			<view class="divider"></view>
			<image :src="lastImg" mode="" class="lastImg"></image>
		</view>
	</div>
</template>

<script>
	import ShopModel from '@/model/user.js'
	import indexSkeleton from "@/pages/tabbar/index/index-skeleton.vue"
	export default {
		data() {
			return {
				bannerList: [], // 轮播图数据
				navData: [], // 八公格数据
				couponData: [], // 优惠卷数据
				groupData: [], // 拼团数据
				latestGroup: [], // 最新拼团列表
				lastImg: '',
				loadingStatus: false
			}
		},
		components: {
			indexSkeleton
		},
		onLoad() {
			this.loadRequest()
		},
		methods: {
			async loadRequest() {
				try {
					await this.getIndexData()
					await this.getCoupon()
					await this.getGroup()
					this.loadingStatus = true
				} catch (err) {

				}

			},
			// 获取首页数据
			async getIndexData() {
				const response = await ShopModel.getIndexData()
				this.bannerList = response[1].data
				this.navData = response[2].data
				this.latestGroup = response[5].data
				this.lastImg = response[6].data
			},
			// 获取优惠卷列表
			async getCoupon() {
				const response = await ShopModel.getCoupon()
				this.couponData = response
			},
			// 获取拼团数据
			async getGroup() {
				const response = await ShopModel.getGroup()
				this.groupData = response.rows
			},
		}
	}
</script>

<style>
	.lastImg {
		width: 750rpx;
		height: 330rpx;
		margin-bottom: 80rpx;
	}
</style>
