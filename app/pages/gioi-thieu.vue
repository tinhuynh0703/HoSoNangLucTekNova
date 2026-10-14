<script setup lang="ts">
import { company } from "~/data/site";
import { aboutStats, departments, teamProfiles } from "~/data/aboutLegacy";
import {
  ArrowUpRight,
  Building2,
  Compass,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "@lucide/vue";
const failedImages = ref<Record<string, boolean>>({});
usePageSeo(
  "Giới thiệu TEKNOVA | Tầm nhìn và đội ngũ",
  "Tìm hiểu câu chuyện, tầm nhìn, sơ đồ tổ chức, đội ngũ chuyên gia và thông tin liên hệ của TEKNOVA.",
  "/gioi-thieu",
);
</script>
<template>
  <section class="border-b border-line bg-white">
    <div class="shell py-16 text-center lg:py-24">
      <p class="eyebrow">Câu chuyện TEKNOVA</p>
      <h1 class="h1 mx-auto mt-5 max-w-4xl text-navy">
        Đội ngũ chuyên gia tiên phong
        <span class="text-blue">kiến tạo giá trị</span> công nghệ bền vững
      </h1>
      <p class="lead mx-auto mt-6 max-w-2xl">
        Khởi nguồn từ triết lý “Now or Never”, TEKNOVA hội tụ tinh hoa tri thức
        công nghệ để giải quyết các bài toán hạ tầng số trọng yếu tại Việt Nam
        với tính thực tiễn cao nhất.
      </p>
      <div class="mt-7 flex flex-wrap justify-center gap-3">
        <a href="/teknova-profile.pdf" download class="button-secondary"
          >Tải Profile PDF <ArrowUpRight :size="17"
        /></a>
        <NuxtLink to="/lien-he" class="button-primary"
          >Tư vấn dự án <ArrowUpRight :size="17"
        /></NuxtLink>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="stat in aboutStats"
          :key="stat.label"
          class="surface-card p-5"
        >
          <p class="text-4xl font-bold text-blue">{{ stat.value }}</p>
          <p class="mt-2 text-sm font-semibold text-muted">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section shell">
    <SectionHeading
      eyebrow="Giá trị nền tảng"
      title="Tầm nhìn, Sứ mệnh & Triết lý vận hành"
      description="Định hướng chiến lược dẫn đường cho mọi quyết định nghiên cứu và ứng dụng công nghệ tại TEKNOVA Innovation JSC."
    />
    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <article class="flex flex-col border-t-2 border-blue pt-6">
        <Compass :size="28" class="text-blue" aria-hidden="true" />
        <p class="eyebrow mt-6">Chiến lược dài hạn</p>
        <h2 class="mt-2 text-xl font-bold text-navy">Tầm nhìn thương hiệu</h2>
        <p class="mb-5 mt-3 text-sm leading-8 text-muted">
          Trở thành doanh nghiệp công nghệ uy tín, minh bạch hàng đầu Việt Nam.
          Liên tục tạo ra sản phẩm công nghệ hữu ích, phụng sự và góp phần kiến
          thiết xã hội số văn minh, thịnh vượng.
        </p>
        <p class="mt-auto rounded bg-soft p-3 text-sm font-semibold text-blue">
          Định hình tiêu chuẩn số quốc gia
        </p>
      </article>
      <article class="flex flex-col border-t-2 border-blue pt-6">
        <Building2 :size="28" class="text-blue" aria-hidden="true" />
        <p class="eyebrow mt-6">Mục tiêu cống hiến</p>
        <h2 class="mt-2 text-xl font-bold text-navy">Sứ mệnh công nghệ</h2>
        <p class="mb-5 mt-3 text-sm leading-8 text-muted">
          Cung cấp các giải pháp phần mềm và hạ tầng công nghệ thông tin chất
          lượng cao, chuyên sâu. Lấy tính ứng dụng thực tế và hiệu quả đo lường
          được của khách hàng làm thước đo tuyệt đối.
        </p>
        <p class="mt-auto rounded bg-soft p-3 text-sm font-semibold text-blue">
          Thực thi chuẩn mực - Nhanh chóng - Bền bỉ
        </p>
      </article>
      <article class="flex flex-col border-t-2 border-blue pt-6">
        <HeartHandshake :size="28" class="text-blue" aria-hidden="true" />
        <p class="eyebrow mt-6">Kim chỉ nam</p>
        <h2 class="mt-2 text-xl font-bold text-navy">Triết lý “Chữ TÍN”</h2>
        <p class="mb-5 mt-3 text-sm leading-8 text-muted">
          Lấy chữ TÍN làm nền tảng cốt lõi trong mọi quan hệ đối tác. Luôn kiên
          định với phương châm hành động: Thực người - Thực việc - Thực giá trị.
        </p>
        <p class="mt-auto rounded bg-soft p-3 text-sm font-semibold text-blue">
          Minh bạch - Trách nhiệm dài lâu
        </p>
      </article>
    </div>
  </section>
  <section id="so-do-to-chuc" class="anchor-target section bg-mist">
    <div class="shell">
      <SectionHeading
        eyebrow="Cấu trúc doanh nghiệp"
        title="Sơ đồ cơ cấu tổ chức TEKNOVA"
        description="Mô hình quản trị hiện đại, linh hoạt, phân định quyền hạn minh bạch nhằm tối ưu hóa tiến độ triển khai sản phẩm và cam kết kỹ thuật."
      />
      <div class="mx-auto mt-11 max-w-4xl">
        <div
          class="mx-auto w-fit rounded-lg border border-blue bg-white px-8 py-4 text-center font-bold text-navy"
        >
          <span class="block">Hội đồng Quản trị</span>
          <span class="mt-1 block text-xs font-normal text-muted"
            >Định hướng chiến lược & giám sát tối cao</span
          >
        </div>
        <div class="mx-auto h-7 w-px bg-blue/40"></div>
        <div
          class="mx-auto w-fit rounded-lg border border-blue bg-white px-8 py-4 text-center font-bold text-navy"
        >
          <span class="block">Ban Giám đốc điều hành</span>
          <span class="mt-1 block text-xs font-normal text-muted"
            >Điều phối thực thi & quản trị vận hành chung</span
          >
        </div>
        <div class="mx-auto h-7 w-px bg-blue/40"></div>
        <div class="org-department-tree">
          <div class="org-department-rail" aria-hidden="true"></div>
          <div class="org-department-grid">
            <div
              v-for="department in departments"
              :key="department.name"
              class="org-department-card surface-card p-5"
            >
              <h3 class="font-bold text-navy">{{ department.name }}</h3>
              <p class="mt-1 text-xs text-blue">{{ department.english }}</p>
              <ul class="mt-4 space-y-2 text-xs leading-6 text-muted">
                <li
                  v-for="unit in department.units"
                  :key="unit"
                  class="rounded bg-soft px-2.5 py-1"
                >
                  {{ unit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="doi-ngu" class="anchor-target section shell">
    <div class="grid items-end gap-6 md:grid-cols-[1fr_auto]">
      <SectionHeading
        eyebrow="Con người TEKNOVA"
        title="Đội ngũ chuyên gia nòng cốt"
        description="Sở hữu mạng lưới chuyên gia, kỹ sư với bề dày kinh nghiệm từ 10-20 năm trong ngành CNTT cùng các tài năng trẻ nhiệt huyết, nhạy bén với công nghệ thế hệ mới."
      /><NuxtLink to="/lien-he" class="button-ghost"
        >Kết nối đội ngũ <ArrowUpRight :size="17"
      /></NuxtLink>
    </div>
    <div class="mt-9 grid gap-4 md:grid-cols-3">
      <article
        v-for="profile in teamProfiles"
        :key="profile.name"
        class="surface-card overflow-hidden"
      >
        <div class="relative h-56 bg-soft">
          <img
            v-if="!failedImages[profile.name]"
            :src="profile.image"
            :alt="`Ảnh minh họa cho hồ sơ ${profile.name}`"
            class="h-full w-full object-cover"
            loading="lazy"
            @error="failedImages[profile.name] = true"
          />
          <div
            v-else
            role="img"
            class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue/15 to-soft"
            :aria-label="`Ảnh minh họa cho hồ sơ ${profile.name} không khả dụng`"
          >
            <span
              class="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl font-bold text-blue"
              >{{ profile.name.split(" ").at(-1)?.charAt(0) }}</span
            >
          </div>
          <span
            class="absolute right-3 bottom-3 rounded bg-white px-2 py-1 text-xs font-bold text-blue"
            >{{ profile.experience }}</span
          >
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-navy">{{ profile.name }}</h3>
          <p class="mt-1 text-sm font-semibold text-blue">{{ profile.role }}</p>
          <p class="mt-4 text-sm leading-7 text-muted">
            {{ profile.description }}
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="skill in profile.skills"
              :key="skill"
              class="rounded-full bg-soft px-3 py-1 text-xs text-muted"
              >{{ skill }}</span
            >
          </div>
        </div>
      </article>
    </div>
    <div
      class="surface-card mt-8 flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8"
    >
      <div>
        <h3 class="text-xl font-bold text-navy">
          Hội đồng Cố vấn Thạc sĩ & Tiến sĩ CNTT
        </h3>
        <p class="mt-3 max-w-3xl text-sm leading-7 text-muted">
          TEKNOVA duy trì mối liên kết chặt chẽ với các chuyên gia, giảng viên
          đầu ngành từ các trường đại học công nghệ lớn và viện nghiên cứu, bảo
          đảm mọi giải pháp đề xuất đều đón đầu chuẩn mực quốc tế.
        </p>
      </div>
      <NuxtLink to="/lien-he" class="button-primary shrink-0"
        >Kết nối chuyên gia <ArrowUpRight :size="17"
      /></NuxtLink>
    </div>
  </section>
  <section class="section bg-white">
    <div class="shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <SectionHeading
          eyebrow="Pháp nhân chính thức"
          title="CÔNG TY CỔ PHẦN ĐỔI MỚI SÁNG TẠO TEKNOVA"
        />
        <p class="mt-6 text-sm leading-8 text-muted">
          Tổ chức hoạt động theo pháp luật Việt Nam, đầy đủ năng lực pháp lý để
          thực hiện các hợp đồng triển khai hạ tầng số cấp địa phương và toàn
          quốc.
        </p>
        <div class="mt-8 space-y-5 text-sm">
          <div class="flex gap-3">
            <MapPin :size="19" class="shrink-0 text-blue" />
            <span
              ><strong class="block text-navy">Trụ sở công ty</strong
              >{{ company.address }}</span
            >
          </div>
          <div class="flex gap-3">
            <Phone :size="19" class="shrink-0 text-blue" /><span
              ><strong class="block text-navy">Hotline kinh doanh</strong
              ><a
                :href="company.phoneHref"
                class="break-all font-semibold text-blue"
                >{{ company.phone }}</a
              ></span
            >
          </div>
          <div class="flex gap-3">
            <Mail :size="19" class="shrink-0 text-blue" /><span
              ><strong class="block text-navy">Email đối tác</strong
              ><a
                :href="company.emailHref"
                class="break-all font-semibold text-blue"
                >{{ company.email }}</a
              ></span
            >
          </div>
          <div class="flex gap-3">
            <Clock3 :size="19" class="shrink-0 text-blue" /><span
              ><strong class="block text-navy">Giờ làm việc</strong
              >{{ company.hours }}</span
            >
          </div>
        </div>
        <div class="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-blue">
          <span class="rounded bg-soft px-3 py-2">Hồ sơ năng lực hợp lệ</span>
          <span class="rounded bg-soft px-3 py-2"
            >Bảo mật dữ liệu tuyệt đối</span
          >
          <span class="rounded bg-soft px-3 py-2">Cam kết SLA thực tế</span>
        </div>
      </div>
      <div class="surface-card p-6 md:p-9">
        <h2 class="text-2xl font-bold text-navy">Gửi yêu cầu trao đổi dự án</h2>
        <p class="mt-2 mb-6 text-sm leading-7 text-muted">
          Đội ngũ tư vấn kỹ thuật sẽ liên hệ phản hồi và cung cấp phương án kiến
          trúc trong vòng 24 giờ.
        </p>
        <LeadForm kind="contact" />
        <p class="mt-5 text-sm text-muted">
          Hoặc gọi ngay đường dây nóng:
          <a :href="company.phoneHref" class="font-bold text-blue">{{
            company.phone
          }}</a>
        </p>
      </div>
    </div>
  </section>
</template>
