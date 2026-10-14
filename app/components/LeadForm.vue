<script setup lang="ts">
import { leadSchema, type Lead } from "~~/shared/lead";
import { company } from "~/data/site";
import { ArrowRight, LoaderCircle } from "@lucide/vue";

const props = defineProps<{ kind: "contact" | "solution" }>();
const form = reactive<Lead>({
  kind: props.kind,
  name: "",
  phone: "",
  email: "",
  organization: "",
  interest: "",
  message: "",
  website: "",
});
const interests =
  props.kind === "contact"
    ? [
        "Phần mềm quản lý theo yêu cầu",
        "Giải pháp Y tế Bệnh viện (HIS/EMR)",
        "Chuyển đổi số Hành chính công",
        "Hạ tầng Viễn thông & Thiết bị CNTT",
      ]
    : [
        "Giải pháp Y tế Thông minh & Bệnh án điện tử EMR",
        "Phát triển Phần mềm & Ứng dụng Quản trị May đo",
        "Chuyển đổi số, IOC Dashboard & Ứng dụng AI",
        "Hạ tầng Mạng, An toàn thông tin Cấp độ 3 & Thiết bị",
        "Tư vấn tổng thể chuyển đổi số toàn diện",
      ];
const errors = ref<Record<string, string>>({});
const status = ref<"idle" | "loading" | "success" | "error">("idle");
const message = ref("");

