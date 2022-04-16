<template>
  <div class="modal" tabindex="-1" ref="productModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <span v-if="isNew">新增優惠券</span>
            <span v-else>編輯優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入標題"
              v-model="tempCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code" class="form-label">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model="tempCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_date" class="form-label">到期日</label>
            <input
              type="date"
              class="form-control"
              id="coupon_date"
              placeholder="請輸入日期"
              v-model="due_date"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_percent" class="form-label">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="coupon_percent"
              placeholder="請輸入折扣百分比"
              min="0"
              v-model.number="tempCoupon.percent"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              :true-value="1"
              :false-value="0"
              v-model="tempCoupon.is_enabled"
            />
            <label class="form-check-label" for="flexCheckDefault">
              是否啟用
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">
            <span v-if="isNew" @click="$emit('update-coupon', tempCoupon)"
              >新增優惠券</span
            >
            <span v-else @click="$emit('update-coupon', tempCoupon)"
              >更新優惠券</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixinModal from '@/mixins/mixinModal.js'

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {}
      }
    },

    isNew: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update-coupon'],
  mixins: [mixinModal],
  data() {
    return {
      tempCoupon: {},
      due_date: ''
    }
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T')
      ;[this.due_date] = dateAndTime
      console.log(this.due_date)
    },
    due_date() {
      //   this.tempCoupon.due_date = Math.floor(
      //     new Date(this.tempCoupon.due_date) / 1000
      // this.tempCoupon.due_date = Object.values(this.due_date)[0]
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
      console.log(this.tempCoupon.due_date)
    }
  }
}
</script>
