<template>
  <div class="flex w-[25px] justify-end">
    <Icon
      @click="toggleMenu"
      icon="ph:globe"
      class="relative h-[25px] w-[25px] cursor-pointer text-white"
    ></Icon>
    <select
      v-if="localesAreActive"
      @change="switchLang"
      class="absolute top-[41px] rounded"
    >
      <option
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale"
      >
        {{ t(`locale.${sLocale}`) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import Tr from "@/i18n/translation";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;
const localesAreActive = ref(false);
const switchLang = async (event) => {
  const newLocale = event.target.value;

  await Tr.switchLanguage(newLocale);
};

const toggleMenu = () => {
  localesAreActive.value = !localesAreActive.value;
};
</script>
