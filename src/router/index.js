import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Capture from '@/components/Capture'
import Login from '@/components/Login'
import Product from '@/components/Product'
import Card from '@/components/Card'
import Success from '@/components/Success'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: { anonymous: true },
    }, {
      path: '/capture',
      name: 'Capture',
      component: Capture
    }, {
      path: '/product/:productId',
      name: 'Product',
      component: Product,
      props: true
    }, {
      path: '/card/:productId',
      name: 'Card',
      component: Card,
      props: true
    }, {
      path: '/success/:transactionReference',
      name: 'Success',
      component: Success,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: true,
      meta: { anonymous: true },
    }
  ]
})

export default router
