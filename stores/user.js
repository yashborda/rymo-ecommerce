import { defineStore } from 'pinia';
import { fetchUserApi } from '@/helpers/api/user';
import { useAuthStore } from './auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const authStore = useAuthStore();
      this.user = await fetchUserApi(authStore.token);
    },
  },
});