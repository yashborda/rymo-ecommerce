<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>