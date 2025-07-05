<script setup>
import { ref, onMounted } from 'vue';

// Testimonials data (without images)
const testimonials = ref([
  {
    name: "Ana Pereira",
    role: "Visually Impaired User",
    quote: "Finding specific products in a supermarket is like searching for a needle in a haystack when you can't see the shelves.",
  },
  {
    name: "Carlos Mendes",
    role: "Accessibility Advocate",
    quote: "Without proper navigation, many visually impaired individuals must rely on store employees or friends just to complete a simple grocery trip.",
  },
  {
    name: "João Silva",
    role: "Supermarket Manager",
    quote: "Supermarkets are designed for sighted shoppers, making it frustrating and time-consuming for visually impaired people to move around independently.",
  },
]);

const activeIndex = ref(0);
let intervalId = null;

// Auto-scroll testimonials
const startAutoScroll = () => {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.value.length;
  }, 6000);
};

// Stop auto-scroll when manually clicked
const setActiveTestimonial = (index) => {
  activeIndex.value = index;
  clearInterval(intervalId);
  startAutoScroll();
};

onMounted(() => {
  startAutoScroll();
});
</script>

<template>
  <section id="testimonials" class="bg-gray-100 text-black py-20 px-6">
    <div class="container mx-auto text-center">

      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-bold mb-9 uppercase">
        What People Are Saying
      </h2>

      <!-- Testimonial Card -->
      <div class="max-w-4xl mx-auto bg-gray-200 shadow-xl rounded-lg p-8 transition-all duration-500">
        <p class="text-xl font-semibold text-[#164e63]">
          "{{ testimonials[activeIndex].quote }}"
        </p>
        <h4 class="mt-4 text-lg font-bold">{{ testimonials[activeIndex].name }}</h4>
        <p class="text-gray-500">{{ testimonials[activeIndex].role }}</p>
      </div>

      <!-- Navigation Dots -->
      <div class="mt-6 flex justify-center space-x-2">
        <span v-for="(testimonial, index) in testimonials" :key="index" @click="setActiveTestimonial(index)"
          class="w-3 h-3 rounded-full cursor-pointer transition-all"
          :class="index === activeIndex ? 'bg-[#164e63] w-4 h-4' : 'bg-gray-400'"></span>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Smooth transition for testimonial change */
.transition-all {
  transition: all 0.5s ease-in-out;
}
</style>
