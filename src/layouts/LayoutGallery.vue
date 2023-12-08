<template>
  <div
    ref="galerija"
    id="galerija"
    class="calc-screen-height bg-light-blue pb-10 pt-14"
  >
    <h3 class="mb-20 text-center text-4xl text-heading-blue md:text-5xl">
      {{ t("gallery.title") }}
    </h3>

    <div class="mx-auto max-w-[900px]">
      <carousel
        ref="carousel"
        :items-to-show="1"
        :wrap-around="true"
        :breakpoints="breakpoints"
        class="relative"
      >
        <template #addons>
          <div class="d-flex custom-arrows w-[130px] gap-4">
            <navigation>
              <template class="relative pe-4" #prev>
                <Icon
                  class="h-[50px] w-[50px] rotate-180 text-white"
                  icon="ic:twotone-double-arrow"
                  @click="prevSlide"
                ></Icon>
              </template>
              <template #next>
                <Icon
                  icon="ic:twotone-double-arrow"
                  @click="nextSlide"
                  class="h-[50px] w-[50px] text-white"
                ></Icon>
              </template>
            </navigation>
          </div>
        </template>
        <slide v-for="(imageUrl, index) in images" :key="index">
          <img :src="imageUrl" :alt="'image-' + index" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import imageGallery_1 from "../assets/images/image-gallery-1.jpg";
import imageGallery_3 from "../assets/images/image-gallery-3.jpg";
import imageGallery_4 from "../assets/images/image-gallery-4.jpg";
import imageGallery_6 from "../assets/images/image-gallery-6.jpg";
import imageGallery_7 from "../assets/images/image-gallery-7.jpg";
import imageGallery_8 from "../assets/images/image-gallery-8.jpg";
import imageGallery_9 from "../assets/images/image-gallery-9.jpg";
import imageGallery_10 from "../assets/images/image-gallery-10.jpg";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const carouselRef = ref(null);
const nextSlide = () => {
  if (carouselRef.value) {
    carouselRef.value.next();
  }
};

const prevSlide = () => {
  if (carouselRef.value) {
    carouselRef.value.prev();
  }
};
const images = ref([
  imageGallery_1,
  imageGallery_3,
  imageGallery_4,
  imageGallery_6,
  imageGallery_7,
  imageGallery_8,
  imageGallery_9,
  imageGallery_10,
]);
const breakpoints = ref({
  1000: {
    itemsToShow: 2.8,
  },
});
</script>
<style scoped>
.calc-screen-height {
  min-height: calc(100vh - 64px);
}
.custom-arrows {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-51%);
  display: flex;
}
.carousel__prev,
.carousel__next {
  width: 50px !important;
  height: 50px !important;
}
.carousel__slide {
  padding: 5px;
  height: 350px;
  z-index: 9999; /* Increase z-index to overlap other slides */
  width: 300px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(0) scale(1.2);
  z-index: 999;
}
.carousel__slide--active,
.carousel__slide--active img {
  transform: scale(1.1);
  /* height: 3px; */
  object-position: center !important;
  z-index: 9999; /* Increase z-index to overlap other slides */
}

.carousel__slide--prev,
.carousel__slide--next {
  opacity: 0.3;
  transform: unset;
  z-index: unset;
  height: 300px;
  margin-top: 2rem;
}
.carousel__slide--prev img,
.carousel__slide--next img {
  height: 100%;
  width: 100%;
}
/* @media screen and (min-width: 1000px) {
  .custom-arrows {
    left: 50%;
    transform: translateX(-51%);
    width: 320px !important;
  }
} */
</style>
