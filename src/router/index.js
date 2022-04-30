import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Beijing from '@/components/Beijing'
import Shanghai from '@/components/Shanghai'
import Tianjin from '@/components/Tianjin'
import Chongqing from '@/components/Chongqing'
import Liaoning from '@/components/Liaoning'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/beijing',
    name: 'Beijing',
    component: Beijing
  },
  {
    path: '/shanghai',
    name: 'Shanghai',
    component: Shanghai
  },
  {
    path: '/tianjin',
    name: 'Tianjin',
    component: Tianjin
  },
  {
    path: '/chongqing',
    name: 'Chongqing',
    component: Chongqing
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/liaoning',
    name: 'Liaoning',
    component: Liaoning
  }
  ]
})
