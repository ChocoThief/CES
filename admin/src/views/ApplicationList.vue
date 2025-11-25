<template>
    <DashboardLayout>
        <header class="flex h-16 shrink-0 items-center gap-2 border-b px-6">
            <SidebarTrigger class="-ml-1" />
            <h1 class="text-xl font-semibold">신청 목록</h1>
        </header>

        <div class="flex flex-1 flex-col gap-4 p-4">
            <div class="flex gap-2 items-center justify-between">
                <div class="flex gap-2 max-w-md flex-1">
                    <div class="relative flex-1">
                        <Search
                            class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            :size="20"
                        />
                        <Input
                            v-model="searchQuery"
                            type="text"
                            placeholder="회사명 또는 부스번호로 검색..."
                            class="pl-10"
                            @keyup.enter="handleSearch"
                        />
                    </div>
                    <Button @click="handleSearch" :disabled="store.loading">
                        검색
                    </Button>
                    <Button
                        variant="outline"
                        @click="handleReset"
                        :disabled="store.loading"
                    >
                        초기화
                    </Button>
                </div>
                <Button
                    variant="default"
                    @click="handleExport"
                    :disabled="exporting"
                    class="ml-4"
                >
                    <FileDown :size="16" class="mr-2" />
                    {{ exporting ? "내보내는 중..." : "Excel 내보내기" }}
                </Button>
            </div>

            <div
                v-if="store.loading"
                class="flex items-center justify-center py-12 text-muted-foreground"
            >
                로딩 중...
            </div>

            <div
                v-else-if="store.applications.length === 0"
                class="flex items-center justify-center py-12 text-muted-foreground"
            >
                신청 데이터가 없습니다.
            </div>

            <div v-else class="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>주관기관</TableHead>
                            <TableHead>부스번호</TableHead>
                            <TableHead>회사명 국문</TableHead>
                            <TableHead>회사명 영문</TableHead>
                            <TableHead>피칭 이벤트</TableHead>
                            <TableHead>도슨트 투어</TableHead>
                            <TableHead>통역</TableHead>
                            <TableHead>MOU 체결식</TableHead>
                            <TableHead>신청일</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="app in store.applications"
                            :key="app.id"
                            @click="goToDetail(app.id)"
                            class="cursor-pointer hover:bg-muted/50"
                        >
                            <TableCell class="font-medium">{{
                                app.id
                            }}</TableCell>
                            <TableCell>{{ app.boothType }}</TableCell>
                            <TableCell>{{ app.boothNumber }}</TableCell>
                            <TableCell>{{ app.companyKr }}</TableCell>
                            <TableCell>{{ app.companyEn }}</TableCell>
                            <TableCell>
                                <Badge
                                    :variant="
                                        app.pitching === 'yes'
                                            ? 'default'
                                            : 'secondary'
                                    "
                                >
                                    {{ app.pitching === "yes" ? "참여 희망" : "참여 안 함" }}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    :variant="
                                        app.docent === 'yes'
                                            ? 'default'
                                            : 'secondary'
                                    "
                                >
                                    {{ app.docent === "yes" ? "참여 희망" : "참여 안 함" }}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    :variant="
                                        app.interpreter === 'yes'
                                            ? 'default'
                                            : 'secondary'
                                    "
                                >
                                    {{
                                        app.interpreter === "yes" ? "통역 필요" : "통역 불필요"
                                    }}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    :variant="
                                        app.mou === 'yes'
                                            ? 'default'
                                            : 'secondary'
                                    "
                                >
                                    {{ app.mou === "yes" ? "MOU체결식 신청" : "미신청" }}
                                </Badge>
                            </TableCell>
                            <TableCell>{{
                                formatDate(app.createdAt)
                            }}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div
                v-if="store.totalPages > 1"
                class="flex items-center justify-center gap-2"
            >
                <Button
                    variant="outline"
                    size="sm"
                    @click="changePage(store.page - 1)"
                    :disabled="store.page === 1"
                >
                    <ChevronLeft :size="16" class="mr-1" />
                    이전
                </Button>
                <span class="text-sm text-muted-foreground px-4">
                    {{ store.page }} / {{ store.totalPages }} (총
                    {{ store.total }}개)
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    @click="changePage(store.page + 1)"
                    :disabled="store.page === store.totalPages"
                >
                    다음
                    <ChevronRight :size="16" class="ml-1" />
                </Button>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useApplicationsStore } from "../stores/applications";
import { toast } from "vue-sonner";

import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Search, ChevronLeft, ChevronRight, FileDown } from "lucide-vue-next";
import { useExcelExport } from "../composables/useExcelExport";

const router = useRouter();
const store = useApplicationsStore();
const { exportToExcel } = useExcelExport();

const searchQuery = ref("");
const exporting = ref(false);

onMounted(async () => {
    try {
        await store.fetchApplications();
    } catch (error) {
        toast.error("신청 목록을 불러오는데 실패했습니다.");
    }
});

const handleSearch = async () => {
    try {
        await store.fetchApplications(1, searchQuery.value);
    } catch (error) {
        toast.error("검색 중 오류가 발생했습니다.");
    }
};

const handleReset = async () => {
    searchQuery.value = "";
    try {
        await store.fetchApplications(1, "");
    } catch (error) {
        toast.error("목록을 불러오는데 실패했습니다.");
    }
};

const changePage = async (page) => {
    try {
        await store.fetchApplications(page, searchQuery.value);
    } catch (error) {
        toast.error("페이지를 불러오는데 실패했습니다.");
    }
};

const goToDetail = (id) => {
    router.push(`/applications/${id}`);
};

const handleExport = async () => {
    exporting.value = true;
    try {
        const result = await exportToExcel();
        toast.success(`${result.count}개의 신청 데이터를 Excel 파일로 내보냈습니다.`);
    } catch (error) {
        toast.error(error.message || "Excel 파일 생성에 실패했습니다.");
    } finally {
        exporting.value = false;
    }
};

const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '-';
    return (
        date.toLocaleDateString("ko-KR") +
        " " +
        date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })
    );
};
</script>
