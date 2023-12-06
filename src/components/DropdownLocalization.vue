<template>
  <select @change="switchLang">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>

  <label
    for="small"
    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >Small select</label
  >
  <select
    id="small"
    class="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
  >
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</template>
<script setup>
import Tr from "@/i18n/translation";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;

const switchLang = async (event) => {
  const newLocale = event.target.value;

  await Tr.switchLanguage(newLocale);
};
</script>
