<template>
  <div class="ces-survey-container">
    <!-- Section 1: Main Title -->
    <section class="main-header">
      <div class="header-top">
        <div class="ces-logo">
          <img src="../assets/CES-logo.png" alt="CES Logo" class="logo-icon">
        </div>
        <div class="title-container">
          <h1>CES 2026 통합한국관 <br> 참가사 수요조사 </h1>
        </div>
      </div>

      <div class="korea-logo-container">
        <img src="../assets/korea-logo.png" alt="KOREA Logo" class="korea-logo-img">
      </div>

      <div class="content-wrapper">
        <div class="schedule-info">
          <p><strong>참가사 전시물 설치가능 기간</strong> :</p>
          <p><strong>전시 기간</strong> : 2026년 1월6일(화) ~ 9일(금) / 4일간</p>
          <p><strong>철수 기간</strong> : 2026년 1월 9일 오후 4시</p>
        </div>

        <div class="notice-section">
          <h3>유의사항</h3>
          <ul>
            <li>1. 영문명 작성은 공식 상호(CTA 승인 명칭 기준) 기재 부탁드립니다.
              <ul class="notice-sub-list">
                <li>* 표기 내역에 따라 모든 제작에 사용 됩니다.</li>
                <li>* 영문 대소 문자 및 띄어쓰기 등 국제 표기에 맞도록 주의 부탁드립니다.</li>
              </ul>
            </li>
            <li>2. 부스 간판명은 가로타입 (Horizontal 1line) 1줄 기준으로 적용됩니다.</li>
            <li>3. 홍보 그래픽의 경우, 오타 및 검수는 사전에 진행 부탁 드리며, 현지 여건상 수정이 불가 할 수 있습니다.</li>
            <li>4. 당 신청 파일은 <span class="highlight">2025년 11월 28일(금)</span>까지 작성 완료해 주시기 바랍니다.</li>
          </ul>
        </div>

        <div class="notice-section">
          <h3>공통</h3>
          <ul>
            <li>1. 기본 제공 사항을 제외한 추가 요청 및 신청사항은 별도 과금 됩니다.
              <ul class="notice-sub-list">
                <li>* 현장에서 추가 요청되는 사항은 CES 공식 업체를 통하여 제공되며, 추과 과금(할증) 또는 불가 할 수 있습니다. </li>
              </ul>
            </li>
            <li>2. 기타 요청 사항은 담당자 문의 부탁드립니다.
              <ul class="notice-sub-list">
                <li>• 장치관련 문의 (전시부스, 비품 등)
                  <ul class="notice-sub-list">
                    <li>- Eureka Park관 : 윤지수 대리 / 02-501-8694 / ces2026.ep@gmail.com</li>
                    <li>- Global Pavillion관 : 이정인 사원 / 070-8645-0638 / ces2026j@gmail.com</li>
                    <li>- 장치사 대표번호 : 02-501-0836</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>운영관련 문의 (제품시연회, 도슨트 투어, 통역 등) : 070-7790-0257</li>
          </ul>
        </div>

        <div class="notice-section">
          <h3>기본 제공 내역</h3>
          <ul>
            <li>1. Eureka Park관
              <ul class="notice-sub-list">
                <li>1) 그래픽 : 월(wall)그래픽 1ea / DP용 테이블 1ea </li>
                <li>2) 가구 : DP용 테이블 1ea / 스툴 의자 1ea / 휴지통 1ea</li>
                <li>3) 전력 : 110v (개별부스당 1kw) 1구 콘센트</li>
                <li>4) 영상 : 40inch TV</li>
              </ul>
            </li>
            <li>2. Global Pavillion관
              <ul class="notice-sub-list">
                <li>1) 그래픽 : 월(wall)그래픽 1ea</li>
                <li>2) 가구 : DP용 테이블 1ea / 스툴 의자 1ea / 휴지통 1ea</li>
                <li>3) 전력 : 110v (개별부스당 1kw) 멀티탭 1ea</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="notice-section ">
          <h3 class="middle-title">1. 참가사 기본 제공</h3>
          <form @submit.prevent="submitForm" class="form">
            <div class="form-grid">
              <div class="form-group">
                <label for="booth-type">주관기관을 선택해주세요*</label>
                <select id="booth-type" v-model="formData.boothType" @change="updateBoothNumbers" required>
                  <option value="">선택</option>
                  <option value="eureka">Eureka Park관</option>
                  <option value="global">Global Pavillion관</option>
                </select>
              </div>

              <div class="form-group">
                <label for="booth-num">부스번호를 입력해주세요*</label>
                <select id="booth-num" v-model="formData.boothNumber" required>
                  <option value="">선택</option>
                  <option v-for="booth in boothNumbers" :key="booth.value" :value="booth.value">
                    {{ booth.label }}
                  </option>
                </select>
              </div>
            </div>

            <div class="company-info-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="company-kr">회사명 국문*</label>
                  <input type="text" id="company-kr" v-model="formData.companyKr" placeholder="국문 입력" required>
                </div>
                <div class="form-group">
                  <label for="company-en">회사명 영문*</label>
                  <input type="text" id="company-en" v-model="formData.companyEn" placeholder="띄어쓰기, 대소문자 구분, 국제 표기법"
                    required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="ceo-kr">대표자명 국문*</label>
                  <input type="text" id="ceo-kr" v-model="formData.ceoKr" placeholder="국문 입력" required>
                </div>
                <div class="form-group">
                  <label for="ceo-en">대표자명 영문*</label>
                  <input type="text" id="ceo-en" v-model="formData.ceoEn" placeholder="영문 입력" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="website">홈페이지*</label>
                  <input type="url" id="website" v-model="formData.website" placeholder="홈페이지 주소" required>
                </div>
                <div class="form-group">
                  <label for="phone">대표연락처*</label>
                  <input type="tel" id="phone" v-model="formData.phone" placeholder="전화번호" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="address-kr">회사주소 국문*</label>
                  <input type="text" id="address-kr" v-model="formData.addressKr" placeholder="국문 입력" required>
                </div>
                <div class="form-group">
                  <label for="address-en">회사주소 영문*</label>
                  <input type="text" id="address-en" v-model="formData.addressEn" placeholder="띄어쓰기, 대소문자 구분, 국제 표기법"
                    required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name">담당자명*</label>
                  <input type="text" id="contact-name" v-model="formData.contactName" placeholder="담당자 성명" required>
                </div>
                <div class="form-group">
                  <label for="contact-position">담당자 직위*</label>
                  <input type="text" id="contact-position" v-model="formData.contactPosition" placeholder="직위" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="department">부서*</label>
                  <input type="text" id="department" v-model="formData.department" placeholder="부서 명" required>
                </div>
                <div class="form-group">
                  <label for="contact-mobile">담당자 연락처 (핸드폰)*</label>
                  <input type="tel" id="contact-mobile" v-model="formData.contactMobile" placeholder="핸드폰 번호" required>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="notice-section">
          <h3 class="middle-title">부스 레이아웃 참고 이미지</h3>
          <div class="booth-images">
            <div class="eureka-booth">
              <h4>&lt;Eureka Park관 부스표기 참고 이미지&gt;</h4>
              <div class="booth-image-placeholder">
                <img src="@/assets/Eureka-Park.png" alt="Eureka Park관 부스표기 참고 이미지">
              </div>
            </div>

            <div class="global-booth">
              <h4>&lt;Global Pavillion관 부스표기 참고 이미지&gt;</h4>
              <div class="booth-image-placeholder">
                <img src="@/assets/Global-Pavillion1.png" alt="Global Pavillion관 부스표기 참고 이미지">
                <img src="@/assets/Global-Pavillion2.png" alt="Global Pavillion관 부스표기 참고 이미지">
              </div>
            </div>
          </div>
          <div class="promo-form">
            <div class="form-group">
              <label for="company-display">1) 기업명 표기 내역 (정보 양식과 함께 부스 간판에 표기될 정확한 공식 상호를 기재)*</label>
              <input type="text" id="company-display" v-model="formData.companyDisplay" placeholder="영문으로 작성" required>
            </div>

            <div class="form-group file-upload">
              <label for="company-logo">2) 기업 로고 (CI) : 기업명 표기와 함께 사용될 회사 로고 심볼 및 워드 마크 등 CI 표기내역 첨부*</label>
              <div class="file-upload-area">
                <input type="file" id="company-logo" @change="handleFileUpload('companyLogo', $event)"
                  accept=".ai,.pdf,.eps" required>
                <span class="file-upload-text">+ 파일 업로드</span>
              </div>
              <p class="file-note">* 첨부 시 Vector 기반의 출력용 파일 제출 (**.ai_Adobe illustrator 방식 제출)<br>
                * 컬러 타입 1종 및 백색 단도 1종 제출</p>
            </div>

            <div class="form-group file-upload">
              <label for="promo-graphic">3) 홍보 그래픽 (공통) : 부스 후부 벽면 부착형 홍보 그래픽 파일 (오타 검수 및 교정 필수)*</label>
              <div class="file-upload-area">
                <input type="file" id="promo-graphic" @change="handleFileUpload('promoGraphic', $event)"
                  accept=".ai,.psd,.pdf,.eps" required>
                <span class="file-upload-text">+ 파일 업로드</span>
              </div>
            </div>

            <div class="form-group file-upload">
              <label for="table-graphic">4) 홍보 그래픽 (EP관 전용) : 진열 테이블 전면용 그래픽 파일 (오타 검수 및 교정 필수)*</label>
              <div class="file-upload-area">
                <input type="file" id="table-graphic" @change="handleFileUpload('tableGraphic', $event)"
                  accept=".ai,.psd,.pdf,.eps">
                <span class="file-upload-text">+ 파일 업로드</span>
              </div>
            </div>

            <div class="common-notice-content">
              <h2>공통사항</h2>
              <h2>*첨부 시 실사 출력용 파일 제출 (AI / PSD / PDF / EPS_인쇄 기반 파일 제출)</h2>
              <h2>*백터 파일을 제외한 레스터 이미지 파일 제출 시 실제크기 150DPI 이상 파일 제출</h2>
              <ul class="notice-sub-container">
                <li>• Eureka Park관 참가기업 홍보 그래픽 실제 사이즈
                  <ul class="notice-sub-list">
                    <li>- 후부 벽면 : 1,050(W)*2,000(H)mm</li>
                    <li>(TV모니터로 가려지는 부분 바닥으로부터 적용 가능한 점 확인 필수)</li>
                    <li>- 진열 테이블 전면 : 850(W)*760(H)mm</li>
                  </ul>
                </li>
                <li>• Global Pavillion관 참가기업 부스 후부 벽면 부착형 홍보 그래픽 사이즈
                  <ul class="notice-sub-list">
                    <li>(2가지 타입으로 참가사 부스사이즈 확인 필수)</li>
                    <li>- 부스타입1 : 1,780(W)*1,000(H)mm</li>
                    <li>- 부스타입2 (부스번호 01번, 06번, 33번, 38번, 51번, 56번 / 6개 부스) : 3,300(W)*1,000(H)mm</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="qr-section">
              <label for="qr-code">5) QR CODE : 기업 홈페이지 또는 홍보 페이지 연계*</label>
              <div class="radio-group">
                <label>
                  <input type="radio" v-model="formData.qrCode" value="none">
                  QR 코드 없음
                </label>
                <label>
                  <input type="radio" v-model="formData.qrCode" value="have">
                  QR 코드 있음
                </label>
              </div>
              <div v-if="formData.qrCode === 'have'" class="file-upload-area">
                <input type="file" id="qr-file" @change="handleFileUpload('qrFile', $event)"
                  accept=".ai,.psd,.pdf,.eps">
                <span class="file-upload-text">+ 파일 업로드</span>
              </div>
              <p class="file-note">
                * 각사에서 생성된 QR코드 인쇄 가능본 (AI / PSD / PDF / EPS_인쇄 가반 파일 제출)
                <br>
                * 제출된 QR코드는 10*10cm 스티커 형식으로 준비해드리고 참가사가 원하시는 곳에 부착하시면 됩니다.
                <br>
                <span class="red">* QR코드를 제작하실 경우, 구글 또는 네이버 기반 QR코드 생성으로 포털 사이트에서 직접 제작 가능</span>
              </p>
            </div>

            <div class="video-section">
              <label for="video-file">6) 홍보 영상 : 상단 TV 노출 영상으로 현장 문제 대비 Back Up본 (Eureka Park관만 해당)</label>
              <div class="radio-group">
                <label>
                  <input type="radio" v-model="formData.promoVideo" value="none">
                  영상 없음
                </label>
                <label>
                  <input type="radio" v-model="formData.promoVideo" value="have">
                  영상 있음
                </label>
              </div>
              <div v-if="formData.promoVideo === 'have'" class="file-upload-area">
                <input type="file" id="video-file" @change="handleFileUpload('videoFile', $event)" accept=".mp4,.mov">
                <span class="file-upload-text">+ 파일 업로드</span>
              </div>
              <p class="file-note">
                <span class="red">* 홍보 영상은 Eureka Park관만 해당하며, Global Pavillion관 참가기업은 "영상 없음"으로 선택해주세요.</span>
                <br>
                * 각사 USB A Type Memory에 영상 파일 저장, 전시 현장에서 설치 후 재생
                <br>
                * MP4 또는 MOV 형식 파일 제출
                <br>
                * 권장사항 : 16:9비율(1920x1080px), 24~30fps, H.264등영상 코덱, AAC오디오 코덱(128kbps)
                <br>
                <span class="red">* 동영상 내역을 저작권 문제 소지가 있으신 부분은 저작권 소유지 및 소유자 대리인의 승인 필수</span>
              </p>
            </div>
          </div>

          <!-- 피칭 이벤트 참여 신청 섹션 -->
          <div class="notice-section">
            <h3 class="middle-title">3. 피칭 이벤트 참여 신청</h3>
            <div class="section-content">
              <ul>
                <li>• 메인 피칭 이벤트는 1월 7일(수)과 8일(목)에 스타트업 정키에서 진행되며, 이와 별도로 1월 6일(월)과 9일(금)에도 추가 피칭 세션이 운영됩니다.</li>
                <li>• 기업 당 준비시간 포함 총, 30분이 배정됩니다.</li>
                <li>• 시연에 필요한 모든 물품은 참가사가 준비하며, 운영사는 피칭스테이션의 공간과 기초지원 (모니터, 빔 프로젝터)만을 제공합니다.</li>
                <li>• 제품 시연의 <span class="red">참가를 희망하시는 업체</span>는 참가사정을 눌러주세요. (현장 신청 불가)</li>
                <li>• 제품 시연 발표는 <span class="red">영어로 진행하오니</span> 참고하여 주세요.</li>
              </ul>

              <div class="radio-section">
                <div class="radio-group">
                  <label>
                    <input type="radio" v-model="formData.pitching" value="yes">
                    <span class="radio-text">참여 희망</span>
                  </label>
                  <label>
                    <input type="radio" v-model="formData.pitching" value="no">
                    <span class="radio-text">참여 안 함</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- 한국 도슨트 투어 참여 신청 섹션 -->
          <div class="notice-section">
            <h3 class="middle-title">4. 한국 도슨트 투어 참여 신청</h3>
            <div class="section-content">
              <ul>
                <li>• 도슨트 참관단 투어 시 제품 소개를 희망하시는 업체는 아래 선택란에 "참여 희망"을 클릭해 주십시오.</li>
                <li>• 도슨트 투어는 한국의 주요 인사로 구성된 투어입니다. CES 2026 통합 한국관에는 국내외 많은 정부, 산업계 주요 인사들의 방문이 예상되며, 통합 한국관 방문 주요 인사들을
                  대상으로 <통합 한국관 도슨트 투어> 프로그램을 준비하고 있습니다.</li>
                <li>• 동 프로그램에 참여를 희망하는 업체는 도슨트 대상 제품 설명을 직접 하시어 합니다.</li>
              </ul>

              <p class="question">도슨트 참관단이 한국관 투어 시 귀 업체에 방문하기를 희망하십니까?</p>

              <div class="radio-section">
                <div class="radio-group">
                  <label>
                    <input type="radio" v-model="formData.docent" value="yes">
                    <span class="radio-text">참여 희망</span>
                  </label>
                  <label>
                    <input type="radio" v-model="formData.docent" value="no">
                    <span class="radio-text">참여 안 함</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- CES 현지 통역 섭외 섹션 -->
          <div class="section">
            <h3 class="middle-title">5. CES 현지 통역 섭외</h3>
            <div class="section-content">
              <ul class="info-list">
                <li>• 통역의 매칭 시, 실제 통역비는 통역 업체와 직접 협의하세요.</li>
                <li class="red">• 전시 기간 주 수주 목적으로 희망 금액은 주무 공지 예상이며 통역비는 참가업체 부담.</li>
                <li>• 참고 : 2024 CES 기준 1일 통역비 (USD 380$)</li>
              </ul>

              <p class="question">CES 현지 MOU체결이 필요하신가요?</p>

              <div class="radio-section">
                <div class="radio-group">
                  <label>
                    <input type="radio" v-model="formData.interpreter" value="yes">
                    <span class="radio-text">통역 필요</span>
                    <span class="note">* 선택 시 주수 목적 연락 예정</span>
                  </label>
                  <label>
                    <input type="radio" v-model="formData.interpreter" value="no">
                    <span class="radio-text">통역 불필요</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- MOU 체결식 섹션 -->
          <div class="section">
            <h2 class="section-title">6. MOU 체결식</h2>
            <div class="section-content">
              <ul class="info-list">
                <li>- 일시/장소 : 상시운영 / EP관 피칭스테이션</li>
                <li>- 주요내용 : 전시기간 중 또는 사전에 협의한 기관과의 MOU체결 지원</li>
                <li>- 재공사항 : MOU체결 기업 별 LED 스크린 이미지 제공 (EP관 피칭스테이션, 사인용 볼펜, 상장케이스 대여</li>
              </ul>

              <div class="mou-image">
                <img src="@/assets/Mou.png" alt="MOU 체결식 이미지">
              </div>

              <p class="question">CES 현지 MOU체결이 예정되어 있으신가요?</p>

              <div class="radio-section">
                <div class="radio-group">
                  <label>
                    <input type="radio" v-model="formData.mou" value="yes">
                    <span class="radio-text">MOU체결식 신청</span>
                  </label>
                  <label>
                    <input type="radio" v-model="formData.mou" value="no">
                    <span class="radio-text">미신청</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="submit-section">
            <button type="button" @click="submitForm" class="submit-btn">다음</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  name: 'CesSurvey',
  setup() {
    const formData = reactive({
      boothType: '',
      boothNumber: '',
      companyKr: '',
      companyEn: '',
      ceoKr: '',
      ceoEn: '',
      website: '',
      phone: '',
      addressKr: '',
      addressEn: '',
      contactName: '',
      contactPosition: '',
      department: '',
      contactMobile: '',
      companyDisplay: '',
      companyLogo: null,
      promoGraphic: null,
      tableGraphic: null,
      qrCode: 'none',
      qrFile: null,
      promoVideo: 'none',
      videoFile: null,
      pitching: '',
      docent: '',
      interpreter: '',
      mou: '',
      qrCodeFile: null,
      promoVideoFile: null
    })

    const boothNumbers = computed(() => {
      if (formData.boothType === 'eureka') {
        const numbers = []
        for (let i = 1; i <= 75; i++) {
          const prefix = i <= 30 ? '#62901_' : '#62501_'
          const value = prefix + String(i).padStart(2, '0')
          numbers.push({ value, label: value })
        }
        return numbers
      } else if (formData.boothType === 'global') {
        const numbers = []
        for (let i = 1; i <= 58; i++) {
          const value = '#50523_' + String(i).padStart(2, '0')
          numbers.push({ value, label: value })
        }
        return numbers
      }
      return []
    })

    const updateBoothNumbers = () => {
      formData.boothNumber = ''
    }

    const handleFileUpload = (field, event) => {
      const file = event.target.files[0]
      if (file) {
        formData[field] = file
      }
    }

    const submitForm = async () => {
      try {
        // FormData 객체 생성
        const data = new FormData()

        // 텍스트 필드 추가
        data.append('boothType', formData.boothType)
        data.append('boothNumber', formData.boothNumber)
        data.append('companyKr', formData.companyKr)
        data.append('companyEn', formData.companyEn)
        data.append('ceoKr', formData.ceoKr)
        data.append('ceoEn', formData.ceoEn)
        data.append('website', formData.website)
        data.append('phone', formData.phone)
        data.append('addressKr', formData.addressKr)
        data.append('addressEn', formData.addressEn)
        data.append('contactName', formData.contactName)
        data.append('contactPosition', formData.contactPosition)
        data.append('department', formData.department)
        data.append('contactMobile', formData.contactMobile)
        data.append('companyDisplay', formData.companyDisplay)
        data.append('qrCode', formData.qrCode)
        data.append('promoVideo', formData.promoVideo)
        data.append('pitching', formData.pitching)
        data.append('docent', formData.docent)
        data.append('interpreter', formData.interpreter)
        data.append('mou', formData.mou)

        // 파일 추가
        if (formData.companyLogo) {
          data.append('companyLogo', formData.companyLogo)
        }
        if (formData.promoGraphic) {
          data.append('promoGraphic', formData.promoGraphic)
        }
        if (formData.tableGraphic) {
          data.append('tableGraphic', formData.tableGraphic)
        }
        if (formData.qrFile) {
          data.append('qrFile', formData.qrFile)
        }
        if (formData.videoFile) {
          data.append('videoFile', formData.videoFile)
        }

        // API 전송
        const response = await fetch('http://localhost:5001/api/applications', {
          method: 'POST',
          body: data
        })

        const result = await response.json()

        if (response.ok) {
          alert('신청이 완료되었습니다!\n신청 ID: ' + result.applicationId)
          // 폼 초기화 (선택사항)
          // window.location.reload()
        } else {
          alert('신청 중 오류가 발생했습니다: ' + result.error)
        }
      } catch (error) {
        console.error('Submit error:', error)
        alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    }

    return {
      formData,
      boothNumbers,
      updateBoothNumbers,
      handleFileUpload,
      submitForm
    }
  }
}
</script>

<style scoped>
.ces-survey-container {
  line-height: 1.6;
  color: #333;
  background-color: white;
  max-width: 980px;
  margin: 0 auto;
}

/* Section 1: Main Header */
.main-header {
  padding: 0;
  text-align: center;
  position: relative;
}

.header-top {
  background-color: #0E1E2C;
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


.korea-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.korea-logo-img {
  height: 240px;
  width: auto;
}

.content-wrapper {
  padding: 0 20px;
}

.schedule-info {
  background: white;
  text-align: left;
  border-bottom: none;
  font-size: 24px;
  padding: 20px 0;
}

.notice-section {
  padding: 20px 0;
  text-align: left;
  border-bottom: none;
}

.notice-section h3 {
  color: black;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 4px solid #7E7E7E;
  padding-bottom: 10px;
}

.middle-title {
  text-align: center;
}

.notice-section ul {
  padding-left: 0;
  list-style: none;
}

.notice-section li {
  line-height: 1.8;
  font-size: 18px;
}

.notice-sub-list li {
  padding-left: 10px;
}

.highlight {
  color: #e74c3c;
  font-weight: bold;
}

/* Form Sections */

.form {
  padding: 40px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
  color: #2c3e50;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  background-color: #d9d9d9;
  border: none;
  font-size: 18px;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
}

/* Booth Layout Section */
.booth-images {
  display: grid;
  gap: 40px;
}

.booth-image-placeholder {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.booth-image-placeholder img {
  width: 80%;
  height: auto;
}

/* File Upload Sections */
.file-upload-area {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: #e5e5e5;
  cursor: pointer;
  transition: background-color 0.3s;
}

.file-upload-area:hover {
  background: #ddd;
}

.file-upload-area input[type="file"] {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.file-upload-text {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  pointer-events: none;
}

.common-notice-content {
  padding: 20px 0;
}

.common-notice-content .notice-sub-container {
  padding: 20px 10px;
}

.common-notice-content ul li {
  color: #e74c3c;
  font-size: 18px;
}

.file-note,
.qr-note,
.video-note,
.note {
  font-size: 18px;
  color: #7f8c8d;
  padding: 30px 0;
  line-height: 1.4;
}

.qr-section {
  padding: 40px 0;
}

.video-section {
  padding: 40px 0;
}

.qr-section label {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-align: center;
}

.video-section label {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-align: center;
}




.spec-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.spec-item {
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 10px 0;
  color: #333;
}

.spec-detail {
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0 5px 20px;
  color: #666;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.info-list li {
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0;
  color: #333;
}

.red {
  color: #e74c3c;
}

.video-specs {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.video-specs p {
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.5;
}


.question {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 20px 0;
  text-align: center;
}

.radio-section {
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
}

.radio-group {
  display: flex;
  gap: 40px;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 16px;
}

.radio-group input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #333;
}

.radio-text {
  font-weight: 500;
  color: #333;
}

.note {
  font-size: 12px;
  color: #666;
  margin-left: 5px;
}

.mou-image {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.mou-image img {
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Radio Groups */
.radio-group {
  display: flex;
  gap: 30px;
  margin: 20px 0;
}

.radio-group label {
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: normal;
}

.radio-group input[type="radio"] {
  width: auto;
}

/* New Section Styles */
.section {
  margin-bottom: 40px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
}

.section-title {
  background: #5A5A5A;
  color: white;
  padding: 15px 20px;
  margin: 0 0 30px 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.section-content {
  padding: 0 20px;
}

/* Submit Button */
.submit-section {
  text-align: center;
  margin: 60px 0 40px 0;
}

.submit-btn {
  background: #4A4A4A;
  color: white;
  border: none;
  padding: 20px 80px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background: #333;
}


</style>