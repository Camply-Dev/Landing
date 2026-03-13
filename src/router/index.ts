import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicesPage.vue'

export const isRouteLoading = ref(false)

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/services', name: 'services', component: ServicesPage },
]

const LOADING_ROUTES = new Set(['home', 'services'])

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  isRouteLoading.value = LOADING_ROUTES.has(String(to.name ?? ''))
})

router.afterEach(() => {
  // laisse le temps au contenu de se peindre avant de masquer le loader
  setTimeout(() => {
    isRouteLoading.value = false
  }, 3000)
})

export default router

