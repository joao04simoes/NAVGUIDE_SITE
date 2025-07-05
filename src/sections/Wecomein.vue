<script setup>
import { ref, onMounted } from 'vue';

// Reveal animation when scrolling
const isVisible = ref(false);

const handleScroll = () => {
  const section = document.getElementById("transition-section");
  if (section) {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      isVisible.value = true;
      window.removeEventListener("scroll", handleScroll);
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <section 
    id="transition-section" 
    class="bg-cyan-700 text-white py-16 px-6 text-center transition-opacity duration-1000"
    :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="container mx-auto max-w-3xl">
      <h2 class="text-4xl md:text-5xl font-bold uppercase mb-4">
        That's Where We Come In
      </h2>
      <p class="text-lg md:text-xl text-gray-200">
        NavGuide bridges the gap between <span class="font-bold">traditional shopping experiences</span> and <span class="font-bold">seamless accessibility</span>.
        With <span class="font-bold">cutting-edge technology</span>, we empower visually impaired individuals to navigate supermarkets independently, safely, and efficiently.
      </p>
    </div>
  </section>
</template>

<style scoped>
.transition-opacity {
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.opacity-0 {
  opacity: 0;
  transform: translateY(30px);
}
.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}
</style>
