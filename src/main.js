import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

import 'babel-polyfill'
import FastClick from 'fastclick'

const unsync = sync(store, router)
unsync()

import {
  Loading,
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service

FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {App},
  store,
  router,
  render: h => h(App),
})
