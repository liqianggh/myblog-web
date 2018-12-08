<template>
  <header class="header-navigation" v-run="register('header')" id="header">
    <nav>
      <div class="logo"><a href="/">李强个人博客</a></div>
      <h2 ref="mnavh" v-bind:class="{'open':!isShowNav}" @click="handleClick" id="mnavh"><span class="navicon"></span>
      </h2>
      <ul ref="startlist" id="starlist">
        <router-link tag="li" :to="item.url" v-for="(item, index) in navs" :itemIndex="index" :key="index" :id="item.isSelected==true?'selected':''">
          {{item.content}}
        </router-link>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderMenus',
  props: {
    selectedId: {
      type: Number,
      defaultValue: 0
    }
  },
  data () {
    return {
      newScrollPosition: 0,
      lastScrollPosition: 0,
      header: document.getElementById('header'),
      elements: {},
      isShowNav: true,
      curPosition: this.selectedId,
      navs: [
        {
          url: '/index',
          content: '网站首页',
          isSelected: false
        },
        {
          url: '/blogs/category/0',
          content: '文章',
          isSelected: false
        },
        // {
        //   url: '/albums',
        //   content: '相册',
        //   isSelected: false
        // },
        {
          url: '/comments/0',
          content: '留言',
          isSelected: false
        },
        {
          url: '/about',
          content: '关于我',
          isSelected: false
        }
      ]
    }
  },
  directives: {
    run (el, binding) {
      if ((typeof binding.value) === 'function') {
        binding.value(el)
      }
    }
  },
  mounted () {
    this.navs[this.selectedId].isSelected = true
  },
  unmounted () {
    this.destroyed()
  },
  methods: {
    handleScroll (_newScrollPosition, _lastScrollPosition) {
      var _header = this.elements.header
      // Scrolling down
      if (_newScrollPosition < _lastScrollPosition && _lastScrollPosition > 80) {
        _header.classList.remove('slideDown')
        _header.classList.add('slideUp')
        // Scrolling up
      } else if (_newScrollPosition > _lastScrollPosition) {
        _header.classList.remove('slideUp')
        _header.classList.add('slideDown')
      }
    },
    register (flag) {
      return (el) => {
        this.elements[flag] = el
      }
    },
    handleClick () {
      this.isShowNav = !this.isShowNav
      var _startlist = this.$refs.startlist
      if ((!_startlist.style.display) || _startlist.style.display === 'none') {
        _startlist.style.display = 'block'
      } else {
        _startlist.style.display = 'none'
      }
    },
    changeMenus (index) {
      this.$emit('changeMenus', index)
      if (this.curPosition) {
        this.navs[this.curPosition].isSelected = false
      } else {
        this.navs[0].isSelected = false
      }
      this.curPosition = index
      this.navs[index].isSelected = true
    }
  }
}
</script>

<style lang='stylus' scoped>
</style>
