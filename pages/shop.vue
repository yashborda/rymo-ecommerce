<template>
    <section id="featured" class="pt-5">
        <div class="container mt-5 pt-5">
            <h3>Our Products</h3>
            <hr class="mx-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div class="row mx-auto container" v-if="productStore.products != null">
            <Product card_class="col-lg-3 col-md-6"
                :Product_list="productStore.products.filter((p) => p.category == 'shop')" />
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();
onMounted(async () => {
    await productStore.fetchProducts();
}); 
</script>