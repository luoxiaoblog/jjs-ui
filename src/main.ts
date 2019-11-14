import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './element'
import hljs from 'highlight.js'
import 'highlightjs-line-numbers.js'
window.hljs = hljs
import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/monokai-sublime.css'
import './assets/styles/reset.css'
import './assets/styles/common.scss'
import './demo-styles/index.scss'

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

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)

    debugger

    hljs.initLineNumbersOnLoad()
  })
})

new Vue({
  router,
  ...App
}).$mount('#app')
