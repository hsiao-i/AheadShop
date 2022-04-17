<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-primary pt-3 sticky-top shadow-sm"
  >
    <div class="container-xl">
      <!-- <div class="d-flex justify-content-between"> -->

      <router-link
        to="/"
        class="navbar-brand text-center me-5 logo fs-4 lh-sm text-danger"
        href="#"
        >Ahead <br />
        accessories</router-link
      >
      <div class="">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!-- </div> -->
      <!-- navbar-collapse collapse-->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item me-3">
            <router-link to="/products" class="nav-link" href="#"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item me-3">
            <router-link to="/about" class="nav-link" href="#"
              >關於我們</router-link
            >
          </li>
          <li class="nav-item d-none">
            <router-link to="/login" class="nav-link" href="#"
              >登入後台</router-link
            >
          </li>
          <router-link
            to="/cart"
            class="d-block text-decoration-none d-lg-none py-2 mb-2 nav-link"
            >購物車
          </router-link>
        </ul>
      </div>

      <!-- <router-link to="/favorite">
        <i class="bi bi-heart fs-5 text-main">
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-span"
            >6 <span class="visually-hidden">收藏數量</span></span
          >
        </i>
      </router-link> -->

      <div class="d-lg-flex d-block align-items-center">
        <router-link to="/favorite" class="d-lg-block d-none me-4">
          <i class="bi bi-heart fs-3 nav-text position-relative icon">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-span"
              >{{ favorite.length }}
              <span class="visually-hidden">收藏數量</span></span
            >
          </i>
        </router-link>

        <router-link to="/cart" class="d-lg-block d-none"
          ><i class="bi bi-cart3 nav-text fs-3 position-relative icon">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-span"
              >{{ cartData.carts.length }}
              <span class="visually-hidden">購物車數量</span></span
            >
          </i></router-link
        >

        <!-- <router-link to="/cart" v-else
          >購物車</i
        ></router-link> -->
      </div>

      <!-- <button type="button" class="btn btn-primary me-5">
        結帳
        <span
          class="position-absolute top-0 start-80 me-5 pt-5translate-middle badge rounded-pill bg-danger"
        >
          {{ cartData.carts.length }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button> -->
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data() {
    return {
      cartData: {
        carts: []
      },
      favorite: []
    }
  },
  methods: {
    // 取得購物車列表
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          // console.log(res);
          this.cartData = res.data.data
          // console.log(this.cartData);
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    // 取得收藏
    getFavorite() {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
      console.log(this.favorite)
    }
  },
  mounted() {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
    emitter.on('add-favorite', () => {
      console.log('觸發')
      this.getFavorite()
    })
    // this.getFavorite()
  }
}
</script>

<style scoped>
/* 購物車文字 */
.nav-text {
  color: #868686;
}

.bg-pink {
  background-color: #fff8f8;
}

.fs-span {
  font-size: 10px;
}

.icon:hover {
  color: #575757;
  transition: 0.5s;
}
</style>
