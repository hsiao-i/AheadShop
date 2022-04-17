<template>
  <LoadingOverlay :active="isLoading" :z-indes="1000"></LoadingOverlay>
  <div class="container mt-5">
    <div class="row row-sm justify-content-center">
      <div class="col-sm-3">
        <h5 class="h5">產品類別 Category ❉</h5>
        <ul
          class="mt-3 category list-unstyled d-flex d-sm-block justify-content-around"
        >
          <li class="mb-3">
            <a
              class="text-decoration-none pointer d-block"
              @click="getCategory('')"
              ><span>全部商品</span></a
            >
          </li>
          <li class="mb-3">
            <a
              class="text-decoration-none pointer d-block"
              @click="getCategory('項鍊')"
              >項鍊</a
            >
          </li>
          <li class="mb-3">
            <a
              to
              class="text-decoration-none pointer d-block"
              @click="getCategory('戒指')"
              >戒指</a
            >
          </li>
          <li class="mb-3">
            <a
              to
              class="text-decoration-none pointer d-block"
              @click="getCategory('耳環')"
              >耳環</a
            >
          </li>
          <li class="mb-3">
            <a
              to
              class="text-decoration-none pointer d-block"
              @click="getCategory('手鍊')"
              >手鍊</a
            >
          </li>
        </ul>
      </div>

      <div class="col-sm-9">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 h-100">
          <div class="col" v-for="products in products" :key="products.id">
            <div class="card-cus h-100 position-relative">
              <div class="hidden-img">
                <div
                  class="card-img"
                  :style="{ backgroundImage: `url(${products.imageUrl})` }"
                >
                  <router-link
                    :to="`/product/${products.id}`"
                    class="router-link"
                  ></router-link>
                </div>
              </div>
              <div class="card-content">
                <div
                  class="d-flex pt-3 px-4 justify-content-between align-items-start"
                >
                  <div>
                    <h6 class="fs-5-5">{{ products.title }}</h6>
                    <p v-if="products.price === products.origin_price">
                      NT$ {{ products.price }}
                    </p>
                    <p v-else class="text-danger">
                      NT$ {{ products.price }} <br />
                      <del class="text-secondary fs-7"
                        >NT$ {{ products.origin_price }}</del
                      >
                    </p>
                  </div>
                  <div class="text-end">
                    <i
                      v-if="favorite.includes(products.id)"
                      class="bi bi-heart-fill fs-5 text-danger"
                      @click="toggleFavorite(products.id)"
                    ></i>
                    <i
                      v-else
                      class="bi bi-heart fs-5"
                      @click="toggleFavorite(products.id)"
                    ></i>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-danger w-100 card-btn fs-5-5"
                  @click="addToCart(products.id)"
                >
                  <i class="bi bi-cart3 fs-5 me-1"></i> 加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- <router-view></router-view> -->
        <span v-if="favorite.includes(products.id)"></span>
      </div>
    </div>
    <div class="w-25 mx-auto">
      <PaginationCom
        :pages="pagination"
        @change-page="getProducts"
        class="mt-5"
      ></PaginationCom>
    </div>
  </div>
</template>

<script>
import PaginationCom from '@/components/PaginationCom.vue'
import emitter from '@/libs/emitter.js'

export default {
  components: {
    PaginationCom
  },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      product: {},
      cartData: [],
      currentPage: 1,
      nowCategory: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },

  methods: {
    getProducts(page = 1) {
      this.isLoading = true
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`

      this.$http
        .get(url)
        .then((res) => {
          // console.log(res, this.pagination)
          // console.log(this.products)
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
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
    getCategory(category, page = 1) {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?category=${category}&page=${page}`

      this.$http.get(url).then((res) => {
        // console.log(this.products)
        this.products = res.data.products
        this.pagination = res.data.pagination
        this.isLoading = false
      })
    },
    // 加到購物車
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty
      }

      this.$http
        .post(url, { data: data })
        .then((res) => {
          this.product = res.data
          // console.log(res)
          emitter.emit('get-cart')
          this.$swal.fire({
            icon: 'success',
            text: '成功加入購物車 ✿',
            showConfirmButton: false,
            timer: 1800
          })
        })
        .catch((err) => {
          // console.log(err)
          this.$swal.fire({
            icon: 'warning',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1800
          })
        })
    },
    // 收藏（愛心）
    toggleFavorite(id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id)

      if (favoriteIndex === -1) {
        this.favorite.push(id)
        this.$swal.fire({
          icon: 'success',
          text: '將此商品加入收藏 ♥',
          showConfirmButton: false,
          timer: 1800
        })
      } else {
        this.favorite.splice(favoriteIndex, 1)
      }
      // console.log(id)
      // console.log(this.favorite)
    }
  },
  // 寫入 localstorage
  watch: {
    favorite: {
      handler() {
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
        emitter.emit('add-favorite')
      },
      deep: true
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style lang="scss">
.category li a {
  color: #707070;
}

.category li a:hover {
  color: #9f9d9d;
}

.hidden-img {
  overflow: hidden;
  height: 260px;
  border-radius: 10px 10px 0 0;
}

.card-cus {
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px #eae7e7;
  display: grid;
  grid-template-rows: 1fr max-content;
}

.card-img {
  height: 260px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 10px 10px 0 0;
}

.card-img:hover {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
  transform: scale(1.1, 1.1);
  transition: all 0.5s;

  cursor: pointer;
}

.card-btn {
  border-radius: 0 0 10px 10px;
}

.pointer {
  cursor: pointer;
}

.router-link {
  display: block;
  // width: 100%;
  height: 260px;
}
</style>
