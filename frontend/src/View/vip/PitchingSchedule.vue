<template>
    <div class="schedule-container">
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
                    <h1>피칭 이벤트</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    *This website is optimized for PC use.
                </div>
            </div>

            <div class="content-wrapper">

                <!-- Date Tabs -->
                <div class="date-tabs">
                    <button
                        v-for="date in dates"
                        :key="date.id"
                        @click="selectedDate = date.id"
                        :class="['date-tab', { active: selectedDate === date.id }]"
                    >
                        {{ date.label }}
                    </button>
                </div>

                <!-- Schedule Table -->
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th width="8%">구분</th>
                            <th width="20%">시간</th>
                            <th width="25%">항목</th>
                            <th width="32%">내용</th>
                            <th width="15%">비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center">1</td>
                            <td class="center">15:00 ~ 15:05</td>
                            <td class="center">소개 멘트</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">2</td>
                            <td class="center">15:05 ~ 15:25</td>
                            <td class="center placeholder">(기업명)</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">3</td>
                            <td class="center">15:25 ~ 15:35</td>
                            <td class="center">휴식</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">4</td>
                            <td class="center">15:35 ~ 15:55</td>
                            <td class="center placeholder">(기업명)</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">5</td>
                            <td class="center">15:55 ~ 16:05</td>
                            <td class="center">휴식</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">6</td>
                            <td class="center">16:05 ~ 16:25</td>
                            <td class="center placeholder">(기업명)</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">7</td>
                            <td class="center">16:25 ~ 16:35</td>
                            <td class="center">휴식</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">8</td>
                            <td class="center">16:35 ~ 16:55</td>
                            <td class="center placeholder">(기업명)</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">9</td>
                            <td class="center">16:55 ~ 17:05</td>
                            <td class="center">휴식</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">10</td>
                            <td class="center">17:05 ~ 17:25</td>
                            <td class="center placeholder">(기업명)</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                        <tr>
                            <td class="center">11</td>
                            <td class="center">17:25 ~ 17:35</td>
                            <td class="center">마무리</td>
                            <td class="center">-</td>
                            <td class="center">-</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Action Button -->
                <div class="action-buttons">
                    <button @click="goBack" class="btn-back">
                        돌아가기
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dates = [
    { id: 'day1', label: '1월 6일(화)' },
    { id: 'day2', label: '1월 7일(수)' },
    { id: 'day3', label: '1월 8일(목)' },
    { id: 'day4', label: '1월 9일(금)' },
];

const selectedDate = ref('day1');

const goBack = () => {
    router.push('/vip');
};
</script>

<style scoped>
.schedule-container {
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

.page-description {
    text-align: center;
    margin-bottom: 60px;
}

.page-description p {
    font-size: 18px;
    line-height: 1.8;
    color: #4a5568;
}

/* Date Tabs */
.date-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 50px;
    justify-content: center;
    border-bottom: 2px solid #e2e8f0;
}

.date-tab {
    padding: 15px 35px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    background: transparent;
    color: #4a5568;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    margin-bottom: -2px;
}

.date-tab:hover {
    color: #2d3748;
    border-bottom-color: #cbd5e0;
}

.date-tab.active {
    color: #7a9cd1;
    border-bottom-color: #7a9cd1;
    font-weight: 700;
}

/* Notice */
.schedule-notice {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 1.8;
    color: #4a5568;
    text-align: center;
}

.schedule-notice strong {
    color: #2d3748;
    font-size: 18px;
}

/* Schedule Table */
.schedule-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 60px;
    border: 1px solid #e2e8f0;
}

.schedule-table thead {
    background: linear-gradient(135deg, #7a9cd1 0%, #6b8cce 100%);
    color: white;
}

.schedule-table th {
    padding: 12px 15px;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.schedule-table tbody tr {
    border-bottom: 1px solid #e2e8f0;
    background: white;
}

.schedule-table tbody tr:last-child {
    border-bottom: none;
}

.schedule-table td {
    padding: 10px 15px;
    font-size: 16px;
}

.center {
    text-align: center;
}

.placeholder {
}

/* Action Buttons */
.action-buttons {
    display: flex;
    justify-content: center;
}

.btn-back {
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #7a9cd1;
    color: white;
}

.btn-back:hover {
    background: #6b8cce;
}
</style>
