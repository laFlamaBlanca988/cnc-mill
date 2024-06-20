<template>
  <div
    ref="o-nama"
    id="o-nama"
    class="calc-screen-height relative overflow-hidden pb-24 lg:pb-0"
  >
    <div
      class="calc-screen-height absolute inset-0 bg-cover bg-fixed bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <div
      class="relative z-10 mt-20 flex h-full flex-col items-start justify-start gap-20 text-white md:items-center lg:mt-36 lg:gap-32"
    >
      <div class="font-normal">
        <div class="flex flex-col items-center justify-center">
          <h1 class="mb-4 text-2xl md:text-center lg:text-4xl">
            {{ t("about.title") }}
          </h1>
          <h3 class="max-w-[800px] px-4 text-center text-lg">
            {{ t("about.description") }}
          </h3>
        </div>
      </div>
      <div
        class="text-dark relative z-20 mb-10 flex w-full flex-wrap items-center justify-center gap-2 bg-white py-4 text-center text-black opacity-60 md:mb-20"
      >
        <div
          class="justify-starts flex min-w-[200px] items-center gap-1 border-r border-gray-300 pr-2 md:justify-center"
        >
          <Icon
            class="text-bg-main-blue h-[50px] w-[50px]"
            icon="healthicons:factory-worker"
          ></Icon>
          <div class="text-dark flex flex-col justify-start font-semibold">
            <p class="text-start">2</p>
            <p>{{ t("info.employees") }}</p>
          </div>
        </div>
        <div
          class="justify-starts flex min-w-[200px] items-center gap-1 border-r border-gray-300 pr-2 md:justify-center"
        >
          <Icon
            class="text-bg-main-blue h-[40px] w-[40px]"
            icon="bi:buildings-fill"
          ></Icon>
          <div class="text-dark flex flex-col justify-start font-semibold">
            <p class="text-start">250 m²</p>
            <p>{{ t("info.workspace") }}</p>
          </div>
        </div>
        <div
          class="justify-starts flex min-w-[200px] items-center gap-1 md:justify-center"
        >
          <Icon
            class="text-bg-main-blue h-[40px] w-[40px]"
            icon="game-icons:gears"
          ></Icon>
          <div class="text-dark flex flex-col justify-start font-semibold">
            <p class="text-start">4</p>
            <p>{{ t("info.facilities") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from "../assets/images/AboutUsBackgroundImage.png";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style scoped>
.calc-screen-height {
  min-height: calc(100vh - 64px);
}
</style>
