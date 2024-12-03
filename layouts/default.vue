<template>
    <Navbar />
    <slot />
    <Footer />
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
    meta: [{ property: 'og:title', content: `Rymo Shopping - ${route.meta.title}` }]
})
</script>
