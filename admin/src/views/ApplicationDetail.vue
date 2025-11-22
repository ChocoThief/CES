<template>
  <div class="container">
    <button @click="$router.back()" class="btn-back">← 목록으로</button>

    <div v-if="store.loading" class="loading">로딩 중...</div>

    <div v-else-if="!app" class="empty">신청 정보를 찾을 수 없습니다.</div>

    <div v-else class="detail-content">
      <h1>신청 상세 정보</h1>

      <!-- 부스 정보 -->
      <section class="card">
        <h2>부스 정보</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">부스 타입</span>
            <span :class="['value badge', app.boothType]">
              {{ app.boothType === 'eureka' ? 'Eureka Park' : 'Global Pavilion' }}
            </span>
          </div>
          <div class="info-item">
            <span class="label">부스 번호</span>
            <span class="value">{{ app.boothNumber }}</span>
          </div>
          <div class="info-item full">
            <span class="label">간판 표기명(영문)</span>
            <span class="value">{{ app.companyDisplay }}</span>
          </div>
        </div>
      </section>

      <!-- 회사 정보 -->
      <section class="card">
        <h2>회사 정보</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">회사명(한글)</span>
            <span class="value">{{ app.companyKr }}</span>
          </div>
          <div class="info-item">
            <span class="label">회사명(영문)</span>
            <span class="value">{{ app.companyEn }}</span>
          </div>
          <div class="info-item">
            <span class="label">대표자(한글)</span>
            <span class="value">{{ app.ceoKr }}</span>
          </div>
          <div class="info-item">
            <span class="label">대표자(영문)</span>
            <span class="value">{{ app.ceoEn }}</span>
          </div>
          <div class="info-item">
            <span class="label">홈페이지</span>
            <a v-if="app.website" :href="app.website" target="_blank" class="value link">
              {{ app.website }}
            </a>
            <span v-else class="value">-</span>
          </div>
          <div class="info-item">
            <span class="label">대표 전화</span>
            <span class="value">{{ app.phone }}</span>
          </div>
          <div class="info-item full">
            <span class="label">주소(한글)</span>
            <span class="value">{{ app.addressKr }}</span>
          </div>
          <div class="info-item full">
            <span class="label">주소(영문)</span>
            <span class="value">{{ app.addressEn }}</span>
          </div>
        </div>
      </section>

      <!-- 담당자 정보 -->
      <section class="card">
        <h2>담당자 정보</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">담당자명</span>
            <span class="value">{{ app.contactName }}</span>
          </div>
          <div class="info-item">
            <span class="label">직급</span>
            <span class="value">{{ app.contactPosition }}</span>
          </div>
          <div class="info-item">
            <span class="label">부서</span>
            <span class="value">{{ app.department }}</span>
          </div>
          <div class="info-item">
            <span class="label">휴대폰</span>
            <span class="value">{{ app.contactMobile }}</span>
          </div>
        </div>
      </section>

      <!-- 홍보 자료 -->
      <section class="card">
        <h2>홍보 자료</h2>
        <div class="files-list">
          <div class="file-item">
            <span class="file-label">회사 로고 (CI)</span>
            <a :href="app.companyLogoUrl" target="_blank" class="btn-download">다운로드</a>
          </div>
          <div class="file-item">
            <span class="file-label">홍보 그래픽</span>
            <a :href="app.promoGraphicUrl" target="_blank" class="btn-download">다운로드</a>
          </div>
          <div v-if="app.tableGraphicUrl" class="file-item">
            <span class="file-label">테이블 그래픽</span>
            <a :href="app.tableGraphicUrl" target="_blank" class="btn-download">다운로드</a>
          </div>
          <div v-if="app.qrCode === 'have' && app.qrFileUrl" class="file-item">
            <span class="file-label">QR 코드 파일</span>
            <a :href="app.qrFileUrl" target="_blank" class="btn-download">다운로드</a>
          </div>
          <div v-if="app.promoVideo === 'have' && app.videoFileUrl" class="file-item">
            <span class="file-label">프로모 비디오</span>
            <a :href="app.videoFileUrl" target="_blank" class="btn-download">다운로드</a>
          </div>
        </div>
      </section>

      <!-- 참여 프로그램 -->
      <section class="card">
        <h2>참여 프로그램</h2>
        <div class="programs">
          <div :class="['program-badge', app.pitching]">
            <span class="program-name">피칭 이벤트</span>
            <span class="program-status">{{ app.pitching === 'yes' ? '참여' : '미참여' }}</span>
          </div>
          <div :class="['program-badge', app.docent]">
            <span class="program-name">도슨트 투어</span>
            <span class="program-status">{{ app.docent === 'yes' ? '참여' : '미참여' }}</span>
          </div>
          <div :class="['program-badge', app.interpreter]">
            <span class="program-name">현지 통역</span>
            <span class="program-status">{{ app.interpreter === 'yes' ? '필요' : '불필요' }}</span>
          </div>
          <div :class="['program-badge', app.mou]">
            <span class="program-name">MOU 체결식</span>
            <span class="program-status">{{ app.mou === 'yes' ? '신청' : '미신청' }}</span>
          </div>
        </div>
      </section>

      <!-- 신청 일시 -->
      <section class="card">
        <h2>신청 정보</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">신청일</span>
            <span class="value">{{ formatDate(app.createdAt) }}</span>
          </div>
          <div class="info-item">
            <span class="label">수정일</span>
            <span class="value">{{ formatDate(app.updatedAt) }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useApplicationsStore } from '../stores/applications';

const route = useRoute();
const store = useApplicationsStore();

const app = computed(() => store.currentApplication);

onMounted(() => {
  store.fetchApplicationById(route.params.id);
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('ko-KR');
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.btn-back {
  padding: 0.625rem 1.25rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: background 0.2s;
}

.btn-back:hover {
  background: #f8f9fa;
}

.loading, .empty {
  text-align: center;
  padding: 3rem;
  color: #777;
  font-size: 1.1rem;
}

.detail-content h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.25rem;
  color: #555;
  margin: 0 0 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f0f0f0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item.full {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.875rem;
  color: #777;
  font-weight: 500;
}

.value {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
}

.value.link {
  color: #667eea;
  text-decoration: none;
}

.value.link:hover {
  text-decoration: underline;
}

.badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
}

.badge.eureka {
  background: #e3f2fd;
  color: #1976d2;
}

.badge.global {
  background: #f3e5f5;
  color: #7b1fa2;
}

.files-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.file-label {
  font-weight: 500;
  color: #555;
}

.btn-download {
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-download:hover {
  background: #5568d3;
}

.programs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.program-badge {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid;
}

.program-badge.yes {
  background: #edf7ed;
  border-color: #81c784;
}

.program-badge.no {
  background: #f5f5f5;
  border-color: #e0e0e0;
}

.program-name {
  font-weight: 600;
  color: #333;
}

.program-status {
  font-size: 0.875rem;
  font-weight: 500;
}

.program-badge.yes .program-status {
  color: #388e3c;
}

.program-badge.no .program-status {
  color: #757575;
}

@media (max-width: 768px) {
  .info-grid, .programs {
    grid-template-columns: 1fr;
  }
}
</style>
