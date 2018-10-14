<template>
  <header-menus></header-menus>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
export default {
  name: 'Index',
  components: {
    HeaderMenus
  },
  data () {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>
