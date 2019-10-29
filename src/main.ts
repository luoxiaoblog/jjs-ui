import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './element'

import './assets/styles/reset.css'

import demoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav.vue'
import FooterNav from './components/footer-nav.vue'

Vue.component('demo-block', demoBlock)
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

Vue.config.productionTip = false

new Vue({
  router,
  ...App
}).$mount('#app')
