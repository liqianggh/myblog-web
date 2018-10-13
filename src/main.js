import Vue from 'vue'
import App from './App'
import router from './router'
// 初始化css
import 'styles/reset.css'
// 1像素边框解决，兼容多倍屏幕
import 'styles/border.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
