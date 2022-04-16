<template>
  <LoadingOverlay :active="isLoading" :z-index="1000"></LoadingOverlay>
  <h3>訂單列表</h3>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">購買時間</th>
        <th scope="col">Email</th>
        <th scope="col">購買品項</th>
        <th scope="col">應付金額</th>
        <th scope="col">是否付款</th>
        <th scope="col">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, key) in orders" :key="key">
        <td>{{ $filters.date(order.create_at) }}</td>
        <td>{{ order.user.email }}</td>
        <td>
          <ul
            class="list-unstyled"
            v-for="(product, i) in order.products"
            :key="i"
          >
            <li>{{ product.product.title }}，數量：{{ product.qty }}</li>
          </ul>
        </td>
        <td>{{ $filters.toThousandths(order.total) }}</td>
        <td>
          <div class="form-check form-switch">
            <input
              v-model="order.is_paid"
              class="form-check-input"
              type="checkbox"
              role="switch"
              :id="`paidState${order.id}`"
            />
            <label class="form-check-label" :for="`paidState${order.id}`">
              <span v-if="order.is_paid">已付款</span>
              <span v-else>未付款</span>
            </label>
          </div>
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
              @click="openOrderModal(order)"
            >
              檢視
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <OrderModal
    ref="orderModal"
    :order="tempOrder"
    @update-order="updateOrder"
  ></OrderModal>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'

export default {
  components: {
    OrderModal
  },
  data() {
    return {
      orders: {},
      tempOrder: {},
      isLoading: false
    }
  },
  methods: {
    getOrders() {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/orders`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.orders = res.data.orders
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data)
          this.isLoading = false
        })
    },
    openOrderModal(order) {
      this.tempOrder = { ...order }
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    // 修改付款狀態
    updateOrder(order) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`

      const paid = { is_paid: order.is_paid }
      this.$http
        .put(url, { data: paid })
        .then((res) => {
          // console.log(res)
          alert(res.data.message)
          this.getOrders()
          this.isLoading = false
          const orderComponent = this.$refs.orderModal
          orderComponent.closeModal()
          // this.$messageState(res, '更新付款狀態')
        })
        .catch((err) => {
          alert(err.response.message)
          this.isLoading = false
        })
    }
  },
  mounted() {
    this.getOrders()
  }
}
</script>
