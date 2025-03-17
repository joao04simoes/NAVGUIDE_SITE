<script setup>
import { ref } from 'vue';

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
            <p>Thus, our project was deemed relevant, as accessibility technologies, such as image recognition applications or barcode readers, are useful but do not solve the issue of orientation.</p>
            <p>We were advised that auditory feedback should be clear and objective, avoiding excessive information that could confuse the user, and that the application's interface should be simple and intuitive, with voice commands as an alternative to touch interaction.</p>
            <p>The specialist expressed interest in collaborating with us, assisting both in testing the project and in connecting us with more individuals in the same condition.</p>
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
            <p>Thus, our project was deemed relevant, as accessibility technologies, such as image recognition applications or barcode readers, are useful but do not solve the issue of orientation.</p>
            <p>We were advised that auditory feedback should be clear and objective, avoiding excessive information that could confuse the user, and that the application's interface should be simple and intuitive, with voice commands as an alternative to touch interaction.</p>
            <p>The specialist expressed interest in collaborating with us, assisting both in testing the project and in connecting us with more individuals in the same condition.</p>
        `,
        image: "/path-to-image2.jpg"
    },
]);

// Controls the modal state
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
    <div class="bg-gray-100 py-20 px-6">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-10">Our Blog & Interviews</h2>

            <!-- Blog Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="interview in interviews" :key="interview.id"
                    class="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-2"
                    @click="openInterview(interview)">

                    <!-- Image 
                    <img :src="interview.image" alt="Interview Image" class="w-full h-40 object-cover rounded-md mb-4">-->

                    <!-- Title -->
                    <h3 class="text-xl font-semibold mb-2">{{ interview.title }}</h3>

                    <!-- Excerpt -->
                    <p class="text-gray-600">{{ interview.excerpt }}</p>
                </div>
            </div>
        </div>

        <!-- Modal for Full Interview -->
        <div v-if="selectedInterview" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div class="bg-white p-6 max-w-2xl w-full rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">{{ selectedInterview.title }}</h2>

                <!-- Display full text with HTML formatting -->
                <div class="text-gray-700" v-html="selectedInterview.fullText"></div>

                <button @click="closeInterview"
                    class="mt-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
