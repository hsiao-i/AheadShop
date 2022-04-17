<template>
  <LoadingOverlay :active="isLoading" :z-index="1000"></LoadingOverlay>

  <div class="banner rounded-3 position-relative">
    <div class="banner-position">
      <h2 class="title logo text-white text-center text-center">
        Ahead accessories <br />
      </h2>
      <div class="text-center">
        <router-link to="/products">
          <button
            type="button"
            class="sub-title text-white lh-lg fs-6 btn btn-primary shadow-sm w-25"
          >
            一起建立生活儀式感 ❋
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <!-- 拱門區塊 -->
  <div class="container mt-200">
    <div>
      <div class="d-block d-sm-flex justify-content-between">
        <div>
          <img
            src="https://images.pexels.com/photos/9947832/pexels-photo-9947832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="ring"
            class="img-home wow animate__animated animate__zoomIn"
            data-wow-duration="1.5s"
          />
          <p
            class="fs-5 ps-5 d-none d-md-block mt-200 wow animate__animated animate__zoomIn"
          >
            在繁忙的生活中 <br />
            妝點自己 <br />
            小小的裝飾令生活更加質感
          </p>
        </div>

        <div>
          <div class="mt-5 ps-5 wow animate__animated animate__zoomIn">
            <h4 class="h2 mb-3">Show Your Style</h4>
            <p class="fs-5 d-md-block d-none">
              讓生活不再單調 <br />
              展現自我風格
            </p>
            <router-link
              to="/products"
              class="animoButtonOverlay text-decoration-none"
              data-wow-duration="1.5s"
              >找尋自我風格 →
            </router-link>
          </div>

          <img
            src="https://images.pexels.com/photos/9947823/pexels-photo-9947823.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="ring"
            class="img-home-2 text-center d-block wow animate__animated animate__zoomIn"
            data-wow-delay="0.7s"
            data-wow-duration="1.5s"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- 有底圖區塊 -->
  <div
    class="center mt-200 d-block d-sm-flex justify-content-center align-items-center text-center"
  >
    <div>
      <img
        class="center-img rounded-3 wow animate__animated animate__fadeInDown"
        src="https://images.unsplash.com/photo-1590820210939-70bf6ad00ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80"
        alt="耳環"
      />
    </div>
    <div>
      <img
        class="center-img rounded-3 wow animate__animated animate__fadeInDown"
        data-wow-delay="0.5s"
        src="https://images.unsplash.com/photo-1590820204872-81fbd313de9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="耳環"
      />
    </div>
    <div>
      <img
        class="center-img rounded-3 wow animate__animated animate__fadeInDown"
        data-wow-delay="1s"
        src="https://images.unsplash.com/photo-1590820225605-fe14606ee40b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80"
        alt="耳環"
      />
    </div>
  </div>

  <!-- 單張 -->
  <div class="container mt-200">
    <div class="text-center position-relative base-block">
      <img
        src="https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="項鍊"
        class="single-img rounded-3 wow animate__animated animate__zoomIn"
      />
    </div>
  </div>

  <!-- 新品上市 -->
  <div class="mt-200 swiper-container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: false }"
      :breakpoints="breakpoints"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <swiper-slide v-for="products in products" :key="products.id">
        <div>
          <div class="card-cus shadow-sm rounded-3">
            <div class="cardimg-container mb-2">
              <div
                class="card-img position-relative"
                :style="{ backgroundImage: `url(${products.imageUrl})` }"
              >
                <router-link
                  :to="`/product/${products.id}`"
                  class="router-link"
                >
                </router-link>
              </div>
            </div>
            <div class="mb-5 px-3 pt-2 pb-1">
              <h6 class="fs-5-5">{{ products.title }}</h6>

              <p v-if="products.price === products.origin_price">
                NT$ {{ products.price }}
              </p>

              <p v-else class="text-danger me-2">
                NT$ {{ products.price }}
                <del class="text-secondary fs-7"
                  >NT$ {{ products.origin_price }}</del
                >
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <!-- 轉換類別區塊 -->
  <div class="mt-200 mb-5">
    <div class="row g-0">
      <div class="col-12 col-sm-6 col-md-3">
        <!-- <router-link to="/products?category=手鍊" class="d-block"> -->
        <router-link to="/product/-MzZVrK6FsFCJC5E3NmY" class="d-block">
          <div class="category-block position-relative">
            <img
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="手鍊"
              class="category-img"
            />
            <p
              class="position-absolute start-50 top-50 fs-3 text-center category-p"
            >
              手鍊
            </p>
          </div>
        </router-link>
        <!-- </router-link> -->
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <router-link to="/product/-MzefMxogbXCbC5ZOsRG" class="d-block">
          <div class="category-block position-relative">
            <img
              src="https://images.unsplash.com/photo-1611652032946-2e1a02fb34da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt="戒指"
              class="category-img"
            />
            <p
              class="position-absolute start-50 top-50 fs-3 text-center category-p"
            >
              戒指
            </p>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <router-link to="/product/-MzeVFhMSyvjq-6h1388" class="d-block">
          <div class="category-block position-relative">
            <img
              src="https://images.unsplash.com/photo-1590820229450-4212a4bac17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="耳環"
              class="category-img"
            />
            <p
              class="position-absolute start-50 top-50 fs-3 text-center category-p"
            >
              耳環
            </p>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <router-link to="/product/-MzZFkkVuUzGGHQGdRz9" class="d-block">
          <div class="category-block position-relative">
            <img
              src="https://images.unsplash.com/photo-1611085582956-da557acbc3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="項鍊"
              class="category-img"
            />
            <p
              class="category-router position-absolute start-50 top-50 fs-3 text-center category-p"
            >
              項鍊
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// import emitter from '@/libs/emitter'

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      isLoading: false,
      products: [],
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
    }
  },

  methods: {
    getProducts() {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`

      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products
          // console.log(this.products)
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
    // 切換產品類別
    toCategory(category) {
      this.$router.push({ name: 'products', query: { category } })
      // emitter.emit('category', category)
    }
  },

  mounted() {
    this.getProducts()
  }
}
</script>

<style lang="scss">
.banner {
  height: 800px;
  background-image: url('https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px -10px;
  background-attachment: fixed;
}

@media (max-width: 576px) {
  .banner {
    height: 500px;
  }
  .title {
    font-size: 2px;
  }
}

.title {
  font-size: 60px;
  padding-top: 20%;
  text-shadow: 2px 2px 3px rgb(169, 169, 169);
}

.img-home {
  width: 95%;
  height: 700px;
  border-radius: 120px;
  object-fit: cover;
}

.img-home-2 {
  width: 95%;
  height: 700px;
  margin-top: 30%;
  border-radius: 200px 200px 0 0;
  object-fit: cover;
}

@media (max-width: 1200px) {
  .img-home {
    height: 500px;
  }

  .img-home-2 {
    height: 500px;
    margin-left: 15%;
  }
}

@media (max-width: 768px) {
  .img-home {
    height: 420px;
  }

  .img-home-2 {
    height: 420px;
    margin-left: 20%;
  }
}

@media (max-width: 576px) {
  .img-home {
    height: 350px;
    margin: 0 auto;
  }

  .img-home-2 {
    height: 350px;
    margin: 0 auto;
    margin-top: 48px;
  }
}

@media (max-width: 262px) {
  .title {
    word-break: break-all;
  }
}

//animo 按鈕

.animoButtonOverlay {
  display: inline-block;
  padding: 10px 25px;
  position: relative;
  color: #fff;
  cursor: pointer;
}
.animoButtonOverlay:hover {
  color: #f0e9e9;
}

.animoButtonOverlay::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 5px;
  right: 5px;
  background-color: #e3bbbb;
  border-radius: 10px;
  z-index: -1;
  transition: transform 0.2s ease-in-out;
}
.animoButtonOverlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #b27b7b;
  border-radius: 10px;
}
.animoButtonOverlay:hover::before {
  transform: translate(6px, -4px);
}

// 分類
.category-block {
  overflow: hidden;
}
.category-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.category-img:hover {
  filter: brightness(0.8);
  -webkit-filter: brightness(0.8);
  transform: scale(1.1, 1.1);
  transition: all 0.5s;
  cursor: pointer;
}

.category-block:hover .category-p {
  display: block;
  // z-index: 20;
  color: #ffffff;
  transition: display 1s;
}
.category-p {
  display: none;
}

// 有底圖區塊
.center {
  height: 1000px;
  background-image: url('https://images.unsplash.com/photo-1592507306304-5e96bd73c449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: brightness(0.8);
  -webkit-filter: brightness(0.8);
  background-attachment: fixed;
  // filter: sepia(0.3);
  // -webkit-filter: sepia(0.3);
}

.center-img {
  width: 90%;
  height: 650px;
  object-fit: cover;
  filter: brightness(1.5);
  -webkit-filter: brightness(1.5);
}
@media (max-width: 768px) {
  .center-img {
    height: 400px;
  }
}

@media (max-width: 576px) {
  .center {
    height: 1100px;
  }
  .center-img {
    width: 80%;
    height: 300px;
    margin-top: 10%;
  }
}

// 單一圖片區塊
.single-img {
  width: 45%;
  height: 650px;
  object-fit: cover;
}

.base-block::after {
  content: '';
  width: 45%;
  height: 650px;
  background-color: #e3caca;
  position: absolute;
  border-radius: 0.3rem;
  right: 25%;
  top: 5%;
  z-index: -1;
}

@media (max-width: 768px) {
  .single-img {
    width: 80%;
  }

  .base-block::after {
    width: 80%;
  }
}

@media (max-width: 576px) {
  .single-img {
    height: 500px;
  }
  .base-block::after {
    height: 500px;
  }
}

// 新品上市
.card-cus {
}
.cardimg-container {
  overflow: hidden;
  border-radius: 10px 10px 0 0;
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

.router-link {
  display: block;
  // width: 100%;
  height: 260px;
}

.swiper-button-prev,
.swiper-button-next {
  color: #e3caca;
}
.swiper-pagination-bullet-active {
  background-color: #c18787;
}
</style>
