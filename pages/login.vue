<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <input v-model="credentials.email" type="email" placeholder="Email" />
            <input v-model="credentials.password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const credentials = ref({ email: '', password: '' });

const handleLogin = async () => {
    try {
        await authStore.login(credentials.value);
        alert('Login successful');
    } catch (error) {
        alert(error.message);
    }
};
</script>