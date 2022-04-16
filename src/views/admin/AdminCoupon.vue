<template>
  <LoadingOverlay :active="isLoading" :z-index="1000"></LoadingOverlay>
  <h2>後台優惠券</h2>
  <div class="text-end my-3">
    <button class="btn btn-primary text-end" @click="openCouponModal(true)">
      建立新的優惠券
    </button>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">名稱</th>
        <th scope="col">折扣百分比</th>
        <th scope="col">到期日</th>
        <th scope="col">是否啟用</th>
        <th scope="col">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.percent }} %</td>
        <td>{{ $filters.date(coupon.due_date) }}</td>
        <td>
          <span v-if="coupon.is_enabled === 1" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openCouponModal(false, coupon)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(coupon)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    :is-new="isNew"
    @update-coupon="updateCoupon(tempCoupon)"
  ></CouponModal>
  <DelModal
    ref="delModal"
    :delproduct="tempCoupon"
    @del-product="delCoupon"
  ></DelModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  components: {
    CouponModal,
    DelModal
  },
  data() {
    return {
      isNew: false,
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false
    }
  },
  methods: {
    getCoupon() {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.coupons = res.data.coupons
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.message)
          this.isLoading = false
        })
    },
    openCouponModal(isNew, coupon) {
      this.isNew = isNew
      if (isNew) {
        this.tempCoupon = {
          // due_data: Object.values(this.coupons.due_date)[0]
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...coupon }
      }
      const couponComponent = this.$refs.couponModal
      couponComponent.openModal()
    },
    updateCoupon(tempCoupon) {
      this.isLoading = true
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      let data = tempCoupon

      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
        data = this.tempCoupon
      }

      this.$http[httpMethod](url, { data })
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.getCoupon()
          this.isLoading = false
          const couponComponent = this.$refs.couponModal
          couponComponent.closeModal()
        })
        .catch((err) => {
          alert(err.response.data)
          this.isLoading = false
        })
    },
    openDelModal(coupon) {
      this.tempCoupon = { ...coupon }
      const couponDelComponent = this.$refs.delModal
      couponDelComponent.openModal()
    },
    delCoupon() {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`

      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          this.getCoupon()
          this.isLoading = false
          const couponDelComponent = this.$refs.delModal
          couponDelComponent.closeModal()
        })
        .catch((err) => {
          alert(err.response.data)
          this.isLoading = false
        })
    }
  },
  mounted() {
    this.getCoupon()
  }
}
</script>
