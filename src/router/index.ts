import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './route.config'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/jjs-ui-prod/' : '/',
  routes
})

export default router
