<template>
    <div v-for="{ Product_main_image, Product_name, Product_price, id } in Product_list" :key="Product_main_image"
        class="product text-center" :class="card_class">
        <nuxt-img class="img-fluid mb-md-3" :src="`@/assets/img/${Product_main_image}.jpg`" :alt="Product_main_image" />
        <div class="star py-3">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-full"></i>
        </div>
        <h5 class="p-name">{{ Product_name }}</h5>
        <h4 class="p-price">${{ Product_price }}.00</h4>
        <div class="d-flex justify-content-center">
            <CommonButton @click="detail(id)" class="me-2" :class="'button_1'" :button_text="'Details'" />
            <CommonButton @click="changeRoute(id)" :button_text="'Buy Now'" :btnLoader="loader" />
        </div>
    </div>
</template>

<script>

export default {
    name: "Product",
    data() {
        return {
            loader: false
        }
    },
    props: {
        card_class: String,
        Product_list: Array,
    },
    methods: {
        get_main_img(main_image) {
            return `assets/img/${main_image}.jpg`;
        },
        detail(id) {
            this.$router.push({ path: `/ProductDetails/${id}` });
            console.log(id);
        },
        changeRoute(id) {
            // this.loader = true;
            let user = localStorage.getItem("Userdata");
            if (user) {
                setTimeout(() => {
                    this.$router.push({ name: 'Cartview' });
                    console.log(user);
                    useProductStore().addtocart(id)
                    this.loader = false;
                }, 500);
            } else {
                setTimeout(() => {
                    this.$router.push({ name: 'ShopView' });
                    this.loader = false;
                }, 500);
            }
        }
    },
}
</script>