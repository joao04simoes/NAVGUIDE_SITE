<script setup>
import { ref, onMounted } from "vue";

// Counter data
const stats = ref([
  { id: 1, title: "Invisual impaired individuals in Portugal", target: 600, count: 500 },
  { id: 2, title: "Supermarkets in Portugal", target: 3, count: 0 },
]);

// Function to animate counting
const startCounting = () => {
  stats.value.forEach((stat) => {
    let interval = setInterval(() => {
      if (stat.count < stat.target) {
        stat.count += 1;
      } else {
        clearInterval(interval);
      }
    }, 50); // Speed of counting (adjust for slower/faster animation)
  });
};

// Start counting when component is mounted
onMounted(() => {
  startCounting();
});
</script>

<template>
  <section class="bg-gray-100 text-white font-regular py-20 px-6 text-center">
    <!-- Title for the section -->
    <h2 class="text-3xl md:text-6xl font-bold text-black mb-10 uppercase">
      How Big is the Problem?
    </h2>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="bg-cyan-700 p-8 rounded-lg shadow-lg"
      >
        <h2 class="text-5xl font-bold">{{ stat.count }}K+</h2>
        <p class="text-white-400 text-3x1 mt-2">{{ stat.title }}</p>
      </div>
    </div>
  </section>
</template>

