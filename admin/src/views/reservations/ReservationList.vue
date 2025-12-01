<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowUpDown } from 'lucide-vue-next'

const router = useRouter()

// 필터 상태
const selectedDate = ref('all')
const selectedDocent = ref('all')
const selectedStatus = ref('all')
const searchQuery = ref('')
const sortOrder = ref('latest')

// 선택된 항목
const selectedItems = ref<number[]>([])

// 통계 데이터 (임시 데이터)
const stats = ref({
  total: 24,
  approved: 12,
  rejected: 5,
  pending: 7,
})

// 예약 리스트 데이터 (임시 데이터)
const reservations = ref([
  { id: 1, name: 'OOO', company: 'OO사 대표', count: 2, date: '1/6', docent: 'A(영문)', time: '14:00', status: 'pending', memo: 'VIP' },
  { id: 2, name: 'OOO', company: 'OO사 부사장', count: 1, date: '1/8', docent: 'B(국문)', time: '15:00', status: 'approved', memo: '' },
  { id: 3, name: 'OOO', company: 'OO사 대표', count: 3, date: '1/9', docent: 'A(영문)', time: '11:00', status: 'rejected', memo: '' },
  { id: 4, name: 'OOO', company: 'OO사 대표', count: 5, date: '1/7', docent: 'A(영문)', time: '16:00', status: 'approved', memo: '' },
  { id: 5, name: 'OOO', company: 'OO사 대표', count: 8, date: '1/6', docent: 'B(국문)', time: '15:00', status: 'rejected', memo: '' },
  { id: 6, name: 'OOO', company: 'OO사 대표', count: 12, date: '1/9', docent: 'A(영문)', time: '11:00', status: 'rejected', memo: '' },
  { id: 7, name: 'OOO', company: 'OO사 대표', count: 15, date: '1/6', docent: 'B(국문)', time: '14:00', status: 'pending', memo: '' },
  { id: 8, name: 'OOO', company: 'OO사 대표', count: 7, date: '1/6', docent: 'A(영문)', time: '14:00', status: 'pending', memo: '' },
  { id: 9, name: 'OOO', company: 'OO사 대표', count: 5, date: '1/7', docent: 'A(영문)', time: '15:00', status: 'approved', memo: '' },
  { id: 10, name: 'OOO', company: 'OO사 대표', count: 10, date: '1/8', docent: 'B(국문)', time: '11:00', status: 'pending', memo: '' },
  { id: 11, name: 'OOO', company: 'OO사 대표', count: 4, date: '1/8', docent: 'A(영문)', time: '15:00', status: 'pending', memo: '' },
])

const getStatusText = (status: string) => {
  const statusMap = {
    approved: '승인 완료',
    rejected: '승인 거절',
    pending: '승인 대기',
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

const isAllSelected = computed(() => {
  return reservations.value.length > 0 && selectedItems.value.length === reservations.value.length
})

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedItems.value = []
  } else {
    selectedItems.value = reservations.value.map(r => r.id)
  }
}

const toggleItem = (id: number) => {
  const index = selectedItems.value.indexOf(id)
  if (index > -1) {
    selectedItems.value.splice(index, 1)
  } else {
    selectedItems.value.push(id)
  }
}

const approveAll = () => {
  console.log('Approve all selected:', selectedItems.value)
  // TODO: 전체 승인 처리
}

const rejectAll = () => {
  console.log('Reject all selected:', selectedItems.value)
  // TODO: 전체 거절 처리
}

const approve = (id: number) => {
  console.log('Approve:', id)
  // TODO: 승인 처리
}

const cancel = (id: number) => {
  console.log('Cancel:', id)
  // TODO: 취소 처리
}

const handleRowClick = (reservation: any) => {
  // TODO: 예약 상세 팝업 열기
  console.log('Clicked reservation:', reservation)
}

const goToDashboard = () => {
  router.push('/reservations/dashboard')
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
        <Button variant="outline" class="px-6" @click="goToDashboard">대시보드</Button>
        <Button variant="default" class="px-6">예약관리</Button>
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

      <!-- 액션 버튼 및 정렬 -->
      <div class="flex justify-between items-center">
        <div class="flex space-x-2">
          <Button
            @click="approveAll"
            :disabled="selectedItems.length === 0"
            variant="default"
          >
            전체 승인
          </Button>
          <Button
            @click="rejectAll"
            :disabled="selectedItems.length === 0"
            variant="destructive"
          >
            전체 거절
          </Button>
        </div>
        <div class="text-sm text-muted-foreground">
          최신순
        </div>
      </div>

      <!-- 테이블 -->
      <div class="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[50px]">
                <Checkbox
                  :checked="isAllSelected"
                  @update:checked="toggleAll"
                />
              </TableHead>
              <TableHead>
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>이름</span>
                  <ArrowUpDown class="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>소속/직함</span>
                  <ArrowUpDown class="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>인원</span>
                  <ArrowUpDown class="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>날짜</span>
                  <ArrowUpDown class="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>도슨트</span>
                  <ArrowUpDown class="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>시간</span>
                  <ArrowUpDown class="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>상태</span>
                  <ArrowUpDown class="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>비고/메모</TableHead>
              <TableHead class="text-right">승인/취소</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="reservation in reservations"
              :key="reservation.id"
              class="cursor-pointer hover:bg-muted/50"
            >
              <TableCell @click.stop>
                <Checkbox
                  :checked="selectedItems.includes(reservation.id)"
                  @update:checked="toggleItem(reservation.id)"
                />
              </TableCell>
              <TableCell @click="handleRowClick(reservation)">{{ reservation.name }}</TableCell>
              <TableCell @click="handleRowClick(reservation)">{{ reservation.company }}</TableCell>
              <TableCell @click="handleRowClick(reservation)">{{ reservation.count }}명</TableCell>
              <TableCell @click="handleRowClick(reservation)">{{ reservation.date }}</TableCell>
              <TableCell @click="handleRowClick(reservation)">{{ reservation.docent }}</TableCell>
              <TableCell @click="handleRowClick(reservation)">{{ reservation.time }}</TableCell>
              <TableCell @click="handleRowClick(reservation)">
                <Badge :variant="getStatusVariant(reservation.status)">
                  {{ getStatusText(reservation.status) }}
                </Badge>
              </TableCell>
              <TableCell @click="handleRowClick(reservation)">{{ reservation.memo }}</TableCell>
              <TableCell class="text-right" @click.stop>
                <div class="flex justify-end space-x-2">
                  <Button
                    v-if="reservation.status === 'pending'"
                    size="sm"
                    variant="default"
                    @click="approve(reservation.id)"
                  >
                    승인
                  </Button>
                  <Button
                    v-if="reservation.status === 'pending'"
                    size="sm"
                    variant="outline"
                    @click="cancel(reservation.id)"
                  >
                    취소
                  </Button>
                  <Button
                    v-if="reservation.status === 'approved' || reservation.status === 'rejected'"
                    size="sm"
                    variant="outline"
                    @click="cancel(reservation.id)"
                  >
                    취소
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </DashboardLayout>
</template>
