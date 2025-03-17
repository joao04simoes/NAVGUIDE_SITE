<script setup>
import { ref } from 'vue';

// Define the technological solutions
const solutions = ref([
    {
        id: 1,
        title: "Ultra-Wideband (UWB) technology",
        description: "Enables real-time, high-precision indoor navigation for visually impaired individuals in supermarkets.",
        icon: "🤖",
    },
    {
        id: 2,
        title: "Voice-Guided Navigation",
        description: "Provides step-by-step audio instructions to help users locate products and navigate supermarket aisles independently.",
        icon: "☁️",
    },
    {
        id: 3,
        title: "Mobile App",
        description: "A user-friendly application designed for accessibility, integrating UWB positioning and supermarket mapping to enhance the shopping experience.",
        icon: "🔗",
    }
]);
</script>

<template>
    <div id="tecSol" class="bg-white-500 text-white py-20 px-6">
        <div class="container mx-auto text-center">
            <!-- Section Title -->
            <h2 class="text-4xl md:text-5xl text-black font-bold mb-10">Technological Solution</h2>

            <!-- Cards Container -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="solution in solutions" :key="solution.id" class="bg-purple-400 shadow-lg rounded-xl p-8 flex flex-col items-center 
                           transition transform hover:-translate-y-2 hover:shadow-2xl">

                    <!-- Icon -->
                    <div class="text-5xl mb-4">{{ solution.icon }}</div>

                    <!-- Title -->
                    <h3 class="text-2xl font-semibold mb-3">{{ solution.title }}</h3>

                    <!-- Description -->
                    <p class="text-lg text-white opacity-80">
                        {{ solution.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
