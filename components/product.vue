<template>
    <div v-for="p in Product_list" :key="p.id" class="product text-center" :class="card_class">
        <!-- <img class="img-fluid mb-md-3" :src="require(`@/assets/img/${p.Product_main_image}.jpg`)"
            :alt="p.Product_main_image" /> -->
        <div class="star py-3">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-full"></i>
        </div>
        <h5 class="p-name">{{ p.Product_name }}</h5>
        <h4 class="p-price">${{ p.Product_price }}.00</h4>
        <div class="d-flex justify-content-center">
            <CommonButton @click="detail(p.id)" class="me-2" :class="'button_1'" :button_text="'Details'" />
            <CommonButton @click="changeRoute(p.id)" :button_text="'Buy Now'" :btnLoader="loader" />
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
        // get_main_img(main_image) {
        //     return `assets/img/${main_image}.jpg`;
        // },
        detail(id) {
            this.$router.push({ path: `/ProductDetails/${id}` });
            console.log(id);
        },
        changeRoute(id) {
            // this.loader = true;
            // let user = localStorage.getItem("Userdata");
            // if (user) {
            //     setTimeout(() => {
            //         this.$router.push({ name: 'Cartview' });
            //         console.log(user);
            //         useProductStore().addtocart(id)
            //         this.loader = false;
            //     }, 500);
            // } else {
            //     setTimeout(() => {
            //         this.$router.push({ name: 'ShopView' });
            //         this.loader = false;
            //     }, 500);
            // }
        }
    },
}
</script>