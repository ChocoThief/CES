<template>
    <div class="booth-layout-container">
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
                    <h1>Booth Map</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    * This website is optimized for PC use.
                </div>
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <h2 class="section-title" :class="{ 'fade-out': selectedOption }">부스 선택 (Booth Selection)</h2>
            <div class="layout-selection">
                <div
                    class="layout-option"
                    :class="{
                        'expanding': selectedOption === 'eureka',
                        'shrinking': selectedOption && selectedOption !== 'eureka'
                    }"
                    @click="selectOption('eureka')"
                >
                    <h2>Eureka Park</h2>
                </div>
                <div
                    class="layout-option"
                    :class="{
                        'expanding': selectedOption === 'global',
                        'shrinking': selectedOption && selectedOption !== 'global'
                    }"
                    @click="selectOption('global')"
                >
                    <h2>Global Pavilion</h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedOption = ref(null);

const selectOption = (option) => {
    selectedOption.value = option;

    // 애니메이션 완료 후 라우터 이동
    setTimeout(() => {
        if (option === 'eureka') {
            router.push('/pr/booth-layout/eureka-park');
        } else {
            router.push('/pr/booth-layout/global-pavilion');
        }
    }, 800); // 애니메이션 시간과 맞춤
};
</script>

<style scoped>
.booth-layout-container {
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
    margin-bottom: 80px;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.section-title.fade-out {
    opacity: 0;
    transform: translateY(-20px);
}

.layout-selection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 500px;
}

.layout-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 60px;
    border: 1px solid #e2e8f0;
}

.layout-option:first-child {
    border-right: none;
}

.layout-option:last-child {
    border-left: 1px solid #e2e8f0;
}

.layout-option:hover {
    background: linear-gradient(135deg, #2d3748 0%, #1a242f 100%);
    transform: scale(1.02);
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.layout-option:hover h2,
.layout-option:hover p {
    color: white;
}

.layout-option h2 {
    font-size: 36px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 15px;
    transition: color 0.3s ease;
}

.layout-option p {
    font-size: 18px;
    color: #4a5568;
    transition: color 0.3s ease;
}

/* Expanding Animation */
.layout-option.expanding {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 9999;
    background: linear-gradient(135deg, #2d3748 0%, #1a242f 100%);
    animation: expandToFullScreen 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.layout-option.expanding h2 {
    color: white;
    animation: scaleUpText 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Shrinking Animation */
.layout-option.shrinking {
    animation: shrinkAndFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes expandToFullScreen {
    0% {
        transform: scale(1);
        border-radius: 0;
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1.5);
        opacity: 1;
        border-radius: 0;
    }
}

@keyframes scaleUpText {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

@keyframes shrinkAndFade {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.8);
        opacity: 0;
    }
}
</style>
