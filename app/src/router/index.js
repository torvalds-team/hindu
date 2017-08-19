import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Events from '@/components/Events'
import Capture from '@/components/Capture'
import Login from '@/components/Login'

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
      component: Capture,
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
