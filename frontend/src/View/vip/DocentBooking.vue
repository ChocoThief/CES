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
                    <p class="title-english">
                        {{
                            currentStep === 1
                                ? "(Docent Tour Event Application)"
                                : "(Visitor Information)"
                        }}
                    </p>
                </div>
                <div class="pc-notice">
                    *해당 홈페이지는 PC에 최적화되어있습니다.
                </div>
            </div>

            <div class="content-wrapper">
                <!-- Step 1: Booking Form -->
                <div v-if="currentStep === 1" class="booking-form">
                    <!-- Meeting Point Section -->
                    <div class="meeting-point-section fade-in">
                        <div class="meeting-point-image-wrapper">
                            <img
                                src="@/assets/meeting-point.png"
                                alt="집결지 안내"
                                class="meeting-point-image"
                            />
                            <span class="meeting-point-label">집결지(Tour Meeting Point)</span>
                        </div>

                        <div class="reservation-notice">
                            <h3 class="notice-title">[예약 안내]</h3>
                            <ol class="notice-list">
                                <li>예약 기간은 한국시간 기준 12월 17일 오후 6시까지입니다.</li>
                                <li>신청하신 시간대를 바탕으로 운영팀이 일정 조율 후 최종 투어 시간을 배정합니다.<br/>
                                    운영 사정에 따라 예약이 변경되거나 취소될 수 있습니다.</li>
                                <li>예약 확정 여부 및 최종 배정 시간은 개별적으로 안내드립니다.</li>
                                <li>투어는 예약된 시간에 맞춰 Eureka Park관 내 OFFICE에서 진행됩니다.<br/>
                                    원활한 진행을 위해 지정된 투어 시간에 맞추어 방문 부탁드립니다.</li>
                            </ol>
                            <ol class="notice-list notice-list-en">
                                <li>The reservation period is open until 6:00 PM on December 17 (KST).</li>
                                <li>Based on your selected time slot(s), the operations team will coordinate the schedule and assign the final tour time.<br/>
                                    Please note that your reservation may be adjusted or canceled depending on operational circumstances.</li>
                                <li>You will be notified individually regarding the confirmation of your reservation and your final assigned tour time.</li>
                                <li>The tour will take place at the OFFICE located inside the Eureka Park Pavilion at your scheduled time.<br/>
                                    Please arrive on time to ensure a smooth tour experience.</li>
                            </ol>
                        </div>
                    </div>

                    <!-- Date Selection -->
                    <div class="form-group fade-in">
                        <label class="form-label">날짜(Date)</label>
                        <select v-model="selectedDate" class="form-select">
                            <option value="">날짜를 선택해주세요</option>
                            <option value="1월 6일(화)">1월 6일(화) / 6 Jan 2025 (Tue)</option>
                            <option value="1월 7일(수)">1월 7일(수) / 7 Jan 2025 (Wed)</option>
                            <option value="1월 8일(목)">1월 8일(목) / 8 Jan 2025 (Thu)</option>
                            <option value="1월 9일(금)">1월 9일(금) / 9 Jan 2025 (Fri)</option>
                        </select>
                    </div>

                    <!-- Docent Tour Selection -->
                    <transition name="fade-slide">
                        <div v-if="selectedDate" class="form-group">
                            <label class="form-label">도슨트 투어(Docent Tour)</label>
                            <select v-model="selectedTour" class="form-select">
                                <option value="">도슨트를 선택해주세요</option>
                                <option value="투어A(영문)">
                                    투어A (영문) / Tour A in English
                                </option>
                                <option value="투어B(국문)">
                                    투어B (국문) / Tour B in Korean
                                </option>
                            </select>
                        </div>
                    </transition>

                    <!-- Time Selection - Button Format -->
                    <transition name="fade-slide">
                        <div
                            v-if="selectedDate && selectedTour"
                            class="form-group"
                        >
                            <div class="form-label-row">
                                <label class="form-label">타임(Time)</label>
                                <span class="legend-reserved">
                                    <span class="legend-box"></span>
                                    예약마감
                                </span>
                            </div>
                            <div class="time-slots">
                                <button
                                    v-for="slot in getVisibleTimeSlots"
                                    :key="slot"
                                    :class="[
                                        'time-slot',
                                        {
                                            'available': !isSlotReserved(slot),
                                            'reserved': isSlotReserved(slot),
                                            'selected': selectedTime === slot
                                        }
                                    ]"
                                    :disabled="isSlotReserved(slot)"
                                    @click="selectTimeSlot(slot)"
                                >
                                    {{ slot }}
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
                                예약하기(Reserve)
                            </button>
                        </transition>
                    </div>
                </div>

                <!-- Step 2: Visitor Info Form -->
                <div v-if="currentStep === 2" class="info-form">
                    <!-- Booking Info (Read-only) -->
                    <div class="booking-info-section fade-in">
                        <h2 class="section-title">예약 정보(Reservation Details)</h2>
                        <div class="booking-info-grid">
                            <div class="info-row">
                                <div class="info-label">날짜(Date)</div>
                                <div class="info-value">{{ getDisplayDate }}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">도슨트(Docent)</div>
                                <div class="info-value">{{ getDisplayTour }}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">타임(Time)</div>
                                <div class="info-value">{{ selectedTime }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Visitor Info Form -->
                    <div class="form-section fade-in">
                        <div class="form-group" ref="representativeRef">
                            <label class="form-label required"
                                >방문자 대표명/직함(Lead Visitor Name / Position)</label
                            >
                            <textarea
                                v-model="formData.representative"
                                :class="['form-input', 'form-input-multiline', { 'input-error': fieldErrors.representative }]"
                                rows="2"
                                placeholder="ex) A사 OOO대표 / B사 OOO 사장&#10;ex) CEO OOO of Company A / Director OOO of Company B"
                            ></textarea>
                            <p v-if="fieldErrors.representative" class="field-error">{{ fieldErrors.representative }}</p>
                        </div>

                        <div class="form-group" ref="contactRef">
                            <label class="form-label required"
                                >현장 컨택 실무자명/직함(On-site Contact Person / Position)
                                </label
                            >
                            <textarea
                                v-model="formData.contact"
                                :class="['form-input', 'form-input-multiline', { 'input-error': fieldErrors.contact }]"
                                rows="2"
                                placeholder="ex) A사 OOO 부장 / B사 OOO 주무관&#10;ex) Deputy Director OOO of Company A / Manager OOO of Company B"
                            ></textarea>
                            <p v-if="fieldErrors.contact" class="field-error">{{ fieldErrors.contact }}</p>
                        </div>

                        <div class="form-group" ref="phoneRef">
                            <label class="form-label required"
                                >현장 컨택 실무자 휴대번호(Mobile)</label
                            >
                            <input
                                v-model="formData.phone"
                                type="tel"
                                :class="['form-input', { 'input-error': fieldErrors.phone }]"
                                placeholder="000-0000-0000"
                            />
                            <p v-if="fieldErrors.phone" class="field-error">{{ fieldErrors.phone }}</p>
                        </div>

                        <div class="form-group" ref="emailRef">
                            <label class="form-label required"
                                >현장 컨택 실무자 이메일(Email)</label
                            >
                            <input
                                v-model="formData.email"
                                type="email"
                                :class="['form-input', { 'input-error': fieldErrors.email }]"
                                placeholder="000@0000.000"
                            />
                            <p v-if="fieldErrors.email" class="field-error">{{ fieldErrors.email }}</p>
                        </div>

                        <div class="form-group" ref="interestsRef">
                            <label class="form-label required">관심분야(Participants)</label>
                            <input
                                v-model="formData.interests"
                                type="text"
                                :class="['form-input', { 'input-error': fieldErrors.interests }]"
                                placeholder="(영문)"
                            />
                            <p v-if="fieldErrors.interests" class="field-error">{{ fieldErrors.interests }}</p>
                        </div>

                        <div class="form-group" ref="visitorsRef">
                            <label class="form-label required">방문인원(Number of Visitors)</label>
                            <div class="input-note">
                                * 헤드셋 준비를 위해 가급적 자세히 적어주세요.<br/>
                                * Please specify details for headset preparation.
                            </div>
                            <input
                                v-model.number="formData.visitors"
                                type="number"
                                :class="['form-input', { 'input-error': fieldErrors.visitors }]"
                                min="1"
                                placeholder="1"
                            />
                            <p v-if="fieldErrors.visitors" class="field-error">{{ fieldErrors.visitors }}</p>
                        </div>

                        <div class="form-group" ref="notesRef">
                            <label class="form-label required"
                                >상세정보 작성(Enter Details)</label
                            >
                            <textarea
                                v-model="formData.notes"
                                :class="['form-textarea', { 'input-error': fieldErrors.notes }]"
                                placeholder="방문자 대표 외 참여자 명단, 기타 참고 사항 등&#10;Names of participants other than the lead visitor, additional notes, etc."
                                rows="6"
                            ></textarea>
                            <p v-if="fieldErrors.notes" class="field-error">{{ fieldErrors.notes }}</p>
                        </div>

                        <!-- Form Notes -->
                        <div class="form-notes">
                            <p>
                                ※ 정확한 안내 및 현장 준비를 위해 모든 항목은 상세히 기재 부탁드립니다.
                            </p>
                            <p>
                                ※ 본 예약은 접수 후 검토 과정을 거쳐 확정됩니다. 운영 사정에 따라 예약이 변경되거나 취소될 수 있습니다.
                            </p>
                            <p>
                                ※ For accurate guidance and on-site preparation, please complete all fields in detail.
                            </p>
                            <p>
                                ※ This reservation will be confirmed after a review process. It may be modified or canceled depending on operational circumstances.
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="action-buttons">
                            <button @click="goToStep1" class="btn-back">
                                이전
                            </button>
                            <button
                                @click="submitForm"
                                class="btn-submit"
                            >
                                완료하기(Submit)
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
    "투어A(영문)": "A",
    "투어B(국문)": "B",
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

// 모든 시간 슬롯 (12개)
const allTimeSlots = [
    "10:00 ~ 10:30",
    "10:30 ~ 11:00",
    "11:00 ~ 11:30",
    "11:30 ~ 12:00",
    "13:00 ~ 13:30",
    "13:30 ~ 14:00",
    "14:00 ~ 14:30",
    "14:30 ~ 15:00",
    "15:00 ~ 15:30",
    "15:30 ~ 16:00",
    "16:00 ~ 16:30",
    "16:30 ~ 17:00",
];

// 6, 7일에는 없는 시간대 (10:00~10:30, 10:30~11:00, 14:00~14:30, 14:30~15:00)
const limitedDaySlots = [
    "11:00 ~ 11:30",
    "11:30 ~ 12:00",
    "13:00 ~ 13:30",
    "13:30 ~ 14:00",
    "15:00 ~ 15:30",
    "15:30 ~ 16:00",
    "16:00 ~ 16:30",
    "16:30 ~ 17:00",
];

// 선택된 날짜에 따른 시간 슬롯 헤더
const getTimeSlotHeaders = computed(() => {
    return allTimeSlots;
});

// 실제로 보여줄 시간 슬롯 (6,7일은 8개, 8,9일은 12개)
const getVisibleTimeSlots = computed(() => {
    if (isLimitedDay.value) {
        return limitedDaySlots;
    }
    return allTimeSlots;
});

// 선택된 날짜가 6,7일인지 확인
const isLimitedDay = computed(() => {
    return selectedDate.value === "1월 6일(화)" || selectedDate.value === "1월 7일(수)";
});

// 해당 슬롯이 스케줄에 포함되는지 확인 (날짜에 따라)
const isSlotInSchedule = (slot) => {
    if (isLimitedDay.value) {
        return limitedDaySlots.includes(slot);
    }
    return true;
};

// 테이블에 표시할 날짜 형식
const getSelectedDateForTable = computed(() => {
    const dateMap = {
        "1월 6일(화)": "2025.01.06.",
        "1월 7일(수)": "2025.01.07.",
        "1월 8일(목)": "2025.01.08.",
        "1월 9일(금)": "2025.01.09.",
    };
    return dateMap[selectedDate.value] || "";
});

// 예약 정보에 표시할 날짜 형식 (영문 포함)
const getDisplayDate = computed(() => {
    const dateMap = {
        "1월 6일(화)": "1월 6일(화) / 6 Jan 2025 (Tue)",
        "1월 7일(수)": "1월 7일(수) / 7 Jan 2025 (Wed)",
        "1월 8일(목)": "1월 8일(목) / 8 Jan 2025 (Thu)",
        "1월 9일(금)": "1월 9일(금) / 9 Jan 2025 (Fri)",
    };
    return dateMap[selectedDate.value] || selectedDate.value;
});

// 예약 정보에 표시할 도슨트 형식 (영문 포함)
const getDisplayTour = computed(() => {
    const tourMap = {
        "투어A(영문)": "투어A (영문) / Tour A in English",
        "투어B(국문)": "투어B (국문) / Tour B in Korean",
    };
    return tourMap[selectedTour.value] || selectedTour.value;
});

// 슬롯이 예약 완료되었는지 확인 (API 데이터 사용)
const isSlotReserved = (slot) => {
    if (!selectedDate.value || !selectedTour.value) return false;

    const dateKey = dateMapping[selectedDate.value];
    const tourKey = tourMapping[selectedTour.value];

    if (!slotsData.value[dateKey] || !slotsData.value[dateKey][tourKey]) {
        return false;
    }

    // API 응답: { slot: "10:00 ~ 10:30", available: true/false }
    const slotInfo = slotsData.value[dateKey][tourKey].find(s => s.slot === slot);
    return slotInfo ? !slotInfo.available : false;
};

// 슬롯 사용 가능 여부
const isSlotAvailable = (slot) => {
    return isSlotInSchedule(slot) && !isSlotReserved(slot);
};

// 시간 슬롯 선택
const selectTimeSlot = (slot) => {
    if (isSlotInSchedule(slot) && isSlotAvailable(slot)) {
        selectedTime.value = slot;
    }
};

// Available times based on selected date and tour (기존 호환용)
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

// Field refs for scrolling
const representativeRef = ref(null);
const contactRef = ref(null);
const phoneRef = ref(null);
const emailRef = ref(null);
const interestsRef = ref(null);
const visitorsRef = ref(null);
const notesRef = ref(null);

// Field errors
const fieldErrors = ref({
    representative: "",
    contact: "",
    phone: "",
    email: "",
    interests: "",
    visitors: "",
    notes: "",
});

const clearFieldErrors = () => {
    fieldErrors.value = {
        representative: "",
        contact: "",
        phone: "",
        email: "",
        interests: "",
        visitors: "",
        notes: "",
    };
};

const validateForm = () => {
    clearFieldErrors();
    let firstErrorRef = null;

    if (!formData.value.representative.trim()) {
        fieldErrors.value.representative = "방문자 대표명/직함을 입력해주세요.";
        if (!firstErrorRef) firstErrorRef = representativeRef;
    }
    if (!formData.value.contact.trim()) {
        fieldErrors.value.contact = "현장 컨택 실무자명/직함을 입력해주세요.";
        if (!firstErrorRef) firstErrorRef = contactRef;
    }
    if (!formData.value.phone.trim()) {
        fieldErrors.value.phone = "현장 컨택 실무자 휴대번호를 입력해주세요.";
        if (!firstErrorRef) firstErrorRef = phoneRef;
    }
    if (!formData.value.email.trim()) {
        fieldErrors.value.email = "현장 컨택 실무자 이메일을 입력해주세요.";
        if (!firstErrorRef) firstErrorRef = emailRef;
    }
    if (!formData.value.interests.trim()) {
        fieldErrors.value.interests = "관심분야를 입력해주세요.";
        if (!firstErrorRef) firstErrorRef = interestsRef;
    }
    if (!formData.value.visitors || formData.value.visitors < 1) {
        fieldErrors.value.visitors = "방문인원을 1명 이상 입력해주세요.";
        if (!firstErrorRef) firstErrorRef = visitorsRef;
    }
    if (!formData.value.notes.trim()) {
        fieldErrors.value.notes = "상세정보를 입력해주세요.";
        if (!firstErrorRef) firstErrorRef = notesRef;
    }

    // Scroll to first error
    if (firstErrorRef && firstErrorRef.value) {
        firstErrorRef.value.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const hasErrors = Object.values(fieldErrors.value).some(e => e !== "");
    return !hasErrors;
};

const goToStep2 = () => {
    if (!canProceed.value) return;
    currentStep.value = 2;
    clearFieldErrors();
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const goToStep1 = () => {
    currentStep.value = 1;
    clearFieldErrors();
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const submitForm = async () => {
    if (!validateForm() || isSubmitting.value) return;

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
    margin-bottom: 10px;
}

.title-english {
    font-size: 34px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
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

/* Meeting Point Section */
.meeting-point-section {
    margin-bottom: 60px;
}

.meeting-point-image-wrapper {
    position: relative;
    overflow: visible;
    max-width: 100%;
}

.meeting-point-image {
    width: 100%;
    height: auto;
    display: block;
}

.meeting-point-label {
    position: absolute;
    top: 22%;
    left: -17%;
    color: #e53e3e;
    font-size: 30px;
    font-weight: 700;
}

.reservation-notice {
    margin-top: 30px;
    padding: 25px;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
}

.notice-title {
    font-size: 18px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 15px;
    text-align: center;
}

.notice-list {
    text-align: left;
    padding-left: 20px;
    margin: 0 0 20px 0;
}

.notice-list li {
    font-size: 14px;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 8px;
}

.notice-list-en {
    margin-bottom: 0;
    padding-top: 15px;
    border-top: 1px solid #e2e8f0;
}

.notice-list-en li {
    color: #4a5568;
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

/* Time Slots Button Styles */
.time-slots {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.time-slot {
    padding: 14px 10px;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #cbd5e0;
    background: white;
    color: #2d3748;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 6px;
}

.time-slot.available:not(.selected):hover {
    background: #edf2f7;
    border-color: #a0aec0;
}

.time-slot.selected {
    background: #2d3748;
    color: white;
}

.time-slot.reserved {
    background: #cbd5e0;
    color: #718096;
    cursor: not-allowed;
    border-color: #e2e8f0;
}

/* Form Label Row */
.form-label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.form-label-row .form-label {
    margin-bottom: 0;
}

.legend-reserved {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #4a5568;
}

.legend-reserved .legend-box {
    width: 18px;
    height: 18px;
    background: #cbd5e0;
    border-radius: 4px;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}

.btn-submit {
    padding: 15px 40px;
    font-size: 18px;
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

.form-input-multiline {
    resize: none;
    font-family: inherit;
    line-height: 1.5;
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
    text-align: left;
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

/* Field Validation Errors */
.field-error {
    text-align: left;
    font-size: 13px;
    color: #c53030;
    margin-top: 6px;
    margin-bottom: 0;
}

.input-error {
    border-color: #fc8181 !important;
    background-color: #fff5f5 !important;
}

.input-error:focus {
    border-color: #c53030 !important;
}
</style>
