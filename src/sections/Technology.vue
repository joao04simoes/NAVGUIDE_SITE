<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';

// Feature data with descriptions
const features = ref([
  {
    id: 0,
    title: "Ultra-Wideband (UWB) technology",
    desc: "UWB enables real-time, high-precision indoor navigation, providing accurate positioning for visually impaired individuals.",
    image: "/joao.simoes/NAVGUIDE/images/UWB_arte.png"
  },
  {
    id: 1,
    title: "Voice-Guided Navigation",
    desc: "Step-by-step voice instructions help users locate products and navigate supermarket aisles independently.",
    image: "/joao.simoes/NAVGUIDE/images/voice.png"
  },
  {
    id: 2,
    title: "Mobile App",
    desc: "A user-friendly app designed for accessibility, integrating UWB positioning and supermarket mapping to enhance the shopping experience.",
    image: "/joao.simoes/NAVGUIDE/images/MobileApp.png"
  },
]);

const activeIndex = ref(0);
let intervalId = null;

// Function to switch features automatically every 4s
const startAutoSwitch = () => {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % features.value.length;
  }, 3000);
};

// Stop auto-switch when user manually selects a feature
const setActiveFeature = (index) => {
  activeIndex.value = index;
  clearInterval(intervalId);
  startAutoSwitch(); // Restart auto-switch
};

onMounted(() => {
  startAutoSwitch();
});

const router = useRouter();
const mobileNav = ref(false);

const scrollToSection = (id) => {

  router.push('/technology').then(() => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });


  mobileNav.value = false;
};
</script>

<template>
  <section class="bg-gray-100 text-black py-20 px-6">
    <h2 id="tecSol" class="text-6xl font-bold text-center mb-6 uppercase">
      Technological Solution
    </h2>
    <p class="text-center text-black-500 mb-10 max-w-5xl mx-auto">
      NavGuide uses UWB technology, voice-guided navigation, and a smart mobile app
      to make supermarkets more accessible for visually impaired individuals, providing real-time tracking
      and step-by-step guidance for independent shopping.
    </p>

    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <!-- Left: Dynamic Image -->
      <div class="w-full md:w-1/2">
        <img :src="features[activeIndex].image" class="rounded-lg shadow-lg transition-opacity duration-700" />
      </div>

      <!-- Right: Titles, Blue Bar, and Descriptions -->
      <div class="w-full md:w-1/2">
        <div v-for="(feature, index) in features" :key="feature.id" class="relative cursor-pointer"
          @click="setActiveFeature(index)">
          <h3 :class="[
            'text-2xl font-bold transition mt-3 mb-2',
            index === activeIndex ? 'text-[#164e63]' : 'text-black-500'
          ]">
            {{ feature.title }}
          </h3>

          <!-- Description Appears Only When Active -->
          <p v-if="index === activeIndex" class="text-black-300 text-2x1 mb-4 transition-opacity duration-500">
            {{ feature.desc }}
          </p>

          <!-- Progressive Line Animation Over 3s -->
          <div class="absolute left-0 h-1 bg-[#164e63] transition-all"
            :style="{ width: index === activeIndex ? '100%' : '0%', transitionDuration: '4s' }"></div>

          <hr class="border-gray-600 mt-5">
        </div>
      </div>
    </div>
    <!-- Button to Learn More -->
    <div class="text-center mt-12">
      <a href="#technology" @click.prevent="scrollToSection('maintec')"
        class="inline-block bg-cyan-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-cyan-800 transition">
        Learn More About Our Technology
      </a>
    </div>
  </section>
</template>

<style>
/* Smooth fade effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>