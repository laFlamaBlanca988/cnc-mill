<template>
  <div ref="oprema" id="oprema">
    <!-- First Section -->
    <div
      class="relative flex flex-col items-center justify-between gap-12 overflow-hidden pb-10 pt-10 xl:flex-row xl:gap-0 xl:pt-0"
    >
      <h4
        class="text-bg-main-blue flex-none text-4xl lg:text-5xl xl:absolute xl:left-[100px] xl:top-10"
      >
        {{ t("equipment.title") }}
      </h4>
      <div
        ref="animatedElementFirstRight"
        :class="
          animatedElementFirstRightTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromRight'
            : ''
        "
        class="flex h-[90px] w-full items-center justify-center bg-main-blue text-white xl:order-3 xl:h-[270px] xl:w-[270px]"
      >
        <h3 class="text-3xl lg:text-4xl">VMX-40</h3>
      </div>
      <div
        class="h-[300px] w-full max-w-full bg-contain bg-center bg-no-repeat md:h-[500px] xl:order-2 xl:h-[500px] xl:w-[600px]"
        :style="{ backgroundImage: `url(${backgroundImage_1})` }"
      ></div>

      <ul
        ref="animatedElementFirstLeft"
        class="flex h-[270px] w-full flex-col justify-center gap-3 bg-main-blue pl-14 text-white xl:order-1 xl:w-[500px]"
        :class="
          animatedElementFirstLeftTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromLeft'
            : ''
        "
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
        ref="animatedElementSecondLeft"
        :class="
          animatedElementSecondLeftTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromLeft'
            : ''
        "
        class="flex h-[90px] w-full items-center justify-center bg-main-blue text-white xl:h-[270px] xl:w-[270px]"
      >
        <h3 class="text-3xl lg:text-4xl">VM-1</h3>
      </div>
      <div
        class="h-[300px] w-full max-w-full bg-contain bg-center bg-no-repeat md:h-[500px] xl:h-[500px] xl:w-[600px]"
        :style="{ backgroundImage: `url(${backgroundImage_2})` }"
      ></div>
      <ul
        ref="animatedElementSecondRight"
        :class="
          animatedElementSecondRightTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromRight'
            : ''
        "
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
        ref="animatedElementThirdRight"
        :class="
          animatedElementThirdRightTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromRight'
            : ''
        "
        class="flex h-[90px] w-full items-center justify-center bg-main-blue text-white xl:order-3 xl:h-[270px] xl:w-[270px]"
      >
        <h3 class="text-3xl lg:text-4xl">TM-6</h3>
      </div>
      <div
        class="h-[300px] w-full max-w-full bg-contain bg-center bg-no-repeat md:h-[500px] xl:order-2 xl:h-[500px] xl:w-[600px]"
        :style="{ backgroundImage: `url(${backgroundImage_3})` }"
      ></div>

      <ul
        ref="animatedElementThirdLeft"
        :class="
          animatedElementThirdLeftTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromLeft'
            : ''
        "
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
    <!-- Fourth section-->
    <div
      class="relative flex flex-col items-center justify-between gap-12 overflow-hidden pb-10 pt-10 xl:flex-row xl:gap-0 xl:pt-0"
    >
      <div
        ref="animatedElementFourthLeft"
        :class="
          animatedElementFourthLeftTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromLeft'
            : ''
        "
        class="flex h-[90px] w-full items-center justify-center bg-main-blue text-white shadow-sm xl:h-[270px] xl:w-[270px]"
      >
        <h3 class="text-3xl lg:text-4xl">VMX-42</h3>
      </div>
      <div
        class="h-[300px] w-full max-w-full bg-contain bg-center bg-no-repeat md:h-[500px] xl:h-[500px] xl:w-[600px]"
        :style="{ backgroundImage: `url(${backgroundImage_4})` }"
      ></div>
      <ul
        ref="animatedElementFourthRight"
        :class="
          animatedElementFourthRightTargetIsVisible && innerWidth > 1280
            ? 'animate-slideFromRight'
            : ''
        "
        class="flex h-[270px] w-full flex-col justify-center gap-3 bg-main-blue pl-14 text-white xl:w-[500px]"
      >
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_4.paragraph_1") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_4.paragraph_2") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_4.paragraph_3") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_4.paragraph_4") }}
        </li>
        <li class="list-disc text-xl lg:text-2xl">
          {{ t("equipment.machine_4.paragraph_5") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import backgroundImage_1 from "../assets/images/vmx40.png";
import backgroundImage_2 from "../assets/images/vm1.png";
import backgroundImage_3 from "../assets/images/tm6.png";
import backgroundImage_4 from "../assets/images/vmx42.jpg";

import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const animatedElementFirstLeft = ref(null);
const animatedElementSecondLeft = ref(null);
const animatedElementThirdLeft = ref(null);
const animatedElementFourthLeft = ref(null);

const animatedElementFirstLeftTargetIsVisible = ref(false);
const animatedElementSecondLeftTargetIsVisible = ref(false);
const animatedElementThirdLeftTargetIsVisible = ref(false);
const animatedElementFourthLeftTargetIsVisible = ref(false);

const animatedElementFirstRight = ref(null);
const animatedElementSecondRight = ref(null);
const animatedElementThirdRight = ref(null);
const animatedElementFourthRight = ref(null);

const animatedElementFirstRightTargetIsVisible = ref(false);
const animatedElementSecondRightTargetIsVisible = ref(false);
const animatedElementThirdRightTargetIsVisible = ref(false);
const animatedElementFourthRightTargetIsVisible = ref(false);

const innerWidth = document.body.clientWidth;

const { stop: stopFirst } = useIntersectionObserver(
  animatedElementFirstLeft,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementFirstLeftTargetIsVisible.value = isIntersecting;
      stopFirst(); // Stop observing the first element once it's intersecting
    }
  }
);

const { stop: stopSecond } = useIntersectionObserver(
  animatedElementSecondLeft,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementSecondLeftTargetIsVisible.value = isIntersecting;
      stopSecond(); // Stop observing the second element once it's intersecting
    }
  }
);
const { stop: stopThird } = useIntersectionObserver(
  animatedElementThirdLeft,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementThirdLeftTargetIsVisible.value = isIntersecting;
      stopThird(); // Stop observing the second element once it's intersecting
    }
  }
);
const { stop: stopFourth } = useIntersectionObserver(
  animatedElementFirstRight,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementFirstRightTargetIsVisible.value = isIntersecting;
      stopFourth(); // Stop observing the second element once it's intersecting
    }
  }
);
const { stop: stopFifth } = useIntersectionObserver(
  animatedElementSecondRight,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementSecondRightTargetIsVisible.value = isIntersecting;
      stopFifth(); // Stop observing the second element once it's intersecting
    }
  }
);
const { stop: stopSixth } = useIntersectionObserver(
  animatedElementThirdRight,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementThirdRightTargetIsVisible.value = isIntersecting;
      stopSixth(); // Stop observing the second element once it's intersecting
    }
  }
);
const { stop: stopSeventh } = useIntersectionObserver(
  animatedElementFourthRight,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementFourthRightTargetIsVisible.value = isIntersecting;
      stopSeventh(); // Stop observing the second element once it's intersecting
    }
  }
);
const { stop: stopEight } = useIntersectionObserver(
  animatedElementFourthLeft,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      animatedElementFourthLeftTargetIsVisible.value = isIntersecting;
      stopEight(); // Stop observing the second element once it's intersecting
    }
  }
);
</script>
