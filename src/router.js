import Vue from 'vue'
import Router from 'vue-router'
import pc from './components/pc'
import ios from './components/ios'
import android from './components/android'
import weixin from './components/weixin'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pc',
      name: 'pc',
      component: pc
    },
    {
      path: '/android',
      name: 'android',
      component:android
    },
    {
      path: '/ios',
      name: 'ios',
      component:ios 
    },
    {
      path: '/weixin',
      name: 'weixin',
      component:weixin 
    }

  ]
})
