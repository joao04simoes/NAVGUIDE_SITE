<script setup>
import { ref } from "vue";

// Your team members
const teamMembers = ref([
  {
    id: 1,
    name: "Sofia Vicente",
    role: "Partnerships & Documentation",
    bio: "Manages external collaborations and partnerships while ensuring the website, comprehensive documentation and reporting for the project.",
    photo: "/joao.simoes/NAVGUIDE/images/IMG_5071.JPG",
    linkedin: "https://www.linkedin.com/in/sofiacvicente/",
  },
  {
    id: 2,
    name: "João Simões",
    role: "Sensors",
    bio: "Works on sensor selection, integration, and optimization to ensure accurate data collection for navigation and tracking.",
    photo: "/joao.simoes/NAVGUIDE/images/tondela.jpg",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-04-sim%C3%B5es/",
  },
  {
    id: 3,
    name: "Ana Cláudia Vilela",
    role: "Website",
    bio: "Responsible for maintaining the project’s website updated for accessibility and user interaction.",
    photo: "/joao.simoes/NAVGUIDE/images/anaclaudia.JPG",
    linkedin: "https://www.linkedin.com/in/ana-cl%C3%A1udia-vilela-20207a234/",
  },
  {
    id: 4,
    name: "Afonso Ribeiro",
    role: "Position & Localization",
    bio: "Specializes in real-time positioning and localization technologies, optimizing accuracy for indoor navigation.",
    photo: "/joao.simoes/NAVGUIDE/images/afonsoribeiro.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 5,
    name: "Tomás Almeida",
    role: "Mobile Application",
    bio: "Focuses on the development, UI/UX, and backend integration of the mobile app for a seamless user experience.",
    photo: "/joao.simoes/NAVGUIDE/images/tomasalmeida.jpg",
    linkedin: "https://www.linkedin.com/in/tomasalmeida",
  },
  {
    id: 6,
    name: "Filipa Cunha",
    role: "Tests & Metrics",
    bio: "Ensures system reliability, performance analysis, and accuracy of data processing through rigorous testing and validation.",
    photo: "/joao.simoes/NAVGUIDE/images/filipacunha.jpg",
    linkedin: "https://www.linkedin.com/",
  },
]);
</script>

<template>
  <section id="team" class="bg-gray-100 py-10 px-5">
    <div class="container mx-auto text-center">
      <h2 class="text-6xl font-bold text-black mb-6 uppercase">Meet Our Team</h2>
      <p class="text-lg text-gray-600 mb-10 max-w-5xl mx-auto">
        United by a shared vision of inclusivity, our team is dedicated to transforming the supermarket experience for
        visually impaired individuals. Through cutting-edge technology and a deep commitment to accessibility, we strive
        to create a seamless, independent, and empowering way for everyone to navigate their surroundings with
        confidence.
      </p>

      <!-- Grid Layout for 6 Team Members -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="member in teamMembers" :key="member.id"
          class="relative bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 w-80 mx-auto">
          <!-- Image with Hover Effect -->
          <div class="relative group">
            <img :src="member.photo"
              class="w-full h-48 object-cover object-[15%_30%] transition-opacity duration-300 group-hover:opacity-70"
              alt="Team Member" />
            <!-- LinkedIn Button Appears on Hover -->
            <a :href="member.linkedin" target="_blank"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                class="bg-white text-blue-700 px-3 py-2 text-sm rounded-full font-semibold hover:bg-blue-700 hover:text-white transition">
                LinkedIn
              </button>
            </a>
          </div>

          <!-- Info Section -->
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="text-md text-gray-500 mt-1">{{ member.role }}</p>
            <p class="text-sm text-gray-600 mt-2">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transition for hover effects */
.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}
</style>
