import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      component: Main
   },
   {
      path: '/about',
      component: About
   },
   {
      path: '/posts',
      component: PostPage
   },
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
})

export default router;