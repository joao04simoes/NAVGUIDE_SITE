<script setup>
import { ref } from 'vue';
import Footer from "./Footer.vue";

// Interviews data
const interviews = ref([
    {
        id: 1,
        title: "1st Interview",
        excerpt: "Afonso Ribeiro, Filipa Cunha e Tomás Almeida",
        fullText: `
            <p>On this day, we met with the president of an association that promotes education for visually impaired individuals.</p>
            <p>The meeting began with a brief presentation of our project, followed by a clarification of any questions regarding it.</p>
            <p>We considered this person's opinion essential to validate the development of our project, as they not only work daily with the reality we are addressing but also experience it firsthand, being visually impaired themselves.</p>
        `,
        image: "/path-to-image1.jpg"
    },
    {
        id: 2,
        title: "2nd Interview",
        excerpt: "Ana Cláudia Vilela, João Simões e Sofia Vicente",
        fullText: `
            <p>On this day, we met with the president of an association that promotes education for visually impaired individuals.</p>
            <p>The meeting began with a brief presentation of our project, followed by a clarification of any questions regarding it.</p>
            <p>We considered this person's opinion essential to validate the development of our project, as they not only work daily with the reality we are addressing but also experience it firsthand, being visually impaired themselves.</p>
        `,
        image: "/path-to-image2.jpg"
    },
]);

const selectedInterview = ref(null);

// Open the modal with selected interview
const openInterview = (interview) => {
    selectedInterview.value = interview;
};

// Close the modal
const closeInterview = () => {
    selectedInterview.value = null;
};
</script>

<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-white shadow-md py-4 px-6">
            <div class="container mx-auto flex justify-between items-center">
                <!-- <h1 class="text-2xl font-bold text-blue-600">NAVGUIDE</h1> -->
                <div class="flex items-center">
                    <img src="/images/LogoNavGuide.png" alt="NAVGUIDE Logo" class="h-12 md:h-16 object-contain">
                </div>
                <nav>
                    <ul class="flex space-x-6">
                        <li><a href="#" class="text-gray-700 hover:text-blue-500">Home</a></li>

                    </ul>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow">
            <div class="container mx-auto py-16 px-6">
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-10">Our Blog & Interviews</h2>

                <!-- Blog Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="interview in interviews" :key="interview.id"
                        class="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-2"
                        @click="openInterview(interview)">

                        <!-- Image (optional) 
                        <img v-if="interview.image" :src="interview.image" alt="Interview Image"
                            class="w-full h-40 object-cover rounded-md mb-4">-->

                        <!-- Title -->
                        <h3 class="text-xl font-semibold mb-2">{{ interview.title }}</h3>

                        <!-- Excerpt -->
                        <p class="text-gray-600">{{ interview.excerpt }}</p>
                    </div>
                </div>
            </div>
        </main>

        <Footer />

        <!-- Modal for Full Interview -->
        <div v-if="selectedInterview" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
            @click.self="closeInterview">
            <transition name="fade">
                <div class="bg-white p-6 max-w-2xl w-full rounded-lg shadow-lg transform transition-all">
                    <h2 class="text-2xl font-bold mb-4">{{ selectedInterview.title }}</h2>

                    <!-- Display full text with HTML formatting -->
                    <div class="text-gray-700" v-html="selectedInterview.fullText"></div>

                    <button @click="closeInterview"
                        class="mt-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                        Close
                    </button>
                </div>
            </transition>
        </div>
    </div>
</template>

<style>
/* Animation for modal */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
