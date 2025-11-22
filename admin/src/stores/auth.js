import { defineStore } from 'pinia';
import apiClient from '../lib/axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async login(username, password) {
      try {
        const response = await apiClient.post('/auth/login', {
          username,
          password
        });

        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem('token', response.data.token);

        return true;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    async fetchCurrentUser() {
      try {
        const response = await apiClient.get('/auth/me');
        this.user = response.data;
      } catch (error) {
        console.error('Fetch current user error:', error);
        this.logout();
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    }
  }
});
