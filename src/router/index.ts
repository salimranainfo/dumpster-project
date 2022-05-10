import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/Index.vue'
import Dallas from '../views/Dallas.vue'
import Philadelphia from '../views/Philadelphia.vue'
import Charlotte from '../views/Charlotte.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/dallas',
    name: 'dallas',
    component: Dallas,
  },
  {
    path: '/philadelphia',
    name: 'philadelphia',
    component: Philadelphia,
  },
  {
    path: '/charlotte',
    name: 'charlotte',
    component: Charlotte,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
