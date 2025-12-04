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
                    <p class="subtitle">{{ eurekaCompanies.length }}개 참가기업</p>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.
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
                    <div class="company-name-overlay">
                        {{ company.name }}
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
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.company-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.company-card:hover .company-name-overlay {
    background-color: rgba(0, 0, 0, 0.8);
}

.company-name-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 0.2s ease;
}

.company-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
