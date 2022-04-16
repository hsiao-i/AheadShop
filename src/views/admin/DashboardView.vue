<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/admin" class="navbar-brand" href="#">後台</router-link>
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/admin/products"
              class="nav-link active"
              aria-current="page"
              >後台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupon" class="nav-link" href="#"
              >後台優惠券</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/order" class="nav-link" href="#"
              >訂單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">回到前台</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="signOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-5">
    <h2 class="text-center">後台</h2>
    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  provide() {
    return {
      emitter
    }
  },
  data() {
    return {
      checkSuccess: false
    }
  },
  methods: {
    loginCheck() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const url = `${process.env.VUE_APP_API}/v2/api/user/check`
        this.$http
          .post(url)
          .then((res) => {
            console.log(res)
            this.checkSuccess = true
          })
          .catch((err) => {
            alert(err.data.message)
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入')
        this.$router.push('/login')
      }
    },
    signOut() {
      document.cookie = 'hexToken=;expires=;'
      this.$router.push('/login')
    }
  },
  mounted() {
    this.loginCheck()
  }
}
</script>
