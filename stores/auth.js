import { defineStore } from 'pinia';
import { loginApi } from '@/helpers/api/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    async login(credentials) {
      const data = await loginApi(credentials);
      this.token = data.token;
    },
    logout() {
      this.token = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});