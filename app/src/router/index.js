import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Events from '@/components/Events'
import Capture from '@/components/Capture'
import Login from '@/components/Login'
import Product from '@/components/Product'
import Card from '@/components/Card'
import Success from '@/components/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/events/:eventName',
      name: 'Eventos',
      component: Events,
      props: true
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
      path: '/success',
      name: 'Success',
      component: Success,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: true
    }
  ]
})
