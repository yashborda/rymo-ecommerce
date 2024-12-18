<template>
    <div>
        <h1>User Info</h1>
        <div v-if="userStore.user">
            <p>Name: {{ userStore.user.name }}</p>
            <p>Email: {{ userStore.user.email }}</p>
        </div>
        <button @click="fetchUser">Fetch User</button>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const fetchUser = () => {
    userStore.fetchUser();
};
</script>