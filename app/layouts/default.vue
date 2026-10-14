<script setup lang="ts">
import { company, navigation } from "~/data/site";
import { ArrowUpRight, Menu, X, Phone } from "@lucide/vue";
import logoTeknova from "~/assets/logo/logo-teknova.png";
const route = useRoute();
const mobileOpen = ref(false);
watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false;
  },
);
</script>
<template>
  <a class="skip-link" href="#main-content">Chuyển đến nội dung chính</a>
  <header class="site-header">
    <div class="shell flex min-h-18 items-center justify-between gap-4">
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-2.5 no-underline"
        aria-label="TEKNOVA, về trang chủ"
        ><img
          :src="logoTeknova"
          alt=""
          width="382"
          height="327"
          class="h-11 w-auto shrink-0"
        /><span class="brand-word">TEKNOVA</span></NuxtLink
      >
      <nav
        class="hidden items-center gap-6 lg:flex"
        aria-label="Điều hướng chính"
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :aria-current="route.path === item.to ? 'page' : undefined"
          >{{ item.label }}</NuxtLink
        ><NuxtLink to="/gioi-thieu#doi-ngu" class="nav-link">Đội ngũ</NuxtLink>
      </nav>
      <div class="hidden items-center gap-4 lg:flex">
        <a
          :href="company.phoneHref"
          class="flex items-center gap-2 text-sm font-semibold text-ink no-underline"
          ><Phone :size="16" />{{ company.phone }}</a
        ><NuxtLink to="/lien-he" class="button-primary"
          >Trao đổi dự án <ArrowUpRight :size="17"
        /></NuxtLink>
      </div>
      <button
        class="menu-toggle inline-flex items-center justify-center rounded border border-line lg:hidden"
        type="button"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileOpen ? 'Đóng menu' : 'Mở menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <X v-if="mobileOpen" :size="23" /><Menu v-else :size="23" />
      </button>
    </div>
    <nav
      v-if="mobileOpen"
      id="mobile-nav"
      class="shell flex flex-col border-t border-line py-4 lg:hidden"
      aria-label="Điều hướng di động"
    >
      <NuxtLink
        v-for="item in navigation"
        :key="item.to"
        :to="item.to"
        class="nav-link py-3"
        :aria-current="route.path === item.to ? 'page' : undefined"
        >{{ item.label }}</NuxtLink
      ><NuxtLink to="/gioi-thieu#doi-ngu" class="nav-link py-3"
        >Đội ngũ</NuxtLink
      ><NuxtLink to="/lien-he" class="button-primary mt-3">Liên hệ</NuxtLink>
    </nav>
  </header>
  <main id="main-content"><slot /></main>
  <footer class="bg-navy text-white">
    <div
      class="shell grid gap-10 py-16 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr]"
    >
      <div>
        <div class="mb-4 flex items-center gap-2">
          <span class="rounded-md bg-white px-2 py-1">
            <img
              :src="logoTeknova"
              alt=""
              width="382"
              height="327"
              class="h-12 w-auto"
            />
          </span>
          <span class="font-bold tracking-[.13em]">TEKNOVA</span>
        </div>
        <p class="max-w-md text-sm leading-7 text-slate-300">
          {{ company.name }}<br />Tiên phong giải pháp phần mềm, chuyển đổi số y
          tế, giáo dục, hành chính công và viễn thông.
        </p>
        <p class="mt-4 text-xs tracking-widest text-slate-400">
          {{ company.tagline }}
        </p>
      </div>
      <div>
        <h2 class="mb-4 text-sm font-bold">Lĩnh vực dịch vụ</h2>
        <div class="flex flex-col gap-3 text-sm text-slate-300">
          <NuxtLink to="/linh-vuc-hoat-dong" class="hover:text-white"
            >Phần mềm theo yêu cầu</NuxtLink
          >
          <NuxtLink to="/linh-vuc-hoat-dong" class="hover:text-white"
            >Chuyển đổi số & Cloud</NuxtLink
          >
          <NuxtLink to="/linh-vuc-hoat-dong" class="hover:text-white"
            >Giải pháp Y tế Bệnh viện EMR</NuxtLink
          >
          <NuxtLink to="/linh-vuc-hoat-dong" class="hover:text-white"
            >Phân phối thiết bị CNTT</NuxtLink
          >
        </div>
      </div>
      <div>
        <h2 class="mb-4 text-sm font-bold">Khám phá</h2>
        <div class="flex flex-col gap-3 text-sm text-slate-300">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="hover:text-white"
            >{{ item.label }}</NuxtLink
          ><NuxtLink to="/gioi-thieu#so-do-to-chuc" class="hover:text-white"
            >Sơ đồ tổ chức</NuxtLink
          ><NuxtLink to="/gioi-thieu#doi-ngu" class="hover:text-white"
            >Đội ngũ chuyên gia</NuxtLink
          ><NuxtLink to="/lien-he" class="hover:text-white">Liên hệ</NuxtLink>
        </div>
      </div>
      <div>
        <h2 class="mb-4 text-sm font-bold">Thông tin liên hệ</h2>
        <p class="text-sm leading-7 text-slate-300">{{ company.address }}</p>
        <a :href="company.phoneHref" class="mt-3 block text-sm text-white">{{
          company.phone
        }}</a
        ><a
          :href="company.emailHref"
          class="mt-3 block break-all text-sm text-white"
          >{{ company.email }}</a
        >
      </div>
    </div>
    <div class="border-t border-white/15">
      <div
        class="shell flex flex-wrap justify-between gap-3 py-5 text-xs text-slate-400"
      >
        <span>© {{ new Date().getFullYear() }} TEKNOVA. Bảo lưu mọi quyền.</span
        ><span>Điều khoản sử dụng · Chính sách bảo mật</span>
      </div>
    </div>
  </footer>
</template>
