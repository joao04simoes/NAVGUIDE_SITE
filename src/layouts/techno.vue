<template>
  <div id="maintec" class="min-h-screen bg-white text-black flex flex-col">
    <!-- Main Content -->
    <main class="flex-grow py-20 px-6">
      <div class="container mx-auto max-w-6xl text-center">
        <h1 class="text-5xl font-bold uppercase mb-10">Our Technology</h1>
        <p class="text-lg text-gray-700 max-w-4xl mx-auto mb-16">
          NavGuide leverages cutting-edge indoor positioning and guidance technologies tailored for visually impaired
          individuals. From precision tracking to intuitive user interfaces, here’s a breakdown of our solution.
        </p>

        <!-- Technology Sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div class="bg-gray-50 rounded-xl p-8 shadow">
            <img src="/joao.simoes/NAVGUIDE/images/UWB_arte.png" class="mb-4 rounded" />
            <h2 class="text-2xl font-bold text-cyan-800 mb-2">Ultra-Wideband (UWB)</h2>
            <p class="text-gray-700">
              UWB enables real-time, high-precision indoor navigation. It allows the user’s position to be tracked with
              minimal error, enhancing the effectiveness of the guidance system.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 shadow">
            <img src="/joao.simoes/NAVGUIDE/images/voice.png" class="mb-4 rounded" />
            <h2 class="text-2xl font-bold text-cyan-800 mb-2">Voice-Guided Navigation</h2>
            <p class="text-gray-700">
              Our system provides clear, step-by-step voice instructions, helping users locate aisles, shelves, and
              products independently — even in dynamic supermarket layouts.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 shadow">
            <img src="/joao.simoes/NAVGUIDE/images/MobileApp.png" class="mb-4 rounded" />
            <h2 class="text-2xl font-bold text-cyan-800 mb-2">Mobile App</h2>
            <p class="text-gray-700">
              The NavGuide mobile app offers a seamless user experience with an accessible interface designed
              specifically for blind and visually impaired users. It integrates all navigation features with ease.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 shadow">
            <h2 class="text-2xl font-bold text-cyan-800 mb-4">Supermarket Mapping System</h2>
            <p class="text-gray-700">
              Our system digitally maps each supermarket layout and adapts to changes. This allows the guidance system
              to remain reliable, even as products and aisles are reorganized.
            </p>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-20">
          <router-link to="/" @click="scrollToSection('tecSol')"
            class="inline-block bg-cyan-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-cyan-800 transition">
            See Who Benefits From This
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mobileNav = ref(false);

const scrollToSection = (id) => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  mobileNav.value = false;
};
</script>
