<template>
  <div class="modal" tabindex="-1" ref="productModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">訂單細節</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h4>用戶資料</h4>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th>姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h4>訂單細節</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>{{ $filters.date(tempOrder.paid_date) }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>{{ $filters.toThousandths(tempOrder.total) }}</td>
                  </tr>
                </tbody>
              </table>

              <h4>選購商品</h4>
              <table class="table">
                <tbody>
                  <tr v-for="(item, i) in tempOrder.products" :key="i + 123">
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.product.num }} / {{ item.product.unit }}</td>
                    <td>{{ item.total }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  v-model="tempOrder.is_paid"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  <span v-if="tempOrder.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="emitUpdateOrder"
          >
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixinModal from '@/mixins/mixinModal'

export default {
  mixins: [mixinModal],
  // emits: ['update-order'],
  props: {
    order: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      tempOrder: {}
    }
  },
  methods: {
    emitUpdateOrder() {
      this.$emit('update-order', this.tempOrder)
    }
  },
  // 讓 modal 裡面可以帶出單筆資料

  watch: {
    order() {
      this.tempOrder = this.order
    }
  }
}
</script>
