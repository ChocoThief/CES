import axios from 'axios';

// API Base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Application API
export const applicationApi = {
  // 신청서 제출 (FormData 사용)
  submit: async (formData) => {
    const response = await api.post('/applications', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

// Docent Reservation API
export const docentReservationApi = {
  // 예약 생성
  create: async (data) => {
    const response = await api.post('/docent-reservations', data);
    return response.data;
  },

  // 가용 타임슬롯 조회
  getAvailableSlots: async () => {
    const response = await api.get('/docent-reservations/available');
    return response.data;
  },
};

export default api;
