import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Blog from '@/pages/info/Blog'
import Album from '@/pages/info/Album'
import AlbumList from '@/pages/album/Album'
import Comments from '@/pages/comment/Comment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/albums',
      name: 'AlbumList',
      component: AlbumList
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments
    }
  ]
})
