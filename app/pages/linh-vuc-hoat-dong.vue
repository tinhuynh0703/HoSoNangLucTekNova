<script setup lang="ts">
import {
  serviceStats,
  servicePartners,
  servicePillars,
  serviceProcess,
  serviceSla,
} from "~/data/servicesLegacy";
import { ArrowRight, Check } from "@lucide/vue";

usePageSeo(
  "Lĩnh vực hoạt động | TEKNOVA",
  "Y tế số, phần mềm theo yêu cầu, AI, Cloud, dữ liệu lớn và hạ tầng an toàn thông tin của TEKNOVA.",
  "/linh-vuc-hoat-dong",
);
const active = ref(servicePillars[0]!.id);
const servicePartnerRows = [
  servicePartners.slice(0, 9),
  servicePartners.slice(9),
];
const activePillar = computed(
  () =>
    servicePillars.find((pillar) => pillar.id === active.value) ||
    servicePillars[0]!,
);
function onTabKeydown(event: KeyboardEvent, index: number) {
  const next =
    event.key === "ArrowRight"
      ? (index + 1) % servicePillars.length
      : event.key === "ArrowLeft"
        ? (index - 1 + servicePillars.length) % servicePillars.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? servicePillars.length - 1
            : -1;
  if (next < 0) return;
  event.preventDefault();
  active.value = servicePillars[next]!.id;
  nextTick(() =>
    document.getElementById(`tab-${servicePillars[next]!.id}`)?.focus(),
  );
}
</script>

