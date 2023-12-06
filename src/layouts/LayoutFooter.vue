<template>
  <div
    class="flex h-[500px] flex-col items-center gap-8 bg-white bg-opacity-60 py-4 lg:h-auto lg:flex-row lg:items-start"
  >
    <img
      class="hidden h-[150px] w-1/3 lg:block"
      src="../assets/images/cncmill-logo.png"
      alt="cncmill-logo"
    />
    <div
      class="flex w-full flex-col items-center justify-center text-gray-600 lg:w-1/3"
    >
      <p class="text-3xl">{{ t("footer.menu") }}</p>
      <a class="text-black" href="#naslovna">{{ t("footer.home") }}</a>
      <a class="text-black" href="#o-nama">{{ t("footer.about") }}</a>
      <a class="text-black" href="#usluge">{{ t("footer.services") }}</a>
      <a class="text-black" href="#oprema">{{ t("footer.equipment") }}</a>
      <a class="text-black" href="#galerija">{{ t("footer.gallery") }}</a>
      <a class="text-black" href="#kontakt">{{ t("footer.contact") }}</a>
    </div>
    <div class="flex h-[100px] w-full flex-col items-center gap-4 lg:w-1/3">
      <p class="text-3xl">{{ t("footer.contactUs") }}</p>
      <div class="px-10">
        <a class="mb-4 flex items-center gap-2 text-black" href="#">
          <Icon icon="ion:location-sharp" class="h-[35px] w-[35px]"></Icon>
          Petra Kočića bb</a
        >
        <a class="mb-4 flex items-center gap-2 text-black" href="#">
          <Icon icon="fa-solid:phone-alt" class="h-[30px] w-[30px]"></Icon>
          +38765882378
        </a>
        <a class="flex items-center gap-2 text-black" href="#">
          <Icon icon="ph:envelope-thin" class="h-[35px] w-[35px]"></Icon>
          info@cncmill.org
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
