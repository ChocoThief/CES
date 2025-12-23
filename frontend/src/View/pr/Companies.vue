<template>
    <div class="companies-container">
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
                    <h1>Exhibitor</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    * This website is optimized for PC use.
                </div>
            </div>
        </section>

        <!-- Booth Layout Link -->
        <div class="booth-layout-link-container">
            <router-link to="/pr/booth-layout" class="booth-layout-link">
                Booth Map
            </router-link>
        </div>

        <!-- Content Section -->
        <section class="content-section">
            <!-- Eureka Park Section -->
            <div class="company-section">
                <div class="section-header">
                    <h2 class="section-title">Eureka Park (1F)</h2>
                </div>
                <div class="companies-grid">
                    <div
                        v-for="company in eurekaPreview"
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
                <button
                    @click="goToEurekaPark"
                    class="show-more-btn"
                >
                    ▶ Eureka Park 참가기업 더보기<br />
                    View Eureka Park Exhibitors
                </button>
            </div>

            <!-- Global Pavilion Section -->
            <div class="company-section">
                <div class="section-header">
                    <h2 class="section-title">Global Pavilion (2F)</h2>
                </div>
                <div class="companies-grid">
                    <div
                        v-for="company in globalPreview"
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
                <button
                    @click="goToGlobalPavilion"
                    class="show-more-btn"
                >
                    ▶ Global Pavilion 참가기업 더보기<br />
                    View Global Pavilion Exhibitors
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { eurekaCompanies, globalCompanies } from '@/data/companyData';
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

// 각 섹션에 표시할 회사 (8개씩)
const eurekaPreview = eurekaCompanies.slice(0, 8);
const globalPreview = globalCompanies.slice(0, 8);

const goToEurekaPark = () => {
    router.push('/pr/eureka-park');
};

const goToGlobalPavilion = () => {
    router.push('/pr/global-pavilion');
};

const goToCompanyDetail = (companyId) => {
    router.push({
        path: `/pr/company/${companyId}`
    });
};
</script>

<style scoped>
.companies-container {
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

/* Booth Layout Link */
.booth-layout-link-container {
    max-width: 980px;
    margin: 0 auto;
    text-align: right;
    margin-bottom: 30px;
}

.booth-layout-link {
    display: inline-block;
    padding: 6px 30px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #2d3748;
    border: 2px solid #2d3748;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.booth-layout-link:hover {
    background-color: #1a242f;
    border-color: #1a242f;
}

/* Content Section */
.content-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.company-section {
    display: flex;
    flex-direction: column;
}

.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}

.section-subtitle {
    font-size: 18px;
    color: #4a5568;
}

/* Companies Grid */
.companies-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
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

.section-count {
    font-size: 14px;
    color: #718096;
    margin-top: -20px;
    margin-bottom: 20px;
}

/* Show More Button */
.show-more-btn {
    margin-top: 30px;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #2d3748;
    border: 2px solid #2d3748;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    align-self: center;
}

.show-more-btn:hover {
    background-color: #1a242f;
    border-color: #1a242f;
}
</style>
