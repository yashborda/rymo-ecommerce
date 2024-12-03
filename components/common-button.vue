<template>
    <button class="mb-3" :class="{ disabled: btnLoader }">
        <span v-if="!btnLoader">{{ button_text }}</span>
        <span v-else>
            <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
            {{ button_text }}
        </span>
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        button_text: String,
        btnLoader: Boolean
    },
}
</script>