import { defineStore } from 'pinia';
import apiClient from '../lib/axios';

export const useApplicationsStore = defineStore('applications', {
  state: () => ({
    applications: [],
    currentApplication: null,
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 20,
    loading: false
  }),

  actions: {
    async fetchApplications(page = 1, search = '') {
      this.loading = true;
      try {
        const response = await apiClient.get('/admin/applications', {
          params: { page, limit: this.limit, search }
        });

        this.applications = response.data.applications;
        this.total = response.data.total;
        this.page = response.data.page;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        console.error('Fetch applications error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchApplicationById(id) {
      this.loading = true;
      try {
        const response = await apiClient.get(`/admin/applications/${id}`);
        this.currentApplication = response.data;
      } catch (error) {
        console.error('Fetch application error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    }
  }
});
