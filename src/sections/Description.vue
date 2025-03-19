<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const sectionRef = ref(null);
const isVisible = ref(false);

// Observe when section enters the viewport
useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true; // Start animations only once
});
</script>

<template>
  <div ref="sectionRef" class="bg-white text-black py-20 px-6 md:px-16">
    <div class="container mx-auto text-center">
      <!-- Animated Heading -->
      <h1
        class="text-4xl md:text-5xl font-extrabold uppercase tracking-wide transition-opacity duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
      >
      Imagine walking into a supermarket... but not knowing where anything is.
      </h1>

      <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <!-- Animated YouTube Video -->
        <div
          class="w-full md:w-1/2 transition-opacity duration-1000 delay-300"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0 -translate-x-10': !isVisible }"
        >
          <iframe
            class="w-full h-64 md:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/UjDeAFG5njk"
            title="Official Teaser"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- Animated Description -->
        <div
          class="w-full md:w-1/2 text-left transition-opacity duration-1000 delay-500"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0 translate-x-10': !isVisible }"
        >
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Independence shouldn't end at the supermarket doors.
        </h2>
          <p class="text-lg text-black-300 text-justify">
            For more than <span class="font-bold">600,000 visually impaired people</span> in Portugal, this isn’t just an inconvenience — it’s a <span class="font-bold">daily struggle</span>. 
            Simple tasks like finding a product or navigating crowded aisles become overwhelming without assistance. <br>
            Yet, many visually impaired individuals are forced to rely on others just to do their groceries. Traditional store layouts <span class="font-bold">aren’t designed for accessibility</span>, 
            making something as routine as shopping a frustrating and exhausting experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

