<template>
  <LoadingOverlay :active="isLoading" :z-indes="1000"></LoadingOverlay>
  <!-- 進度條 -->
  <div>
    <div class="d-flex justify-content-around w-50 mx-auto my-5">
      <div>
        <div class="rounded-pill text-center order-shape-light mx-auto mb-1">
          <p class="pt-2">1</p>
        </div>
        <p class="text-center fs-7">填寫資料</p>
      </div>

      <div>
        <div class="rounded-pill text-center order-shape mx-auto mb-1">
          <p class="pt-2">2</p>
        </div>
        <p class="text-center fs-7">確認訂單</p>
      </div>

      <div>
        <div class="rounded-pill text-center order-shape-light mx-auto mb-1">
          <p class="pt-2">3</p>
        </div>
        <p class="text-center fs-7">購買完成</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row g-md-5 g-0 justify-content-around">
      <!-- 購物車列表確認 -->
      <div class="col-12 col-lg-6">
        <div class="table-cus mb-5">
          <h5
            class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
            style="--bs-bg-opacity: 0.5"
          >
            確認購物車內容
          </h5>

          <div class="px-4">
            <table class="w-100 mt-4">
              <thead class="thead">
                <tr class="text-center">
                  <th scope="col" class="py-3">商品資訊</th>

                  <th scope="col">小計</th>
                </tr>
              </thead>
              <tbody class="border-bottom">
                <tr
                  class="text-center"
                  v-for="(orderCart, key) in order.products"
                  :key="`${key} + ${order.id}`"
                >
                  <td class="p-3">
                    <div class="d-md-flex d-block align-items-center">
                      <img
                        :src="orderCart.product.imageUrl"
                        :alt="orderCart.product.title"
                        class="cart-img me-3 rounded-3"
                      />
                      <div>
                        <h6 class="mt-2">
                          {{ orderCart.product.title }}
                        </h6>

                        <p class="text-secondary text">
                          數量：{{ orderCart.qty }}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p
                      v-if="
                        orderCart.product.price ===
                        orderCart.product.origin_price
                      "
                    >
                      NT$ {{ orderCart.product.price }}
                    </p>
                    <p v-else class="text-danger">
                      NT$ {{ orderCart.product.price }} <br />
                      <del class="text-secondary fs-7"
                        >NT$ {{ orderCart.product.origin_price }}</del
                      >
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-4">
              <div class="w-50 mt-3 text-end">
                <div class="d-flex justify-content-between">
                  <p>商品結帳金額</p>
                  <p class="text-danger">NT$ {{ Math.ceil(order.total) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 訂單個人資料、付款方式、確認付款 -->
      <div class="col-12 col-lg-6 mt-0 control">
        <!-- 表頭 -->
        <div class="table-cus my-5">
          <h5
            class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
            style="--bs-bg-opacity: 0.5"
          >
            確認顧客資訊
          </h5>
          <!-- 訂單詳細資料 -->
          <div class="px-5 py-4 text-center">
            <div class="col-12">
              <VForm ref="form" v-slot="{ errors }" @submit="checkPay">
                <ul class="list-unstyled text-start">
                  <li class="mb-3 text-danger">
                    <h6 class="text-main fs-6 mb-0">訂單金額</h6>
                    <p class="word-break">NT$ {{ Math.ceil(order.total) }}</p>
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">訂單編號</h6>
                    <p class="word-break">{{ order.id }}</p>
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">訂購時間</h6>
                    <p class="word-break">
                      {{ $filters.date(order.create_at) }}
                    </p>
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">收件人姓名</h6>
                    <p class="word-break"></p>
                    {{ order.user.name }}
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">Email</h6>
                    <p class="word-break">
                      {{ order.user.email }}
                    </p>
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">電話</h6>
                    <p class="word-break">{{ order.user.tel }}</p>
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">收件地址</h6>
                    <p class="word-break"></p>
                    {{ order.user.address }}
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">留言</h6>
                    <p v-if="!order.message" class="word-break">無</p>
                    <p v-else class="word-break">{{ order.message }}</p>
                  </li>
                  <li class="mb-3">
                    <h6 class="mb-0">付款方式</h6>
                    <div class="mb-3">
                      <VField
                        id="pay"
                        name="付款方式"
                        as="select"
                        class="form-select"
                        :class="{ 'is-invalid': errors['付款方式'] }"
                        placeholder="請選擇付款方式"
                        rules="required"
                        v-model="pay"
                      >
                        <option value="" selected disabled>
                          請選擇付款方式
                        </option>
                        <option value="ATM">ATM 轉帳</option>
                        <option value="visa">信用卡</option>
                        <option value="visa">超商付款</option>
                      </VField>
                      <ErrorMessage
                        name="付款方式"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                  </li>

                  <button
                    type="submit"
                    class="btn btn-danger"
                    :disabled="Object.keys(errors).length > 0"
                  >
                    確認付款
                  </button>
                </ul>
              </VForm>
            </div>

            <!-- <button type="button" class="btn btn-danger">
                <router-link :to="`/order/${orderId}`"></router-link>結帳付款
              </button> -->
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      order: {
        user: {}
      },
      pay: '',
      isLoading: false
    }
  },
  methods: {
    // 取得單一產品的訂單資料 (結帳資料)
    getOrder() {
      this.isLoading = true
      this.id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order/${this.id}`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          this.order = res.data.order

          console.log(this.order)
          this.isLoading = false
          console.log(this.$route.params)
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'warning',
            text: err.response.message,
            showConfirmButton: false,
            timer: 1800
          })
          this.isLoading = false
        })
    },

    // 確認付款
    checkPay() {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/pay/${this.id}`
      this.$http
        .post(url)
        .then((res) => {
          // console.log(res)
          alert('付款完成！謝謝您的購買 ✿')
          this.$swal.fire({
            icon: 'success',
            text: '付款完成！謝謝您的購買 ✿',
            showConfirmButton: false,
            timer: 1800
          })
          this.$router.push('/complete')
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'warning',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1800
          })
        })
    }
  },
  mounted() {
    this.getOrder()
  }
}
</script>

<style scoped>
/* 進度條 */
.order-shape {
  background-color: #c18787;
  color: #ffffff;
  width: 45px;
  height: 45px;
}

.order-shape-light {
  background-color: #e3caca;
  color: #ffffff;
  width: 45px;
  height: 45px;
}

/* 購物車照片 */
.cart-img {
  height: 150px;
  width: 40%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .cart-img {
    width: 90%;
    margin-right: 0px !important;
  }
  .control {
    margin-bottom: 50px;
  }
}

/* 訂單表格 */
.table-cus {
  background-color: #ffffff;
  box-shadow: 2px 2px 10px 1px #eae7e7;
}

.thead {
  border-bottom: 2px solid #e9e8e8;
}

@media (max-width: 768 px) {
  .text {
    text-align: left;
  }
}
</style>
