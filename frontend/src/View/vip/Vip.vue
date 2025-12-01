<template>
    <div class="vip-container">
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
                    <h1>
                        CES 2026 KOTRA 통합관<br />
                        프로그램
                    </h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.
                </div>
            </div>

            <div class="content-wrapper">
                <!-- Docent Tour Section -->
                <div class="program-section">
                    <div class="program-header">
                        <h2 class="program-title">도슨트 투어 이벤트</h2>
                    </div>
                    <div class="program-content">
                        <p class="program-description">
                            CES 2026 KOTRA 참가기업 부스를 전문 MC와 함께 둘러보며
                            <br>
                            핵심 기술과 제품을 깊이 있게 소개받는 
                            투어 프로그램입니다.
                            <br>
                            일자별로 정해진 시간에 진행되며, 안내된 동선을 따라 주요 기업 부스를 방문하게 됩니다.
                            <br>
                            각 기업의 담당자가 직접 설명을 제공하여 더욱 생생한 정보를 얻을 수 있습니다.

                        </p>
                        <div class="program-note">
                            ※ 도슨트 투어 이벤트는 사전신청으로 진행됩니다. 
                            <br>
                            참가를 희망하시는분들은 신청페이지에서 참가 신청부탁드립니다.
                            (현장 신청 불가능)
                            <br>
                            ※ 투어 인원은 날짜별로 제한될 수 있습니다.
                        </div>
                        <button
                            @click="goToDocentBooking"
                            class="program-btn btn-primary"
                        >
                            도슨트 투어 신청하기
                        </button>
                    </div>
                </div>

                <!-- Pitching Event Section -->
                <div class="program-section">
                    <div class="program-header">
                        <h2 class="program-title">피칭 이벤트</h2>
                    </div>
                    <div class="program-content">
                        <p class="program-description">
                            CES 2026 KOTRA 참가기업들이 자사의 기술과 솔루션을 직접 소개하는 발표(피칭) 프로그램입니다.
                            <br>
                            참관객 여러분은 짧은 시간 동안 기업들의 핵심 가치, 기술 경쟁력, 시장성 등을 
                            한자리에서 빠르게 파악하실 수 있습니다.
                            <br>
                            행사장은 특별 구역으로 구성되어 있어 누구나 자유롭게 관람할 수 있으며 
                            가까운 거리에서 생동감 있게 발표를 들을 수 있습니다.
                            <br>
                            발표 종료 후에는 각 기업의 부스를 방문하여 더욱 자세한 설명을 듣거나 상담을 진행할 수도 있습니다.

                        </p>
                        <!-- <button
                            @click="goToPitchingSchedule"
                            class="program-btn btn-secondary"
                        >
                            피칭 이벤트 타임테이블 확인하기
                        </button> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToDocentBooking = () => {
    router.push('/vip/docent-booking');
};

const goToPitchingSchedule = () => {
    router.push('/vip/pitching-schedule');
};
</script>

<style scoped>
.vip-container {
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
}

.header-top {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 100px 70px;
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
    flex: 1;
    text-align: center;
}

.title-container h1 {
    font-size: 54px;
    font-weight: 700;
    letter-spacing: 1px;
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

/* Content Wrapper */

.content-wrapper {
    padding: 100px 0;
}

/* Program Section */
.program-section {
    padding: 50px 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.program-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}

.program-title {
    font-size: 32px;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
}

.program-content {
    padding: 0 10px;
}

.program-description {
    font-size: 18px;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 30px;
}

.program-features {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
}

.program-features li {
    font-size: 17px;
    color: #2d3748;
    padding: 10px 0;
    line-height: 1.6;
}

.program-note {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 1.8;
    color: #4a5568;
    text-align: left;
}

.program-note strong {
    color: #2d3748;
    font-size: 18px;
}

/* Buttons */
.program-btn {
    width: 50%;
    padding: 20px 40px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
}

.btn-primary {
    background: #7a9cd1;
}

.btn-primary:hover {
    background: #6b8cce;
}

.btn-secondary {
    background: #7a9cd1;
}

.btn-secondary:hover {
    background: #6b8cce;
}
</style>
