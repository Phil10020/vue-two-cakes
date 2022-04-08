import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeCakes.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/IndexVeiw.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutMe.vue')
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import('../views/NoticeThing.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: '/orderform',
        name: 'orderform',
        component: () => import('../views/OrderForm.vue')
      },
      {
        path: '/checkout/:id',
        name: 'checkout',
        component: () => import('../views/CheckOut.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
