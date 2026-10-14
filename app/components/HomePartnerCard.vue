<script setup lang="ts">
import type { homePartners } from "~/data/homeLegacy";

defineProps<{
  partner: (typeof homePartners)[number];
}>();
</script>

<template>
  <li class="partner-marquee-card surface-card flex items-center gap-3 p-4">
    <span
      class="grid size-11 shrink-0 place-items-center rounded-lg bg-mist text-blue"
      aria-hidden="true"
    >
      <PartnerIcon :icon="partner.icon" />
    </span>
    <div class="min-w-0">
      <p class="font-bold leading-6 text-navy">{{ partner.name }}</p>
      <p class="mt-1 text-xs leading-5 text-muted">{{ partner.detail }}</p>
    </div>
  </li>
</template>
