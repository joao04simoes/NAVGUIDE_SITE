<script setup>
import { ref } from 'vue';

// Define the technological solutions
const solutions = ref([
  {
    id: 1,
    title: "Visually Impaired Individuals",
    description:
      "For those who struggle to navigate supermarkets independently, NavGuide provides real-time guidance, reducing reliance on external assistance and empowering independent shopping.",
  },
  {
    id: 2,
    title: "Blind People",
    description:
      "Without vision, finding specific products in a store can be overwhelming. Our system offers precise step-by-step navigation and product identification, making grocery shopping accessible and stress-free.",
  },
  {
    id: 3,
    title: "Elderly & People with Cognitive or Navigational Challenges",
    description:
      "Individuals who experience difficulty with spatial awareness or memory can benefit from clear, structured guidance, ensuring a smoother and more confident shopping experience.",
  },
  {
    id: 4,
    title: "Supermarkets & Businesses",
    description:
      "By adopting NavGuide, supermarkets can create a more inclusive shopping environment, improving accessibility and attracting a wider customer base.",
  },
]);
</script>

<template>
  <div class="bg-gray-100 text-white py-20 px-6">
    <div class="container mx-auto text-center">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl text-black font-bold mb-10 uppercase">
        Who will benefit from our project
      </h2>

      <!-- Cards Container -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="solution in solutions" :key="solution.id" class="group perspective h-64">
          <!-- Card Inner -->
          <div class="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
            <!-- Front Face -->
            <div
              class="absolute inset-0 bg-cyan-700 rounded-xl flex items-center justify-center px-4 text-center text-white"
              style="backface-visibility: hidden; -webkit-backface-visibility: hidden;">
              <h3 class="text-2xl font-semibold">{{ solution.title }}</h3>
            </div>

            <!-- Back Face -->
            <div
              class="absolute inset-0 bg-cyan-900 rounded-xl px-6 py-4 flex items-center justify-center text-center text-white"
              style="transform: rotateY(180deg); -webkit-transform: rotateY(180deg); backface-visibility: hidden; -webkit-backface-visibility: hidden;">
              <p class="text-base opacity-90">{{ solution.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Required for 3D effect */
.perspective {
  perspective: 1000px;
}

/* Flip behavior */
.preserve-3d {
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  will-change: transform;
}

/* Rotation on hover */
.group:hover .group-hover\:rotate-y-180 {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}
</style>
