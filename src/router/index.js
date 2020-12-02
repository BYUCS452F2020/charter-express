import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Upcoming from '@/components/Upcoming'
import Contact from '@/components/Contact'
import Charters from '@/components/Charters'
import SingleCharter from '@/components/SingleCharter'
import Blog from '@/components/Blog'
import CreateCharter from '@/components/CreateCharter'

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
      path: '/charters',
      name: 'Charters',
      component: Charters
    },
    {
      path: '/charter/:id',
      name: 'SingleCharter',
      component: SingleCharter
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Charters
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
    },
    {
      path: '/createcharter',
      name: 'CreateCharter',
      component: CreateCharter
    }
  ]
})
