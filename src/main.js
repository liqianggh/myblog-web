import Vue from 'vue'
import App from './App'
import router from './router'
// 整合element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 初始化css
// import 'styles/reset.css'
// 1像素边框解决，兼容多倍屏幕
// import 'styles/border.css'

import 'styles/index.css'
import 'styles/info.css'
import 'styles/infopic.css'
import 'styles/base.css'
import 'styles/m.css'
// import 'js/jquery.min.js'
// import 'js/comm.js'
// import 'js/page.js'
// import 'js/scrollReveal.js'
// import 'js/piccontent.min.js'
// import 'js/page2.js'
// import 'js/hc-sticky.js'
// import 'js/modernizr.js'
Vue.config.productionTip = false

Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
