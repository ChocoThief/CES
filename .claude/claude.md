# Claude Code Instructions

## Frontend 수정 규칙

### 절대 수정 금지 항목
- ❌ Frontend label 텍스트 (예: "주관기관을 입력해주세요", "부스번호를 입력해주세요" 등)
- ❌ Frontend 디자인 및 위치
- ❌ HTML 태그 구조 (input, select 등의 태그 변경 금지)
- ❌ 폼 필드 순서 및 레이아웃

### Validation 에러 메시지 규칙
- ✅ Backend validation 에러 메시지는 모두 한글로 작성
- ✅ Frontend validation 에러 메시지는 모두 한글로 작성
- ✅ 필드명은 실제 label과 동일하게 사용 (예: "주관기관", "부스번호" 등)

### 예시
```javascript
// ❌ 잘못된 예
validateField('boothType', formData.boothType)
errors.boothType = 'Booth type is required'

// ✅ 올바른 예
validateField('boothType', formData.boothType)
errors.boothType = '주관기관을 입력해주세요'
```

## Backend와 Frontend 필드 매핑

Frontend의 실제 label과 Backend의 필드명이 다를 수 있으므로 주의:
- Frontend "주관기관" → Backend boothType (단, validation은 한글 사용)
- Frontend "부스번호" → Backend boothNumber
