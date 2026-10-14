<script setup lang="ts">
import { solutions, company } from "~/data/site";
import {
  homeStats,
  homePartners,
  homeFeaturedProjects,
} from "~/data/homeLegacy";
import {
  ArrowUpRight,
  ArrowRight,
  Database,
  FileHeart,
  Workflow,
  ShieldCheck,
  ChevronDown,
  Phone,
} from "@lucide/vue";
usePageSeo(
  "TEKNOVA | Giải pháp phần mềm & chuyển đổi số",
  "TEKNOVA kiến tạo giải pháp công nghệ và chuyển đổi số cho y tế, giáo dục, chính quyền điện tử và doanh nghiệp.",
  "/",
);
const homePartnerRows = [homePartners.slice(0, 10), homePartners.slice(10)];
</script>
<template>
  <section
    class="shell grid items-center gap-12 py-16 lg:grid-cols-[1.07fr_.93fr] lg:py-23"
  >
    <div>
      <p class="eyebrow">Đổi mới Sáng tạo • Now or Never</p>
      <h1 class="display mt-6 text-navy">
        Kiến tạo Giải pháp
        <span class="text-blue">Công nghệ & Chuyển đổi số</span> Toàn diện
      </h1>
      <p class="lead mt-7 max-w-2xl">
        Công ty Cổ phần Đổi mới Sáng tạo TEKNOVA tiên phong lập trình, chuyển
        giao giải pháp chuyển đổi số cho y tế, giáo dục và chính quyền điện tử
        cùng đội ngũ Thạc sĩ, Kỹ sư trên 10–20 năm kinh nghiệm.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <NuxtLink to="/du-an" class="button-primary"
          >Khám phá dự án <ArrowRight :size="18"
        /></NuxtLink>
        <a href="/teknova-profile.pdf" download class="button-secondary"
          >Tải Profile PDF <ArrowUpRight :size="18"
        /></a>
      </div>
      <div class="mt-7 grid gap-3 text-sm sm:grid-cols-2">
        <div class="rounded-lg border border-line bg-white p-4">
          <p class="flex items-center gap-2 font-bold text-navy">
            <ShieldCheck :size="18" class="text-blue" /> Chứng nhận HIS / EMR
            Chuẩn BYT
          </p>
          <p class="mt-2 leading-6 text-muted">
            Tuân thủ đầy đủ tiêu chuẩn HL7/FHIR, liên thông cổng giám định BHYT
            và kết nối kho dữ liệu y tế quốc gia.
          </p>
        </div>
        <div class="rounded-lg border border-line bg-white p-4">
          <p class="flex items-center gap-2 font-bold text-navy">
            <ShieldCheck :size="18" class="text-blue" /> An toàn & Bảo mật Cấp
            độ 3
          </p>
          <p class="mt-2 leading-6 text-muted">
            Hệ thống đáp ứng an toàn thông tin theo Nghị định 85/2016/NĐ-CP Cấp
            độ 3 với mã hóa dữ liệu đa tầng HSM & WAF.
          </p>
        </div>
      </div>
    </div>
    <div class="hero-visual lg:mt-24 lg:self-start">
      <div class="diagram-panel p-5 sm:p-7">
        <div
          class="flex items-center justify-between border-b border-line pb-4"
        >
          <span class="text-xs font-extrabold tracking-widest text-blue"
            >TEKNOVA Cloud Core • Smart Hospital & Admin Dashboard</span
          ><span class="flex gap-1"
            ><i class="h-2 w-2 rounded-full bg-slate-300"></i
            ><i class="h-2 w-2 rounded-full bg-slate-300"></i
            ><i class="h-2 w-2 rounded-full bg-slate-300"></i
          ></span>
        </div>
        <div
          class="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs"
        >
          <span class="font-semibold text-blue">Live v4.8</span>
          <span class="text-muted">Cloud On-Premise & Hybrid</span>
        </div>
        <div class="mt-4 grid gap-2 text-xs sm:grid-cols-2">
          <div class="rounded border border-line bg-white p-3">
            <b class="block text-navy">Hồ Sơ Bệnh Án EMR</b>Liên thông Bộ Y Tế •
            100%
          </div>
          <div class="rounded border border-line bg-white p-3">
            <b class="block text-navy">Cổng TT Kiosk Y Tế</b>Tích hợp CCCD & QR
            VNeID
          </div>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
          <div class="rounded bg-soft p-3">
            <span class="block text-muted">Lượt khám & Hồ sơ EMR</span>
            <b class="mt-1 block text-lg text-navy">32,840</b>
            <span class="text-blue">+18.4% tháng này</span>
          </div>
          <div class="rounded bg-soft p-3">
            <span class="block text-muted">Thanh toán không tiền mặt</span>
            <b class="mt-1 block text-lg text-navy">94.2%</b>
            <span class="text-blue">Đạt mục tiêu CP</span>
          </div>
          <div class="col-span-2 rounded bg-soft p-3 sm:col-span-1">
            <span class="block text-muted">Đơn thuốc điện tử</span>
            <b class="mt-1 block text-lg text-navy">100%</b>
            <span class="text-blue">Chuẩn BYT 26</span>
          </div>
        </div>
        <details class="group mt-4 border-t border-line pt-4">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-bold text-blue"
          >
            <span class="flex items-center gap-2">
              <ShieldCheck :size="16" class="shrink-0" /> Sơ đồ tích hợp & quy
              trình · SLA 99.98%
            </span>
            <ChevronDown
              :size="17"
              class="shrink-0 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div class="mt-5 border-t border-line pt-4">
            <div class="grid items-center gap-3 sm:grid-cols-[1fr_1.15fr]">
              <div class="space-y-3">
                <div class="diagram-node flex items-center gap-2">
                  <FileHeart :size="17" /> Nghiệp vụ y tế
                </div>
                <div class="diagram-node flex items-center gap-2">
                  <Workflow :size="17" /> Quy trình tổ chức
                </div>
                <div class="diagram-node flex items-center gap-2">
                  <Database :size="17" /> Dữ liệu quản lý
                </div>
              </div>
              <div class="rounded-lg border border-blue/20 bg-soft p-5">
                <span
                  class="text-xs font-bold uppercase tracking-widest text-blue"
                  >Lớp tích hợp</span
                >
                <div class="my-4 diagram-line"></div>
                <p class="text-xl font-bold leading-snug text-navy">
                  Một luồng dữ liệu.<br />Nhiều điểm chạm.
                </p>
                <p class="mt-3 text-xs leading-6 text-muted">
                  Kết nối hệ thống đang có với quy trình số mới.
                </p>
              </div>
            </div>
            <p
              class="mt-5 text-xs font-bold uppercase tracking-widest text-blue"
            >
              Quy trình điều phối dữ liệu Y tế & Quản trị
            </p>
            <ol class="mt-3 grid gap-2 text-xs sm:grid-cols-4">
              <li class="rounded border border-line bg-white p-2">
                1. Tiếp đón Kiosk · CCCD gắn chip
              </li>
              <li class="rounded border border-line bg-white p-2">
                2. Khám & Chỉ định · EMR Không giấy
              </li>
              <li class="rounded border border-line bg-white p-2">
                3. Viện phí Dynamic QR · Ngân hàng / Ví số
              </li>
              <li class="rounded border border-line bg-white p-2">
                4. Đồng bộ Bộ Y Tế · Ký số HSM tự động
              </li>
            </ol>
            <p class="mt-5 border-t border-line pt-4 text-xs text-muted">
              Trực ban Hệ thống · SLA 99.98% · Downtime tối đa &lt; 1.75 giờ/năm
              · Kỹ sư trực ca 24/7/365, xử lý sự cố trong vòng 15 phút
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
  <section class="border-y border-line bg-soft">
    <div
      class="shell grid gap-7 py-10 text-center sm:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="stat in homeStats" :key="stat.label">
        <p class="text-4xl font-bold text-blue">{{ stat.value }}</p>
        <h2 class="mt-2 font-bold text-navy">{{ stat.label }}</h2>
        <p class="mt-1 text-xs text-muted">{{ stat.detail }}</p>
      </div>
    </div>
  </section>
  <section class="section overflow-hidden">
    <div class="shell">
      <SectionHeading
        eyebrow="Đồng hành & phát triển • Strategic Partners"
        title="Được tin chọn bởi hơn 50+ bệnh viện, sở ban ngành & đối tác công nghệ hàng đầu"
      />
    </div>
    <div
      v-for="(row, index) in homePartnerRows"
      :key="index"
      class="partner-marquee-viewport"
      :class="index === 0 ? 'mt-9' : 'mt-3'"
      tabindex="0"
      :aria-label="`Mạng lưới đối tác và khách hàng tiêu biểu, hàng ${index + 1}`"
    >
      <div
        class="partner-marquee-track home-partner-track"
        :class="index === 1 ? 'partner-marquee-track--reverse' : ''"
      >
        <ul class="partner-marquee-group">
          <HomePartnerCard
            v-for="partner in row"
            :key="partner.name"
            :partner="partner"
          />
        </ul>
        <ul class="partner-marquee-group" aria-hidden="true">
          <HomePartnerCard
            v-for="partner in row"
            :key="partner.name"
            :partner="partner"
          />
        </ul>
      </div>
    </div>
  </section>
  <section class="border-y border-line bg-white">
    <div class="shell grid gap-5 py-6 text-sm md:grid-cols-3">
      <div class="flex items-center gap-3">
        <span class="text-2xl font-light text-blue">01</span
        ><span class="font-semibold">Hiểu đúng quy trình nghiệp vụ</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-2xl font-light text-blue">02</span
        ><span class="font-semibold">Thiết kế khả năng tích hợp</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-2xl font-light text-blue">03</span
        ><span class="font-semibold">Chuyển giao để vận hành lâu dài</span>
      </div>
    </div>
  </section>
  <section class="section shell">
    <div class="mb-10 flex flex-wrap items-end justify-between gap-5">
      <SectionHeading
        eyebrow="Năng lực triển khai"
        title="6 lĩnh vực hoạt động cốt lõi"
        description="Một điểm kết nối cho bài toán từ kiến trúc giải pháp, phần mềm đến hạ tầng triển khai."
      /><NuxtLink to="/linh-vuc-hoat-dong" class="button-ghost"
        >Xem toàn bộ lĩnh vực <ArrowUpRight :size="17"
      /></NuxtLink>
    </div>
    <ServiceGrid />
  </section>
  <section class="section bg-mist">
    <div class="shell">
      <SectionHeading
        eyebrow="Giải pháp tham chiếu"
        title="Các bài toán TEKNOVA tập trung"
        description="Giải pháp bệnh án điện tử, đơn thuốc điện tử, Zalo OA, dữ liệu dân số và thanh toán không tiền mặt."
      />
      <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(solution, index) in solutions"
          :key="solution.title"
          class="surface-card flex flex-col p-6"
          :class="
            index === 0
              ? 'lg:col-span-2 lg:grid lg:grid-cols-[1fr_.7fr] lg:gap-8 lg:p-8'
              : ''
          "
        >
          <div>
            <p class="eyebrow">{{ solution.label }}</p>
            <h3 class="mt-4 text-2xl font-bold text-navy">
              {{ solution.title }}
            </h3>
            <p class="mt-3 max-w-lg text-sm leading-7 text-muted">
              {{ solution.detail }}
            </p>
            <NuxtLink to="/linh-vuc-hoat-dong" class="button-ghost mt-5"
              >Xem lĩnh vực liên quan <ArrowUpRight :size="16"
            /></NuxtLink>
          </div>
          <div
            v-if="index === 0"
            class="mt-7 grid place-items-center rounded-md border border-line bg-soft p-7 lg:mt-0"
          >
            <div class="w-full max-w-50 space-y-2">
              <div
                class="flex items-center gap-2 rounded bg-white p-3 text-xs font-semibold text-blue"
              >
                <FileHeart :size="16" /> Hồ sơ
              </div>
              <div
                class="flex items-center gap-2 rounded bg-white p-3 text-xs font-semibold text-blue"
              >
                <Database :size="16" /> Dữ liệu
              </div>
              <div
                class="flex items-center gap-2 rounded bg-white p-3 text-xs font-semibold text-blue"
              >
                <Workflow :size="16" /> Tích hợp
              </div>
            </div>
          </div>
          <span v-else class="mt-5 text-xs font-semibold text-blue">{{
            solution.tag
          }}</span>
        </article>
      </div>
    </div>
  </section>
  <section class="section shell">
    <div class="mb-9 flex flex-wrap items-end justify-between gap-5">
      <SectionHeading
        eyebrow="Thực Việc • Thực Giá Trị"
        title="Dự Án Tiêu Biểu Triển Khai"
      /><NuxtLink to="/du-an" class="button-ghost"
        >Xem tất cả dự án <ArrowUpRight :size="17"
      /></NuxtLink>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in homeFeaturedProjects"
        :key="project.title"
        class="surface-card p-6"
      >
        <p class="eyebrow">{{ project.category }}</p>
        <h3 class="mt-5 text-xl font-bold text-navy">{{ project.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-muted">{{ project.detail }}</p>
        <div class="mt-5 rounded bg-soft p-3 text-xs leading-6 text-muted">
          <span class="block">{{ project.metric }}</span>
          <strong class="text-blue">{{ project.outcome }}</strong>
        </div>
      </article>
      <div class="surface-card flex flex-col justify-between bg-soft p-6">
        <div>
          <p class="eyebrow">Trao đổi nhu cầu</p>
          <h3 class="mt-5 text-xl font-bold text-navy">
            Bạn Cần Tư Vấn Chuyển Đổi Số?
          </h3>
          <p class="mt-3 text-sm leading-7 text-muted">
            TEKNOVA sẵn sàng cùng các Sở, Ban Ngành và Doanh nghiệp khảo sát,
            demo giải pháp mẫu và đề xuất kế hoạch thực thi chi tiết.
          </p>
        </div>
        <NuxtLink to="/lien-he" class="button-ghost mt-5"
          >Đặt lịch tư vấn chuyên gia <ArrowUpRight :size="16"
        /></NuxtLink>
      </div>
    </div>
  </section>
  <section class="section border-t border-line bg-white">
    <div class="shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
      <div>
        <p class="eyebrow">Về TEKNOVA Innovation</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
          Lấy chữ TÍN làm nền tảng.
        </h2>
        <p class="mt-5 text-lg font-semibold text-blue">
          Thực người · Thực việc · Thực giá trị
        </p>
        <p class="mt-5 text-sm leading-8 text-muted">
          Tại TEKNOVA, chúng tôi định hình vị thế bằng sự tin cậy tuyệt đối và
          tính chuyên sâu của từng dòng mã nguồn, từng giải pháp công nghệ vận
          hành trong đời sống thực tế.
        </p>
        <NuxtLink to="/gioi-thieu" class="button-ghost mt-6"
          >Tìm hiểu về TEKNOVA <ArrowUpRight :size="17"
        /></NuxtLink>
      </div>
      <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <div class="surface-card p-5">
          <h3 class="font-bold text-navy">Tầm Nhìn Chiến Lược</h3>
          <p class="mt-2 text-sm leading-7 text-muted">
            Công nghệ nền tảng, giá trị bền lâu. Trở thành đối tác chiến lược
            hàng đầu trong hệ sinh thái số hóa hành chính và y tế tại Miền Trung
            và cả nước.
          </p>
        </div>
        <div class="surface-card p-5">
          <h3 class="font-bold text-navy">Sứ Mệnh Tiên Phong</h3>
          <p class="mt-2 text-sm leading-7 text-muted">
            Đồng hành cùng đối tác thu hẹp khoảng cách công nghệ, tối ưu hóa
            nguồn lực nhân sự, đem lại trải nghiệm dịch vụ số tiện ích nhất cho
            người dân.
          </p>
        </div>
        <div class="surface-card p-5">
          <h3 class="font-bold text-navy">Đội Ngũ Tinh Anh</h3>
          <p class="mt-2 text-sm leading-7 text-muted">
            Quy tụ các chuyên gia công nghệ, kỹ sư giải pháp có từ 10 đến 20 năm
            kinh nghiệm, luôn tận tâm đồng hành trên tinh thần “Now or Never”.
          </p>
          <NuxtLink to="/gioi-thieu#doi-ngu" class="button-ghost mt-3"
            >Xem năng lực đội ngũ <ArrowUpRight :size="16"
          /></NuxtLink>
        </div>
        <div
          class="rounded-lg bg-blue p-6 text-white sm:col-span-3 lg:col-span-1"
        >
          <p class="text-xs font-bold uppercase tracking-widest text-sky-200">
            Hệ Trị Số Vận Hành · TEKNOVA Quality Assurance
          </p>
          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p class="text-3xl font-bold">10-20</p>
              <p class="mt-1 text-sm">
                Năm kinh nghiệm chuyên môn từng nhân sự chủ chốt
              </p>
            </div>
            <div>
              <p class="text-3xl font-bold">24/7</p>
              <p class="mt-1 text-sm">
                Đội phản ứng nhanh kỹ thuật luôn sẵn sàng
              </p>
            </div>
          </div>
          <blockquote
            class="mt-6 border-t border-white/30 pt-5 text-sm leading-7 italic"
          >
            “Không có giải pháp vạn năng, chỉ có giải pháp thấu hiểu tận cùng
            nghiệp vụ của khách hàng. Chúng tôi cam kết tạo ra những giá trị
            nhìn thấy được và đo lường được.”
            <footer class="mt-2 text-xs font-semibold not-italic">
              Ban Lãnh Đạo TEKNOVA · Innovation JSC
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
  <section class="section-tight bg-navy text-white">
    <div class="shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
      <div>
        <p class="text-xs font-bold uppercase tracking-[.16em] text-sky-300">
          Bắt Đầu Hành Trình Số
        </p>
        <h2 class="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          Sẵn Sàng Nâng Tầm Năng Lực Vận Hành Cùng TEKNOVA?
        </h2>
        <p class="mt-4 text-sm leading-7 text-slate-300">
          Liên hệ ngay hôm nay để nhận tư vấn chuyên sâu, khảo sát hiện trạng và
          đề xuất giải pháp công nghệ tùy chỉnh riêng cho đơn vị của bạn.
        </p>
      </div>
      <div class="flex flex-wrap gap-3">
        <NuxtLink to="/lien-he" class="button-secondary"
          >Đăng Ký Tư Vấn Ngay <ArrowUpRight :size="18"
        /></NuxtLink>
        <a
          :href="company.phoneHref"
          class="inline-flex items-center gap-2 px-4 py-3 font-semibold text-white underline underline-offset-4"
          ><Phone :size="17" /> {{ company.phone }}</a
        >
      </div>
    </div>
  </section>
</template>
