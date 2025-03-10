import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../middlewares/auth.js'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pvpstats',
      name: 'pvpstats',
      component: () => import('../views/PvpRankView.vue'),
    },
    ,
    {
      path: '/history',
      name: 'historique',
      component: () => import('../views/PvpHistoryView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login') // Redirige vers la page de login si non authentifié
  } else {
    next() // Autorise l'accès
  }
})

export default router
