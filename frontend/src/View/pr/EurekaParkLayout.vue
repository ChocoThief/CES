<template>
    <div class="booth-layout-detail-container">
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
                    <h1>Eureka Park</h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.<br />
                    * This website is optimized for PC use.
                </div>
            </div>
        </section>

        <!-- Layout Content Section -->
        <section class="content-section">
            <div class="layout-container">
                <!-- Left: Booth Layout Image -->
                <div class="layout-left">
                    <h2 class="section-title">배치도 (Booth Map)</h2>
                    <div class="layout-image-wrapper">
<img src="@/assets/eureka-layout.png" alt="Eureka Park 부스 배치도" class="layout-image">
                    </div>
                </div>

                <!-- Right: Company List -->
                <div class="layout-right">
                    <h2 class="section-title">참가 업체 리스트 (Exhibitor List)</h2>
                    <div class="company-list-wrapper">
                        <table class="company-table">
                            <thead>
                                <tr>
                                    <th>Booth Number</th>
                                    <th>Company Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="company in eurekaCompaniesSorted" :key="company.id">
                                    <td>{{ company.boothNumber }}</td>
                                    <td>{{ company.name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { eurekaCompaniesSorted } from '@/data/companyData';
</script>

<style scoped>
.booth-layout-detail-container {
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
    margin-bottom: 15px;
}

.subtitle {
    font-size: 18px;
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

/* Content Section */

.layout-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 60px;
}

.layout-left,
.layout-right {
    display: flex;
    flex-direction: column;
}

.section-title {
    font-size: 28px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}

/* Layout Image */
.layout-image-wrapper {
    background-color: white;;
    overflow: hidden;
    flex: 1;
}

.layout-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.layout-placeholder {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background-color: #f7fafc;
    border: 2px dashed #cbd5e0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.placeholder-text {
    font-size: 24px;
    font-weight: 700;
    color: #4a5568;
}

/* Company List */
.company-list-wrapper {
    flex: 1;
    overflow-y: auto;
    border: 1px solid #e2e8f0;
    max-height: 600px;
    text-align: center;
}

/* Custom Scrollbar */
.company-list-wrapper::-webkit-scrollbar {
    width: 8px;
}

.company-list-wrapper::-webkit-scrollbar-track {
    background: #f7fafc;
}

.company-list-wrapper::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 4px;
}

.company-list-wrapper::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
}

.company-table {
    width: 100%;
    border-collapse: collapse;
}

.company-table thead {
    position: sticky;
    top: 0;
    background-color: #2d3748;
    color: white;
    z-index: 10;
}

.company-table th {
    padding: 15px 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
}

.company-table th:first-child {
    width: 40%;
}

.company-table tbody tr {
    border-bottom: 1px solid #e2e8f0;
    transition: background-color 0.2s ease;
}

.company-table tbody tr:hover {
    background-color: #f7fafc;
}

.company-table tbody tr:last-child {
    border-bottom: none;
}

.company-table td {
    padding: 12px 20px;
    font-size: 15px;
    color: #4a5568;
}

/* Button Section */
.button-section {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 60px;
}

.nav-btn {
    flex: 1;
    padding: 15px 40px;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.back-btn {
    color: #4a5568;
    background-color: white;
    border-color: #cbd5e0;
}

.back-btn:hover {
    background-color: #f7fafc;
    border-color: #a0aec0;
}

.companies-btn {
    color: white;
    background-color: #7a9cd1;
    border-color: #7a9cd1;
}

.companies-btn:hover {
    background-color: #6b8cce;
    border-color: #6b8cce;
}
</style>
