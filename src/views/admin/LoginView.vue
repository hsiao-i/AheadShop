<template>
  <FrontNavbar></FrontNavbar>
  <div class="container mt-5">
    <h2>登入</h2>
    <form @submit.prevent="signIn">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">帳號</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.username"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密碼</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">登入</button>
    </form>
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
export default {
  components: {
    FrontNavbar
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      this.$http
        .post(`${process.env.VUE_APP_API}/v2/admin/signin`, this.user)
        .then((res) => {
          console.log(res)

          const { token, expired } = res.data // token 和 expired 存在於 res.data 裡面
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}` // 儲存 token
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    test() {
      console.log('click')
    }
  }
}
</script>
