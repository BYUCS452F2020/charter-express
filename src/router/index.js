import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Upcoming from '@/components/Upcoming'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
