<script setup lang="ts">
import {
  projectStats,
  projectPartners,
  projectTrustStats,
} from "~/data/projectsLegacy";
import { ArrowRight, Phone } from "@lucide/vue";
import { company } from "~/data/site";

usePageSeo(
  "Dự án tiêu biểu | TEKNOVA",
  "Các dự án tiêu biểu được đối tác và khách hàng tin chọn: y tế số, dân số, hành chính công và thanh toán số.",
  "/du-an",
);
</script>

<template>
  <section class="border-b border-line bg-white">
    <div class="shell py-17 text-center lg:py-24">
      <p class="eyebrow">Hồ sơ năng lực & Thành quả triển khai</p>
      <h1 class="h1 mx-auto mt-5 max-w-4xl text-navy">
        Các dự án tiêu biểu được đối tác và khách hàng
        <span class="text-blue">tin chọn</span>
      </h1>
      <p class="lead mx-auto mt-6 max-w-3xl">
        Hiện thực hóa cam kết chất lượng thông qua hệ sinh thái công nghệ chuẩn
        hoá, an toàn và sẵn sàng chuyển đổi số bền vững cho khối Y tế, Dân số và
        Hành chính công.
      </p>
      <div class="mt-10 grid gap-3 md:grid-cols-3">
        <div
          v-for="stat in projectStats"
          :key="stat.label"
          class="surface-card p-6"
        >
          <strong class="block text-4xl text-blue">{{ stat.value }}</strong>
          <span class="mt-2 block font-bold text-navy">{{ stat.label }}</span>
          <span class="mt-1 block text-sm text-muted">{{ stat.detail }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section shell"><ProjectGrid /></section>

  <section class="section bg-mist">
    <div class="shell">
      <p class="eyebrow text-center">Đối tác chiến lược & Đơn vị đồng hành</p>
      <h2 class="h2 mx-auto mt-3 max-w-3xl text-center text-navy">
        Mạng Lưới Đối Tác & Khách Hàng Tiêu Biểu
      </h2>
      <p class="lead mx-auto mt-5 max-w-3xl text-center">
        Hơn 50+ bệnh viện công lập, trung tâm y tế, sở ban ngành hành chính công
        và các tập đoàn công nghệ số tin cậy lựa chọn TEKNOVA làm đơn vị triển
        khai giải pháp.
      </p>
      <div class="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="partner in projectPartners"
          :key="partner.name"
          class="surface-card p-5"
        >
          <p class="font-bold text-navy">{{ partner.name }}</p>
          <p class="mt-2 text-sm text-muted">{{ partner.detail }}</p>
        </div>
      </div>
      <div class="mt-8 grid gap-3 md:grid-cols-3">
        <div
          v-for="stat in projectTrustStats"
          :key="stat.label"
          class="surface-card p-6 text-center"
        >
          <strong class="block text-3xl text-blue">{{ stat.value }}</strong>
          <span class="mt-2 block text-sm font-semibold text-navy">{{
            stat.label
          }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section-tight bg-navy text-white">
    <div class="shell grid items-center gap-7 lg:grid-cols-[1fr_auto]">
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-white/70">
          Sẵn sàng cùng TEKNOVA
        </p>
        <h2 class="h2 mt-3 text-white">
          Bắt đầu hiện đại hóa hệ thống quản trị của bạn ngay hôm nay
        </h2>
        <p class="mt-5 max-w-3xl leading-8 text-white/80">
          Đội ngũ kỹ sư và chuyên gia CNTT y tế của TEKNOVA luôn sẵn sàng khảo
          sát thực tế, tư vấn lộ trình thuê phần mềm tối ưu ngân sách và hỗ trợ
          Demo hệ thống 1-on-1 theo nhu cầu riêng biệt.
        </p>
      </div>
      <div class="grid gap-3">
        <NuxtLink
          to="/lien-he"
          class="inline-flex items-center justify-center gap-2 rounded bg-white px-5 py-3 font-bold text-blue"
        >
          Đăng ký tư vấn & Báo giá <ArrowRight :size="18" />
        </NuxtLink>
        <a
          :href="company.phoneHref"
          class="inline-flex items-center justify-center gap-2 rounded border border-white/40 px-5 py-3 font-bold text-white"
        >
          <Phone :size="17" /> Hotline 24/7: {{ company.phone }}
        </a>
      </div>
    </div>
  </section>
</template>
