import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Country from '../views/Country.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/countries',
    name: 'Country',
    component: Country,
    meta: { requireAuth:true }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
