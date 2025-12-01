<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Pagination from "@/components/Pagination.vue";
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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, ArrowUp, ArrowDown, Download, Search, Save } from "lucide-vue-next";
import apiClient from "@/lib/axios";
import * as XLSX from "xlsx";

const router = useRouter();

// 로딩 상태
const isLoading = ref(false);

// 필터 상태
const selectedDate = ref("all");
const selectedDocent = ref("all");
const selectedStatus = ref("all");
const searchQuery = ref("");
const sortOrder = ref("latest");
const sortColumn = ref("");
const sortDirection = ref<"asc" | "desc">("desc");

// 페이지네이션
const currentPage = ref(1);
const totalPages = ref(1);
const totalCount = ref(0);
const pageSize = ref(20);

// 선택된 항목
const selectedItems = ref<number[]>([]);

// 통계 데이터
const stats = ref({
    total: 0,
    approved: 0,
    rejected: 0,
    pending: 0,
});

// 예약 리스트 데이터
const reservations = ref([]);

// 날짜 매핑
const dateMapping: Record<string, string> = {
    "2025-01-06": "1/6",
    "2025-01-07": "1/7",
    "2025-01-08": "1/8",
    "2025-01-09": "1/9",
};

const dateFilterMapping: Record<string, string> = {
    "1/6": "2025-01-06",
    "1/7": "2025-01-07",
    "1/8": "2025-01-08",
    "1/9": "2025-01-09",
};

// API에서 예약 목록 조회
const fetchReservations = async (page = 1) => {
    isLoading.value = true;
    try {
        const params: Record<string, string | number> = {
            page,
            limit: pageSize.value,
        };

        if (selectedDate.value !== "all") {
            params.date = dateFilterMapping[selectedDate.value];
        }
        if (selectedDocent.value !== "all") {
            params.docent = selectedDocent.value === "docentA" ? "A" : "B";
        }
        if (selectedStatus.value !== "all") {
            params.status = selectedStatus.value;
        }
        if (searchQuery.value) {
            params.search = searchQuery.value;
        }

        // 정렬 파라미터
        if (sortColumn.value) {
            params.sortBy = sortColumn.value;
            params.sortOrder = sortDirection.value;
        } else if (sortOrder.value === "oldest") {
            params.sortBy = "createdAt";
            params.sortOrder = "asc";
        }

        const response = await apiClient.get("/admin/docent-reservations", {
            params,
        });
        const data = response.data;

        // 데이터 변환
        reservations.value = data.reservations.map((r: any) => ({
            id: r.id,
            name: r.representative?.split(" ")[0] || r.representative,
            company: r.representative,
            count: r.visitorCount,
            date: dateMapping[r.reservationDate] || r.reservationDate,
            docent: r.docentType === "A" ? "A(영문)" : "B(국문)",
            time: r.timeSlot,
            status: r.status,
            memo: r.adminMemo || "",
            contact: r.contact,
            phone: r.phone,
            email: r.email,
            notes: r.notes,
            interests: r.interests || "",
        }));

        // 페이지네이션 업데이트
        currentPage.value = data.page;
        totalPages.value = data.totalPages;
        totalCount.value = data.total;

        // 통계 업데이트
        stats.value = data.statistics;
    } catch (error) {
        console.error("Failed to fetch reservations:", error);
    } finally {
        isLoading.value = false;
    }
};

// 페이지 변경
const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        fetchReservations(page);
    }
};

// 필터 변경 시 첫 페이지로 재조회 (검색어 제외 - 버튼 클릭으로 처리)
watch(
    [selectedDate, selectedDocent, selectedStatus, sortOrder],
    () => {
        currentPage.value = 1;
        fetchReservations(1);
    },
);

// 검색 버튼 클릭
const handleSearch = () => {
    currentPage.value = 1;
    fetchReservations(1);
};

// 검색 초기화
const handleReset = () => {
    searchQuery.value = "";
    currentPage.value = 1;
    fetchReservations(1);
};

onMounted(() => {
    fetchReservations();
});

const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
        approved: "승인 완료",
        rejected: "승인 거절",
        pending: "승인 대기",
        cancelled: "신청 취소",
    };
    return statusMap[status] || status;
};

const getStatusVariant = (status: string) => {
    const variantMap: Record<string, string> = {
        approved: "default",
        rejected: "destructive",
        pending: "secondary",
        cancelled: "outline",
    };
    return variantMap[status] || "default";
};

