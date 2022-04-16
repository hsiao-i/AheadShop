<template>
  <FrontNavbar></FrontNavbar>

  <router-view></router-view>
  <FrontFooter class="mt-5"></FrontFooter>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'

export default {
  components: {
    FrontNavbar,
    FrontFooter
  },

  data() {
    return {
      orderForm: {}
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

body {
  background-color: #fff8f8;
  color: #707070;
}

.logo {
  font-family: 'Marck Script', cursive;
  // font-family: 'Noto Sans TC', sans-serif;
}

.mb-100 {
  margin-bottom: 100px;
}

.mt-200 {
  margin-top: 200px;
}

.fs-5-5 {
  font-size: 18px;
}

.fs-7 {
  font-size: 14px;
}

.text-white {
  color: #ffffff;
}

.text-main {
  color: #868686;
}

/* 文字斷行 */

.word-break {
  word-break: break-all;
}
</style>
