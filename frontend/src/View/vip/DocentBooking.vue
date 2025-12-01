<template>
    <div class="booking-container">
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
                        {{
                            currentStep === 1
                                ? "도슨트 투어 이벤트 신청"
                                : "방문자 정보"
                        }}
                    </h1>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.
                </div>
            </div>

            <div class="content-wrapper">
                <!-- Step 1: Booking Form -->
                <div v-if="currentStep === 1" class="booking-form">
                    <!-- Date Selection -->
                    <div class="form-group fade-in">
                        <label class="form-label">날짜</label>
                        <select v-model="selectedDate" class="form-select">
                            <option value="">날짜를 선택해주세요</option>
                            <option value="1월 6일(화)">1월 6일(화)</option>
                            <option value="1월 7일(수)">1월 7일(수)</option>
                            <option value="1월 8일(목)">1월 8일(목)</option>
                            <option value="1월 9일(금)">1월 9일(금)</option>
                        </select>
                    </div>

                    <!-- Docent Tour Selection -->
                    <transition name="fade-slide">
                        <div v-if="selectedDate" class="form-group">
                            <label class="form-label">도슨트 투어</label>
                            <select v-model="selectedTour" class="form-select">
                                <option value="">도슨트를 선택해주세요</option>
                                <option value="도슨트A(영문)">
                                    도슨트A(영문)
                                </option>
                                <option value="도슨트B(국문)">
                                    도슨트B(국문)
                                </option>
                            </select>
                        </div>
                    </transition>

                    <!-- Time Selection -->
                    <transition name="fade-slide">
                        <div
                            v-if="selectedDate && selectedTour"
                            class="form-group"
                        >
                            <label class="form-label">타임</label>
                            <div class="time-slots">
                                <button
                                    v-for="time in availableTimes"
                                    :key="time.slot"
                                    @click="selectTime(time.slot)"
                                    :class="[
                                        'time-slot',
                                        {
                                            active: selectedTime === time.slot,
                                            disabled: !time.available,
                                        },
                                    ]"
                                    :disabled="!time.available"
                                >
                                    <div class="time">{{ time.slot }}</div>
                                    <div class="status">
                                        {{
                                            time.available
                                                ? "가 능"
                                                : "예약마감"
                                        }}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </transition>

                    <!-- Next Button -->
                    <div class="action-buttons">
                        <transition name="fade">
                            <button
                                v-if="canProceed"
                                @click="goToStep2"
                                class="btn-submit"
                            >
                                다음
                            </button>
                        </transition>
                    </div>
                </div>

                <!-- Step 2: Visitor Info Form -->
                <div v-if="currentStep === 2" class="info-form">
                    <!-- Booking Info (Read-only) -->
                    <div class="booking-info-section fade-in">
                        <h2 class="section-title">예약 정보</h2>
                        <div class="booking-info-grid">
                            <div class="info-row">
                                <div class="info-label">날짜</div>
                                <div class="info-value">{{ selectedDate }}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">도슨트</div>
                                <div class="info-value">{{ selectedTour }}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">타임</div>
                                <div class="info-value">{{ selectedTime }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Visitor Info Form -->
                    <div class="form-section fade-in">
                        <div class="form-group">
                            <label class="form-label required"
                                >방문자 대표명/직함</label
                            >
                            <input
                                v-model="formData.representative"
                                type="text"
                                class="form-input"
                                placeholder="ex) A사 OOO대표 / B사 OOO 사장"
                            />
                        </div>

                        <div class="form-group">
                            <label class="form-label required"
                                >현장 컨택 실무자명/직함</label
                            >
                            <input
                                v-model="formData.contact"
                                type="text"
                                class="form-input"
                                placeholder="ex) A사 OOO 부장 / B사 OOO 주무관"
                            />
                        </div>

                        <div class="form-group">
                            <label class="form-label required"
                                >현장 컨택 실무자 휴대번호</label
                            >
                            <input
                                v-model="formData.phone"
                                type="tel"
                                class="form-input"
                                placeholder="ex) 010-0000-0000"
                            />
                        </div>

                        <div class="form-group">
                            <label class="form-label required"
                                >현장 컨택 실무자 이메일</label
                            >
                            <input
                                v-model="formData.email"
                                type="email"
                                class="form-input"
                                placeholder="ex) 000@0000.000"
                            />
                        </div>

                        <div class="form-group">
                            <label class="form-label">관심 분야</label>
                            <input
                                v-model="formData.interests"
                                type="text"
                                class="form-input"
                                placeholder="(영문)"
                            />
                        </div>

                        <div class="form-group">
                            <label class="form-label required">방문인원</label>
                            <div class="input-note">
                                * 헤드셋 준비를 위해 가급적 자세히 적어주세요.
                            </div>
                            <input
                                v-model.number="formData.visitors"
                                type="number"
                                class="form-input"
                                min="1"
                                placeholder="ex) 10"
                            />
                        </div>

                        <div class="form-group">
                            <label class="form-label required"
                                >상세정보 작성</label
                            >
                            <textarea
                                v-model="formData.notes"
                                class="form-textarea"
                                placeholder="방문자 대표 외 참여자 명단, 기타 참고 사항 등"
                                rows="6"
                            ></textarea>
                        </div>

                        <!-- Form Notes -->
                        <div class="form-notes">
                            <p>
                                ※ 정확한 안내 및 현장 준비를 위해 모든 항목은
                                상세히 기재 부탁드립니다.
                            </p>
                            <p>
                                ※ 본 예약은 접수 후 검토 과정을 거쳐 확정됩니다.
                                운영 사정에 따라 예약이 변경되거나 취소될 수
                                있습니다.
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="action-buttons">
                            <button @click="goToStep1" class="btn-back">
                                이전
                            </button>
                            <button
                                @click="submitForm"
                                :disabled="!isFormValid"
                                class="btn-submit"
                            >
                                완료하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { docentReservationApi } from "@/lib/api";

const router = useRouter();

// Current step
const currentStep = ref(1);

// Step 1: Booking data
const selectedDate = ref("");
const selectedTour = ref("");
const selectedTime = ref("");

// Step 2: Visitor data
const formData = ref({
    representative: "",
    contact: "",
    phone: "",
    email: "",
    interests: "",
    visitors: "",
    notes: "",
});

// Submission state
const isSubmitting = ref(false);

// 슬롯 데이터 (API에서 로드)
const slotsData = ref({});
const isLoadingSlots = ref(true);

// Date mapping for API
const dateMapping = {
    "1월 6일(화)": "2025-01-06",
    "1월 7일(수)": "2025-01-07",
    "1월 8일(목)": "2025-01-08",
    "1월 9일(금)": "2025-01-09",
};

// Tour mapping for API
const tourMapping = {
    "도슨트A(영문)": "A",
    "도슨트B(국문)": "B",
};

// 슬롯 데이터 로드
const loadAvailableSlots = async () => {
    try {
        isLoadingSlots.value = true;
        const response = await docentReservationApi.getAvailableSlots();
        slotsData.value = response.slots;
    } catch (error) {
        console.error("Failed to load slots:", error);
    } finally {
        isLoadingSlots.value = false;
    }
};

onMounted(() => {
    loadAvailableSlots();
});

// 날짜나 도슨트 변경 시 선택된 시간 초기화
watch([selectedDate, selectedTour], () => {
    selectedTime.value = "";
});

// Available times based on selected date and tour
const availableTimes = computed(() => {
    if (!selectedDate.value || !selectedTour.value) return [];

    const dateKey = dateMapping[selectedDate.value];
    const tourKey = tourMapping[selectedTour.value];

    if (!slotsData.value[dateKey] || !slotsData.value[dateKey][tourKey]) {
        return [];
    }

    return slotsData.value[dateKey][tourKey];
});

const canProceed = computed(() => {
    return selectedDate.value && selectedTour.value && selectedTime.value;
});

const isFormValid = computed(() => {
    return (
        formData.value.representative.trim() !== "" &&
        formData.value.contact.trim() !== "" &&
        formData.value.phone.trim() !== "" &&
        formData.value.email.trim() !== "" &&
        formData.value.visitors >= 1 &&
        formData.value.notes.trim() !== ""
    );
});

const selectTime = (time) => {
    selectedTime.value = time;
};

const goToStep2 = () => {
    if (!canProceed.value) return;
    currentStep.value = 2;
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const goToStep1 = () => {
    currentStep.value = 1;
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const submitForm = async () => {
    if (!isFormValid.value || isSubmitting.value) return;

    isSubmitting.value = true;

    try {
        const payload = {
            reservationDate: dateMapping[selectedDate.value],
            docentType: tourMapping[selectedTour.value],
            timeSlot: selectedTime.value,
            representative: formData.value.representative,
            contact: formData.value.contact,
            phone: formData.value.phone,
            email: formData.value.email,
            interests: formData.value.interests,
            visitorCount: formData.value.visitors,
            notes: formData.value.notes,
        };

        await docentReservationApi.create(payload);

        alert("도슨트 투어 예약이 완료되었습니다!");
        router.push("/vip");
    } catch (error) {
        console.error("Reservation error:", error);
        const errorMessage =
            error.response?.data?.error ||
            "예약 중 오류가 발생했습니다. 다시 시도해주세요.";
        alert(errorMessage);
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.booking-container {
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
    padding: 100px 50px;
}

/* Animations */
.fade-in {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-slide-enter-active {
    animation: fadeSlideIn 0.4s ease-out;
}

.fade-slide-leave-active {
    animation: fadeSlideOut 0.3s ease-in;
}

@keyframes fadeSlideIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeSlideOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

.fade-enter-active {
    animation: fadeOnly 0.3s ease-in;
}

.fade-leave-active {
    animation: fadeOnlyOut 0.2s ease-out;
}

@keyframes fadeOnly {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOnlyOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

/* Booking Form */
.booking-form {
    max-width: 700px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 50px;
}

.form-label {
    display: block;
    font-size: 22px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 20px;
    text-align: left;
}

.form-select {
    width: 100%;
    padding: 18px 20px;
    font-size: 18px;
    border: 1px solid #cbd5e0;
    background: white;
    color: #333;
    cursor: pointer;
    transition: border-color 0.2s ease;
    border-radius: 8px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("../assets/caret-down.svg");
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 12px;
    padding-right: 50px;
}

.form-select:focus {
    outline: none;
    border-color: #7a9cd1;
}

/* Time Slots */
.time-slots {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.time-slot {
    padding: 25px 15px;
    border: 2px solid #e2e8f0;
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
    border-radius: 8px;
}

.time-slot .time {
    font-size: 22px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 8px;
}

.time-slot .status {
    font-size: 16px;
    color: #4a5568;
}

.time-slot:hover:not(.disabled) {
    border-color: #cbd5e0;
}

.time-slot.active {
    border-color: #7a9cd1;
    background: #7a9cd1;
}

.time-slot.active .time,
.time-slot.active .status {
    color: white;
}

.time-slot.disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.time-slot.disabled .status {
    color: #a0aec0;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}

.btn-submit {
    padding: 15px 80px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: linear-gradient(135deg, #2d3748 0%, #1a242f 100%);
    color: white;
    border-radius: 8px;
}

.btn-submit:hover:not(:disabled) {
    background: linear-gradient(135deg, #1a242f 0%, #0f161d 100%);
}

.btn-submit:disabled {
    background: #cbd5e0;
    cursor: not-allowed;
}

/* Info Form (Step 2) */
.info-form {
    max-width: 700px;
    margin: 0 auto;
}

.booking-info-section {
    margin-bottom: 60px;
    padding: 30px;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
}

.section-title {
    font-size: 24px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 25px;
}

.booking-info-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.info-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 20px;
    align-items: center;
}

.info-label {
    font-size: 16px;
    font-weight: 600;
    color: #4a5568;
}

.info-value {
    font-size: 16px;
    color: #2d3748;
}

.form-section {
    animation: fadeIn 0.5s ease-in;
}

.form-label.required::after {
    content: " *";
    color: #e53e3e;
}

.input-note {
    font-size: 14px;
    color: #718096;
    margin-bottom: 10px;
    text-align: left;
}

.form-input {
    width: 100%;
    padding: 15px 20px;
    font-size: 16px;
    border: 1px solid #cbd5e0;
    background: white;
    color: #333;
    transition: border-color 0.2s ease;
    border-radius: 8px;
}

.form-input:focus {
    outline: none;
    border-color: #7a9cd1;
}

.form-input::placeholder {
    color: #cbd5e0;
}

/* Remove number input spinner */
.form-input[type="number"]::-webkit-inner-spin-button,
.form-input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.form-input[type="number"] {
    -moz-appearance: textfield;
}

.form-textarea {
    width: 100%;
    padding: 15px 20px;
    font-size: 16px;
    border: 1px solid #cbd5e0;
    background: white;
    color: #333;
    transition: border-color 0.2s ease;
    border-radius: 8px;
    resize: vertical;
    font-family: inherit;
}

.form-textarea:focus {
    outline: none;
    border-color: #7a9cd1;
}

.form-textarea::placeholder {
    color: #cbd5e0;
}

.form-notes {
    margin: 40px 0;
    padding: 20px;
    background: #fff5f5;
    border-radius: 8px;
}

.form-notes p {
    font-size: 14px;
    color: #4a5568;
    line-height: 1.8;
    margin: 8px 0;
}

.btn-back {
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid #2d3748;
    background: white;
    color: #2d3748;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 8px;
    margin-right: 15px;
}

.btn-back:hover {
    background: #f7fafc;
    border-color: #1a242f;
}

.action-buttons {
    gap: 15px;
}
</style>
