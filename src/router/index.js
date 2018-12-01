import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Article from '@/pages/detail/Article'
import Album from '@/pages/info/Album'
import Albums from '@/pages/album/Album'
import Category from '@/pages/category/Category'
import Tag from '@/pages/category/Tag'
import Comments from '@/pages/comments/Comments'
import AboutMe from '@/pages/about/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog/detail/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/blogs/category/:id',
      name: 'Category',
      component: Category
    },
    {
      path: '/blogs/tag/:id',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/albums/detail/:id',
      name: 'Album',
      component: Album
    },
    {
      path: '/about',
      name: 'About',
      component: AboutMe
    },
    {
      path: '/comments/:id',
      name: 'Comments',
      component: Comments
    }
  ]
})
