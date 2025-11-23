<template>
    <DashboardLayout>
        <div
            v-if="store.loading"
            class="flex items-center justify-center flex-1 text-muted-foreground"
        >
            로딩 중...
        </div>

        <div
            v-else-if="!app"
            class="flex items-center justify-center flex-1 text-muted-foreground"
        >
            신청 정보를 찾을 수 없습니다.
        </div>

        <div v-else class="flex-1 flex flex-col">
            <!-- Header -->
            <div class="border-b bg-background">
                <div class="flex items-center px-6 py-4 gap-4">
                    <SidebarTrigger class="-ml-1" />
                    <Button variant="ghost" size="icon" @click="$router.back()">
                        <ChevronLeft class="h-5 w-5" />
                    </Button>
                    <h1 class="text-2xl font-semibold">신청 상세 정보</h1>
                </div>
            </div>

            <!-- Main Content -->
            <div class="flex-1 p-6">
                <Tabs default-value="info" class="w-full">
                    <TabsList class="mb-6">
                        <TabsTrigger value="info">기본 정보</TabsTrigger>
                        <TabsTrigger value="files">파일</TabsTrigger>
                    </TabsList>

                    <!-- Tab 1: Basic Info -->
                    <TabsContent value="info" class="space-y-6">
                        <!-- Booth Info -->
                        <Card>
                            <CardHeader>
                                <CardTitle>부스 정보</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            주관기관
                                        </div>
                                        <div class="font-medium">
                                            {{ app.boothType }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            부스번호
                                        </div>
                                        <div class="font-medium">
                                            {{ app.boothNumber }}
                                        </div>
                                    </div>
                                    <div class="col-span-2 space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            기업명 표기 내역
                                        </div>
                                        <div class="font-medium">
                                            {{ app.companyDisplay }}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Company Info -->
                        <Card>
                            <CardHeader>
                                <CardTitle>회사 정보</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            회사명 국문
                                        </div>
                                        <div class="font-medium">
                                            {{ app.companyKr }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            회사명 영문
                                        </div>
                                        <div class="font-medium">
                                            {{ app.companyEn }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            대표자명 국문
                                        </div>
                                        <div class="font-medium">
                                            {{ app.ceoKr }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            대표자명 영문
                                        </div>
                                        <div class="font-medium">
                                            {{ app.ceoEn }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            홈페이지
                                        </div>
                                        <div class="font-medium">
                                            <a
                                                v-if="app.website"
                                                :href="app.website"
                                                target="_blank"
                                                class="text-primary hover:underline"
                                            >
                                                {{ app.website }}
                                            </a>
                                            <span
                                                v-else
                                                class="text-muted-foreground"
                                                >-</span
                                            >
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            대표연락처
                                        </div>
                                        <div class="font-medium">
                                            {{ app.phone }}
                                        </div>
                                    </div>
                                    <div class="col-span-2 space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            회사주소 국문
                                        </div>
                                        <div class="font-medium">
                                            {{ app.addressKr }}
                                        </div>
                                    </div>
                                    <div class="col-span-2 space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            회사주소 영문
                                        </div>
                                        <div class="font-medium">
                                            {{ app.addressEn }}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Contact Info -->
                        <Card>
                            <CardHeader>
                                <CardTitle>담당자 정보</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            담당자명
                                        </div>
                                        <div class="font-medium">
                                            {{ app.contactName }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            담당자 직위
                                        </div>
                                        <div class="font-medium">
                                            {{ app.contactPosition }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            부서
                                        </div>
                                        <div class="font-medium">
                                            {{ app.department }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            담당자 연락처 (핸드폰)
                                        </div>
                                        <div class="font-medium">
                                            {{ app.contactMobile }}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Programs -->
                        <Card>
                            <CardHeader>
                                <CardTitle>참여 프로그램</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="flex flex-wrap gap-3">
                                    <Badge
                                        :variant="
                                            app.pitching === 'yes'
                                                ? 'default'
                                                : 'secondary'
                                        "
                                        class="px-4 py-2"
                                    >
                                        피칭 이벤트:
                                        {{
                                            app.pitching === "yes"
                                                ? "참여"
                                                : "미참여"
                                        }}
                                    </Badge>
                                    <Badge
                                        :variant="
                                            app.docent === 'yes'
                                                ? 'default'
                                                : 'secondary'
                                        "
                                        class="px-4 py-2"
                                    >
                                        도슨트 투어:
                                        {{
                                            app.docent === "yes"
                                                ? "참여"
                                                : "미참여"
                                        }}
                                    </Badge>
                                    <Badge
                                        :variant="
                                            app.interpreter === 'yes'
                                                ? 'default'
                                                : 'secondary'
                                        "
                                        class="px-4 py-2"
                                    >
                                        현지 통역:
                                        {{
                                            app.interpreter === "yes"
                                                ? "필요"
                                                : "불필요"
                                        }}
                                    </Badge>
                                    <Badge
                                        :variant="
                                            app.mou === 'yes'
                                                ? 'default'
                                                : 'secondary'
                                        "
                                        class="px-4 py-2"
                                    >
                                        MOU 체결식:
                                        {{
                                            app.mou === "yes"
                                                ? "신청"
                                                : "미신청"
                                        }}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Application Info -->
                        <Card>
                            <CardHeader>
                                <CardTitle>신청 정보</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            신청일
                                        </div>
                                        <div class="font-medium">
                                            {{ formatDate(app.created_at) }}
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div
                                            class="text-sm text-muted-foreground"
                                        >
                                            수정일
                                        </div>
                                        <div class="font-medium">
                                            {{ formatDate(app.updated_at) }}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <!-- Tab 2: Files -->
                    <TabsContent value="files" class="space-y-6">
                        <!-- Company Logo -->
                        <Card>
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <File class="h-5 w-5" />
                                    회사 로고 (CI)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div
                                    v-if="app.companyLogoUrl"
                                    class="flex items-center justify-between"
                                >
                                    <span class="text-sm text-muted-foreground"
                                        >파일이 등록되었습니다</span
                                    >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        as-child
                                    >
                                        <a
                                            :href="app.companyLogoUrl"
                                            target="_blank"
                                            class="flex items-center gap-2"
                                        >
                                            <FileDown class="h-4 w-4" />
                                            다운로드
                                        </a>
                                    </Button>
                                </div>
                                <div
                                    v-else
                                    class="text-sm text-muted-foreground"
                                >
                                    파일 없음
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Promo Graphic -->
                        <Card>
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <File class="h-5 w-5" />
                                    홍보 그래픽
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div
                                    v-if="app.promoGraphicUrl"
                                    class="flex items-center justify-between"
                                >
                                    <span class="text-sm text-muted-foreground"
                                        >파일이 등록되었습니다</span
                                    >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        as-child
                                    >
                                        <a
                                            :href="app.promoGraphicUrl"
                                            target="_blank"
                                            class="flex items-center gap-2"
                                        >
                                            <FileDown class="h-4 w-4" />
                                            다운로드
                                        </a>
                                    </Button>
                                </div>
                                <div
                                    v-else
                                    class="text-sm text-muted-foreground"
                                >
                                    파일 없음
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Table Graphic -->
                        <Card>
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <File class="h-5 w-5" />
                                    테이블 그래픽
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div
                                    v-if="app.tableGraphicUrl"
                                    class="flex items-center justify-between"
                                >
                                    <span class="text-sm text-muted-foreground"
                                        >파일이 등록되었습니다</span
                                    >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        as-child
                                    >
                                        <a
                                            :href="app.tableGraphicUrl"
                                            target="_blank"
                                            class="flex items-center gap-2"
                                        >
                                            <FileDown class="h-4 w-4" />
                                            다운로드
                                        </a>
                                    </Button>
                                </div>
                                <div
                                    v-else
                                    class="text-sm text-muted-foreground"
                                >
                                    파일 없음
                                </div>
                            </CardContent>
                        </Card>

                        <!-- QR Code -->
                        <Card>
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <File class="h-5 w-5" />
                                    QR 코드 파일
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div
                                    v-if="
                                        app.qrCode === 'have' && app.qrFileUrl
                                    "
                                    class="flex items-center justify-between"
                                >
                                    <span class="text-sm text-muted-foreground"
                                        >파일이 등록되었습니다</span
                                    >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        as-child
                                    >
                                        <a
                                            :href="app.qrFileUrl"
                                            target="_blank"
                                            class="flex items-center gap-2"
                                        >
                                            <FileDown class="h-4 w-4" />
                                            다운로드
                                        </a>
                                    </Button>
                                </div>
                                <div
                                    v-else
                                    class="text-sm text-muted-foreground"
                                >
                                    파일 없음
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Promo Video -->
                        <Card>
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <Video class="h-5 w-5" />
                                    프로모 비디오
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div
                                    v-if="
                                        app.promoVideo === 'have' &&
                                        app.videoFileUrl
                                    "
                                    class="flex items-center justify-between"
                                >
                                    <span class="text-sm text-muted-foreground"
                                        >파일이 등록되었습니다</span
                                    >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        as-child
                                    >
                                        <a
                                            :href="app.videoFileUrl"
                                            target="_blank"
                                            class="flex items-center gap-2"
                                        >
                                            <FileDown class="h-4 w-4" />
                                            다운로드
                                        </a>
                                    </Button>
                                </div>
                                <div
                                    v-else
                                    class="text-sm text-muted-foreground"
                                >
                                    파일 없음
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useApplicationsStore } from "../stores/applications";
import { toast } from "vue-sonner";
import { ChevronLeft, FileDown, File, Video } from "lucide-vue-next";

import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const route = useRoute();
const store = useApplicationsStore();

const app = computed(() => store.currentApplication);

onMounted(async () => {
    try {
        await store.fetchApplicationById(route.params.id);
    } catch (error) {
        toast.error("신청 정보를 불러오는데 실패했습니다.");
    }
});

const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '-';
    return date.toLocaleString("ko-KR", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
};
</script>
