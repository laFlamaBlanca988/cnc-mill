import i18n from "@/i18n"; // <--- 1

const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },
  set currentLocale(newLocale) {
    // Add type annotation for parameter
    i18n.global.locale.value = newLocale;
  },
  async switchLanguage(newLocale) {
    // Add type annotation for parameter
    Trans.currentLocale = newLocale;
    document.querySelector("html").setAttribute("lang", newLocale);
  },
};

export default Trans;
