<template>
  <section id="home">
    <div class="container">
      <h5>NEW ARRIVALS</h5>
      <h1><span>Best Price</span>This Year</h1>
      <p class="pb-sm-3 pb-md-5">Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Magnam minus totam</p>
      <NuxtLink to="/shop" class="btn-1 text-decoration-none" aria-current="page">Shop Now</NuxtLink>
    </div>
  </section>

  <section id="brand" class="container">
    <div class="row m-0 py-5">
      <img class="img-fluid col-6 col-md-4 col-lg-2" src="@/assets/img/brand/1.png" alt="brand.1" />
      <img class="img-fluid col-6 col-md-4 col-lg-2" src="@/assets/img/brand/2.png" alt="brand.2" />
      <img class="img-fluid col-6 col-md-4 col-lg-2" src="@/assets/img/brand/3.png" alt="brand.3" />
      <img class="img-fluid col-6 col-md-4 col-lg-2" src="@/assets/img/brand/4.png" alt="brand.4" />
      <img class="img-fluid col-6 col-md-4 col-lg-2" src="@/assets/img/brand/5.png" alt="brand.5" />
      <img class="img-fluid col-6 col-md-4 col-lg-2" src="@/assets/img/brand/6.png" alt="brand.6" />
    </div>
  </section>

  <section id="new" class="container">
    <div class="row">
      <div class="one col-lg-4 p-0">
        <img class="img-fluid" src="@/assets/img/new/1.jpg" alt="new1" />
        <div class="details">
          <h2>Product Name Title</h2>
          <CommonButton class="btn-2">shop now</CommonButton>
        </div>
      </div>
      <div class="one col-lg-4 p-0">
        <img class="img-fluid" src="@/assets/img/new/5.jpg" alt="new5" />
        <div class="details">
          <h2>Product Name Title</h2>
          <CommonButton class="btn-2">shop now</CommonButton>
        </div>
      </div>
      <div class="one col-lg-4 p-0">
        <img class="img-fluid" src="@/assets/img/new/3.jpg" alt="new3" />
        <div class="details">
          <h2>Product Name Title</h2>
          <CommonButton class="btn-2">shop now</CommonButton>
        </div>
      </div>
    </div>
  </section>

  <section id="featured" v-if="productStore.products">
    <div class="container text-center mt-5 pt-5">
      <h3>Our Featured</h3>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <div class="row mx-auto content-fluid">
        <Product card_class="col-lg-3 col-md-6"
          :Product_list="productStore.products.filter((p) => p.category == 'featured')" />
      </div>
    </div>
  </section>

  <section id="banner" class="my-5 py-5">
    <div class="container">
      <h4>MID SEASON'S SALE</h4>
      <h1 class="pb-sm-3 pb-md-5">Autumn collection <br> UP TO 20% OFF</h1>
      <NuxtLink to="/shop" class="btn-4 text-decoration-none" aria-current="page">Shop Now</NuxtLink>
    </div>
  </section>

  <section id="clothes" v-if="productStore.products">
    <div class="container text-center mt-5 pt-5">
      <h3>Dresses & Jumpsuits</h3>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <div class="row mx-auto content-fluid">
        <Product card_class="col-lg-3 col-md-6"
          :Product_list="productStore.products.filter((p) => p.category == 'cloth')" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/product';
import { fetchProductsApi } from "@/helpers/api/product";

const productStore = useProductStore();
onMounted(() => {
  fetchProductsApi();
  // productsData();
});

const productsData = () => {
  productStore.fetchProducts().then(() => {
    console.log(productStore.products, "products");
  });
};

</script>