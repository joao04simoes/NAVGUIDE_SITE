<script setup>
import { ref } from 'vue';

// Define the technological solutions
const solutions = ref([
    {
        id: 1,
        title: " Visually Impaired Individuals",
        description: "For those who struggle to navigate supermarkets independently, NavGuide provides real-time guidance, reducing reliance on external assistance and empowering independent shopping.",
    },
    {
        id: 2,
        title: "Blind People",
        description: "Without vision, finding specific products in a store can be overwhelming. Our system offers precise step-by-step navigation and product identification, making grocery shopping accessible and stress-free.",
    },
    {
        id: 3,
        title: "Elderly & People with Cognitive or Navigational Challenges",
        description: "Individuals who experience difficulty with spatial awareness or memory can benefit from clear, structured guidance, ensuring a smoother and more confident shopping experience.",
    },
    {
        id: 4,
        title: "Supermarkets & Businesses",
        description: "By adopting NavGuide, supermarkets can create a more inclusive shopping environment, improving accessibility and attracting a wider customer base."
    }
]);
</script>


<template>
    <div id="tecSol" class="bg-white-500 text-white py-20 px-6">
        <div class="container mx-auto text-center">
            <!-- Section Title -->
            <h2 class="text-4xl md:text-5xl text-black font-bold mb-10 uppercase">
                who will provide from our project
            </h2>

            <!-- Cards Container -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div v-for="solution in solutions" :key="solution.id" class="bg-cyan-700 shadow-lg rounded-xl p-8 flex flex-col items-center 
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
