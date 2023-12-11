<template>
  <NavbarBanner></NavbarBanner>
  <div class="sticky top-0 z-50">
    <Disclosure
      as="nav"
      class="relative z-50 bg-main-blue lg:opacity-90"
      v-slot="{ open }"
    >
      <div class="relative w-full px-2 md:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex w-[40%] gap-10">
            <div class="inset-y-0 left-0 flex items-center">
              <div
                @click="openSidebar"
                class="hidden cursor-pointer items-center justify-center rounded-md bg-transparent text-white md:flex"
              >
                <Bars3Icon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </div>
              <DisclosureButton
                class="flex items-center justify-center rounded-md bg-transparent text-white md:hidden"
              >
                <Bars3Icon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XMarkIcon
                  v-else
                  class="h[25px] block h-[25px]"
                  aria-hidden="true"
                />
              </DisclosureButton>
            </div>
            <div class="hidden w-full items-center justify-center md:flex">
              <div
                class="flex items-center justify-center gap-4 space-x-4 lg:gap-8"
              >
                <RouterLink
                  v-for="item in leftNavigation"
                  :key="item.name"
                  :to="item.href"
                  :id="activeLink === item.href"
                  :class="[
                    'nav-item text-white',
                    activeLink === item.href ? 'is-active-link' : '',
                  ]"
                  >{{ t(`nav.${item.name}`) }}</RouterLink
                >
              </div>
            </div>
          </div>
          <RouterLink to="#naslovna" class="flex flex-shrink-0 items-center">
            <img
              class="h-[45px] w-auto"
              src="../assets/images/cncmill-logo.png"
              alt="cncmill-logo1"
            />
          </RouterLink>
          <div class="flex w-[40%] justify-end md:gap-10">
            <div class="hidden w-full items-center justify-center md:flex">
              <div
                class="flex items-center justify-center gap-4 space-x-4 lg:gap-8"
              >
                <RouterLink
                  v-for="item in rightNavigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    'nav-item text-white',
                    activeLink === item.href ? 'is-active-link' : '',
                  ]"
                  >{{ t(`nav.${item.name}`) }}</RouterLink
                >
              </div>
            </div>
            <LanguageSwitcher></LanguageSwitcher>
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
    <div
      ref="sidebar"
      :class="[sidebarIsActive ? 'sidebar' : 'sidebar-closed']"
      class="sidebar max-w-ful fixed bottom-0 top-0 z-50 flex w-[400px] flex-col items-center gap-4 space-y-1 bg-main-blue px-2 pb-3 pt-2"
    >
      <div class="flex w-full">
        <Icon
          @click="sidebarIsActive = false"
          icon="ion:close"
          class="h-[40px] w-[40px] cursor-pointer text-white"
        ></Icon>
      </div>
      <div class="pb-8">
        <RouterLink to="#naslovna" class="flex items-center justify-center">
          <img
            class="h-[100px] lg:order-1"
            src="../assets/images/logo_white_sidebar.svg"
            alt="cncmill-logo2"
          />
        </RouterLink>
      </div>
      <div class="pb-8">
        <p class="text-center text-2xl text-white drop-shadow-2xl">
          {{ t("sidebar.description") }}
        </p>
      </div>
      <div
        class="order-2 flex w-full flex-col items-center gap-4 lg:order-3 lg:w-1/3"
      >
        <p class="text-center text-3xl text-white">
          {{ t("footer.contactUs") }}
        </p>
        <div class="px-10">
          <a class="mb-4 flex items-center gap-2 text-white" href="#">
            <Icon icon="ion:location-sharp" class="h-[35px] w-[35px]"></Icon>
            Petra Kočića bb</a
          >
          <a class="mb-4 flex items-center gap-2 text-white" href="#">
            <Icon icon="fa-solid:phone-alt" class="h-[30px] w-[30px]"></Icon>
            +38765882378
          </a>
          <a class="flex items-center gap-2 text-white" href="#">
            <Icon icon="ph:envelope-thin" class="h-[35px] w-[35px]"></Icon>
            info@cncmill.org
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarBanner from "./NavbarBanner.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted, reactive, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { initFlowbite } from "flowbite";
import { onClickOutside } from "@vueuse/core";
import { Icon } from "@iconify/vue";

onMounted(() => {
  initFlowbite();
});
const { t, locale } = useI18n();

const router = useRouter();
const route = useRoute();
const sidebar = ref(null);
let sidebarIsActive = ref(false);

onClickOutside(sidebar, (event) => {
  if (sidebarIsActive.value) {
    closeSidebar();
  }
});
const closeSidebar = () => {
  sidebarIsActive.value = false;
};
const openSidebar = () => {
  sidebarIsActive.value = true;
};
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
      return;
    }
  };

  router.beforeEach((to, from, next) => {
    if (to.hash) {
      scrollToHash(to.hash);
    }
    next();
  });
};

router.afterEach(() => {
  activeLink.value = getActiveLink();
});

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

const activeLink = ref(getActiveLink());
scrollToSection();
</script>
<style>
.nav-item.is-active-link {
  display: flex;
  align-items: center;
  position: relative;
  transform: scale(1.1); /* Increase the scale */
  transition: transform 0.2s ease; /* Add a smooth transition */
}

.nav-item.is-active-link::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  border-bottom: 1px solid white;
}

.nav-item {
  padding-bottom: 0;
  border-bottom: none;
}
.nav-item:not(.is-active-link) {
  transition: transform 0.2s ease;
}

.nav-item:not(.is-active-link):hover {
  transform: scale(0.95);
}
.sidebar {
  transition: transform 0.3s ease-in-out;
  transform: translateX(0); /* Initially closed */
  background: #337fc2;
}

.sidebar-closed {
  transform: translateX(-100%);
}
</style>
