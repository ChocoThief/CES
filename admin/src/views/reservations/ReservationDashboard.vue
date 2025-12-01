<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import ReservationDetailModal from '@/components/ReservationDetailModal.vue'

const router = useRouter()

// 모달 상태
const isModalOpen = ref(false)
const selectedReservation = ref(null)

// 필터 상태
const selectedDate = ref('all')
const selectedDocent = ref('all')
const selectedStatus = ref('all')
const searchQuery = ref('')

// 통계 데이터 (임시 데이터)
const stats = ref({
  total: 24,
  approved: 12,
  rejected: 5,
  pending: 7,
})

// 예약 데이터 (임시 데이터)
const reservations = ref({
  '1/6': {
    docentA: {
      '11:00': [],
      '14:00': [
        { name: 'OOO 대표', count: 4, status: 'approved' },
        { name: 'OOO 부사장', count: 8, status: 'rejected' },
      ],
      '15:00': [],
      '16:00': [],
    },
    docentB: {
      '11:00': [],
      '14:00': [
        { name: 'OOO 부사장', count: 13, status: 'approved' },
        { name: 'OOO 대표', count: 7, status: 'pending' },
      ],
      '15:00': [
        { name: 'OOO 부사장', count: 5, status: 'rejected' },
        { name: 'OOO 부사장', count: 5, status: 'pending' },
        { name: 'OOO 부사장', count: 9, status: 'pending' },
      ],
      '16:00': [
        { name: 'OOO 대표', count: 11, status: 'rejected' },
      ],
    },
  },
  '1/7': {
    docentA: {
      '11:00': [
        { name: 'OOO 대표', count: 6, status: 'approved' },
      ],
      '14:00': [
        { name: 'OOO 부장', count: 3, status: 'pending' },
        { name: 'OOO 이사', count: 5, status: 'approved' },
      ],
      '15:00': [],
      '16:00': [
        { name: 'OOO 사장', count: 10, status: 'approved' },
        { name: 'OOO 대표', count: 2, status: 'rejected' },
      ],
    },
    docentB: {
      '11:00': [
        { name: 'OOO 부사장', count: 8, status: 'pending' },
        { name: 'OOO 대표', count: 4, status: 'approved' },
      ],
      '14:00': [],
      '15:00': [
        { name: 'OOO 대표', count: 12, status: 'approved' },
      ],
      '16:00': [
        { name: 'OOO 부장', count: 3, status: 'pending' },
      ],
    },
  },
  '1/8': {
    docentA: {
      '11:00': [
        { name: 'OOO 이사', count: 7, status: 'approved' },
        { name: 'OOO 대표', count: 5, status: 'rejected' },
      ],
      '14:00': [
        { name: 'OOO 부사장', count: 9, status: 'pending' },
      ],
      '15:00': [
        { name: 'OOO 대표', count: 4, status: 'approved' },
        { name: 'OOO 부장', count: 6, status: 'approved' },
        { name: 'OOO 사장', count: 3, status: 'rejected' },
      ],
      '16:00': [],
    },
    docentB: {
      '11:00': [
        { name: 'OOO 대표', count: 15, status: 'approved' },
      ],
      '14:00': [
        { name: 'OOO 이사', count: 8, status: 'pending' },
        { name: 'OOO 부사장', count: 2, status: 'approved' },
      ],
      '15:00': [
        { name: 'OOO 대표', count: 6, status: 'rejected' },
      ],
      '16:00': [
        { name: 'OOO 부장', count: 10, status: 'approved' },
        { name: 'OOO 대표', count: 4, status: 'pending' },
      ],
    },
  },
  '1/9': {
    docentA: {
      '11:00': [
        { name: 'OOO 사장', count: 12, status: 'approved' },
        { name: 'OOO 대표', count: 3, status: 'pending' },
        { name: 'OOO 이사', count: 5, status: 'rejected' },
      ],
      '14:00': [
        { name: 'OOO 부사장', count: 7, status: 'approved' },
      ],
      '15:00': [
        { name: 'OOO 대표', count: 9, status: 'pending' },
        { name: 'OOO 부장', count: 4, status: 'approved' },
      ],
      '16:00': [
        { name: 'OOO 이사', count: 6, status: 'rejected' },
      ],
    },
    docentB: {
      '11:00': [
        { name: 'OOO 대표', count: 11, status: 'pending' },
      ],
      '14:00': [
        { name: 'OOO 부사장', count: 8, status: 'approved' },
        { name: 'OOO 사장', count: 5, status: 'rejected' },
        { name: 'OOO 대표', count: 3, status: 'pending' },
      ],
      '15:00': [
        { name: 'OOO 이사', count: 7, status: 'approved' },
      ],
      '16:00': [],
    },
  },
})

const getStatusText = (status: string) => {
  const statusMap = {
    approved: '승인',
    rejected: '거절',
    pending: '대기',
  }
  return statusMap[status] || status
}

const getStatusVariant = (status: string) => {
  const variantMap = {
    approved: 'default',
    rejected: 'destructive',
    pending: 'secondary',
  }
  return variantMap[status] || 'default'
}

const handleReservationClick = (reservation: any, date: string, docent: string, time: string) => {
  // 모달용 데이터 구조로 변환
  selectedReservation.value = {
    id: Math.floor(Math.random() * 10000),
    name: reservation.name,
    company: reservation.name.replace('OOO ', ''),
    count: reservation.count,
    date: date,
    docent: docent === 'docentA' ? 'A(영문)' : 'B(국문)',
    time: time,
    status: reservation.status,
    memo: '방문 예약 관련 메모 내용',
    contact: `${reservation.name} 담당자`,
    participants: '참여자 명단 및 기타 사항'
  }
  isModalOpen.value = true
}

