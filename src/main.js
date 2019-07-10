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
import 'styles/github-markdown.min.css'
// Vue-cli生成的工程文件的src/main.js
import hljs from 'highlight.js'
import 'highlight.js/styles/shades-of-purple.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
