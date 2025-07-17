import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import './index.css' // Global styles with Tailwind CSS
import App from './App.vue'

// Create Vue router (for future navigation needs)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 88 // Account for navbar height
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Create head manager for SEO
const head = createHead()

// Create and configure Vue app
const app = createApp(App)

// Install plugins
app.use(router)
app.use(head)
app.use(MotionPlugin)

// Mount the app
app.mount('#app')
