<template>
    <div class="back-button-container">
        <button @click="goBack" class="back-btn">
            뒤로가기 / Back
        </button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.back();
};
</script>

<style scoped>
.back-button-container {
    max-width: 980px;
    margin: 0 auto;
    padding: 20px 0 60px 0;
}

.back-btn {
    padding: 10px 24px;
    font-size: 16px;
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
