<template>
    <section id="featured" class="pt-5">
        <div class="container mt-5 pt-5">
            <h3>Our Products</h3>
            <hr class="mx-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div class="row mx-auto container">
            <Product :card_class="card_class" :Product_list="Product_list" />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();
const card_class = 'col-lg-3 col-md-6';

const Product_list = computed(() =>
  productStore.data.filter((product) => product.category === 'shop')
);
</script>