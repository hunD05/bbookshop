import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookDetail from '../views/BookDetail.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router