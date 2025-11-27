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
                    <h1>참가업체 상세보기</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.
                </div>
            </div>
        </section>

        <!-- Company Info Section -->
        <section class="content-section">
            <div class="company-info">
                <!-- Company Logo -->
                <div class="company-logo-section">
                    <div class="logo-box">
                        <img
                            src="@/assets/company-logo2.png"
                            alt="회사 로고"
                            class="company-logo-large"
                        />
                    </div>
                </div>

                <!-- Company Details -->
                <div class="company-details">
                    <h2 class="company-name">{{ company.name }}</h2>

                    <div class="detail-row">
                        <span class="detail-label">부스번호 (Booth number)</span>
                        <span class="detail-value">{{ company.boothNumber }}</span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">제품 (Product)</span>
                        <span class="detail-value">{{ company.product }}</span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">카테고리 (Category)</span>
                        <span class="detail-value">{{ company.category }}</span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">제품설명 (Product Description)</span>
                        <span class="detail-value">{{ company.productDescription }}</span>
                    </div>
                </div>
            </div>

            <!-- Video Section -->
            <div class="video-section">
                <div class="video-placeholder">
                    동영상
                </div>
            </div>

            <!-- Back Button -->
            <div class="button-section">
                <button @click="goBack" class="back-btn">
                    목록으로 돌아가기
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// 더미 회사 데이터
const company = ref({
    id: '',
    name: '',
    boothNumber: '',
    product: '',
    category: '',
    productDescription: ''
});

onMounted(() => {
    const companyId = route.params.id;
    const hall = route.query.hall;

    // 더미 데이터 설정
    company.value = {
        id: companyId,
        name: `참가기업 ${companyId}`,
        boothNumber: `${hall === 'eureka' ? '62901-' : '52523-'}${companyId}`,
        product: 'AI 기반 스마트 솔루션',
        category: 'Technology / Innovation',
        productDescription: '혁신적인 기술과 서비스를 제공하는 글로벌 기업입니다. CES 2026에서 최신 제품과 솔루션을 선보입니다.'
    };
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

/* Content Section */
.content-section {
    padding: 0 0px;
}

/* Company Info */
.company-info {
    display: grid;
    grid-template-columns: 450px 1fr;
    gap: 60px;
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
    padding-bottom: 20px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
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
