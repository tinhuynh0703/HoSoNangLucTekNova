<script setup lang="ts">
import { services } from "~/data/site";
import {
  ArrowUpRight,
  Waypoints,
  Network,
  Code2,
  Database,
  Server,
  Handshake,
} from "@lucide/vue";
const icons = [Waypoints, Network, Code2, Database, Server, Handshake];
</script>
<template>
  <div
    class="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 xl:grid-cols-3"
  >
    <article
      v-for="(service, index) in services"
      :key="service.number"
      class="group flex min-h-58 flex-col bg-white p-7 transition-colors hover:bg-soft"
    >
      <div class="flex items-start justify-between">
        <component
          :is="icons[index]"
          :size="27"
          :stroke-width="1.6"
          class="text-blue"
          aria-hidden="true"
        /><span class="text-xs font-bold text-muted">{{ service.number }}</span>
      </div>
      <h3 class="mt-8 text-lg font-bold text-navy">{{ service.title }}</h3>
      <p class="mt-3 flex-1 text-sm leading-7 text-muted">
        {{ service.detail }}
      </p>
      <span
        class="mt-5 w-fit rounded bg-soft px-2.5 py-1 text-xs font-semibold text-blue"
        >{{ service.badge }}</span
      >
      <NuxtLink
        to="/linh-vuc-hoat-dong"
        class="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue"
        >Tìm hiểu lĩnh vực <ArrowUpRight :size="15"
      /></NuxtLink>
    </article>
  </div>
</template>
