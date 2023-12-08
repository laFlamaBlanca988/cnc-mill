<template>
  <div
    class="banner-above-navbar text-dark hidden items-center justify-center gap-2 bg-white py-2 text-center opacity-80 lg:flex"
  >
    <div class="flex items-center border-r border-gray-300 pr-2">
      <Icon icon="mdi:location"></Icon>
      Petra Kocica bb
    </div>
    <div class="flex items-center border-r border-gray-300 pr-2">
      <Icon icon="ic:baseline-phone"></Icon>
      <span class="ml-2">+38765882917</span>
    </div>
    <div class="flex items-center">
      <Icon icon="mingcute:mail-fill"></Icon>
      <span class="ml-2">info@cncmill.org</span>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
