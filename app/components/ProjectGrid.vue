<script setup lang="ts">
import {
  projects,
  projectFilters,
  projectModalDetails,
  type Project,
} from "~/data/projectsLegacy";
import { ArrowUpRight, X } from "@lucide/vue";

const active = ref("all");
const selected = ref<Project | null>(null);
const dialog = ref<HTMLDialogElement | null>(null);
const filtered = computed(() =>
  active.value === "all"
    ? projects
    : projects.filter((project) => project.category === active.value),
);
async function open(project: Project) {
  selected.value = project;
  await nextTick();
  dialog.value?.showModal();
}
function close() {
  dialog.value?.close();
  selected.value = null;
}
</script>

<template>
  <div class="flex flex-wrap gap-2" aria-label="Lọc dự án">
    <button
      v-for="filter in projectFilters"
      :key="filter.id"
      type="button"
      class="min-h-11 rounded-md border px-4 py-2 text-sm font-semibold transition-colors"
      :class="
        active === filter.id
          ? 'border-blue bg-blue text-white'
          : 'border-line bg-white text-muted hover:border-blue hover:text-blue'
      "
      :aria-pressed="active === filter.id"
      @click="active = filter.id"
    >
      {{ filter.label }}
    </button>
  </div>
  <p class="mt-6 text-sm text-muted" role="status">
    {{ filtered.length }} hạng mục
  </p>
  <div class="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <article
      v-for="project in filtered"
      :key="project.id"
      class="project-card surface-card flex flex-col p-6 md:p-8"
      :class="project.id === 'benh-an-dien-tu' ? 'xl:col-span-2' : ''"
    >
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="eyebrow">{{ project.categoryLabel }}</span>
        <span
          class="rounded bg-soft px-3 py-1 text-xs font-semibold text-muted"
          >{{ project.year }}</span
        >
      </div>
      <p v-if="project.badge" class="mt-4 text-xs font-bold text-blue">
        {{ project.badge }}
      </p>
      <p class="mt-5 font-bold text-navy">{{ project.client }}</p>
      <h3 class="mt-2 text-xl font-bold text-blue md:text-2xl">
        {{ project.title }}
      </h3>
      <p class="mt-4 flex-1 text-sm leading-7 text-muted">
        {{ project.summary }}
      </p>
      <dl class="mt-6 grid gap-4 rounded-md bg-soft p-5">
        <div
          v-for="(metric, index) in project.metrics"
          :key="metric.label"
          :class="index ? 'border-t border-line pt-4' : ''"
        >
          <dt class="text-xs font-semibold uppercase tracking-wide text-muted">
            {{ metric.label }}
          </dt>
          <dd class="mt-2 font-bold text-blue">{{ metric.value }}</dd>
        </div>
      </dl>
      <div v-if="project.highlights" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="highlight in project.highlights"
          :key="highlight"
          class="rounded bg-mist px-3 py-2 text-xs font-semibold text-navy"
          >{{ highlight }}</span
        >
      </div>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="rounded border border-line px-3 py-1 text-xs text-muted"
          >{{ technology }}</span
        >
      </div>
      <button
        type="button"
        class="button-ghost mt-6 self-start"
        :aria-label="`Xem hồ sơ tham chiếu: ${project.title}`"
        @click="open(project)"
      >
        {{ project.action }} <ArrowUpRight :size="16" />
      </button>
    </article>
  </div>
  <dialog
    ref="dialog"
    class="modal-panel backdrop:bg-navy/70"
    aria-labelledby="project-dialog-title"
    @close="selected = null"
    @click="
      (event) => {
        if (event.target === dialog) close();
      }
    "
  >
    <div v-if="selected" class="flex min-h-0 flex-1 flex-col">
      <header
        class="flex shrink-0 items-start justify-between gap-4 border-b border-line px-5 pb-4 pt-5 sm:px-8 sm:pt-8"
      >
        <p class="eyebrow">Chi tiết dự án · {{ selected.categoryLabel }}</p>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded border border-line"
          aria-label="Đóng chi tiết dự án"
          @click="close"
        >
          <X :size="20" />
        </button>
      </header>
      <div
        class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8"
      >
        <p class="font-semibold text-muted">
          {{ selected.client }} · {{ selected.year }}
        </p>
        <h2 id="project-dialog-title" class="mt-2 text-3xl font-bold text-navy">
          {{ selected.title }}
        </h2>
        <p class="mt-5 leading-8 text-muted">{{ selected.summary }}</p>
        <dl class="mt-6 grid gap-4 rounded-md bg-soft p-5">
          <div
            v-for="(metric, index) in selected.metrics"
            :key="metric.label"
            :class="index ? 'border-t border-line pt-4' : ''"
          >
            <dt
              class="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              {{ metric.label }}
            </dt>
            <dd class="mt-1 font-bold text-blue">{{ metric.value }}</dd>
          </div>
        </dl>
        <dl class="mt-7 grid gap-4">
          <div
            v-for="item in projectModalDetails"
            :key="item.label"
            class="border-t border-line pt-4"
          >
            <dt class="font-bold text-navy">{{ item.label }}:</dt>
            <dd class="mt-1 text-sm leading-7 text-muted">{{ item.value }}</dd>
          </div>
        </dl>
        <p class="mt-6 text-sm leading-7 text-muted">
          Giải pháp được thiết kế tùy biến chuyên sâu cho đơn vị, đáp ứng đầy đủ
          thông tư hướng dẫn của Bộ Y tế và tiêu chuẩn dữ liệu Chính phủ điện
          tử.
        </p>
      </div>
      <footer
        class="flex shrink-0 flex-wrap gap-3 border-t border-line bg-white px-5 py-4 sm:px-8"
      >
        <button type="button" class="button-secondary" @click="close">
          Đóng
        </button>
        <NuxtLink to="/lien-he" class="button-primary" @click="close"
          >Liên hệ tư vấn dự án tương tự</NuxtLink
        >
      </footer>
    </div>
  </dialog>
</template>
