import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicesPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/services', name: 'services', component: ServicesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

