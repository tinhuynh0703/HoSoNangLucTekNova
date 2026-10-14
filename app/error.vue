<script setup lang="ts">
defineProps<{ error: { statusCode: number } }>();
useSeoMeta({ title: "Không tìm thấy trang | TEKNOVA", robots: "noindex" });
</script>
<template>
  <main class="shell py-28 text-center">
    <p class="eyebrow">TEKNOVA / {{ error.statusCode }}</p>
    <h1 class="mt-4 text-4xl font-bold">Trang bạn tìm không tồn tại</h1>
    <p class="mx-auto mt-4 max-w-xl text-muted">
      Đường dẫn có thể đã thay đổi. Hãy trở về trang chủ hoặc xem các lĩnh vực
      hoạt động.
    </p>
    <div class="mt-8 flex justify-center gap-3">
      <NuxtLink class="button-primary" to="/">Trang chủ</NuxtLink
      ><NuxtLink class="button-secondary" to="/linh-vuc-hoat-dong"
        >Lĩnh vực hoạt động</NuxtLink
      >
    </div>
  </main>
</template>
