<template>
  <div
    class="banner-above-navbar text-dark hidden items-center justify-center gap-2 bg-white py-2 text-center opacity-80 lg:flex"
  >
    <a
      target="_blank"
      href="https://www.google.com/maps?q=44.7261657,17.3309937"
      class="flex w-[182px] items-center justify-center border-r border-gray-300 pr-2"
    >
      <Icon icon="mdi:location"></Icon>
      Mladena Stojanovića bb 
    </a>
    <a
      href="tel:+436677779273"
      class="flex w-[182px] items-center justify-center border-r border-gray-300 pr-2"
    >
      <Icon icon="ic:baseline-phone"></Icon>
      <span class="ml-2">+436677779273</span>
    </a>
    <a
      href="mailto:info@cncmill.tech"
      class="flex w-[182px] items-center justify-center"
    >
      <Icon icon="mingcute:mail-fill"></Icon>
      <span class="ml-2">info@cncmill.tech</span>
    </a>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
