<template>
  <div class="container">
    <div class="table-cus mt-5 mb-5">
      <h5
        class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
        style="--bs-bg-opacity: 0.5"
      >
        我的收藏
      </h5>
      <div class="text-center p-5" v-if="filterFavorite.length === 0">
        <p>目前沒有收藏商品喔</p>
        <router-link to="/products"
          ><button
            type="button"
            class="btn btn-danger w-25 text-white bg-gradient"
          >
            前往逛逛
          </button></router-link
        >
      </div>
      <div class="px-4" v-else>
        <table class="w-100 mt-4" ref="table">
          <thead class="thead border-bottom">
            <tr class="text-center">
              <th scope="col-2"></th>
              <th scope="col" class="py-3">商品資訊</th>
              <th scope="col">單件價格</th>
              <th scope="col"></th>
              <!-- <th scope="col">小計</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="favorite in filterFavorite"
              :key="favorite.id"
            >
              <td>
                <i
                  class="bi bi-trash text-secondary fs-6 pointer"
                  @click="deleteFavorite(favorite.id)"
                ></i>
              </td>

              <td class="p-3">
                <div class="d-md-flex d-block align-items-center">
                  <router-link :to="`/product/${favorite.id}`" class="me-3">
                    <img
                      :src="favorite.imageUrl"
                      :alt="favorite.title"
                      class="cart-img rounded-3 w-100"
                    />
                  </router-link>
                  <h6 class="mt-2 text-center">{{ favorite.title }}</h6>
                </div>
              </td>

              <td>
                <p v-if="favorite.price === favorite.origin_price">
                  NT$ {{ favorite.price }}
                </p>
                <p v-else class="text-danger">
                  NT$ {{ favorite.price }} <br />
                  <del class="text-secondary fs-7"
                    >NT$ {{ favorite.origin_price }}</del
                  >
                </p>
              </td>

              <td>
                <button
                  type="button"
                  class="btn btn-danger rounded-pill text-white ms-3"
                  @click="addToCart(favorite.id)"
                >
                  <i class="bi bi-cart3 fs-5-5 rounded-circle"></i> 加入購物車
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data() {
    return {
      products: [],
      favorite: []
    }
  },
  // 從所有商品篩選出收藏商品
  computed: {
    filterFavorite() {
      return this.products.filter((item) => {
        return this.favorite.includes(item.id)
      })
    }
  },

  methods: {
    // 從 localStorage 取出收藏商品
    getFavorite() {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
      emitter.emit('add-favorite')
    },
    // 取得產品列表
    getProducts() {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`

      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products
          this.getFavorite()
        })
        .catch((err) => {
          alert(err.response.data)
        })
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty
      }
      this.$http
        .post(url, { data: data })
        .then(() => {
          this.$swal.fire({
            icon: 'success',
            text: '成功加入購物車 ✿',
            showConfirmButton: false,
            timer: 1800
          })
          emitter.emit('get-cart')
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'warning',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1800
          })
        })
    },
    // 刪除收藏
    deleteFavorite(id) {
      this.favorite.splice(this.favorite.indexOf(id), 1)
      this.$swal.fire({
        icon: 'success',
        text: '已刪除此收藏商品！',
        showConfirmButton: false,
        timer: 1800
      })
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
      emitter.emit('add-favorite')
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped>
.cart-img {
  height: 150px;
  width: 50%;
  object-fit: cover;
}

.table-cus {
  background-color: #ffffff;
  box-shadow: 2px 2px 10px 1px #eae7e7;
}

.pointer {
  cursor: pointer;
}
</style>
