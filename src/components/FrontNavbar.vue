<template>
  <header class="sticky-top">
    <!-- nav test -->
    <nav
      class="navbar navbar-expand-lg banner border shadow-sm navbar-light bg-light"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../../public/images/sc/LOGO312.png" alt="LOGO" width="100"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse fs-5" id="navbarNavAltMarkup" ref="collapse">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active text-primary"
                aria-current="page"
                href="#"
                @click="closeNav"
                >首頁</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link text-primary" href="#"
                @click="closeNav"
                >甜點列表</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-primary" href="#"
                @click="closeNav"
                >關於TwoCakes</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/notice" class="nav-link text-primary" href="#"
                @click="closeNav"
                >訂購須知</router-link
              >
            </li>
          </ul>
          <div class="d-flex ms-auto">
            <a href="" class="a-block mx-2"
              ><i class="bi bi-bookmark-heart fs-3"></i
            ></a>
            <!-- shopping cart -->
            <a
              href=""
              class="a-block mx-2 me-5 position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
              ><i class="bi bi-shop-window fs-3"></i
              ><span
                class="d-inline-block position-absolute top-50 start-70 translate-middle badge rounded-pill bg-danger px-2 py-1"
                style="font-size: 12px"
              >
                {{ cartData.carts.length }}
                <span class="visually-hidden">unread messages</span>
              </span></a
            >
          </div>
        </div>
      </div>
    </nav>
    <!-- end1 -->
    <!-- offcanvas -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasWithBackdrop"
      aria-labelledby="offcanvasWithBackdropLabel"
    >
      <div class="offcanvas-header bg-info">
        <h5 class="offcanvas-title text-light" id="offcanvasWithBackdropLabel">
          購物車
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div
        class="offcanvas-body d-flex flex-wrap justify-content-center align-items-top"
      >
        <div class="card-body p-5" v-if="cartData.carts.length === 0">
          <div class="d-flex justify-content-center">
            <span class="material-icons text-white fs-1"> feedback </span>
          </div>
          <p class="text-primary fs-5 text-center">Oops！購物車空空</p>
          <router-link
            to="/products"
            href="#"
            class="border btn btn-primary d-flex justify-content-center text-white fs-5 mx-5"
            >選購些什麼吧~</router-link
          >
        </div>
        <div class="container p-0" v-else>
          <div class="table-responsive">
            <table class="table table-borderless table-hover">
              <tbody v-for="item in cartData.carts" :key="item.id">
                <tr class="">
                  <td class="img-fluid col-3 py-1">
                    <img :src="item.product.imageUrl" alt="" />
                  </td>
                  <td class="text-center fs-7 align-middle">
                    {{ item.product.title }}
                  </td>
                  <td class="align-middle">
                    <div class="">
                      <select
                        id=""
                        class="form-select text-center col-md-7 fs-7"
                        v-model="item.qty"
                        @change="updateCartItem(item)"
                      >
                        <option
                          :value="num"
                          v-for="num in 20"
                          :key="`${num}${item.id}`"
                        >
                          {{ num }}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td class="align-middle">
                    <button
                      type="button"
                      class="btn text-danger fs-4"
                      @click="removeCartItem(item.id)"
                    >
                      <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>總金額</td>
                  <td>{{ cartData.total }} <small>NTD</small></td>
                  <td colspan="2">
                    <router-link
                      to="/cart"
                      class="btn btn-primary text-white fs-7"
                      href="#"
                      role="button"
                      >前往結帳</router-link
                    >
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- end  -->
  </header>
</template>

<script>
import emitter from '@/utils/emitter'
import collapseMixin from '@/utils/mixins/mixinsCollapse'

export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      isLoadingItem: '',
      isLoading: false,
      originPriceTotal: 0
    }
  },
  mixins: [collapseMixin],
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          this.cartData = res.data.data
          // console.log(this.cartData.carts.length)
          const cartItems = this.cartData.carts
          const amount = cartItems.reduce(function (acc, item) {
            return (
              acc + parseInt(item.product.origin_price) * parseInt(item.qty)
            )
          }, 0)
          this.originalPriceTotal = amount
          // console.log(amount)
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.isLoadingItem = item.id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http
        .put(url, { data })
        .then((res) => {
          // console.log(res)
          this.getCart()
          emitter.emit('get-cart')
          this.showAlert({ icon: 'success', title: `${res.data.message}` })
          this.isLoadingItem = ''
        })
        .catch((err) => {
          this.showAlert({ icon: 'error', title: `${err.message}` })
          // alert(err.data.message)
          this.isLoadingItem = ''
        })
    },
    removeCartItem (id) {
      this.isLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoadingItem = ''
      this.$http
        .delete(url)
        .then((res) => {
          // console.log(res)
          this.showAlert({ icon: 'success', title: `${res.data.message}` })
          emitter.emit('get-cart')
          this.getCart()
        })
        .catch((err) => {
          this.showAlert({ icon: 'error', title: `${err.message}` })
          // alert(err.data.message)
        })
    },
    showAlert (message) {
      // Use sweetalert2
      this.$swal(message)
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
