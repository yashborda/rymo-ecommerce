import { defineStore } from 'pinia';
import jsonData from '@/data/data.json';

// const productData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('productData') ?? '[]') : [];
const cartProductlist = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartProductlist') ?? '[]') : [];

interface Product {
    id: string;
    Product_name: string;
    Product_main_image: string;
    Product_price: string;
    category: string;
    quantity: string;
    small_image_1: string;
    small_image_2: string;
    small_image_3: string;
    small_image_4: string;
    total: string;
}

export const useProductStore = defineStore('product', {
    state: () => ({
        data: jsonData || [],
        cartProductlist: cartProductlist || [],
        currentProduct: [] as Product[],
    }),
    getters: {
        count_length(): number {
            return this.cartProductlist.length;
        },
        subtotalFun(): number {
            return this.cartProductlist.reduce((acc: number, item: { total: number }) => acc + item.total * 1, 0);
        },
    },
    actions: {
        getcurrentProduct(id: string) {
            return this.currentProduct = this.data.filter((product) => product.id === id);
        },
        addtocart(id: string) {
            this.cartProductlist.push(this.data.find((product: Product) => product.id === id));
            if (typeof window !== 'undefined') {
                localStorage.setItem('cartProductlist', JSON.stringify(this.cartProductlist));
            }
        },
        removecartproduct(index: number) {
            this.cartProductlist.splice(index, 1);
            if (typeof window !== 'undefined') {
                localStorage.setItem('cartProductlist', JSON.stringify(this.cartProductlist));
            }
        },
    }
});