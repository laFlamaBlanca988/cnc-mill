<template>
  <div ref="oprema" id="oprema">
    <!-- First Section -->
    <div
      class="relative flex flex-col items-center justify-between gap-12 overflow-hidden pb-10 pt-10 xl:flex-row xl:gap-0 xl:pt-0"
    >
      <h4
        class="text-bg-main-blue flex-none text-3xl lg:text-5xl xl:absolute xl:left-[100px] xl:top-10"
      >
        {{ t("equipment.title") }}
      </h4>
      <div
        class="flex h-[90px] w-full items-center justify-center bg-main-blue text-white xl:order-3 xl:h-[270px] xl:w-[270px]"
      >
        <h3 class="text-3xl lg:text-4xl">VMX-40</h3>
      </div>
      <div
        class="h-[300px] w-full max-w-full bg-contain bg-center bg-no-repeat md:h-[500px] xl:order-2 xl:h-[500px] xl:w-[600px]"
        :style="{ backgroundImage: `url(${backgroundImage_1})` }"
      ></div>

      <ul
        class="flex h-[270px] w-full flex-col justify-center gap-3 bg-main-blue pl-14 text-white xl:order-1 xl:w-[500px]"
      >
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_1.paragraph_1") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_1.paragraph_2") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_1.paragraph_3") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_1.paragraph_4") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_1.paragraph_5") }}
        </li>
      </ul>
    </div>

    <!-- Second Section -->
    <div
      class="relative flex flex-col items-center justify-between gap-12 overflow-hidden pb-10 pt-10 xl:flex-row xl:gap-0 xl:pt-0"
    >
      <div
        class="flex h-[90px] w-full items-center justify-center bg-main-blue text-white xl:h-[270px] xl:w-[270px]"
      >
        <h3 class="text-3xl lg:text-4xl">VM-1</h3>
      </div>
      <div
        class="h-[300px] w-full max-w-full bg-contain bg-center bg-no-repeat md:h-[500px] xl:h-[500px] xl:w-[600px]"
        :style="{ backgroundImage: `url(${backgroundImage_2})` }"
      ></div>
      <ul
        class="flex h-[270px] w-full flex-col justify-center gap-3 bg-main-blue pl-14 text-white xl:w-[500px]"
      >
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_2.paragraph_1") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_2.paragraph_2") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_2.paragraph_3") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_2.paragraph_4") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_2.paragraph_5") }}
        </li>
      </ul>
    </div>
    <!-- Third section -->
    <div
      class="relative flex flex-col items-center justify-between gap-12 overflow-hidden pb-24 pt-10 xl:flex-row xl:gap-0 xl:pt-0"
    >
      <div
        class="flex h-[90px] w-full items-center justify-center bg-main-blue text-white xl:order-3 xl:h-[270px] xl:w-[270px]"
      >
        <h3 class="text-3xl lg:text-4xl">TM-6</h3>
      </div>
      <div
        class="h-[300px] w-full max-w-full bg-contain bg-center bg-no-repeat md:h-[500px] xl:order-2 xl:h-[500px] xl:w-[600px]"
        :style="{ backgroundImage: `url(${backgroundImage_3})` }"
      ></div>

      <ul
        class="flex h-[270px] w-full flex-col justify-center gap-3 bg-main-blue pl-14 text-white xl:order-1 xl:w-[500px]"
      >
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_3.paragraph_1") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_3.paragraph_2") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import backgroundImage_1 from "../assets/images/vmx40.png";
import backgroundImage_2 from "../assets/images/vm1.png";
import backgroundImage_3 from "../assets/images/tm6.png";

import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
