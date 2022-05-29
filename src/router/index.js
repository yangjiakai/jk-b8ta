import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  }, {
    path: '/collections/:name',
    name: 'Collections',
    component: () => import('../views/Collections.vue')
  },
  {
    path: '/product/:name',
    name: 'product',
    component: () => import('../views/Product.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router