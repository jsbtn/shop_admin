import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '首页', icon: 'home', noCache: true
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页导航', icon: 'home', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/orderMager',
    component: Layout,
    // redirect: 'noredirect',
    name: 'orderMager',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '常规订单管理', icon: 'order', noCache: true
    },
    children: [
      {
        path: 'routineOrder',
        component: () => import('@/views/orderMager/routineOrder'),
        name: 'routineOrder',
        meta: { title: '订单管理', noCache: true }
      },
      {
        path: 'refunds',
        component: () => import('@/views/orderMager/refunds'),
        name: 'refunds',
        meta: { title: '售后退款', noCache: true }
      }
    ]
  },
  {
    path: '/magerShop',
    component: Layout,
    // redirect: 'noredirect',
    name: 'magerShop',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '商品管理', icon: 'order', noCache: true
    },
    children: [
      {
        path: 'shopMager',
        component: () => import('@/views/magerShop/shopMager'),
        name: 'shopMager',
        meta: { title: '商品管理', noCache: true }
      },
      {
        path: 'shopClass',
        component: () => import('@/views/magerShop/shopClass'),
        name: 'shopClass',
        meta: { title: '商品分类', noCache: true }
      },
      {
        path: 'shopSend',
        component: () => import('@/views/magerShop/shopSend'),
        name: 'shopSend',
        meta: { title: '发布商品', noCache: true }, hidden: true
      }
    ]
  },
  {
    path: '/magerEvaluate',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/magerEvaluate/index'),
        name: '评价管理',
        meta: { title: '评价管理', icon: 'tab' }
      }
    ]
  },

  {
    path: '/magerVip',
    component: Layout,
    // redirect: 'noredirect',
    name: 'magerVip',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '会员管理', icon: 'order', noCache: true
    },
    children: [
      {
        path: 'vipList',
        component: () => import('@/views/magerVip/vipList'),
        name: 'vipList',
        meta: { title: '会员列表', noCache: true }
      },
      {
        path: 'vipGrade',
        component: () => import('@/views/magerVip/vipGrade'),
        name: 'vipGrade',
        meta: { title: '会员等级', noCache: true }
      }
    ]
  },
  {
    path: '/magerNotice',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/magerNotice/index'),
        name: '公告管理',
        meta: { title: '公告管理', icon: 'tab' }
      }
    ]
  },
  {
    path: '/magerSale',
    component: Layout,
    // redirect: 'noredirect',
    name: 'magerSale',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '分销管理', icon: 'order', noCache: true
    },
    children: [
      {
        path: 'agent',
        component: () => import('@/views/magerSale/agent'),
        name: 'agent',
        meta: { title: '代理商管理', noCache: true }
      },
      {
        path: 'putForward',
        component: () => import('@/views/magerSale/putForward'),
        name: 'putForward',
        meta: { title: '提现管理', noCache: true }
      },
      {
        path: 'setting',
        component: () => import('@/views/magerSale/setting'),
        name: 'setting',
        meta: { title: '分销设置', noCache: true }
      },
      //
      {
        path: 'sendAgent',
        component: () => import('@/views/magerSale/sendAgent'),
        name: 'sendAgent',
        hidden: true,
        meta: { title: '新增代理商',noCache: true  }
      },
      {
        path: 'agentDetail',
        component: () => import('@/views/magerSale/agentDetail'),
        name: 'agentDetail',
        hidden: true,
        meta: { title: '代理商详情',noCache: true  }
      }
    ]
  },

  {
    path: '/opinion',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/opinion/index'),
        name: '意见反馈',
        meta: { title: '意见反馈', icon: 'tab' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    // redirect: 'noredirect',
    name: 'setting',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '系统设置', icon: 'order', noCache: true
    },
    children: [
      {
        path: 'integral',
        component: () => import('@/views/setting/integral'),
        name: 'integral',
        meta: { title: '积分管理', noCache: true }
      },
      {
        path: 'problem',
        component: () => import('@/views/setting/problem'),
        name: 'problem',
        meta: { title: '问题管理', noCache: true }
      },
      {
        path: 'problemadd',
        component: () => import('@/views/setting/problemadd'),
        name: 'problem',
        hidden: true,
        meta: { title: '新增管理', noCache: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
