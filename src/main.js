import Vue from 'vue'
import App from './App'
import router from './router'
// 整合element-ui
import Element from 'element-ui'
import '../src/assets/styles/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
// 初始化css
import 'styles/reset.css'
// 1像素边框解决，兼容多倍屏幕
import 'styles/border.css'
// iconfont 引入
import 'styles/iconfont.css'
Vue.config.productionTip = false
// todo 按需引入element-ui中的组件 以达到项目瘦身
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
