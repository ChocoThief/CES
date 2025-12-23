<template>
    <div class="eureka-park-container">
        <!-- Header Section -->
        <section class="main-header">
            <div class="header-top">
                <div class="ces-logo">
                    <img
                        src="@/assets/CES-logo.png"
                        alt="CES Logo"
                        class="logo-icon"
                    />
                </div>
                <div class="title-container">
                    <h1>Eureka Park (1F)</h1>
                    <p class="subtitle">{{ eurekaCompanies.length }} Exhibitors</p>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    * This website is optimized for PC use.
                </div>
            </div>
        </section>

        <!-- Search Section -->
        <section class="search-section">
            <div class="search-wrapper">
                <img
                    src="@/assets/magnifying-glass-white.svg"
                    alt="검색"
                    class="search-icon"
                />
                <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="기업명 검색"
                    class="search-input"
                />
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <div class="companies-grid">
                <div
                    v-for="company in filteredCompanies"
                    :key="company.id"
                    class="company-card"
                    @click="goToCompanyDetail(company.id)"
                >
                    <div class="company-logo-wrapper">
                        <img :src="getCompanyLogo(company.logo)" :alt="company.name" class="company-logo" />
                    </div>
                    <div class="company-name">
                        {{ company.name }}<br v-if="company.nameEn" /><span v-if="company.nameEn" class="company-name-en">({{ company.nameEn }})</span>
                    </div>
                </div>
            </div>
            <div v-if="filteredCompanies.length === 0" class="no-results">
                검색 결과가 없습니다.
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { eurekaCompanies } from '@/data/companyData';
import defaultLogo from '@/assets/company-logo-default.png';

// 동적 로고 import
const logoModules = import.meta.glob('@/assets/참가업체 로고 파일/**/*.png', { eager: true });

const getCompanyLogo = (logoPath) => {
    if (logoPath) {
        const path = `/src/assets/${logoPath}`;

        // 먼저 정확한 경로로 시도
        let module = logoModules[path];

        // 못 찾으면 유사한 키 찾기
        if (!module) {
            const matchingKey = Object.keys(logoModules).find(key =>
                key.includes(logoPath.split('/').pop().replace('.png', ''))
            );
            if (matchingKey) {
                module = logoModules[matchingKey];
            }
        }

        if (module) return module.default;
    }
    return defaultLogo;
};

const router = useRouter();

// 검색 쿼리
const searchQuery = ref('');

// 검색 필터링
const filteredCompanies = computed(() => {
    if (!searchQuery.value) {
        return eurekaCompanies;
    }
    const query = searchQuery.value.toLowerCase();
    return eurekaCompanies.filter(company =>
        company.name.toLowerCase().includes(query) ||
        company.product.toLowerCase().includes(query) ||
        company.category.toLowerCase().includes(query)
    );
});

// 회사 상세 페이지로 이동
const goToCompanyDetail = (companyId) => {
    router.push({
        path: `/pr/company/${companyId}`
    });
};
</script>

<style scoped>
.eureka-park-container {
    line-height: 1.6;
    color: #333;
    background-color: white;
    max-width: 980px;
    margin: 0 auto;
    padding-bottom: 100px;
}

/* Header Section */
.main-header {
    padding: 0;
    text-align: center;
    position: relative;
    margin-bottom: 80px;
}

.header-top {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 70px;
    position: relative;
    min-height: 280px;
}

.ces-logo {
    position: absolute;
    left: 20px;
    top: 10px;
    z-index: 10;
}

.logo-icon {
    width: 160px;
    height: auto;
    border-radius: 4px;
}

.title-container {
    text-align: center;
}

.title-container h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
}

.pc-notice {
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.5px;
}

/* Search Section */
.search-section {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 60px;
    margin-bottom: 40px;
}

.search-wrapper {
    position: relative;
    width: 100%;
}

.search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    filter: brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(500%) hue-rotate(169deg);
    pointer-events: none;
}

.search-input {
    width: 100%;
    padding: 15px 20px 15px 50px;
    font-size: 16px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    transition: border-color 0.2s ease;
}

.search-input:focus {
    outline: none;
    border-color: #7a9cd1;
}

/* Content Section */
.content-section {
    padding: 0 60px;
}

.no-results {
    text-align: center;
    padding: 60px 0;
    font-size: 18px;
    color: #4a5568;
}

/* Companies Grid */
.companies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.company-card {
    aspect-ratio: 1;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
}

.company-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.company-card {
    display: flex;
    flex-direction: column;
}

.company-logo-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
}

.company-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.company-name {
    width: 100%;
    color: #1a202c;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    padding: 14px 12px;
    background: white;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.company-card:hover .company-name {
    background: #1a202c;
    color: white;
}
</style>