async function submit() {
  if (status.value === "loading") return;
  errors.value = {};
  const result = leadSchema.safeParse(form);
  if (!result.success) {
    for (const issue of result.error.issues)
      errors.value[String(issue.path[0])] ??= issue.message;
    status.value = "error";
    message.value = "Vui lòng kiểm tra các trường được đánh dấu.";
    return;
  }
  status.value = "loading";
  message.value = "";
  try {
    const response = await $fetch<{ accepted: boolean }>("/api/leads", {
      method: "POST",
      body: result.data,
      retry: 0,
    });
    if (!response.accepted) throw new Error("Not accepted");
    status.value = "success";
    message.value =
      props.kind === "contact"
        ? "Đã gửi yêu cầu thành công. Chuyên viên tư vấn TEKNOVA sẽ liên hệ trực tiếp qua số điện thoại của quý khách sớm nhất."
        : "Yêu cầu đã được tiếp nhận. Đội ngũ kỹ sư TEKNOVA sẽ liên hệ bạn ngay.";
  } catch {
    status.value = "error";
    message.value =
      "Kênh gửi trực tuyến hiện chưa sẵn sàng. Vui lòng gọi hoặc gửi email trực tiếp theo thông tin bên dưới.";
  }
}
</script>
<template>
  <form class="grid gap-4" novalidate @submit.prevent="submit">
    <div class="hidden" aria-hidden="true">
      <label for="website-field">Website</label
      ><input
        id="website-field"
        v-model="form.website"
        tabindex="-1"
        autocomplete="off"
      />
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label class="field-label" :for="`${kind}-name`"
          >{{ kind === "contact" ? "Họ và tên đại diện" : "Họ và tên của bạn" }}
          <span aria-hidden="true">*</span></label
        ><input
          :id="`${kind}-name`"
          v-model="form.name"
          class="input"
          autocomplete="name"
          placeholder="Nguyễn Văn A"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? `${kind}-name-error` : undefined"
        />
        <p v-if="errors.name" :id="`${kind}-name-error`" class="field-error">
          {{ errors.name }}
        </p>
      </div>
      <div>
        <label class="field-label" :for="`${kind}-phone`"
          >Số điện thoại liên hệ <span aria-hidden="true">*</span></label
        ><input
          :id="`${kind}-phone`"
          v-model="form.phone"
          class="input"
          inputmode="tel"
          autocomplete="tel"
          placeholder="09xx xxx xxx"
          :aria-invalid="!!errors.phone"
          :aria-describedby="errors.phone ? `${kind}-phone-error` : undefined"
        />
        <p v-if="errors.phone" :id="`${kind}-phone-error`" class="field-error">
          {{ errors.phone }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label class="field-label" :for="`${kind}-email`"
          >{{ kind === "solution" ? "Email công việc" : "Email" }}
          <span v-if="kind === 'solution'" aria-hidden="true">*</span></label
        ><input
          :id="`${kind}-email`"
          v-model="form.email"
          class="input"
          type="email"
          autocomplete="email"
          :placeholder="kind === 'solution' ? 'name@domain.vn' : undefined"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? `${kind}-email-error` : undefined"
        />
        <p v-if="errors.email" :id="`${kind}-email-error`" class="field-error">
          {{ errors.email }}
        </p>
      </div>
      <div>
        <label class="field-label" :for="`${kind}-organization`">{{
          kind === "solution" ? "Cơ quan / Đơn vị công tác" : "Cơ quan / đơn vị"
        }}</label
        ><input
          :id="`${kind}-organization`"
          v-model="form.organization"
          class="input"
          autocomplete="organization"
          :placeholder="
            kind === 'solution' ? 'Bệnh viện đa khoa / Tập đoàn...' : undefined
          "
        />
      </div>
    </div>
    <div>
      <label class="field-label" :for="`${kind}-interest`"
        >{{
          kind === "solution" ? "Lĩnh vực bạn quan tâm" : "Lĩnh vực quan tâm"
        }}
        <span aria-hidden="true">*</span></label
      ><select
        :id="`${kind}-interest`"
        v-model="form.interest"
        class="input"
        :aria-invalid="!!errors.interest"
        :aria-describedby="
          errors.interest ? `${kind}-interest-error` : undefined
        "
      >
        <option value="">Chọn lĩnh vực</option>
        <option v-for="item in interests" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <p
        v-if="errors.interest"
        :id="`${kind}-interest-error`"
        class="field-error"
      >
        {{ errors.interest }}
      </p>
    </div>
    <div>
      <label class="field-label" :for="`${kind}-message`">{{
        kind === "contact" ? "Nội dung tóm tắt" : "Yêu cầu hoặc mục tiêu cụ thể"
      }}</label
      ><textarea
        :id="`${kind}-message`"
        v-model="form.message"
        class="input min-h-28 resize-y"
        rows="4"
        :placeholder="
          kind === 'contact'
            ? 'Mô tả sơ lược quy mô hoặc nhu cầu triển khai...'
            : 'Mô tả sơ lược hiện trạng quy mô bệnh viện/doanh nghiệp hoặc thời hạn mong muốn...'
        "
      ></textarea>
    </div>
    <div>
      <button
        class="button-primary w-full sm:w-auto"
        type="submit"
        :disabled="status === 'loading'"
      >
        <LoaderCircle
          v-if="status === 'loading'"
          :size="17"
          class="animate-spin"
        /><template v-else
          >{{
            kind === "contact"
              ? "Gửi thông tin ngay"
              : "Gửi yêu cầu & Nhận đề xuất giải pháp"
          }}
          <ArrowRight :size="17"
        /></template>
      </button>
      <p class="mt-3 text-xs text-muted">
        Chỉ thông báo thành công khi hệ thống xác nhận tiếp nhận.
      </p>
    </div>
    <p
      v-if="message"
      role="status"
      class="rounded-md p-3 text-sm"
      :class="
        status === 'success'
          ? 'bg-green-50 text-green-800'
          : 'bg-amber-50 text-amber-950'
      "
    >
      {{ message }}
    </p>
    <p class="text-sm text-muted">
      Liên hệ trực tiếp:
      <a :href="company.phoneHref" class="font-bold text-blue">{{
        company.phone
      }}</a>
      ·
      <a :href="company.emailHref" class="break-all font-bold text-blue">{{
        company.email
      }}</a>
    </p>
  </form>
</template>
