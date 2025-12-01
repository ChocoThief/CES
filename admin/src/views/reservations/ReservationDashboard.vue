<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import ReservationDetailModal from "@/components/ReservationDetailModal.vue";
import apiClient from "@/lib/axios";

const router = useRouter();

// 로딩 상태
const isLoading = ref(false);

// 모달 상태
const isModalOpen = ref(false);
const selectedReservation = ref(null);

// 필터 상태
const selectedDate = ref("all");
const selectedDocent = ref("all");
const selectedStatus = ref("all");
const searchQuery = ref("");

// 통계 데이터
const stats = ref({
    total: 0,
    approved: 0,
    rejected: 0,
    pending: 0,
});

// 예약 데이터 (타임테이블 형식)
const reservations = ref({
    "1/6": {
        docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
        docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
    },
    "1/7": {
        docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
        docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
    },
    "1/8": {
        docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
        docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
    },
    "1/9": {
        docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
        docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
    },
});

// 날짜 매핑
const dateMapping: Record<string, string> = {
    "2025-01-06": "1/6",
    "2025-01-07": "1/7",
    "2025-01-08": "1/8",
    "2025-01-09": "1/9",
};

// API에서 예약 목록 조회하고 타임테이블 형식으로 변환 (cancelled 제외)
const fetchReservations = async () => {
    isLoading.value = true;
    try {
        const response = await apiClient.get(
            "/admin/docent-reservations/dashboard",
        );
        const data = response.data;

        // 타임테이블 초기화
        const newReservations = {
            "1/6": {
                docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
                docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
            },
            "1/7": {
                docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
                docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
            },
            "1/8": {
                docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
                docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
            },
            "1/9": {
                docentA: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
                docentB: { "11:00": [], "14:00": [], "15:00": [], "16:00": [] },
            },
        };

        // 데이터를 타임테이블 형식으로 변환
        data.reservations.forEach((r: any) => {
            const dateKey = dateMapping[r.reservationDate];
            const docentKey = r.docentType === "A" ? "docentA" : "docentB";
            const timeKey = r.timeSlot;

            if (
                dateKey &&
                newReservations[dateKey] &&
                newReservations[dateKey][docentKey] &&
                newReservations[dateKey][docentKey][timeKey]
            ) {
                newReservations[dateKey][docentKey][timeKey].push({
                    id: r.id,
                    name: r.representative,
                    count: r.visitorCount,
                    status: r.status,
                    contact: r.contact,
                    phone: r.phone,
                    email: r.email,
                    notes: r.notes,
                    adminMemo: r.adminMemo,
                });
            }
        });

        reservations.value = newReservations;

        // 통계 업데이트
        if (data.statistics) {
            stats.value = data.statistics;
        }
    } catch (error) {
        console.error("Failed to fetch reservations:", error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchReservations();
});

const getStatusText = (status: string) => {
    const statusMap = {
        approved: "승인",
        rejected: "거절",
        pending: "대기",
    };
    return statusMap[status] || status;
};

const getStatusVariant = (status: string) => {
    const variantMap = {
        approved: "default",
        rejected: "destructive",
        pending: "secondary",
    };
    return variantMap[status] || "default";
};

const handleReservationClick = (
    reservation: any,
    date: string,
    docent: string,
    time: string,
) => {
    // 모달용 데이터 구조로 변환
    selectedReservation.value = {
        id: reservation.id,
        name: reservation.name,
        company: reservation.name,
        count: reservation.count,
        date: date,
        docent: docent === "docentA" ? "A(영문)" : "B(국문)",
        time: time,
        status: reservation.status,
        memo: reservation.adminMemo || "",
        contact: reservation.contact,
        phone: reservation.phone,
        email: reservation.email,
        participants: reservation.notes || "",
    };
    isModalOpen.value = true;
};

const handleApprove = async (id: number) => {
    try {
        await apiClient.patch(`/admin/docent-reservations/${id}/approve`);
        isModalOpen.value = false;
        await fetchReservations();
    } catch (error) {
        console.error("Failed to approve:", error);
        alert("승인 처리 중 오류가 발생했습니다.");
    }
};

const handleReject = async (id: number) => {
    try {
        await apiClient.patch(`/admin/docent-reservations/${id}/reject`);
        isModalOpen.value = false;
        await fetchReservations();
    } catch (error) {
        console.error("Failed to reject:", error);
        alert("거절 처리 중 오류가 발생했습니다.");
    }
};

const handleCancel = async (id: number) => {
    if (!confirm("예약을 삭제하시겠습니까?")) return;
    try {
        await apiClient.delete(`/admin/docent-reservations/${id}`);
        isModalOpen.value = false;
        await fetchReservations();
    } catch (error) {
        console.error("Failed to cancel:", error);
        alert("삭제 처리 중 오류가 발생했습니다.");
    }
};

const goToList = () => {
    router.push("/reservations/list");
};
</script>

<template>
    <DashboardLayout>
        <div class="flex-1 space-y-4 p-8 pt-6">
            <!-- 헤더 -->
            <div class="flex items-center justify-between">
                <h2 class="text-3xl font-bold tracking-tight">
                    CES KOTRA 관리자 시스템
                </h2>
            </div>

            <!-- 탭 -->
            <div class="flex space-x-2 border-b pb-2">
                <Button variant="default" class="px-6">대시보드</Button>
                <Button variant="outline" class="px-6" @click="goToList"
                    >예약관리</Button
                >
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
                            <SelectItem value="docentA"
                                >도슨트A(영문)</SelectItem
                            >
                            <SelectItem value="docentB"
                                >도슨트B(국문)</SelectItem
                            >
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
                            <div
                                class="bg-primary text-primary-foreground font-semibold text-center py-3"
                            >
                                {{
                                    date === "1/6"
                                        ? "1월 6일(화)"
                                        : date === "1/7"
                                          ? "1월 7일(수)"
                                          : date === "1/8"
                                            ? "1월 8일(목)"
                                            : "1월 9일(금)"
                                }}
                            </div>

                            <!-- 테이블 -->
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead class="border-r"
                                            >분류</TableHead
                                        >
                                        <TableHead
                                            v-if="date !== '1/6'"
                                            class="border-r text-center"
                                            >11:00</TableHead
                                        >
                                        <TableHead class="border-r text-center"
                                            >14:00</TableHead
                                        >
                                        <TableHead class="border-r text-center"
                                            >15:00</TableHead
                                        >
                                        <TableHead class="text-center"
                                            >16:00</TableHead
                                        >
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <!-- 도슨트 A -->
                                    <TableRow>
                                        <TableCell class="border-r font-medium"
                                            >도슨트A(영문)</TableCell
                                        >
                                        <TableCell
                                            v-if="date !== '1/6'"
                                            class="border-r text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentA[
                                                        '11:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentA['11:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentA',
                                                            '11:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            class="border-r text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentA[
                                                        '14:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentA['14:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentA',
                                                            '14:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            class="border-r text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentA[
                                                        '15:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentA['15:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentA',
                                                            '15:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            class="text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentA[
                                                        '16:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentA['16:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentA',
                                                            '16:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>

                                    <!-- 도슨트 B -->
                                    <TableRow>
                                        <TableCell class="border-r font-medium"
                                            >도슨트B(국문)</TableCell
                                        >
                                        <TableCell
                                            v-if="date !== '1/6'"
                                            class="border-r text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentB[
                                                        '11:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentB['11:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentB',
                                                            '11:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            class="border-r text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentB[
                                                        '14:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentB['14:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentB',
                                                            '14:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            class="border-r text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentB[
                                                        '15:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentB['15:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentB',
                                                            '15:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            class="text-center bg-muted/30"
                                        >
                                            <div
                                                v-if="
                                                    reservations[date].docentB[
                                                        '16:00'
                                                    ].length === 0
                                                "
                                                class="text-muted-foreground"
                                            >
                                                예약 없음
                                            </div>
                                            <div v-else class="space-y-1">
                                                <div
                                                    v-for="(
                                                        res, idx
                                                    ) in reservations[date]
                                                        .docentB['16:00']"
                                                    :key="idx"
                                                    class="cursor-pointer hover:bg-muted/50 p-1 rounded"
                                                    @click="
                                                        handleReservationClick(
                                                            res,
                                                            date,
                                                            'docentB',
                                                            '16:00',
                                                        )
                                                    "
                                                >
                                                    <div class="text-sm">
                                                        - {{ res.name }} ({{
                                                            res.count
                                                        }}명)
                                                        <Badge
                                                            :variant="
                                                                getStatusVariant(
                                                                    res.status,
                                                                )
                                                            "
                                                            >{{
                                                                getStatusText(
                                                                    res.status,
                                                                )
                                                            }}</Badge
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
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
