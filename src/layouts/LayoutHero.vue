<template>
  <div
    ref="naslovna"
    id="naslovna"
    class="calc-screen-height relative overflow-hidden"
  >
    <!-- Your content goes here -->
    <div
      class="calc-screen-height absolute inset-0 z-[-1] bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>
    <!-- Dark overlay to improve text visibility -->
    <div class="absolute inset-0 bg-black opacity-30"></div>
    <div
      class="relative z-10 flex h-full flex-col items-start justify-start text-white lg:items-center lg:justify-center"
    >
      <div
        class="absolute left-[10%] top-[30%] flex flex-col text-4xl font-normal lg:text-6xl"
      >
        <h1 class="mb-4 text-center md:text-start">
          {{ t("hero.headerTop") }}
        </h1>
        <h1 class="mb-4 text-center md:text-start">
          {{ t("hero.headerBottom") }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from "../assets/images/HeroBackgroundImage.png";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style scoped>
.calc-screen-height {
  height: calc(100vh - 104px);
}
@media (max-width: 1024px) {
  .calc-screen-height {
    height: calc(100vh - 64px);
  }
}
</style>
