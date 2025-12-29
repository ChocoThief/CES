<template>
    <div class="company-detail-container">
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
                    <h1>View Exhibitor Details</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    * This website is optimized for PC use.
                </div>
            </div>
        </section>

        <!-- Back Button -->
        <BackButton />

        <!-- Company Info Section -->
        <section class="content-section">
            <!-- 상단 그리드: 로고 + 기본 정보 -->
            <div class="company-info-top">
                <!-- 왼쪽: 로고 -->
                <div class="company-logo-section">
                    <div class="logo-box">
                        <img
                            :src="companyLogo"
                            :alt="company.name + ' 로고'"
                            class="company-logo-large"
                        />
                    </div>
                </div>

                <!-- 오른쪽: 기본 정보 -->
                <div class="company-details">
                    <div class="company-name-container">
                        <h2 class="company-name">{{ company.name }}</h2>
                        <h3 class="company-name-en" v-if="company.nameEn">({{ company.nameEn }})</h3>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">부스번호 (Booth number)</span>
                        <span class="detail-value">{{ company.boothNumber }}</span>
                    </div>

                    <div class="detail-row" v-if="company.website">
                        <span class="detail-label">홈페이지 (Website)</span>
                        <a :href="company.website" target="_blank" rel="noopener noreferrer" class="detail-value website-link">{{ company.website }}</a>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">제품 (Product)</span>
                        <span class="detail-value">{{ company.product }}</span>
                        <span class="detail-value-en product-en" v-if="company.productEn">({{ company.productEn }})</span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">카테고리 (Category)</span>
                        <span class="detail-value">{{ company.category }}</span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">전시관 (Hall)</span>
                        <span class="detail-value">{{ company.hall }}</span>
                    </div>
                </div>
            </div>

            <!-- 하단: 제품 설명 -->
            <div class="company-description-section">
                <div class="detail-row">
                    <span class="detail-label">제품설명 (Product Description)</span>
                    <span class="detail-value description-text" v-html="formatDescription(company.description)"></span>
                    <span class="detail-value-en description-text" v-if="company.descriptionEn" v-html="formatDescription(company.descriptionEn)"></span>
                </div>
            </div>

            <!-- Video Section -->
            <div class="video-section" v-if="companyVideo">
                <video
                    :src="companyVideo"
                    controls
                    class="company-video"
                    preload="metadata"
                >
                    브라우저가 비디오를 지원하지 않습니다.
                </video>
            </div>

            <!-- Back Button -->
            <div class="button-section">
                <button @click="goBack" class="back-btn">
                    목록으로 돌아가기 (View Exhibitor Details)
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getCompanyById } from '@/data/companyData';
import defaultLogo from '@/assets/company-logo-default.png';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const route = useRoute();

// 회사 데이터
const company = ref({
    id: '',
    name: '',
    nameEn: '',
    boothNumber: '',
    product: '',
    productEn: '',
    category: '',
    description: '',
    descriptionEn: '',
    hall: '',
    logo: '',
    video: '',
    website: ''
});

// 동적 로고 import를 위한 로고 모듈들
const logoModules = import.meta.glob('@/assets/참가업체 로고 파일/**/*.png', { eager: true });

// 회사 로고 computed
const companyLogo = computed(() => {
    if (company.value.logo) {
        const logoPath = `/src/assets/${company.value.logo}`;
        const module = logoModules[logoPath];
        if (module) {
            return module.default;
        }
    }
    return defaultLogo;
});

// 회사 비디오 computed (public 폴더에서 직접 로드)
const companyVideo = computed(() => {
    if (company.value.video) {
        return `/${company.value.video}`;
    }
    return null;
});

// 줄바꿈을 <br>로 변환하는 함수
const formatDescription = (text) => {
    if (!text) return '';
    return text.replace(/\n/g, '<br>');
};

onMounted(() => {
    const companyId = route.params.id;
    const foundCompany = getCompanyById(companyId);

    if (foundCompany) {
        company.value = {
            id: foundCompany.id,
            name: foundCompany.name,
            nameEn: foundCompany.nameEn || '',
            boothNumber: foundCompany.boothNumber,
            product: foundCompany.product || '-',
            productEn: foundCompany.productEn || '',
            category: foundCompany.category || '-',
            description: foundCompany.description || '-',
            descriptionEn: foundCompany.descriptionEn || '',
            hall: foundCompany.hall === 'eureka' ? 'Eureka Park' : 'Global Pavilion',
            logo: foundCompany.logo || '',
            video: foundCompany.video || '',
            website: foundCompany.website || ''
        };
    }
});

const goBack = () => {
    router.back();
};
</script>

<style scoped>
.company-detail-container {
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

/* Content Section */
.content-section {
    padding: 0 0px;
}

/* Company Info - 상단 그리드 */
.company-info-top {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 60px;
    margin-bottom: 40px;
}

/* Company Description - 하단 */
.company-description-section {
    margin-bottom: 60px;
    padding-bottom: 60px;
    border-bottom: 2px solid #e2e8f0;
}

.company-logo-section {
    display: flex;
    align-items: center;
}

.logo-box {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 20px;
}

.company-logo-large {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.company-details {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.company-name {
    font-size: 36px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 5px;
}

.company-name-en {
    font-size: 24px;
    font-weight: 500;
    color: #718096;
    padding-bottom: 20px;
    margin-top: 0;
}

.detail-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.detail-label {
    font-size: 14px;
    font-weight: 600;
    color: #718096;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.detail-value {
    font-size: 20px;
    font-weight: 500;
    color: #1a202c;
    line-height: 1.6;
}

.website-link {
    color: #3182ce;
    text-decoration: none;
    word-break: break-all;
}

.website-link:hover {
    text-decoration: underline;
}

.description-text {
    font-size: 16px;
}

.detail-value-en {
    font-size: 18px;
    font-weight: 500;
    color: #4a5568;
    line-height: 1.6;
    padding-top: 8px;
    border-top: 1px solid #e2e8f0;
}

.detail-value-en.description-text {
    font-size: 15px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
}

/* Video Section */
.video-section {
    margin-bottom: 60px;
}

.video-placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #f7fafc;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: #4a5568;
}

.company-video {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    background-color: #000;
}

/* Button Section */
.button-section {
    text-align: center;
    margin-top: 60px;
}

.back-btn {
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: #2d3748;
    border: 2px solid #2d3748;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.back-btn:hover {
    background-color: #1a242f;
    border-color: #1a242f;
}
</style>
