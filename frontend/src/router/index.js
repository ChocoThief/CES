import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/View/index.vue'
import Layout from '@/View/pr/Layout.vue'
import ExhibitionHall from '@/View/pr/ExhibitionHall.vue'
import EventOverview from '@/View/pr/EventOverview.vue'
import Companies from '@/View/pr/Companies.vue'
import EurekaPark from '@/View/pr/EurekaPark.vue'
import GlobalPavilion from '@/View/pr/GlobalPavilion.vue'
import BoothLayout from '@/View/pr/BoothLayout.vue'
import EurekaParkLayout from '@/View/pr/EurekaParkLayout.vue'
import GlobalPavillionLayout from '@/View/pr/GlobalPavillionLayout.vue'
import CompanyDetail from '@/View/pr/CompanyDetail.vue'
import Vip from '@/View/vip/Vip.vue'
import PitchingSchedule from '@/View/vip/PitchingSchedule.vue'
import DocentBooking from '@/View/vip/DocentBooking.vue'

// PR 라우트
const prRoutes = [
  {
    path: '/pr',
    component: Layout,
    children: [
      {
        path: '',
        component: ExhibitionHall,
      },
      {
        path: 'event-overview',
        component: EventOverview,
      },
      {
        path: 'companies',
        component: Companies,
      },
      {
        path: 'eureka-park',
        component: EurekaPark,
      },
      {
        path: 'global-pavilion',
        component: GlobalPavilion,
      },
      {
        path: 'company/:id',
        component: CompanyDetail,
      },
      {
        path: 'booth-layout',
        component: BoothLayout,
      },
      {
        path: 'booth-layout/eureka-park',
        component: EurekaParkLayout,
      },
      {
        path: 'booth-layout/global-pavilion',
        component: GlobalPavillionLayout,
      },
    ],
  },
]

// VIP 라우트
const vipRoutes = [
  {
    path: '/vip',
    component: Vip,
  },
  {
    path: '/vip/pitching-schedule',
    component: PitchingSchedule,
  },
  {
    path: '/vip/docent-booking',
    component: DocentBooking,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 항상 페이지 최상단으로 스크롤
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      component: Index,
    },
    ...prRoutes,
    ...vipRoutes,
  ],
})

export default router
