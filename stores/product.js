import { defineStore } from "pinia";
import { fetchProductsApi } from "@/helpers/api/product";
import { useAuthStore } from "./auth";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: {},
    products: [],
  }),
  getters: {
    getProducts() {
      return this.products;
    },
  },
  actions: {
    async fetchProducts() {
      const authStore = useAuthStore();
      try {
        this.products = await fetchProductsApi(authStore.token); 
      } catch (error) {
        console.error("Failed to fetch products:", error); 
        this.products = []; 
      }
    },
    async fetchProductsDetails(id) {
      const authStore = useAuthStore();
      try {
        this.product = await fetchProductsDetailsApi(authStore.token, id); 
      } catch (error) {
        console.error("Failed to fetch products:", error); 
        this.product = {}; 
      }
    },
  },
});
