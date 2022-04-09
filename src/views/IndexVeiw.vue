<template>
  <swiper
    id="app"
    :spaceBetween="50"
    :effect="'fade'"
    :centeredSlides="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in swiper_img" :key="item.src">
      <div
        class="d-flex align-items-center"
        style="
          height:calc(100vh - 70px);
          width: 100vw;
          background-position: 50% 50%;
          background-size: cover;
        "
        :style="{
          backgroundImage: `url(${item.src})`
        }"
      >
        <div class="container">
          <div class="row flex flex-wrap justify-content-center">
            <div
              class="col-6 banner border border-white border-2 d-flex justify-content-between align-items-end p-3"
            >
              <div>
                <h1 class="fs-2 text-start lh-lg">
                  沒有什麼事是一個蛋糕解決不了的<br />如果有？那就兩個！！
                </h1>
                <h2 class="fs-5 text-start">
                  －享受簡單的美味，美味簡單的生活
                </h2>
              </div>
              <router-link to="/products">
                <button
                  type="button"
                  class="btn btn-primary text-white text-lighter"
                >
                  品嚐美味<i class="bi bi-chevron-right"></i>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <!-- 商品敘述 -->
  <div class="container">
    <h2 class="text-center text-primary p-5">
      <span class="text-heigh-light"> 淺嚐在嘴裡的蜜，是屬於幸福的甜 </span>
    </h2>
    <div class="row g-3 mb-5 background-gray">
      <div class="col-md-6 shadow p-3 mb-5 bg-body rounded">
        <img
          class="section-height"
          style="object-position: 50% 80%"
          src="../../public/images/sc/cake3.jpg"
          alt=""
        />
      </div>
      <div
        class="col-md-6 d-flex flex-wrap justify-content-center p-5 text-primary align-content-start"
      >
        <div class="card-body">
          <h3 class="card-title mb-3">豐富且扎實的口感</h3>
          <p class="card-text fs-5 lh-lg">
            搭配奶酥、黑巧克力、硬底餅乾..等食材 <br />帶來不同的滋味
            <br />像工作、像生活，每天都有不同的驚喜
            <br />很膩嗎？不會的！很甜嗎？也不會
          </p>
          <router-link
          to="/product/-MvXR9W8qz6vE5WPbhsp"
            href="#"
            class="card-link d-flex justify-content-center fs-5 text-underline-hover"
            >但它很有份量 <i class="bi bi-chat-heart fs-4 icon-top"></i
          ></router-link>
        </div>
      </div>
    </div>
    <div class="row g-3 flex-row-reverse background-gray">
      <div class="col-md-6 shadow p-3 mb-5 bg-body rounded">
        <img
          class="section-height"
          src="https://scontent.ftpe14-1.fna.fbcdn.net/v/t1.6435-9/143590038_114198937300897_2106869322168097081_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=B6_2QAn9WLQAX-281AP&_nc_ht=scontent.ftpe14-1.fna&oh=00_AT9R6ODyUiZwtU4VWJuet0d2hJkGG75H4g8pmva3L-dT_g&oe=625ADAE8"
          alt=""
        />
      </div>
      <div
        class="col-md-6 d-flex flex-wrap justify-content-center p-5 text-primary align-content-start"
      >
        <div class="card-body">
          <h3 class="card-title mb-3">對於食材的堅持</h3>
          <p class="card-text fs-5 lh-lg">
            現在食品無添加物根本賣不出去！因為太普通...
            <br />食品加工物只要加一點點，馬上就能凸顯味道
            <br />但我不想去加那些東西
          </p>
          <router-link
          to="/about"
            href="#"
            class="card-link d-flex justify-content-center fs-5 text-underline-hover"
            >不摻假才是這個社會最難能可貴的味道</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 熱門商品 -->
  <div class="hot-banner my-5 d-flex align-items-center">
    <div
      class="container box backdrop-blur d-flex align-items-center justify-content-center border border-white"
    >
      <h2 class="text-white">精 選 口 味</h2>
    </div>
  </div>
  <!-- 產品卡片 -->
  <div class="container d-flex justify-content-evenly py-5">
    <div class="card shadow-sm" style="width: 18rem">
      <div
        style="
          height: 300px;
          background-position: 50% 50%;
          background-size: cover;
          filter: blur(2px);
        "
        :style="{ backgroundImage: `url(../../public/images/sc/cake2.jpg)` }"
      ></div>
      <img
        src="../../public/images/sc/cake2.jpg"
        class="card-img-top"
        alt="..."
        style="position: absolute; top: 25px; left: 30px; height: 250px"
      />
      <div class="card-body">
        <h5 class="card-title text-center">提拉米蘇</h5>
        <p class="card-text text-center">$180 NTD</p>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-primary">
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <div class="card shadow-sm" style="width: 18rem">
      <div
        style="
          height: 300px;
          background-position: 50% 50%;
          background-size: cover;
          filter: blur(2px);
        "
        :style="{ backgroundImage: `url(../../public/images/sc/cake2.jpg)` }"
      ></div>
      <img
        src="../../public/images/sc/cake2.jpg"
        class="card-img-top"
        alt="..."
        style="position: absolute; top: 25px; left: 30px; height: 250px"
      />
      <div class="card-body">
        <h5 class="card-title text-center">提拉米蘇</h5>
        <p class="card-text text-center">$180 NTD</p>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-primary">
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <div class="card shadow-sm" style="width: 18rem">
      <div
        style="
          height: 300px;
          background-position: 50% 50%;
          background-size: cover;
          filter: blur(2px);
        "
        :style="{ backgroundImage: `url(../../public/images/sc/cake2.jpg)` }"
      ></div>
      <img
        src="../../public/images/sc/cake2.jpg"
        class="card-img-top"
        alt="..."
        style="position: absolute; top: 25px; left: 30px; height: 250px"
      />
      <div class="card-body">
        <h5 class="card-title text-center">提拉米蘇</h5>
        <p class="card-text text-center">$180 NTD</p>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-primary">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectFade, Autoplay, Pagination],
      swiper_img: [
        {
          src: '../../public/images/sc/1.jpg',
          text: 'lorem789'
        },
        {
          src: '../../public/images/sc/2.jpg',
          text: 'lorem123'
        },
        {
          src: '../../public/images/sc/3.jpg',
          text: 'lorem456'
        },
        {
          src: '../../public/images/sc/4.jpg',
          text: 'lorem211'
        }
      ]
    }
  }
}
</script>

<style>
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
