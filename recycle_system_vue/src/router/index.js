import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login'
import Index from '../views/index'
import UserLayout from '../views/User/userlayout'
import AllInorder from '../views/User/allInorder'
import DoingInorder from '../views/User/doingInorder'
import Recycle from '../views/User/recycle'
import AlterInfo from '../views/User/alterinfo'
import Test from  '../views/User/test'
import HomePage from '../views/User/homepage'
import maptest from '../views/User/maptest'
import CollectorLayout from '../views/Collector/collectorlayout'
import CollectorHomePage from '../views/Collector/collectorhomepage'
import collectorallInorder from "../views/Collector/collectorallInorder";
import collectoralterinfo from "../views/Collector/collectoralterinfo";
import collectordoingInorder from "../views/Collector/collectordoingInorder";
import collectormaptest from "../views/Collector/collectormaptest";
import register from "../views/register";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:"主页",
      component: Index,
      redirect:"/login"
    },{
      path:'/register',
      name:"注册页面",
      component: register
    },
    {
      path:'/login',
      name:"登录页面",
      component: Login
    },{
      path: '/collectorlayout',
      component: CollectorLayout,
      redirect:"/collectorhomepage",
      meta: {
        needLogin: true //需要登录
      },
      children:[
        {
          path: '/collectorhomepage',
          meta: {
            needLogin: true //需要登录
          },
          component: CollectorHomePage
        },{
          path: '/collectorallinorder',
          meta: {
            needLogin: true //需要登录
          },
          component: collectorallInorder
        },{
          path: '/collectordoinginorder',
          meta: {
            needLogin: true //需要登录
          },
          component: collectordoingInorder
        },{
          path: '/collectoralterinfo',
          meta: {
            needLogin: true //需要登录
          },
          component: collectoralterinfo
        },{
          path: '/collectormaptest',
          meta: {
            needLogin: true //需要登录
          },
          component: collectormaptest
        }
      ]
    },
    {
      path: '/userlayout',
      component: UserLayout,
      meta: {
        needLogin: true //需要登录
      },
      redirect:"/homepage",
      children: [
        {
          path: '/homepage',
          meta: {
            needLogin: true //需要登录
          },
          component: HomePage
        },

        {
          path: '/allinorder',
          meta: {
            needLogin: true //需要登录
          },
          component: AllInorder
        },
        {
          path: '/doinginorder',
          meta: {
            needLogin: true //需要登录
          },
          component: DoingInorder
        },
        {
          path: '/recycle',
          meta: {
            needLogin: true //需要登录
          },
          component: Recycle
        },
        {
          path: '/alterinfo',
          meta: {
            needLogin: true //需要登录
          },
          component: AlterInfo
        },
        {
          path:'/test',
          meta: {
            needLogin: true //需要登录
          },
          component: Test
        },{
          path:'/maptest',
          meta: {
            needLogin: true //需要登录
          },
          component:maptest
        }
      ]
    }

  ]
})