const isAllSelected = computed(() => {
    const result = reservations.value.length > 0 &&
        selectedItems.value.length === reservations.value.length;
    console.log('[Checkbox Debug] isAllSelected computed:', {
        reservationsLength: reservations.value.length,
        selectedItemsLength: selectedItems.value.length,
        result
    });
    return result;
});

const toggleAll = () => {
    console.log('[Checkbox Debug] toggleAll called:', {
        isAllSelected: isAllSelected.value,
        currentSelectedItems: [...selectedItems.value],
        reservationIds: reservations.value.map((r) => r.id)
    });
    if (isAllSelected.value) {
        selectedItems.value = [];
        console.log('[Checkbox Debug] toggleAll: Cleared all selections');
    } else {
        selectedItems.value = reservations.value.map((r) => r.id);
        console.log('[Checkbox Debug] toggleAll: Selected all:', selectedItems.value);
    }
};

const toggleItem = (id: number) => {
    console.log('[Checkbox Debug] toggleItem called with id:', id);
    const index = selectedItems.value.indexOf(id);
    if (index > -1) {
        selectedItems.value.splice(index, 1);
        console.log('[Checkbox Debug] toggleItem: Removed id', id, 'new list:', [...selectedItems.value]);
    } else {
        selectedItems.value.push(id);
        console.log('[Checkbox Debug] toggleItem: Added id', id, 'new list:', [...selectedItems.value]);
    }
};

const approveAll = async () => {
    if (selectedItems.value.length === 0) return;
    try {
        await Promise.all(
            selectedItems.value.map((id) =>
                apiClient.patch(`/admin/docent-reservations/${id}/approve`),
            ),
        );
        selectedItems.value = [];
        await fetchReservations();
    } catch (error) {
        console.error("Failed to approve all:", error);
        alert("승인 처리 중 오류가 발생했습니다.");
    }
};

const rejectAll = async () => {
    if (selectedItems.value.length === 0) return;
    try {
        await Promise.all(
            selectedItems.value.map((id) =>
                apiClient.patch(`/admin/docent-reservations/${id}/reject`),
            ),
        );
        selectedItems.value = [];
        await fetchReservations();
    } catch (error) {
        console.error("Failed to reject all:", error);
        alert("거절 처리 중 오류가 발생했습니다.");
    }
};

const cancelAll = async () => {
    if (selectedItems.value.length === 0) return;
    if (!confirm("선택한 예약을 모두 취소하시겠습니까?")) return;
    try {
        await Promise.all(
            selectedItems.value.map((id) =>
                apiClient.patch(`/admin/docent-reservations/${id}/cancel`),
            ),
        );
        selectedItems.value = [];
        await fetchReservations();
    } catch (error) {
        console.error("Failed to cancel all:", error);
        alert("취소 처리 중 오류가 발생했습니다.");
    }
};

const approve = async (id: number) => {
    if (!confirm("예약을 승인하시겠습니까?")) return;
    try {
        await apiClient.patch(`/admin/docent-reservations/${id}/approve`);
        await fetchReservations();
    } catch (error) {
        console.error("Failed to approve:", error);
        alert("승인 처리 중 오류가 발생했습니다.");
    }
};

const reject = async (id: number) => {
    if (!confirm("예약을 거절하시겠습니까?")) return;
    try {
        await apiClient.patch(`/admin/docent-reservations/${id}/reject`);
        await fetchReservations();
    } catch (error) {
        console.error("Failed to reject:", error);
        alert("거절 처리 중 오류가 발생했습니다.");
    }
};

const cancel = async (id: number) => {
    if (!confirm("예약을 취소하시겠습니까?")) return;
    try {
        await apiClient.patch(`/admin/docent-reservations/${id}/cancel`);
        await fetchReservations();
    } catch (error) {
        console.error("Failed to cancel:", error);
        alert("취소 처리 중 오류가 발생했습니다.");
    }
};

const handleRowClick = (reservation: any) => {
    console.log("Clicked reservation:", reservation);
};

// 메모 저장
const saveMemo = async (id: number, memo: string) => {
    try {
        await apiClient.patch(`/admin/docent-reservations/${id}/memo`, {
            adminMemo: memo,
        });
        alert("메모가 저장되었습니다.");
    } catch (error) {
        console.error("Failed to save memo:", error);
        alert("메모 저장 중 오류가 발생했습니다.");
    }
};

