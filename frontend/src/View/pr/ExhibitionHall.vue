<template>
    <div class="exhibition-hall-container">
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
                    <h1>CES 2026 KOREA</h1>
                    <p class="subtitle">
                        2026.01.06.(TUE) ~ 01.09.(FRI)<br />
                        Venetian Expo (베네치안 엑스포 센터) / Eureka Park,
                        Global Pavilion
                    </p>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    * This website is optimized for PC use.
                </div>
            </div>
        </section>

        <!-- Companies Preview -->
        <section class="section-preview companies-section">
            <h2 class="section-title">Exhibitors</h2>
            <div class="companies-grid">
                <div
                    v-for="company in featuredCompanies"
                    :key="company.id"
                    class="company-logo-box"
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
            <router-link to="/pr/companies" class="see-more-link">
                ▶ More
            </router-link>
        </section>

        <!-- Program Preview -->
        <section class="section-preview program-section">
            <h2 class="section-title">Program</h2>
            <div class="program-cards">
                <div class="program-card">
                    <h3 class="program-card-title">
                        Docent Tour Event
                    </h3>
                    <p class="program-card-description">
                        CES 2026 KOREA 참가기업 부스를 MC와 함께 전문적으로 투어하는 프로그램입니다.<br>
                        각 날짜별로 진행되며 투어 참가를 원하시는 분들은
                        <router-link to="/vip" class="inline-link">[신청] 페이지</router-link>에 참가 신청부탁드립니다.
                        <br><br>
                        The CES 2026 KOREA Docent Tour is a guided program led by a professional MC, showcasing participating companies' booths.<br>
                        The tour is conducted on scheduled dates, and those who wish to participate are asked to apply through the <router-link to="/vip" class="inline-link">[Application]</router-link> page.
                    </p>
                </div>
                <div class="program-card">
                    <h3 class="program-card-title">Pitching Event</h3>
                    <p class="program-card-description">
                        CES 2026 KOREA 참가기업들의 기술 소개 프로그램입니다.<br>
                        시간 내 행사 장소에 방문하면 더 자세한 참가기업에 대한 이야기를 들으실 수 있습니다.
                        <br><br>
                        The CES 2026 KOREA Pitching Event is a program where participating companies introduce their technologies and solutions.<br>
                        During the short sessions, visitors can quickly understand the companies' core values, technological competitiveness, <br>and market potential.
                        After the presentations, you may visit each company's booth <br>to receive further explanations or business consultations.
                    </p>
                </div>
            </div>
            <router-link to="/vip" class="see-more-link">
                ▶ More
            </router-link>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { allCompanies } from '@/data/companyData';
import defaultLogo from '@/assets/company-logo-default.png';

// 동적 로고 import
const logoModules = import.meta.glob('@/assets/참가업체 로고 파일/**/*.png', { eager: true });

const getCompanyLogo = (logoPath) => {
    if (logoPath) {
        const path = `/src/assets/${logoPath}`;
        const module = logoModules[path];
        if (module) return module.default;
    }
    return defaultLogo;
};

const router = useRouter();

// 배열을 랜덤으로 섞는 함수
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// 메인 페이지에 표시할 9개 기업 (랜덤 선택)
const featuredCompanies = shuffleArray(allCompanies).slice(0, 9);

const goToCompanyDetail = (companyId) => {
    router.push({
        path: `/pr/company/${companyId}`
    });
};
</script>

<style scoped>
.exhibition-hall-container {
    line-height: 1.6;
    color: #333;
    background-color: white;
    max-width: 980px;
    margin: 0 auto;
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
    padding: 100px 70px;
    position: relative;
    min-height: 400px;
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
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 30px;
}

.subtitle {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.8;
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

/* Section Styles */
.section-preview {
    padding: 60px 0;
}

.section-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
    padding-bottom: 20px;
    color: #2d3748;
    text-align: left;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);

}

/* Companies Section */
.companies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 40px;
}

.company-logo-box {
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

.company-logo-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.company-logo-box {
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

.company-logo-box:hover .company-name {
    background: #1a202c;
    color: white;
}

/* Program Section */
.program-cards {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
}

.program-card {
    background: #f7fafc;
    padding: 30px;
    border-radius: 8px;
}

.program-card-title {
    font-size: 20px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 15px;
}

.program-card-description {
    font-size: 16px;
    line-height: 1.8;
    color: #4a5568;
}

/* Links */
.see-more-link {
    display: block;
    text-align: right;
    font-size: 18px;
    font-weight: 600;
    color: #7a9cd1;
    text-decoration: none;
    transition: color 0.2s ease;
}

.see-more-link:hover {
    color: #6b8cce;
}

.inline-link {
    color: #7a9cd1;
    text-decoration: none;
    font-weight: 600;
}

.inline-link:hover {
    text-decoration: underline;
}
</style>
