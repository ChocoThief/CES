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
                    <h1>참가기업 리스트</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.
                </div>
            </div>
        </section>

        <!-- Booth Layout Link -->
        <div class="booth-layout-link-container">
            <router-link to="/pr/booth-layout" class="booth-layout-link">
                부스배치도 보기
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
                        v-for="i in 8"
                        :key="`eureka-${i}`"
                        class="company-card"
                        @click="goToCompanyDetail(i, 'eureka')"
                    >
                        <img
                            src="@/assets/company-logo2.png"
                            alt="참가기업 로고"
                            class="company-logo"
                        />
                    </div>
                </div>
                <button
                    @click="goToEurekaPark"
                    class="show-more-btn"
                >
                    ▶ Eureka Park 참가기업 더보기
                </button>
            </div>

            <!-- Global Pavilion Section -->
            <div class="company-section">
                <div class="section-header">
                    <h2 class="section-title">Global Pavilion (2F)</h2>
                </div>
                <div class="companies-grid">
                    <div
                        v-for="i in 8"
                        :key="`global-${i}`"
                        class="company-card"
                        @click="goToCompanyDetail(i, 'global')"
                    >
                        <img
                            src="@/assets/company-logo2.png"
                            alt="참가기업 로고"
                            class="company-logo"
                        />
                    </div>
                </div>
                <button
                    @click="goToGlobalPavilion"
                    class="show-more-btn"
                >
                    ▶ Global Pavilion 참가기업 더보기
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToEurekaPark = () => {
    router.push('/pr/eureka-park');
};

const goToGlobalPavilion = () => {
    router.push('/pr/global-pavilion');
};

const goToCompanyDetail = (companyId, hall) => {
    router.push({
        path: `/pr/company/${companyId}`,
        query: { hall }
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

.company-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Show More Button */
.show-more-btn {
    margin-top: 30px;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #7a9cd1;
    border: 2px solid #7a9cd1;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    align-self: center;
}

.show-more-btn:hover {
    background-color: #6b8cce;
    border-color: #6b8cce;
}
</style>
