import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import profile from '../views/profile.vue'
import help from '../views/help.vue'
import tentang from '../views/Tentang.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: tentang
    },
    {
      path: '/help',
      name: 'help',
      component: help
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



