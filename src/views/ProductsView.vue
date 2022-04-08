<template>
<LoadingVue :active="isLoading" :z-index="100"></LoadingVue>
  <div
    class="banner mb-5 container-fluid d-flex align-items-center justify-content-end"
    style="background-image: url(/images/sc/products-banner2.png) ;
    height: 300px; background-position: 50% 50%; background-size: cover"
  >
  <div
      class="container  d-flex justify-content-end text-white"
    >
  <h1 class="fs-2 lh-base" style="text-indent:-30%">我喜歡美食<br>特別是和妳一起分享</h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="list-group fs-5 text-center" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action"
            :class="{ active: isActive === 'all' }"
            @click.prevent="filter('all')"
            >全部品項</a
          >
          <a
            class="list-group-item list-group-item-action"
            :class="{ active: isActive === 'tiramisu' }"
            @click.prevent="filter('tiramisu')"
            >提拉米蘇</a
          >
          <a
            class="list-group-item list-group-item-action"
            :class="{ active: isActive === 'cake' }"
            @click="filter('cake')"
            >時令蛋糕</a
          >
          <a
            class="list-group-item list-group-item-action"
            :class="{ active:isActive === 'cookie' }"
            @click="filter('cookie')"

            >可口點心</a
          >
        </div>
      </div>
      <div class="col-8">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div class="col" v-for="item in tempProducts" :key="item.id">
      <div class="card shadow card-radius">
        <div
          style="
            height: 200px;
            width: 100%;
            background-position: 50% 50%;
            background-size: cover;
          "
          :style="{
            backgroundImage: `url(${item.imageUrl})`
          }"
          class="card-img-top img-wrap"
        >
          <div class="card-icon d-flex justify-content-end">
            <i class="bi bi-bookmark-heart fs-1" style="color: #dc3545"></i>
          </div>
          <div class="layer box-border">
            <router-link :to="`/product/${item.id}`"
            >
            <button
              type="button"
              class="btn btn-secondary text-layer text-white shadow"
            >
              查看內容
            </button>
            </router-link>
          </div>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title"><router-link class="text-decoration-none text-black" :to="`/product/${item.id}`">{{ item.title }}</router-link></h5>
          <p class="card-text">NT$ {{ item.price }}</p>
        </div>
        <a
          type="button"
          class="fs-5 text-white text-decoration-none bg-primary py-2"
          ><div class="text-center" @click="getCart()">加入購物車</div></a
        >
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      products: {},
      isLoadingItem: '',
      isLoading: false,
      isActive: 'all',
      tempProducts: {},
      product: {}
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.tempProducts = res.data.products
      })
      this.isLoading = false
    }
  },
  addToCart (id, qty = 1) {
    const cart = {
      product_id: id,
      qty
    }
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
    this.$http
      .post(url, { data: cart })
      .then((res) => {
        emitter.emit('get-cart')
        this.showAlert({ icon: 'success', title: `${res.data.message}` })
      })
  },
  filter (category = 'all') {
    this.isLoading = true
    this.isActive = category
    if (category === 'all') {
      this.tempProducts = this.products
    } else {
      this.tempProducts = this.products.filter((item) => item.category === category)
    }
    this.isLoading = false
  },
  mounted () {
    this.getProducts()
  }
}
</script>
