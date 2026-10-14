<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description?: string }>();
</script>
<template>
  <div class="max-w-3xl">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 class="h2 mt-3 text-navy">{{ title }}</h2>
    <p v-if="description" class="lead mt-5">{{ description }}</p>
  </div>
</template>
