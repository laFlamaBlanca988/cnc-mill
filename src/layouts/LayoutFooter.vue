<template>
  <div
    class="flex flex-col items-center gap-8 bg-white bg-opacity-60 py-4 lg:flex-row"
  >
    <img
      class="block h-[180px] w-1/3 lg:order-1"
      src="../assets/images/logo_blue.svg"
      alt="cncmill-logo"
    />
    <div
      class="order-2 flex w-full flex-col items-center justify-center text-gray-600 lg:w-1/3"
    >
      <p class="text-3xl">{{ t("footer.menu") }}</p>
      <a class="text-black" href="#naslovna">{{ t("footer.home") }}</a>
      <a class="text-black" href="#o-nama">{{ t("footer.about") }}</a>
      <a class="text-black" href="#usluge">{{ t("footer.services") }}</a>
      <a class="text-black" href="#oprema">{{ t("footer.equipment") }}</a>
      <a class="text-black" href="#galerija">{{ t("footer.gallery") }}</a>
      <a class="text-black" href="#kontakt">{{ t("footer.contact") }}</a>
    </div>
    <div
      class="order-2 flex w-full flex-col items-center gap-4 lg:order-3 lg:w-1/3"
    >
      <p class="text-3xl">{{ t("footer.contactUs") }}</p>
      <div class="px-10">
        <a
          class="mb-4 flex items-center gap-2 text-black"
          target="_blank"
          href="https://www.google.com/maps?q=44.7261657,17.3309937"
        >
          <Icon icon="ion:location-sharp" class="h-[35px] w-[35px]"></Icon>
          Mladena Stojanovića bb</a
        >
        <a
          href="tel:+436677779273"
          class="mb-4 flex items-center gap-2 text-black"
        >
          <Icon icon="fa-solid:phone-alt" class="h-[30px] w-[30px]"></Icon>
          +436677779273
        </a>
        <a
          class="flex items-center gap-2 text-black"
          href="mailto:info@cncmill.tech"
        >
          <Icon icon="ph:envelope-thin" class="h-[35px] w-[35px]"></Icon>
          info@cncmill.tech
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
