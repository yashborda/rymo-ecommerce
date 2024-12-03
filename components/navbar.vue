<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-light py-3">
        <div class="container">
            <NuxtLink to="/" class="navbar-brand" aria-current="page">
                <img src="@/assets/img/logo1.png" alt="logo1">
            </NuxtLink>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon top-bar"></span>
                <span class="navbar-toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-3  ms-sm-auto mt-3 align-items-start align-items-sm-center">
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link " aria-current="page">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/shop" class="nav-link " aria-current="page">Shop
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/blog" class="nav-link " aria-current="page">Blog</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/about" class="nav-link " aria-current="page">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/contact-us" class="nav-link " aria-current="page">Contact Us
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/cart" class="nav-link p-0" aria-current="page">
                            <fa :icon="['fas', 'shopping-cart']" class="position-relative">
                                <span :class="count_length == 0 ? 'd-none' : 'd-inline-block'" class=" badge">
                                    {{ count_length }}
                                </span>
                            </fa>
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/login" class="nav-link " aria-current="page" v-if="user == ''">
                            <button class="button_1 px-3" type="button">
                                <fa :icon="['fas', 'user']" class="me-2" />
                                Login
                            </button>
                        </NuxtLink>
                        <div class="dropdown" v-else>
                            <button
                                class="btn button_1 dropdown-toggle d-flex justify-content-between align-items-center"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="d-inline" v-if="!photo">
                                    <fa :icon="['fas', 'user']" class="me-2" />
                                </div>
                                <div class="d-inline" v-else>
                                    <img class="userPhoto me-2" :src="photo" alt="userPhoto">
                                </div>
                                <p class="d-inline mb-0">{{ user }}</p>
                            </button>
                            <ul class="dropdown-menu p-0" style="cursor: pointer;">
                                <li><a class="dropdown-item" @click="Logout()">Log Out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
const user = ref('');
const photo = ref('');
const count_length = ref(0);

</script>