<template>
  <section class="border-b border-line bg-white">
    <div class="shell py-17 text-center lg:py-24">
      <p class="eyebrow">Dịch vụ chuyên môn · Enterprise tiers</p>
      <h1 class="h1 mx-auto mt-5 max-w-4xl text-navy">
        Lĩnh vực Hoạt động & <span class="text-blue">Giải pháp Chuyên sâu</span>
      </h1>
      <p class="lead mx-auto mt-6 max-w-3xl">
        Năng lực kỹ nghệ phần mềm cấp doanh nghiệp, chuẩn hóa chuyển đổi số Y tế
        quốc gia, dịch vụ điện toán đám mây và kiến trúc hạ tầng bảo mật cấp cao
        cho chính phủ & tập đoàn.
      </p>
      <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div
          v-for="item in serviceStats"
          :key="item.label"
          class="surface-card px-4 py-6"
        >
          <strong class="block text-3xl text-blue md:text-4xl">{{
            item.value
          }}</strong>
          <span class="mt-2 block text-sm font-semibold text-muted">{{
            item.label
          }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="border-b border-line bg-mist py-12">
    <div class="shell">
      <p class="eyebrow text-center">
        Đối tác chiến lược & khách hàng tiêu biểu
      </p>
      <h2 class="mt-3 text-center text-2xl font-bold text-navy">
        Được tin chọn bởi hơn 50+ bệnh viện, sở ban ngành & đối tác công nghệ
        hàng đầu
      </h2>
      <div
        v-for="(row, index) in servicePartnerRows"
        :key="index"
        class="partner-marquee-viewport"
        :class="index === 0 ? 'mt-8' : 'mt-3'"
        tabindex="0"
        :aria-label="`Đối tác và khách hàng tiêu biểu, hàng ${index + 1}`"
      >
        <div
          class="partner-marquee-track service-partner-track"
          :class="index === 1 ? 'partner-marquee-track--reverse' : ''"
        >
          <ul class="partner-marquee-group">
            <li
              v-for="partner in row"
              :key="partner.name"
              class="service-partner-card surface-card flex items-center gap-3 p-4 text-sm font-semibold text-navy"
            >
              <span
                class="grid size-11 shrink-0 place-items-center rounded-lg bg-mist text-blue"
                aria-hidden="true"
              >
                <PartnerIcon :icon="partner.icon" />
              </span>
              <span class="min-w-0 leading-5">{{ partner.name }}</span>
            </li>
          </ul>
          <ul class="partner-marquee-group" aria-hidden="true">
            <li
              v-for="partner in row"
              :key="partner.name"
              class="service-partner-card surface-card flex items-center gap-3 p-4 text-sm font-semibold text-navy"
            >
              <span
                class="grid size-11 shrink-0 place-items-center rounded-lg bg-mist text-blue"
                aria-hidden="true"
              >
                <PartnerIcon :icon="partner.icon" />
              </span>
              <span class="min-w-0 leading-5">{{ partner.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section shell">
    <SectionHeading
      eyebrow="Hệ sinh thái cốt lõi"
      title="4 Trụ cột Công nghệ Mũi nhọn"
      description="Được xây dựng với kiến trúc module mở, khả năng tích hợp API đa nền tảng và tuân thủ nghiêm ngặt khung kiến trúc chính phủ điện tử 2.0."
    />
    <div
      class="mt-10 flex min-w-0 gap-2 overflow-x-auto pb-2"
      role="tablist"
      aria-label="Trụ cột công nghệ"
    >
      <button
        v-for="(pillar, index) in servicePillars"
        :id="`tab-${pillar.id}`"
        :key="pillar.id"
        type="button"
        role="tab"
        :aria-selected="active === pillar.id"
        :aria-controls="`panel-${pillar.id}`"
        :tabindex="active === pillar.id ? 0 : -1"
        class="min-w-52 flex-1 rounded-md border px-5 py-4 text-left text-sm font-bold transition-colors"
        :class="
          active === pillar.id
            ? 'border-blue bg-blue text-white'
            : 'border-line bg-white text-muted hover:border-blue hover:text-blue'
        "
        @click="active = pillar.id"
        @keydown="onTabKeydown($event, index)"
      >
        <span class="mb-1 block text-xs">0{{ index + 1 }}</span
        >{{ pillar.tab }}
      </button>
    </div>
    <div
      :id="`panel-${activePillar.id}`"
      :key="activePillar.id"
      role="tabpanel"
      :aria-labelledby="`tab-${activePillar.id}`"
      tabindex="0"
      class="mt-6 grid gap-5 lg:grid-cols-[1.35fr_.85fr]"
    >
      <div class="surface-card p-7 md:p-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="eyebrow">{{ activePillar.badge }}</p>
          <span
            v-if="activePillar.code"
            class="text-xs font-semibold text-muted"
            >{{ activePillar.code }}</span
          >
        </div>
        <h3 class="mt-4 text-2xl font-bold text-navy md:text-3xl">
          {{ activePillar.title }}
        </h3>
        <p class="mt-4 leading-8 text-muted">{{ activePillar.description }}</p>
        <div class="mt-8 grid gap-5 sm:grid-cols-2">
          <article
            v-for="feature in activePillar.features"
            :key="feature.title"
            class="border-t border-line pt-5"
          >
            <h4 class="font-bold text-navy">{{ feature.title }}</h4>
            <p class="mt-2 text-sm leading-7 text-muted">
              {{ feature.detail }}
            </p>
          </article>
        </div>
      </div>
      <aside class="flex flex-col rounded-xl bg-navy p-7 text-white md:p-9">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="text-xs font-bold uppercase tracking-widest text-white/70">
            {{ activePillar.aside.eyebrow }}
          </p>
          <span
            v-if="activePillar.aside.badge"
            class="rounded bg-white/15 px-3 py-1 text-xs font-bold"
            >{{ activePillar.aside.badge }}</span
          >
        </div>
        <h4 class="mt-5 text-xl font-bold">{{ activePillar.aside.title }}</h4>
        <p class="mt-3 text-sm leading-7 text-white/80">
          {{ activePillar.aside.description }}
        </p>
        <div v-if="activePillar.aside.labels" class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="label in activePillar.aside.labels"
            :key="label"
            class="rounded bg-white/10 px-3 py-2 text-xs font-semibold"
            >{{ label }}</span
          >
        </div>
        <dl v-if="activePillar.aside.metrics" class="mt-6 grid gap-3">
          <div
            v-for="metric in activePillar.aside.metrics"
            :key="metric.label"
            class="border-t border-white/20 pt-3"
          >
            <dt class="text-xs text-white/70">{{ metric.label }}</dt>
            <dd class="mt-1 font-bold">{{ metric.value }}</dd>
          </div>
        </dl>
        <NuxtLink
          v-if="activePillar.cta"
          to="#tu-van"
          class="mt-8 inline-flex items-center gap-2 self-start rounded bg-white px-4 py-3 text-sm font-bold text-blue"
        >
          {{ activePillar.cta }} <ArrowRight :size="16" />
        </NuxtLink>
      </aside>
    </div>
  </section>

  <section class="section bg-mist">
    <div class="shell">
      <SectionHeading
        eyebrow="Phương pháp luận"
        title="Quy trình Triển khai Chuẩn mực 4 Bước"
        description="Đảm bảo dự án bàn giao đúng tiến độ, tối ưu ngân sách đầu tư và đáp ứng tuyệt đối tiêu chuẩn kiểm duyệt của cơ quan chủ quản."
      />
      <ol class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <li
          v-for="item in serviceProcess"
          :key="item.step"
          class="surface-card flex flex-col p-6"
        >
          <span class="text-xs font-bold uppercase tracking-widest text-blue"
            >Bước {{ item.step }}</span
          >
          <h3 class="mt-6 text-lg font-bold text-navy">{{ item.title }}</h3>
          <p class="mt-3 flex-1 text-sm leading-7 text-muted">
            {{ item.detail }}
          </p>
          <p class="mt-6 border-t border-line pt-4 text-xs font-bold text-blue">
            Output: {{ item.output }}
          </p>
        </li>
      </ol>
    </div>
  </section>

  <section class="section shell">
    <SectionHeading
      eyebrow="Service Level Agreement (SLA)"
      title="Bảng Cam kết Chất lượng Dịch vụ Doanh nghiệp"
      description="Áp dụng cho mọi hợp đồng ký kết"
    />
    <div class="surface-card mt-8 overflow-x-auto">
      <table class="w-full min-w-180 text-left text-sm">
        <thead class="bg-soft text-navy">
          <tr>
            <th scope="col" class="p-4">Tiêu chí Cam kết</th>
            <th scope="col" class="p-4">Mức độ Dịch vụ (SLA)</th>
            <th scope="col" class="p-4">Quy chuẩn Pháp lý / Công nghệ</th>
            <th scope="col" class="p-4">Hình thức Xử lý</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in serviceSla"
            :key="item.criterion"
            class="border-t border-line align-top"
          >
            <th scope="row" class="p-4 font-bold text-navy">
              {{ item.criterion }}
            </th>
            <td class="p-4 font-bold text-blue">{{ item.level }}</td>
            <td class="p-4 leading-6 text-muted">{{ item.standard }}</td>
            <td class="p-4 leading-6 text-muted">{{ item.handling }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="tu-van" class="section bg-white">
    <div class="shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <p class="eyebrow">Tư vấn kiến trúc miễn phí</p>
        <h2 class="h2 mt-3 text-navy">
          Sẵn sàng Nâng cấp Hệ thống Công nghệ Cùng TEKNOVA?
        </h2>
        <p class="lead mt-5">
          Đội ngũ kiến trúc sư trưởng và chuyên gia giải pháp y tế số của chúng
          tôi sẽ phân tích hiện trạng và gửi kế hoạch đề xuất sơ bộ trong vòng
          24 giờ làm việc.
        </p>
        <ul class="mt-7 grid gap-4 text-sm leading-7 text-ink">
          <li class="flex gap-3">
            <Check :size="19" class="mt-1 shrink-0 text-blue" />Khảo sát hạ tầng
            & tư vấn giải pháp không cam kết ràng buộc
          </li>
          <li class="flex gap-3">
            <Check :size="19" class="mt-1 shrink-0 text-blue" />Bảo mật tuyệt
            đối thông tin dữ liệu của khách hàng (NDA)
          </li>
          <li class="flex gap-3">
            <Check :size="19" class="mt-1 shrink-0 text-blue" />Lộ trình chi phí
            minh bạch, chia giai đoạn rõ ràng
          </li>
        </ul>
      </div>
      <div class="surface-card p-6 md:p-9"><LeadForm kind="solution" /></div>
    </div>
  </section>
</template>
