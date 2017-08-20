// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import toastr from 'toastr'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'toastr/build/toastr.min.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  const userId = App.data().userId

  if (userId || to.meta.anonymous) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
