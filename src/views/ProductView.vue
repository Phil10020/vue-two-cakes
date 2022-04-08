<template>
  <div class="container mx-auto row my-5">
    <div class="col-md-6">
      <div
        v-if="product.imageUrl"
        style="
          height: 400px;
          background-position: 50% 50%;
          background-size: cover;
        "
        :style="{ backgroundImage: `url(${product.imageUrl})` }"
      ></div>
    </div>
    <div class="col-md-6">
      <!-- 導航欄 -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
      <!-- end  -->
      <h2>{{ product.title }}</h2>
      <p class="fs-5 text-muted">
        {{ product.description }}
      </p>
      <p>
        <span class="fw-blod"
          >NT$ {{ product.price }}
          <small class="text-decoration-line-through">{{
            product.origin_price
          }}</small
          ><small>/{{ product.unit }}</small></span
        >
      </p>
      <!-- form-group  -->
      <div class="">
        <select id="" class="form-select text-center mb-3 col-md-7">
          <option :value="num" v-for="num in 20" :key="`${num}`">
            {{ num }}
          </option>
        </select>
        <div class="d-flex justify-content-end align-items-center">
          <p class="fs-5 d-flex m-0 text-dark">小記<span> |NT </span>456</p>
          <button type="button" class="btn btn-primary ms-2 text-white fs-5" @click.prevent="addToCart">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="product-banner-color">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-md-6 py-4 d-flex flex-wrap align-items-evenly">
          <h2 class="fs-3 mt-3 mb-0">注意事項：</h2>
          <p class="fs-5 mb-0">
            TwoCakes為個人工作室，所有原料幾乎都是天然食材，不含防腐劑。 <br />
            使用當季水果作為主要食材，確保每位客人有最佳的品嚐體驗。 <br />
            故每項商品均有其食用期限，請參閱下方式項：
          </p>
          <ul class="list-unstyled fs-5 cake-list">
            <li>提拉米蘇：冷藏保存期限3日，常溫2小時內享用完畢為佳</li>
            <li>時令蛋糕：冷藏保存期限2日，冷凍保存期限7日</li>
            <li>餅乾點心：常溫保存5日，冷藏保存期限1週，冷凍保存期限1個月</li>
          </ul>
        </div>
        <div class="col-md-4">
          <img
            src="/images/sc/cake6.jpg"
            alt=""
            class="img-fluid border border-white"
            style="height: 400px"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h2>你可能會喜歡</h2>
    <div></div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter'

export default {
  data () {
    return {
      product: [],
      id: '',
      qty: 1
    }
  },
  methods: {
    getData () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products
        })
    },
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
          this.getData()
        })
        .catch((err) => {
          console.log(err.res.data.message)
        })
    },
    addToCart (id, qty = 1) {
      qty = this.qty
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: this.id,
        qty
      }
      this.$http
        .post(url, { data })
        .then((res) => {
          console.log(res)
          emitter.emit('get-cart')
          this.showAlert({ icon: 'success', title: `${res.data.message}` })
        })
        .catch((err) => {
          console.log(err.res.data.message)
        })
    },
    showAlert (message) {
      this.$swal(message)
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>

<style lang="scss">
.btn {
  border-radius: 0 !important;
}

.form-height {
  height: 100%;
}
.product-banner-color {
  background: rgba(188, 118, 89, 0.3);
}

//  google icon

.cake-list li:before {
  content: 'cookie';
  font-family: 'Material Icons';
}
</style>
