import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import routerConfig from './config'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes
})

routerConfig(router)

export default router
