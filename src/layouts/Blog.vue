<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Header -->



    <!-- Main Content -->
    <main class="flex-grow">
      <div class="container mx-auto py-16 px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-10">Our Blog & Interviews</h2>

        <div v-for="(group, month) in groupedInterviews" :key="month" class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">{{ month }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="interview in group" :key="interview.id" class="bg-white shadow-lg rounded-xl p-6 relative">

              <!-- Date -->
              <div class="absolute top-4 right-4 text-sm text-gray-400">{{ interview.date }}</div>

              <!-- Title -->
              <h3 class="text-xl font-semibold mb-2">{{ interview.title }}</h3>
              <!-- autors -->
              <p class="text-gray-600 mb-4">{{ interview.autors }}</p>
              <!-- excerpt -->
              <p class="text-gray-600 mb-4">{{ interview.excerpt }}</p>

              <!-- Read More Button -->
              <button @click="openInterview(interview)" class="text-cyan-700 font-medium hover:underline">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>


    <!-- Modal for Full Interview -->
    <div v-if="selectedInterview" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
      @click.self="closeInterview">
      <transition name="fade">
        <div class="bg-white p-6 max-w-2xl w-full rounded-lg shadow-lg transform transition-all">
          <h2 class="text-2xl font-bold mb-4">{{ selectedInterview.title }}</h2>
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

<script setup>
import { ref, computed } from 'vue';
import Footer from "./Footer.vue";

const interviews = ref([
  {
    id: 1,
    title: "1st Interview",
    autors: "Afonso Ribeiro, Filipa Cunha e Tomás Almeida",
    excerpt: "On this day, we met with the president of an association that promotes education for visually impaired individuals...",

    fullText: `
        <p>On this day, we met with the president of an association that promotes education for visually impaired individuals.</p>
        <p>The meeting began with a brief presentation of our project, followed by a clarification of any questions regarding it.</p>
        <p>We considered this person's opinion essential to validate the development of our project, as they not only work daily with the reality we are addressing but also experience it firsthand, being visually impaired themselves.</p>
      `,
    date: "2025-02-26"
  },
  {
    id: 2,
    title: "2nd Interview",
    autors: "Ana Cláudia Vilela, João Simões e Sofia Vicente",
    excerpt: "On this day, we met with the president of an association that promotes education for visually impaired individuals...",
    fullText: `
        <p>On this day, we met with the president of an association that promotes education for visually impaired individuals.</p>
        <p>The meeting began with a brief presentation of our project, followed by a clarification of any questions regarding it.</p>
        <p>We considered this person's opinion essential to validate the development of our project, as they not only work daily with the reality we are addressing but also experience it firsthand, being visually impaired themselves.</p>
      `,
    date: "2025-03-05"
  },
  {
    id: 3,
    title: "3rd Interview",
    autors: "Sofia Vicente, Afonso Ribeiro",
    excerpt: "This conversation focused on the accessibility of public spaces, gathering feedback from mobility specialists...",
    fullText: `
        <p>This conversation focused on the accessibility of public spaces, gathering feedback from mobility specialists.</p>
        <p>We discussed several pain points related to signage and orientation for visually impaired individuals, and identified potential improvements for implementation in our prototype.</p>
      `,
    date: "2025-03-21"
  }
]);

const selectedInterview = ref(null);

const openInterview = (interview) => {
  selectedInterview.value = interview;
};

const closeInterview = () => {
  selectedInterview.value = null;
};

// Group interviews by month
const groupedInterviews = computed(() => {
  const groups = {};
  interviews.value.forEach(interview => {
    const date = new Date(interview.date);
    const month = date.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
    if (!groups[month]) groups[month] = [];
    groups[month].push(interview);
  });
  return groups;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>