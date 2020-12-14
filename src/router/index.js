import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '線上相簿',
      login: false
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue'),
    meta: {
      title: '線上相簿 | 註冊',
      login: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '線上相簿 | 登入',
      login: false
    }
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import(/* webpackChunkName: "album" */ '../views/Album.vue'),
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  routes
})

// 進入到網頁之前
router.beforeEach((to, from, next) => {
  // 如果要去的網頁需要登入，且沒有登入的 id 儲存在 store.state.user 裡
  if (to.meta.login && !store.state.user.id) {
    // 則將網頁導向 login 頁面
    next('/login')
    // 如果不是
  } else {
    // 則導向本來網頁指向的路徑
    next()
  }
})

// 進入到網頁之後
router.afterEach((to, from) => {
  let title = ''
  // 如果要去的網頁名稱是 'Album'
  if (to.name === 'Album') {
    // title 改為使用者名稱加 's Album
    title = store.state.user.name + "'s Album"
  // 如果要去的網頁不是 'Album'
  } else {
    // title 則為每頁的原訂名稱
    title = to.meta.title
  }
  document.title = title
})

export default router
