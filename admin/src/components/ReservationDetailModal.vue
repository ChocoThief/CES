<script setup lang="ts">
import { computed } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface Reservation {
  id: number
  name: string
  company: string
  count: number
  date: string
  docent: string
  time: string
  status: string
  memo?: string
  representative?: string
  contact?: string
  participants?: string
  notes?: string
  interests?: string
  phone?: string
  email?: string
}

interface Props {
  open: boolean
  reservation: Reservation | null
}

interface Emits {
  (e: 'update:open', value: boolean): void
  (e: 'approve', id: number): void
  (e: 'reject', id: number): void
  (e: 'cancel', id: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

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

const handleClose = () => {
  emit('update:open', false)
}

const handleApprove = () => {
  if (props.reservation) {
    emit('approve', props.reservation.id)
    handleClose()
  }
}

const handleReject = () => {
  if (props.reservation) {
    emit('reject', props.reservation.id)
    handleClose()
  }
}

const handleCancel = () => {
  if (props.reservation) {
    emit('cancel', props.reservation.id)
    handleClose()
  }
}
</script>

<template>
  <Dialog :open="open" @update:open="handleClose">
    <DialogContent class="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>예약 상세 정보</DialogTitle>
        <DialogDescription>
          예약 정보를 확인하고 승인 또는 거절할 수 있습니다.
        </DialogDescription>
      </DialogHeader>

      <div v-if="reservation" class="space-y-4">
        <!-- 예약 정보 -->
        <div class="space-y-3">
          <h3 class="font-semibold">예약 정보</h3>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="text-muted-foreground">날짜</span>
              <p class="font-medium">2026.01.{{ reservation.date.split('/')[1].padStart(2, '0') }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">도슨트 투어</span>
              <p class="font-medium">도슨트{{ reservation.docent }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">타임</span>
              <p class="font-medium">{{ reservation.time }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">상태</span>
              <p>
                <Badge :variant="getStatusVariant(reservation.status)">
                  {{ getStatusText(reservation.status) }}
                </Badge>
              </p>
            </div>
          </div>
        </div>

        <Separator />

        <!-- 방문자 정보 -->
        <div class="space-y-3">
          <h3 class="font-semibold">방문자 정보</h3>
          <div class="space-y-2 text-sm">
            <div>
              <span class="text-muted-foreground">방문자 대표명/직함</span>
              <p class="font-medium">{{ reservation.company }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">현장 컨택 실무자명/직함</span>
              <p class="font-medium">{{ reservation.contact || '-' }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">현장 컨택 실무자 휴대번호</span>
              <p class="font-medium">{{ reservation.phone || '-' }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">현장 컨택 실무자 이메일</span>
              <p class="font-medium">{{ reservation.email || '-' }}</p>
            </div>
            <div v-if="reservation.interests">
              <span class="text-muted-foreground">관심 분야</span>
              <p class="font-medium">{{ reservation.interests }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">방문인원</span>
              <p class="font-medium">{{ reservation.count }}명</p>
            </div>
            <div>
              <span class="text-muted-foreground">상세정보</span>
              <p class="font-medium">{{ reservation.participants || '-' }}</p>
            </div>
          </div>
        </div>

        <Separator />

        <!-- 비고/메모 -->
        <div class="space-y-2">
          <h3 class="font-semibold">비고/메모</h3>
          <p class="text-sm text-muted-foreground">
            {{ reservation.memo || reservation.notes || '없음' }}
          </p>
        </div>
      </div>

      <DialogFooter>
        <div class="flex w-full justify-between">
          <Button variant="outline" @click="handleClose">
            닫기
          </Button>
          <div class="flex space-x-2">
            <Button
              v-if="reservation?.status === 'pending'"
              variant="destructive"
              @click="handleReject"
            >
              거절
            </Button>
            <Button
              v-if="reservation?.status === 'pending'"
              variant="default"
              @click="handleApprove"
            >
              승인
            </Button>
            <Button
              v-if="reservation?.status === 'approved' || reservation?.status === 'rejected'"
              variant="outline"
              @click="handleCancel"
            >
              취소
            </Button>
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
