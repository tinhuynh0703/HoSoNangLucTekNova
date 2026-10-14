<script setup lang="ts">
import {
  Building2,
  Cloud,
  CreditCard,
  FlaskConical,
  HeartPulse,
  Hospital,
  Landmark,
  MessageCircle,
  Microscope,
  Network,
  RadioTower,
  ShieldCheck,
  UsersRound,
} from "@lucide/vue";

const partnerIcons = {
  hospital: Hospital,
  health: HeartPulse,
  population: UsersRound,
  government: Landmark,
  bank: CreditCard,
  telecom: RadioTower,
  lab: FlaskConical,
  message: MessageCircle,
  cloud: Cloud,
  network: Network,
  security: ShieldCheck,
  research: Microscope,
  city: Building2,
} as const;

defineProps<{ icon: keyof typeof partnerIcons }>();
</script>

<template>
  <component :is="partnerIcons[icon]" :size="23" :stroke-width="1.8" />
</template>
