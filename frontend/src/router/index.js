import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/View/index.vue'
import Vip from '@/View/vip.vue'
import PitchingSchedule from '@/View/PitchingSchedule.vue'
import DocentBooking from '@/View/DocentBooking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/vip',
      component: Vip,
    },
    {
      path: '/pitching-schedule',
      component: PitchingSchedule,
    },
    {
      path: '/docent-booking',
      component: DocentBooking,
    },
  ],
})

export default router