const goToDashboard = () => {
    router.push("/reservations/dashboard");
};

// 엑셀 다운로드
const exportToExcel = async () => {
    try {
        const response = await apiClient.get(
            "/admin/docent-reservations/export",
        );
        const data = response.data.reservations;

        const worksheet = XLSX.utils.json_to_sheet(
            data.map((r: any) => ({
                No: r.no,
                예약일: r.reservationDate,
                도슨트: r.docentType,
                시간: r.timeSlot,
                대표자: r.representative,
                담당자: r.contact,
                연락처: r.phone,
                이메일: r.email,
                인원: r.visitorCount,
                관심분야: r.interests,
                상세정보: r.notes,
                상태: r.status,
                관리자메모: r.adminMemo,
                신청일시: r.createdAt
                    ? new Date(r.createdAt).toLocaleString("ko-KR")
                    : "",
            })),
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "도슨트예약");
        XLSX.writeFile(
            workbook,
            `도슨트예약_${new Date().toISOString().split("T")[0]}.xlsx`,
        );
    } catch (error) {
        console.error("Failed to export:", error);
        alert("엑셀 다운로드 중 오류가 발생했습니다.");
    }
};

// 열별 정렬 (API 요청)
const sortBy = (column: string) => {
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortColumn.value = column;
        sortDirection.value = "asc";
    }
    // 정렬 변경 시 첫 페이지로 재조회
    currentPage.value = 1;
    fetchReservations(1);
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
                <Button variant="outline" class="px-6" @click="goToDashboard"
                    >대시보드</Button
                >
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
                            <SelectValue placeholder="전체 상태" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">전체 상태</SelectItem>
                            <SelectItem value="approved">승인 완료</SelectItem>
                            <SelectItem value="rejected">승인 거절</SelectItem>
                            <SelectItem value="pending">승인 대기</SelectItem>
                            <SelectItem value="cancelled">신청 취소</SelectItem>
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
                <div class="flex gap-2">
                    <div class="relative">
                        <Search
                            class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            :size="16"
                        />
                        <Input
                            v-model="searchQuery"
                            type="text"
                            placeholder="이름, 소속, 이메일 검색..."
                            class="pl-9 w-[200px]"
                            @keyup.enter="handleSearch"
                        />
                    </div>
                    <Button @click="handleSearch" :disabled="isLoading">
                        검색
                    </Button>
                    <Button variant="outline" @click="handleReset" :disabled="isLoading">
                        초기화
                    </Button>
                </div>
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
                    <Button
                        @click="cancelAll"
                        :disabled="selectedItems.length === 0"
                        variant="outline"
                    >
                        전체 취소
                    </Button>
                    <Button @click="exportToExcel" variant="outline">
                        <Download class="h-4 w-4 mr-2" />
                        엑셀 다운로드
                    </Button>
                </div>
                <Select v-model="sortOrder">
                    <SelectTrigger class="w-[120px]">
                        <SelectValue placeholder="최신순" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="latest">최신순</SelectItem>
                        <SelectItem value="oldest">오래된순</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <!-- 테이블 -->
            <div class="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead class="w-[50px]">
                            </TableHead>
                            <TableHead>
                                <div
                                    class="flex items-center space-x-1 cursor-pointer"
                                    @click="sortBy('name')"
                                >
                                    <span>이름</span>
                                    <ArrowUp
                                        v-if="sortColumn === 'name' && sortDirection === 'asc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowDown
                                        v-else-if="sortColumn === 'name' && sortDirection === 'desc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowUpDown
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div
                                    class="flex items-center space-x-1 cursor-pointer"
                                    @click="sortBy('company')"
                                >
                                    <span>소속/직함</span>
                                    <ArrowUp
                                        v-if="sortColumn === 'company' && sortDirection === 'asc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowDown
                                        v-else-if="sortColumn === 'company' && sortDirection === 'desc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowUpDown
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div
                                    class="flex items-center space-x-1 cursor-pointer"
                                    @click="sortBy('count')"
                                >
                                    <span>인원</span>
                                    <ArrowUp
                                        v-if="sortColumn === 'count' && sortDirection === 'asc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowDown
                                        v-else-if="sortColumn === 'count' && sortDirection === 'desc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowUpDown
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div
                                    class="flex items-center space-x-1 cursor-pointer"
                                    @click="sortBy('date')"
                                >
                                    <span>날짜</span>
                                    <ArrowUp
                                        v-if="sortColumn === 'date' && sortDirection === 'asc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowDown
                                        v-else-if="sortColumn === 'date' && sortDirection === 'desc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowUpDown
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div
                                    class="flex items-center space-x-1 cursor-pointer"
                                    @click="sortBy('docent')"
                                >
                                    <span>도슨트</span>
                                    <ArrowUp
                                        v-if="sortColumn === 'docent' && sortDirection === 'asc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowDown
                                        v-else-if="sortColumn === 'docent' && sortDirection === 'desc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowUpDown
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div
                                    class="flex items-center space-x-1 cursor-pointer"
                                    @click="sortBy('time')"
                                >
                                    <span>시간</span>
                                    <ArrowUp
                                        v-if="sortColumn === 'time' && sortDirection === 'asc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowDown
                                        v-else-if="sortColumn === 'time' && sortDirection === 'desc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowUpDown
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div
                                    class="flex items-center space-x-1 cursor-pointer"
                                    @click="sortBy('status')"
                                >
                                    <span>상태</span>
                                    <ArrowUp
                                        v-if="sortColumn === 'status' && sortDirection === 'asc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowDown
                                        v-else-if="sortColumn === 'status' && sortDirection === 'desc'"
                                        class="h-4 w-4 text-primary"
                                    />
                                    <ArrowUpDown
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </TableHead>
                            <TableHead>관심분야</TableHead>
                            <TableHead>비고/메모</TableHead>
                            <TableHead class="text-right">승인/취소</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="reservation in reservations"
                            :key="reservation.id"
                            :class="[
                                'cursor-pointer hover:bg-muted/50',
                                reservation.status === 'cancelled' &&
                                    'bg-gray-100 text-gray-400',
                            ]"
                        >
                            <TableCell @click.stop>
                                <Checkbox
                                    :model-value="selectedItems.includes(reservation.id)"
                                    @update:model-value="() => toggleItem(reservation.id)"
                                />
                            </TableCell>
                            <TableCell @click="handleRowClick(reservation)">{{
                                reservation.name
                            }}</TableCell>
                            <TableCell @click="handleRowClick(reservation)">{{
                                reservation.company
                            }}</TableCell>
                            <TableCell @click="handleRowClick(reservation)"
                                >{{ reservation.count }}명</TableCell
                            >
                            <TableCell @click="handleRowClick(reservation)">{{
                                reservation.date
                            }}</TableCell>
                            <TableCell @click="handleRowClick(reservation)">{{
                                reservation.docent
                            }}</TableCell>
                            <TableCell @click="handleRowClick(reservation)">{{
                                reservation.time
                            }}</TableCell>
                            <TableCell @click="handleRowClick(reservation)">
                                <Badge
                                    :variant="
                                        getStatusVariant(reservation.status)
                                    "
                                >
                                    {{ getStatusText(reservation.status) }}
                                </Badge>
                            </TableCell>
                            <TableCell @click="handleRowClick(reservation)">{{
                                reservation.interests
                            }}</TableCell>
                            <TableCell @click.stop>
                                <div class="flex items-center gap-1">
                                    <Input
                                        v-model="reservation.memo"
                                        type="text"
                                        class="h-8 text-xs w-[120px] text-foreground bg-white"
                                        placeholder="메모 입력"
                                    />
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        class="h-8 w-8 p-0 text-foreground"
                                        @click="saveMemo(reservation.id, reservation.memo)"
                                    >
                                        <Save class="h-4 w-4 text-foreground" />
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell class="text-right" @click.stop>
                                <div
                                    v-if="reservation.status !== 'cancelled'"
                                    class="flex justify-end space-x-2"
                                >
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
                                        @click="reject(reservation.id)"
                                    >
                                        취소
                                    </Button>
                                    <Button
                                        v-if="
                                            reservation.status === 'approved' ||
                                            reservation.status === 'rejected'
                                        "
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

            <!-- 페이지네이션 -->
            <Pagination
                :page="currentPage"
                :total-pages="totalPages"
                :total="totalCount"
                @change="goToPage"
            />
        </div>
    </DashboardLayout>
</template>
