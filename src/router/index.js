import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/blogs')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/article')
    }
  ]
})

export default router
