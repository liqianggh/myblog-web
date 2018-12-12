<template>
  <div id='app'>
    <header-menus/>
    <router-view/>
    <copy-right/>
  </div>
</template>

<script>
import HeaderMenus from './common/HeaderMenus.vue'
import CopyRight from './common/CopyRight.vue'

export default {
  name: 'App',
  components: {
    HeaderMenus,
    CopyRight
  }
}
</script>
