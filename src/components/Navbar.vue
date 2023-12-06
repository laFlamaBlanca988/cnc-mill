<template>
  <NavbarBanner v-if="showNavbar"></NavbarBanner>
  <div class="sticky top-0 z-50">
    <Disclosure
      as="nav"
      class="relative z-50 bg-main-blue lg:opacity-90"
      v-slot="{ open }"
    >
      <div class="relative w-full px-2 md:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <!-- Mobile menu button-->
            <DisclosureButton
              @click="showNavbar = !showNavbar"
              class="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-white"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div
            v-if="showNavbar"
            class="ms-10 flex items-center justify-center md:items-stretch md:justify-start"
          >
            <div class="hidden md:ml-6 md:block">
              <div class="flex justify-center space-x-4">
                <RouterLink
                  v-for="item in leftNavigation"
                  :key="item.name"
                  :to="item.href"
                  :id="activeLink === item.href"
                  :class="[
                    'text-white',
                    activeLink === item.href ? 'is-active-link' : '', // Apply the class conditionally
                  ]"
                  >{{ t(`nav.${item.name}`) }}</RouterLink
                >
              </div>
            </div>
          </div>
          <RouterLink
            v-if="showNavbar"
            to="#naslovna"
            class="flex flex-shrink-0 items-center"
          >
            <img
              class="h-[45px] w-auto"
              src="../assets/images/cncmill-logo.png"
              alt="cncmill-logo"
            />
          </RouterLink>
          <div
            v-if="showNavbar"
            class="flex items-center justify-center md:justify-start"
          >
            <div class="hidden md:ml-6 md:block">
              <div class="flex space-x-4">
                <RouterLink
                  v-for="item in rightNavigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    'text-white',
                    activeLink === item.href ? 'is-active-link' : '', // Apply the class conditionally
                  ]"
                  >{{ t(`nav.${item.name}`) }}</RouterLink
                >
              </div>
            </div>
            <LanguageSwitcher v-if="showNavbar"></LanguageSwitcher>
          </div>
        </div>
      </div>

      <DisclosurePanel>
        <div class="flex flex-col gap-4 space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            v-for="item in mobileNavigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              'text-white',
              activeLink === item.href ? 'is-active-link' : '', // Apply the class conditionally
            ]"
            >{{ t(`nav.${item.name}`) }}</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted, reactive } from "vue";
import NavbarBanner from "./NavbarBanner.vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
const { t, locale } = useI18n();

const router = useRouter();
const route = useRoute();
const showNavbar = ref(true);

const leftNavigation = reactive([
  { name: "home", href: "#naslovna" },
  { name: "about", href: "#o-nama" },
  { name: "services", href: "#usluge" },
]);
const rightNavigation = reactive([
  { name: "equipment", href: "#oprema" },
  { name: "gallery", href: "#galerija" },
  { name: "contact", href: "#kontakt" },
]);
const mobileNavigation = [...leftNavigation, ...rightNavigation];
const scrollToSection = () => {
  const scrollToHash = (hash) => {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const offset = targetElement.id === "naslovna" ? 104 : 64;
      const targetPosition = targetElement.offsetTop - offset;
      setTimeout(() => {
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }, 3);
    } else {
      console.warn(`Element with ID "${hash}" not found`);
    }
  };

  onMounted(() => {
    if (route.hash) {
      scrollToHash(route.hash);
    }
  });

  router.beforeEach((to, from, next) => {
    if (to.hash) {
      scrollToHash(to.hash);
    }
    next();
  });
};

scrollToSection();

// Function to get the active link based on the current route
const getActiveLink = () => {
  const currentHash = route.hash;
  const currentPath = route.fullPath;

  // Check if there is no hash or the route's full path is '/'
  if (!currentHash || currentPath === "/") {
    return "#naslovna"; // Return the NASLOVNA href to apply the class
  }

  const links = [...leftNavigation, ...rightNavigation];

  // Check if the current hash matches any of the navigation hrefs
  const active = links.find((item) => item.href === currentHash);
  return active ? active.href : null;
};

// Reactive property to hold the active link
const activeLink = ref(getActiveLink());

// Watch for route changes and update the active link
router.afterEach(() => {
  activeLink.value = getActiveLink();
});
</script>
<style>
.is-active-link,
.is-active-link:hover {
  border-bottom: 1px solid white;
  padding-bottom: 5px;
}
</style>
