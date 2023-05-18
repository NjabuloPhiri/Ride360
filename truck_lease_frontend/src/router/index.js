import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SponsorsView from '../views/SponsorsView.vue'
import TruckersView from '../views/TruckersView.vue'
import SignUpView from '../views/SignUpView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sponsors_signup',
      name: 'sponsors_signup',
      component: SignUpView,
    },
    {
      path: '/sponsors',
      name: 'sponsors_dashboard',
      component: SponsorsView,
    },
    {
      path: '/truckers',
      name: 'truckerss_dashboard',
      component: TruckersView,
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
