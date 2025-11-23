import axios from 'axios';
import router from '../router';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 요청 인터셉터 - JWT 토큰 자동 첨부
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 401 에러 시 로그인 페이지로
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 로그인 API 요청은 제외 (로그인 실패는 Login 컴포넌트에서 처리)
      const isLoginRequest = error.config?.url?.includes('/auth/login');

      if (!isLoginRequest) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
