<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-primary pt-2 sticky-top shadow-sm"
  >
    <div class="container-xl">
      <router-link
        to="/"
        class="navbar-brand text-center me-5 logo fs-4 lh-sm text-danger"
        href="#"
        >Ahead <br />
        accessories</router-link
      >
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavHam"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul class="navbar-nav p-2" ref="collapse">
          <li class="nav-item me-3">
            <router-link
              to="/products"
              class="nav-link"
              href="#"
              @click="closeNavHam"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item me-3">
            <router-link
              to="/about"
              class="nav-link"
              href="#"
              @click="closeNavHam"
              >關於我們</router-link
            >
          </li>
          <li class="nav-item d-none">
            <router-link
              to="/login"
              class="nav-link"
              href="#"
              @click="closeNavHam"
              >登入後台</router-link
            >
          </li>
          <router-link
            to="/cart"
            class="d-block text-decoration-none d-lg-none py-2 nav-link nav-item"
            @click="closeNavHam"
            >購物車
          </router-link>
          <router-link
            to="/favorite"
            class="d-block text-decoration-none d-lg-none py-2 nav-link nav-item"
            @click="closeNavHam"
            >我的收藏
          </router-link>
        </ul>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/favorite" class="d-lg-block d-none me-4 nav-link">
              <i class="bi bi-heart fs-3 nav-text position-relative icon">
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-span"
                  >{{ favorite.length }}
                  <span class="visually-hidden">收藏數量</span></span
                >
              </i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="d-lg-block d-none nav-link"
              ><i class="bi bi-cart3 nav-text fs-3 position-relative icon">
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-span"
                  >{{ cartData.carts.length }}
                  <span class="visually-hidden">購物車數量</span></span
                >
              </i></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter.js'
import mixinCollapse from '@/mixins/mixinCollapse'
export default {
  mixins: [mixinCollapse],
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
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    // 取得收藏
    getFavorite() {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  mounted() {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
    emitter.on('add-favorite', () => {
      this.getFavorite()
    })
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
