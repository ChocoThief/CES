<template>
    <div class="event-overview-container">
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
                    <h1>Event Overview</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    * This website is optimized for PC use.
                </div>
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <div class="overview-description">
                <p>
                    KOREA관은 국내 유망 스타트업과 혁신 기업들의 글로벌 진출을
                    지원하기 위해 구성된 한국 공동관입니다.
                </p>
                <p>
                    CES 2026의 핵심 전시 구역인 Eureka Park와 Global
                    Pavilion에서 한국 기업들의 기술 경쟁력을 선보입니다.
                </p>
                <p>
                    참가기업들의 비즈니스 네트워킹, 투자 상담, 글로벌
                    파트너십 확대를 위한 다양한 프로그램을 함께 운영합니다.
                </p>
                <br>
                <p>
                    The KOREA Pavilion is a national pavilion designed to support the global expansion of innovative Korean startups and companies.
                </p>
                <p>
                    At CES 2026, we will showcase the technological competitiveness of Korean companies in the core exhibition zones, Eureka Park and Global Pavilion.
                </p>
                <p>
                    We also operate a variety of programs designed to enhance participating companies' business networking, investment consultations, and global partnership expansion.
                </p>
            </div>

            <div class="overview-table">
                <table>
                    <tbody>
                        <tr>
                            <th>행사명 <br>(Event Name)</th>
                            <td>CES 2026</td>
                        </tr>
                        <tr>
                            <th>일시 <br>(Date)</th>
                            <td>2026.01.06.(TUE) ~ 01.09.(FRI)</td>
                        </tr>
                        <tr>
                            <th>장소 <br>(Venue)</th>
                            <td>Venetian Expo (베네치안 엑스포 센터)</td>
                        </tr>
                        <tr>
                            <th>부스번호 <br>(Booth Number)</th>
                            <td>
                                Eureka Park (1F) 62901, 62510 / Global Pavilion
                                (2F) 52523
                            </td>
                        </tr>
                        <tr>
                            <th>참가사 <br>(Exhibitor)</th>
                            <td>
                                Eureka Park (1F) 75개사 / Global Pavillion (2F)
                                68개사
                            </td>
                        </tr>
                        <tr>
                            <th>프로그램 <br>(Program)</th>
                            <td>
                                <div class="program-list">
                                    <div>- Docent Tour Event</div>
                                    <div>- Pitching Event</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.event-overview-container {
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
    padding: 0 60px;
}

.overview-description {
    font-size: 18px;
    line-height: 2;
    color: #2d3748;
    margin-bottom: 60px;
    text-align: center;
}

/* Table Styles */
.overview-table {
    max-width: 900px;
    margin: 0 auto;
}

.overview-table table {
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #2d3748;
}

.overview-table th,
.overview-table td {
    padding: 20px 30px;
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
    font-size: 18px;
}

.overview-table th {
    background-color: #f7fafc;
    font-weight: 700;
    color: #2d3748;
    width: 200px;
}

.overview-table td {
    color: #4a5568;
    line-height: 1.8;
}

.program-list div {
    margin: 5px 0;
}
</style>
