import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
import AddStudent from '../pages/AddStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
     {
      path: '/add',
      name: 'add-student',
      component: AddStudent,
    },
  ],
})

export default router