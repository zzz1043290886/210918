import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index'),
    // 子路由请求会经过父路由，直接给父路由设置登录检测更加简单，适合所有子路由均需要登录的情况
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Who-we-are',
        component: () => import(/* webpackChunkName: "Who-we-are" */ '@/views/Who-we-are/index')
      },
      {
        path: '/What-we-do',
        name: 'What-we-do',
        component: () => import(/* webpackChunkName: "What-we-do" */ '@/views/What-we-do/index')
      },
      {
        path: '/Investor-Relations',
        name: 'Investor-Relations',
        component: () => import(/* webpackChunkName: "Investor-Relations" */ '@/views/Investor-Relations/index')
      },
      {
        path: '/i-GET-TV',
        name: 'i-GET-TV',
        component: () => import(/* webpackChunkName: "i-GET-TV" */ '@/views/i-GET-TV/index')
      },
      {
        path: '/E-shop',
        name: 'E-shop',
        component: () => import(/* webpackChunkName: "E-shop" */ '@/views/E-shop/index')
      },
      {
        path: '/Media',
        name: 'Media',
        component: () => import(/* webpackChunkName: "Media" */ '@/views/Media/index')
      },
      {
        path: '/Contact-us',
        name: 'Contact-us',
        component: () => import(/* webpackChunkName: "Contact-us" */ '@/views/Contact-us/index')
      }
    ]
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: 'error-page' */'@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
