<template>
  <swiper
    :modules="modules"
    :thumbs="{ swiper: thumbsSwiper }"
    :navigation="false"
    :loop="fales"
    class="swiper-setting g-0"
  >
    <swiper-slide class="swiper-img">
      <img :src="swiperProduct.imageUrl" :alt="swiperProduct.title" class="" />
      <!-- <div
        class="col-md-5 product-img rounded-3"
        :style="{ backgroundImage: `url(${swiperProduct.imageUrl})` }"
      ></div
    > -->
    </swiper-slide>
    <swiper-slide
      v-for="(imgs, index) in swiperProduct.imagesUrl"
      :key="index"
      class="swiper-img"
    >
      <img :src="imgs" :alt="swiperProduct.title" class="" />
    </swiper-slide>
  </swiper>

  <!-- Thumbs Swiper -> store swiper instance -->
  <!-- It is also required to set watchSlidesProgress prop -->
  <swiper
    :modules="modules"
    watch-slides-progress
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="3"
    :watchSlidesProgress="true"
    :freeMode="true"
    class="swipper-setting2"
  >
    <swiper-slide class="swiper-img2">
      <img :src="swiperProduct.imageUrl" :alt="swiperProduct.title" />
    </swiper-slide>
    <swiper-slide
      v-for="(imgs, index) in swiperProduct.imagesUrl"
      :key="index"
      class="swiper-img2 swiper-op"
    >
      <img :src="imgs" :alt="swiperProduct.title" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Thumbs, Navigation, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    swiperProduct: {}
  },
  data() {
    return {
      modules: [Thumbs, Navigation, FreeMode],
      thumbsSwiper: null
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper
    }
  }
}
</script>

<style scoped>
.swiper-setting {
  height: 350px;
  margin-bottom: 10px;
}
/* .swiper-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
} */

.swiper-img img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
}

/* .swiper-setting2 {
  width: 30%;
  height: 100px;
} */

.swiper-img2 img {
  width: 100%;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
}

/* .swiper-op {
  opacity: 0.5;
}

.swiper-op {
  opacity: 1;
} */
</style>
