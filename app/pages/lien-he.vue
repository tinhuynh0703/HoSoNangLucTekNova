<script setup lang="ts">
import { company } from "~/data/site";
import { Phone, Mail, MapPin, Clock3 } from "@lucide/vue";
usePageSeo(
  "Liên hệ TEKNOVA | Trao đổi giải pháp",
  "Liên hệ TEKNOVA qua điện thoại, email hoặc gửi yêu cầu trao đổi giải pháp.",
  "/lien-he",
);
</script>
<template>
  <section class="border-b border-line bg-white">
    <div class="shell py-16 lg:py-22">
      <p class="eyebrow">Liên hệ / Bắt đầu trao đổi</p>
      <h1 class="h1 mt-5 max-w-3xl text-navy">
        Nói với chúng tôi về
        <span class="text-blue">điều bạn cần giải quyết.</span>
      </h1>
      <p class="lead mt-6 max-w-2xl">
        Hãy cho TEKNOVA biết hiện trạng, nhóm người dùng và mục tiêu của dự án.
        Bạn cũng có thể liên hệ trực tiếp qua điện thoại hoặc email.
      </p>
    </div>
  </section>
  <section class="section shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
    <div>
      <h2 class="text-2xl font-bold text-navy">Thông tin liên hệ</h2>
      <div class="mt-7 space-y-6 text-sm">
        <div class="flex gap-3">
          <Phone :size="19" class="shrink-0 text-blue" /><a
            :href="company.phoneHref"
            class="font-bold text-blue"
            >{{ company.phone }}</a
          >
        </div>
        <div class="flex gap-3">
          <Mail :size="19" class="shrink-0 text-blue" /><a
            :href="company.emailHref"
            class="break-all font-bold text-blue"
            >{{ company.email }}</a
          >
        </div>
        <div class="flex gap-3">
          <MapPin :size="19" class="shrink-0 text-blue" /><span>{{
            company.address
          }}</span>
        </div>
        <div class="flex gap-3">
          <Clock3 :size="19" class="shrink-0 text-blue" /><span>{{
            company.hours
          }}</span>
        </div>
      </div>
      <p class="mt-8 rounded-md bg-soft p-4 text-xs leading-6 text-muted">
        Thông tin liên hệ lấy từ website TEKNOVA hiện có; cần xác nhận trước khi
        xuất bản chính thức.
      </p>
    </div>
    <div class="surface-card p-6 md:p-9">
      <h2 class="text-2xl font-bold text-navy">Gửi yêu cầu trao đổi</h2>
      <p class="mt-2 mb-7 text-sm leading-7 text-muted">
        Các trường có dấu * là bắt buộc.
      </p>
      <LeadForm kind="contact" />
    </div>
  </section>
</template>
