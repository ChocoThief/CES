<template>
    <div class="layout-container">
        <!-- Fixed Navigation -->
        <nav class="fixed-nav">
            <div class="nav-container">
                <router-link to="/pr" class="nav-title">2026 CES KOREA</router-link>
                <div class="nav-menu">
                    <router-link to="/pr/event-overview" class="nav-item">
                        Event Overview
                    </router-link>
                    <router-link to="/pr/companies" class="nav-item">
                        Exhibitors
                    </router-link>
                    <router-link to="/vip" class="nav-item">
                        Program
                    </router-link>
                </div>
            </div>
        </nav>

        <!-- Page Content -->
        <div class="page-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.layout-container {
    line-height: 1.6;
    color: #333;
    background-color: white;
}

/* Fixed Navigation */
.fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.nav-container {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
}

.nav-title {
    font-size: 20px;
    font-weight: 700;
    color: #2d3748;
    text-decoration: none;
    cursor: pointer;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 50px;
}

.nav-item {
    font-size: 18px;
    font-weight: 600;
    color: #4a5568;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
    position: relative;
}

.nav-item:hover {
    color: #7a9cd1;
}

/* Page Content */
.page-content {
    padding-top: 72px;
}
</style>
