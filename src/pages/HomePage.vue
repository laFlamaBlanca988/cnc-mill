<template>
  <Navbar> </Navbar>
  <LayoutHero></LayoutHero>
  <LayoutAboutUs> </LayoutAboutUs>
  <LayoutServices></LayoutServices>
  <LayoutEquipment></LayoutEquipment>
  <LayoutGallery></LayoutGallery>
  <LayoutContact></LayoutContact>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import LayoutHero from "../layouts/LayoutHero.vue";
import LayoutAboutUs from "../layouts/LayoutAboutUs.vue";
import LayoutServices from "../layouts/LayoutServices.vue";
import LayoutEquipment from "../layouts/LayoutEquipment.vue";
import LayoutGallery from "../layouts/LayoutGallery.vue";
import LayoutContact from "../layouts/LayoutContact.vue";
import LayoutFooter from "../layouts/LayoutFooter.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>
<style scoped></style>