const handleApprove = (id: number) => {
  console.log('Approve reservation:', id)
  // TODO: API 호출
}

const handleReject = (id: number) => {
  console.log('Reject reservation:', id)
  // TODO: API 호출
}

const handleCancel = (id: number) => {
  console.log('Cancel reservation:', id)
  // TODO: API 호출
}

const goToList = () => {
  router.push('/reservations/list')
}
</script>

<template>
  <DashboardLayout>
    <div class="flex-1 space-y-4 p-8 pt-6">
      <!-- 헤더 -->
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold tracking-tight">CES KOTRA 관리자 시스템</h2>
      </div>

      <!-- 탭 -->
      <div class="flex space-x-2 border-b pb-2">
        <Button variant="default" class="px-6">대시보드</Button>
        <Button variant="outline" class="px-6" @click="goToList">예약관리</Button>
      </div>

      <!-- 필터 및 통계 -->
      <div class="flex items-center justify-between space-x-4">
        <div class="flex space-x-4">
          <Select v-model="selectedDate">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="모든 날짜" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">모든 날짜</SelectItem>
              <SelectItem value="1/6">1월 6일(화)</SelectItem>
              <SelectItem value="1/7">1월 7일(수)</SelectItem>
              <SelectItem value="1/8">1월 8일(목)</SelectItem>
              <SelectItem value="1/9">1월 9일(금)</SelectItem>
            </SelectContent>
          </Select>

          <Select v-model="selectedDocent">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="전체 보기" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 보기</SelectItem>
              <SelectItem value="docentA">도슨트A(영문)</SelectItem>
              <SelectItem value="docentB">도슨트B(국문)</SelectItem>
            </SelectContent>
          </Select>

          <Select v-model="selectedStatus">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="활성 예약" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">활성 예약</SelectItem>
              <SelectItem value="approved">승인 완료</SelectItem>
              <SelectItem value="rejected">승인 거절</SelectItem>
              <SelectItem value="pending">승인 대기</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- 통계 -->
        <div class="flex space-x-6 text-sm">
          <span>• 전체 예약 : {{ stats.total }}건</span>
          <span>• 승인 완료 : {{ stats.approved }}건</span>
          <span>• 승인 거절 : {{ stats.rejected }}건</span>
          <span>• 미승인 : {{ stats.pending }}건</span>
        </div>

        <!-- 검색 -->
        <Input
          v-model="searchQuery"
          type="search"
          placeholder="검색…"
          class="w-[200px]"
        />
      </div>

      <!-- 타임테이블 -->
      <div class="space-y-8">
        <div v-for="date in ['1/6', '1/7', '1/8', '1/9']" :key="date">
          <Card class="overflow-hidden">
            <CardContent class="p-0">
              <!-- 날짜 헤더 -->
              <div class="bg-primary text-primary-foreground font-semibold text-center py-3">
                {{ date === '1/6' ? '1월 6일(화)' : date === '1/7' ? '1월 7일(수)' : date === '1/8' ? '1월 8일(목)' : '1월 9일(금)' }}
              </div>

              <!-- 테이블 -->
              <table class="w-full">
                <thead>
                  <tr class="border-b">
                    <th class="border-r p-3 text-left font-medium">분류</th>
                    <th v-if="date !== '1/6'" class="border-r p-3 text-center font-medium">11:00</th>
                    <th class="border-r p-3 text-center font-medium">14:00</th>
                    <th class="border-r p-3 text-center font-medium">15:00</th>
                    <th class="p-3 text-center font-medium">16:00</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 도슨트 A -->
                  <tr class="border-b">
                    <td class="border-r p-3 font-medium">도슨트A(영문)</td>
                    <td v-if="date !== '1/6'" class="border-r p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentA['11:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentA['11:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentA', '11:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                    <td class="border-r p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentA['14:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentA['14:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentA', '14:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                    <td class="border-r p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentA['15:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentA['15:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentA', '15:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentA['16:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentA['16:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentA', '16:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <!-- 도슨트 B -->
                  <tr>
                    <td class="border-r p-3 font-medium">도슨트B(국문)</td>
                    <td v-if="date !== '1/6'" class="border-r p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentB['11:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentB['11:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentB', '11:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                    <td class="border-r p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentB['14:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentB['14:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentB', '14:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                    <td class="border-r p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentB['15:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentB['15:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentB', '15:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3 text-center bg-muted/30">
                      <div v-if="reservations[date].docentB['16:00'].length === 0" class="text-muted-foreground">
                        예약 없음
                      </div>
                      <div v-else class="space-y-1">
                        <div
                          v-for="(res, idx) in reservations[date].docentB['16:00']"
                          :key="idx"
                          class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                          @click="handleReservationClick(res, date, 'docentB', '16:00')"
                        >
                          <div class="text-sm">- {{ res.name }} ({{ res.count }}명) <Badge :variant="getStatusVariant(res.status)">{{ getStatusText(res.status) }}</Badge></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <!-- 예약 상세 모달 -->
    <ReservationDetailModal
      v-model:open="isModalOpen"
      :reservation="selectedReservation"
      @approve="handleApprove"
      @reject="handleReject"
      @cancel="handleCancel"
    />
  </DashboardLayout>
</template>
