import { defineStore } from 'pinia';
import { fetchProductsApi } from '@/helpers/api/product';
import { useAuthStore } from './auth';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      const authStore = useAuthStore();
      this.products = await fetchProductsApi(authStore.token);
    },
  },
});