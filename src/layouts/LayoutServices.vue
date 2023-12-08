<template>
  <div
    ref="usluge"
    id="usluge"
    class="calc-screen-height relative overflow-hidden pb-32"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-[-1] bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Pseudo-element for Opacity -->
    <div
      class="absolute inset-0 z-0 mt-32 h-[300px] w-full bg-main-blue bg-opacity-40 lg:w-[50%]"
    ></div>

    <!-- Text Container -->
    <div ref="animatedElement">
      <div
        v-show="targetIsVisible"
        :class="innerWidth > 1280 ? 'animate-slideFromLeft' : ''"
        class="relative z-10 mt-32 h-[300px] w-full font-normal text-white lg:w-[50%]"
      >
        <div class="flex h-[300px] flex-col justify-center px-4">
          <h1
            class="mb-4 text-center text-3xl font-bold text-black lg:text-start lg:text-4xl"
          >
            {{ t("services.title") }}
          </h1>
          <h3
            class="max-w-[800px] text-center text-lg font-semibold text-white lg:text-start lg:text-xl"
          >
            {{ t("services.description") }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from "../assets/images/background_services.jpg";
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const animatedElement = ref(null);
const targetIsVisible = ref(false);
const innerWidth = window.innerWidth;
const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
</script>
<style scoped>
.calc-screen-height {
  min-height: calc(100vh - 64px);
}
</style>
