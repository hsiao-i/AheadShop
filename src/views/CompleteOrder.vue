<template>
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
        <div class="rounded-pill text-center order-shape-light mx-auto mb-1">
          <p class="pt-2">2</p>
        </div>
        <p class="text-center fs-7">確認訂單</p>
      </div>

      <div>
        <div class="rounded-pill text-center order-shape mx-auto mb-1">
          <p class="pt-2">3</p>
        </div>
        <p class="text-center fs-7">購買完成</p>
      </div>
    </div>
  </div>

  <!-- 確認訂購區塊 -->
  <div class="container">
    <div class="thankBox text-center p-5 mb-5 rounded-3">
      <p class="fs-5-5 lh-lg">
        感謝您的訂購 <br />
        商品預計於五天內出貨
      </p>
      <router-link to="/products" class="text-decoration-none link d-block">
        <button type="button" class="btn btn-danger w-25 text-white">
          繼續逛逛
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* 感謝訂購 */
.thankBox {
  background-color: #ffffff;
}

.link:hover {
  color: #ffffff;
}

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
</style>
