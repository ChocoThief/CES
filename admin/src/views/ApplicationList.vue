<template>
    <DashboardLayout>
        <header class="flex h-16 shrink-0 items-center gap-2 border-b px-6">
            <SidebarTrigger class="-ml-1" />
            <h1 class="text-xl font-semibold">신청 목록</h1>
        </header>

        <div class="flex flex-1 flex-col gap-4 p-4">
            <div class="relative max-w-sm">
                <Search
                    class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    :size="20"
                />
                <Input
                    v-model="searchQuery"
                    type="text"
                    placeholder="회사명 또는 부스번호로 검색..."
                    class="pl-10"
                    @input="debounceSearch"
                />
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
                            <TableHead>부스타입</TableHead>
                            <TableHead>부스번호</TableHead>
                            <TableHead>회사명(한)</TableHead>
                            <TableHead>회사명(영)</TableHead>
                            <TableHead>피칭</TableHead>
                            <TableHead>도슨트</TableHead>
                            <TableHead>통역</TableHead>
                            <TableHead>MOU</TableHead>
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
                            <TableCell>
                                <Badge
                                    :variant="
                                        app.boothType === 'eureka'
                                            ? 'default'
                                            : 'secondary'
                                    "
                                >
                                    {{
                                        app.boothType === "eureka"
                                            ? "Eureka"
                                            : "Global"
                                    }}
                                </Badge>
                            </TableCell>
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
                                    {{ app.pitching === "yes" ? "참여" : "-" }}
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
                                    {{ app.docent === "yes" ? "참여" : "-" }}
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
                                        app.interpreter === "yes" ? "참여" : "-"
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
                                    {{ app.mou === "yes" ? "참여" : "-" }}
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

import { Search, ChevronLeft, ChevronRight } from "lucide-vue-next";

const router = useRouter();
const store = useApplicationsStore();

const searchQuery = ref("");
let searchTimeout = null;

onMounted(async () => {
    try {
        await store.fetchApplications();
    } catch (error) {
        toast.error("신청 목록을 불러오는데 실패했습니다.");
    }
});

const debounceSearch = () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        try {
            await store.fetchApplications(1, searchQuery.value);
        } catch (error) {
            toast.error("검색 중 오류가 발생했습니다.");
        }
    }, 500);
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

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
        date.toLocaleDateString("ko-KR") +
        " " +
        date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })
    );
};
</script>
