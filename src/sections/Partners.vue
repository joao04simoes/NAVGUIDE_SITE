<script setup>
import { ref } from "vue";

const images = ref([
  "/images/logo_ist.png",
  "/images/logo_auchan.png",
  "/images/apec_logo.jpg",
  "/images/bengalamágica_logo2.png",
]);
</script>

<template>
  <section class="bg-white py-10 overflow-hidden">
    <div class="container mx-auto text-center mb-6">
      <h2 class="text-4xl md:text-5xl text-black font-bold uppercase mb-4">
        Our Partners
      </h2>
    </div>

    <div class="marquee">
      <div class="marquee-inner">
        <!-- Repeat logos enough times to prevent cutting -->
        <div
          v-for="(image, index) in [...images, ...images, ...images]"
          :key="index"
          class="marquee-item"
        >
          <img :src="image" class="logo-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.marquee-inner {
  display: flex;
  align-items: center;
  gap: 3rem;
  min-width: fit-content;
  animation: scrollLeft 20s linear infinite;
}

.marquee-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  height: 80px;
  width: auto;
  object-fit: contain;
}

/* Scrolling animation */
@keyframes scrollLeft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-33.333%);
  }
}
</style>
