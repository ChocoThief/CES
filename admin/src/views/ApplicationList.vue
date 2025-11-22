<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <div class="flex items-center gap-2 px-4 py-6">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard :size="20" />
          </div>
          <span class="text-lg font-semibold">CES 2026</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton :active="true">
              <LayoutDashboard :size="20" />
              <span>신청 목록</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton :disabled="true">
              <BarChart3 :size="20" />
              <span>통계</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton :disabled="true">
              <Settings :size="20" />
              <span>설정</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton @click="handleLogout">
              <LogOut :size="20" />
              <span>로그아웃</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>

    <main class="flex-1 overflow-auto">
      <div class="flex h-14 items-center gap-4 border-b px-6">
        <SidebarTrigger />
      </div>

      <div class="p-6 space-y-4">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-bold">CES 2026 신청 목록</h1>
        </div>

        <div class="relative max-w-sm">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" :size="20" />
          <Input
            v-model="searchQuery"
            type="text"
            placeholder="회사명 또는 부스번호로 검색..."
            class="pl-10"
            @input="debounceSearch"
          />
        </div>

        <div v-if="store.loading" class="flex items-center justify-center py-12 text-muted-foreground">
          로딩 중...
        </div>

        <div v-else-if="store.applications.length === 0" class="flex items-center justify-center py-12 text-muted-foreground">
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
                <TableCell class="font-medium">{{ app.id }}</TableCell>
                <TableCell>
                  <Badge :variant="app.boothType === 'eureka' ? 'default' : 'secondary'">
                    {{ app.boothType === 'eureka' ? 'Eureka' : 'Global' }}
                  </Badge>
                </TableCell>
                <TableCell>{{ app.boothNumber }}</TableCell>
                <TableCell>{{ app.companyKr }}</TableCell>
                <TableCell>{{ app.companyEn }}</TableCell>
                <TableCell>
                  <Badge :variant="app.pitching === 'yes' ? 'default' : 'secondary'">
                    {{ app.pitching === 'yes' ? '참여' : '-' }}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge :variant="app.docent === 'yes' ? 'default' : 'secondary'">
                    {{ app.docent === 'yes' ? '참여' : '-' }}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge :variant="app.interpreter === 'yes' ? 'default' : 'secondary'">
                    {{ app.interpreter === 'yes' ? '참여' : '-' }}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge :variant="app.mou === 'yes' ? 'default' : 'secondary'">
                    {{ app.mou === 'yes' ? '참여' : '-' }}
                  </Badge>
                </TableCell>
                <TableCell>{{ formatDate(app.createdAt) }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div v-if="store.totalPages > 1" class="flex items-center justify-center gap-2">
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
            {{ store.page }} / {{ store.totalPages }} (총 {{ store.total }}개)
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
    </main>
  </SidebarProvider>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useApplicationsStore } from '../stores/applications';
import { useAuthStore } from '../stores/auth';

import SidebarProvider from '../components/ui/SidebarProvider.vue';
import Sidebar from '../components/ui/Sidebar.vue';
import SidebarHeader from '../components/ui/SidebarHeader.vue';
import SidebarContent from '../components/ui/SidebarContent.vue';
import SidebarFooter from '../components/ui/SidebarFooter.vue';
import SidebarMenu from '../components/ui/SidebarMenu.vue';
import SidebarMenuItem from '../components/ui/SidebarMenuItem.vue';
import SidebarMenuButton from '../components/ui/SidebarMenuButton.vue';
import SidebarTrigger from '../components/ui/SidebarTrigger.vue';
import Table from '../components/ui/Table.vue';
import TableHeader from '../components/ui/TableHeader.vue';
import TableBody from '../components/ui/TableBody.vue';
import TableHead from '../components/ui/TableHead.vue';
import TableRow from '../components/ui/TableRow.vue';
import TableCell from '../components/ui/TableCell.vue';
import Badge from '../components/ui/Badge.vue';
import Button from '../components/ui/Button.vue';
import Input from '../components/ui/Input.vue';

import {
  Search,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  LogOut,
  BarChart3
} from 'lucide-vue-next';

const router = useRouter();
const store = useApplicationsStore();
const authStore = useAuthStore();

const searchQuery = ref('');
let searchTimeout = null;

onMounted(() => {
  store.fetchApplications();
});

const debounceSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    store.fetchApplications(1, searchQuery.value);
  }, 500);
};

const changePage = (page) => {
  store.fetchApplications(page, searchQuery.value);
};

const goToDetail = (id) => {
  router.push(`/applications/${id}`);
};

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR') + ' ' + date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
};
</script>
