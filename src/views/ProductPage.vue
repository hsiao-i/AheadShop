<template>
  <LoadingOverlay :active="isLoading" :z-indes="1000"></LoadingOverlay>
  <div class="container mt-5 mb-100">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" href="#">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products" href="#">全部產品</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.category }}
        </li>
      </ol>
    </nav>
    <div class="row align-items-center justify-content-around">
      <div class="col-md-5">
        <SwiperProduct :swiper-product="product"></SwiperProduct>
      </div>

      <!-- <div
        class="col-md-5 product-img rounded-3"
        :style="{ backgroundImage: `url(${product.imageUrl})` }"
      ></div> -->

      <div class="col-md-6">
        <div class="h-100">
          <h3 class="product-title mb-3">{{ product.title }}</h3>
          <p class="lh-lg ps-3 fs-7 changeLine">
            {{ product.description }}
          </p>
          <p v-if="product.price === product.origin_price" class="fs-5-5">
            NT$ {{ product.price }}
          </p>
          <p v-else class="text-danger fs-5-5">
            NT$ {{ product.price }}
            <del class="fs-7 text-secondary"
              >NT$ {{ product.origin_price }}</del
            >
          </p>

          <div class="d-flex justify-content-end align-items-center">
            <label class="form-label me-2">數量</label>
            <select name="qty" id="qty" class="form-select w-25">
              <option value="1" v-for="num in 20" :key="num + 'selected'">
                {{ num }}
              </option>
            </select>
          </div>
          <div class="mt-5 d-flex justify-content-between">
            <div class="w-50 me-2">
              <button
                type="button"
                class="btn btn-outline-danger w-100"
                @click="addToCart(product.id)"
              >
                加入購物車
              </button>
            </div>
            <router-link to="/cart" class="w-50">
              <button
                type="button"
                class="btn btn-danger action-btn w-100"
                @click="addToCart(product.id)"
              >
                立即購買
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h5 class="h5 text-center mb-3">商品描述</h5>
    <div class="text-center">
      <p class="mb-3 changeLine lh-lg">{{ product.content }}</p>
      <img
        :src="product.imageUrl"
        :alt="product.title"
        class="mb-3 description-img"
      />
      <div v-if="Array.isArray(product.imagesUrl)">
        <div v-for="(imgs, key) in product.imagesUrl" :key="key + 12">
          <img :src="imgs" :alt="product.title" class="description-img mb-3" />
        </div>
      </div>
      <div class="w-75 mx-auto">
        <h4 class="fs-5-5 mt-5 text-start">購物須知</h4>
        <p class="text-start">
          感謝您購買 Ahead 的商品，所有商品皆含有 1 年的保固，以及 7
          天的鑑賞期（含例假日），如有退貨需求，請參閱以下說明。
        </p>
        <ul class="text-start">
          <li class="mb-2">
            商品鑑賞期不等於試用期，退回時請保持商品與包裝完整，如因外力撞擊等意外因素，造成了飾品刮傷受損，請恕無法接受退換貨
          </li>
          <li class="mb-2">如商品超過鑑賞期欲辦理退換貨者，恕不受理</li>
          <li class="mb-2">
            商品圖片僅為參考用，色彩也會因不同電腦而有所差異，故以實際商品顏色為主
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperProduct from '@/components/SwiperProduct.vue'

export default {
  components: {
    SwiperProduct
  },
  data() {
    return {
      product: {
        content: '',
        desciption: ''
      },
      isLoading: false
    }
  },
  methods: {
    getProduct(content) {
      this.isLoading = true
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          // console.log(this.$route.params.id)
          this.product = res.data.product
          this.isLoading = false

          const content = res.data.product.content
          content.split('\n')
          // console.log(content)
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'info',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1800
          })
        })
    },
    addToCart(id, qty = 1) {
      this.isLoading = true
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
          this.$swal.fire({
            icon: 'success',
            text: '成功加入購物車 ✿',
            showConfirmButton: false,
            timer: 1800
          })
          this.isLoading = false
          this.getProduct()
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1800
          })
        })
    }
  },

  watch: {
    $route() {
      if (this.$route.name === 'product') {
        this.getProduct()
      }
    }
  },
  mounted() {
    this.getProduct()
    // this.splitText()
  }
}
</script>

<style scoped>
.product-img {
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1590820204872-81fbd313de9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.description-img {
  width: 50%;
}

.action-btn {
  width: 48%;
}

@media (max-width: 768px) {
  .product-title {
    margin-top: 24px;
  }
}
/* 換行 */
.changeLine {
  white-space: pre-line;
}
</style>
