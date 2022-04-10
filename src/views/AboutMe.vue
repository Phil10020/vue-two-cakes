
<template>
<!-- <Loading :active="isLoading" :z-index="1060"></Loading> -->
    <div
    class="banner  container-fluid d-flex align-items-center justify-content-center"
    style="background-image: url(~@/public/images/sc/about.png) ;
    height: 300px; background-position: 50% 50%; background-size: cover"
  >
  <div
      class="container  d-flex align-items-center justify-content-end text-white"
    >
  <h1 class="fs-2 lh-base" style="text-indent:-30%">幸福就像品嚐甜品的味道<br>它們有各自的故事，且各自精采</h1>
    </div>
  </div>
  <div class="container about-bg my-6 text-primary mt-4">
    <div class="row p-5 mb-5 text-center mx-1 mx-lg-4">
      <h2 class="fw-bolder fs-2" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500"><span class="text-heigh-light">人生就像製作甜點的過程，你必須不斷嘗試，才能品味出幸福的滋味</span></h2>
    </div>
    <div class="row row row-cols-1 row-cols-sm-2 g-5 mx-1 mx-lg-4">
      <div class="col mb-5" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img class="img-fluid" src="../../public/images/sc/china.png" alt="寒山寺" />
      </div>
      <div class="col d-flex flex-column justify-content-center mb-6" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p class="fs-5 lh-lg">
          在上海待了三年的時間，離開前來到了這裡。 <br>
          西湖是杭州最美的溫柔，也訴說著我對美好事物的期待 。<br>
          美好的事物需要盡心盡力的追求， <br>
          熱愛生活、品嚐美食、製作甜點，這就是我！
        </p>
      </div>
      <div class="col d-flex flex-column justify-content-center mb-6 order-2 order-lg-1" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p class="fs-5 lh-lg">
          我本身是一位安親老師，在補教業任教已經13年， <br>
愛吃美食所以也喜歡製作，<br> 很享受一個人獨自在工作室安靜的忙碌著， <br>
看著烤箱裡的麵糊長高長大無比療癒， <br> 當然也接受著一次次蛋糕抹面的考驗。
        </p>
      </div>
      <div class="col mb-5 order-1 order-lg-2" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img class="img-fluid" src="../../public/images/sc/teacher.png" alt="教學" />
      </div>
      <div class="col mb-5 order-3 order-lg-3" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img class="img-fluid" src="../../public/images/sc/about-cake.png" alt="甜點" />
      </div>
      <div class="col d-flex flex-column justify-content-center mb-6 order-4 order-lg-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p class="fs-5 lh-lg">
為什麼是Two Cakes，因為我一天只能做兩個蛋糕🤣 <br>
每個蛋糕的材料都能買新鮮的材料，蛋糕簡單樸素。 <br>
沒有一堆哩哩扣扣的插件，也不喜歡弄一些色素在奶油裡， <br>
當季有什麼水果，我就做什麼蛋糕，所以一定是最新鮮的。
        </p>
      </div>
    </div>
    <div class="row p-5 text-center">
      <h3 class="fw-bolder" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        細細品嚐每一種味道，憶起生活中甜蜜的每一刻
      </h3>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  // methods: {
  //   loading () {
  //     this.isLoading = true
  //     setTimeout(() => {
  //       this.isLoading = false
  //     }, 1000)
  //   }
  // },
  mounted () {
    window.scroll(0, 0)
    // this.loading()
    window.scroll(0, 0)
    AOS.init()
  }
}
</script>
