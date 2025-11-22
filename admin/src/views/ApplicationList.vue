<template>
  <div class="container">
    <header>
      <h1>CES 2026 신청 목록</h1>
      <button @click="handleLogout" class="btn-logout">로그아웃</button>
    </header>

    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="회사명 또는 부스번호로 검색..."
        @input="debounceSearch"
      />
    </div>

    <div v-if="store.loading" class="loading">로딩 중...</div>

    <div v-else-if="store.applications.length === 0" class="empty">
      신청 데이터가 없습니다.
    </div>

    <div v-else class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>부스타입</th>
            <th>부스번호</th>
            <th>회사명(한)</th>
            <th>회사명(영)</th>
            <th>피칭</th>
            <th>도슨트</th>
            <th>통역</th>
            <th>MOU</th>
            <th>신청일</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="app in store.applications"
            :key="app.id"
            @click="goToDetail(app.id)"
            class="clickable"
          >
            <td>{{ app.id }}</td>
            <td>
              <span :class="['badge', app.boothType]">
                {{ app.boothType === 'eureka' ? 'Eureka' : 'Global' }}
              </span>
            </td>
            <td>{{ app.boothNumber }}</td>
            <td>{{ app.companyKr }}</td>
            <td>{{ app.companyEn }}</td>
            <td><span :class="['status', app.pitching]">{{ app.pitching === 'yes' ? '✓' : '-' }}</span></td>
            <td><span :class="['status', app.docent]">{{ app.docent === 'yes' ? '✓' : '-' }}</span></td>
            <td><span :class="['status', app.interpreter]">{{ app.interpreter === 'yes' ? '✓' : '-' }}</span></td>
            <td><span :class="['status', app.mou]">{{ app.mou === 'yes' ? '✓' : '-' }}</span></td>
            <td>{{ formatDate(app.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="store.totalPages > 1" class="pagination">
      <button
        @click="changePage(store.page - 1)"
        :disabled="store.page === 1"
        class="btn-page"
      >
        이전
      </button>
      <span class="page-info">
        {{ store.page }} / {{ store.totalPages }} (총 {{ store.total }}개)
      </span>
      <button
        @click="changePage(store.page + 1)"
        :disabled="store.page === store.totalPages"
        class="btn-page"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useApplicationsStore } from '../stores/applications';
import { useAuthStore } from '../stores/auth';

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

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin: 0;
}

.btn-logout {
  padding: 0.625rem 1.25rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-logout:hover {
  background: #c0392b;
}

.search-bar {
  margin-bottom: 1.5rem;
}

.search-bar input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.loading, .empty {
  text-align: center;
  padding: 3rem;
  color: #777;
  font-size: 1.1rem;
}

.table-container {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: #f8f9fa;
}

th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #555;
  border-bottom: 2px solid #dee2e6;
}

tbody tr {
  border-bottom: 1px solid #dee2e6;
}

tbody tr.clickable {
  cursor: pointer;
  transition: background 0.2s;
}

tbody tr.clickable:hover {
  background: #f8f9fa;
}

td {
  padding: 1rem;
  color: #333;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.badge.eureka {
  background: #e3f2fd;
  color: #1976d2;
}

.badge.global {
  background: #f3e5f5;
  color: #7b1fa2;
}

.status {
  font-weight: 600;
}

.status.yes {
  color: #27ae60;
}

.status.no {
  color: #bdc3c7;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-page {
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-page:hover:not(:disabled) {
  background: #f8f9fa;
}

.btn-page:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  color: #555;
  font-weight: 500;
}
</style>
