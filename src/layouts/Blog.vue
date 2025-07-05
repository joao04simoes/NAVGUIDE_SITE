<template>
  <div class="py-2"></div>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Main Content -->
    <main class="flex-grow">
      <div class="container mx-auto py-16 px-6">
        <h2 class="text-4xl text-black md:text-5xl font-bold text-center mb-10">Our Blog & Interviews</h2>

        <!-- Content Section -->
        <div v-for="(group, month) in groupedContent" :key="month" class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">{{ month }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="content in group" :key="content.id"
            :class="content.type === 'interview'
              ? 'bg-cyan-700 shadow-lg rounded-xl p-4 relative md:col-span-2'
              : 'shadow-md rounded-lg relative w-full h-[200px] text-white bg-cover bg-center overflow-hidden'"
            :style="content.type === 'report' && content.image ? { backgroundImage: `url(${content.image})` } : {}"
            >
              <!-- Date Display -->
              <div
                :class="content.type === 'interview' ? 'absolute top-2 right-2 text-sm text-white' : 'absolute top-2 right-2 text-sm text-white'">
                {{ content.date }}
              </div>
              <!-- Interview Display (Blue Background & White Text) -->
              <template v-if="content.type === 'interview'">
                <div class="flex flex-col justify-between h-full">
                  <div>
                    <h3 class="text-xl font-bold mb-2 text-white">{{ content.title }}</h3>
                    <p v-if="content.autors" class="text-white mb-2">Members present: {{ content.autors }}</p>
                    <p class="text-white mb-4">Brief description: {{ content.excerpt }}</p>
                  </div>
                  <router-link
                    :to="`/blog/${content.id}`"
                    class="text-white font-medium hover:underline mt-4 self-start"
                  >
                    Read more
                  </router-link>
                </div>
              </template>


              <!-- Weekly Report Display (Small Boxes with Blue Title) -->
              <!-- Weekly Report Display (Small Boxes with Background Image) -->
              <template v-else>
                <div class="bg-black bg-opacity-50 h-full w-full p-4 rounded-lg flex flex-col justify-between">
                  <div>
                    <h3 class="text-lg font-bold">{{ content.title }}</h3>
                    <p class="text-sm">{{ content.subtitle }}</p>
                  </div>
                  <router-link
                    :to="`/blog/${content.id}`"
                    class="font-medium hover:underline mt-4 self-start"
                  >
                    Read more
                  </router-link>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal for Full Content -->
    <div v-if="selectedContent" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
      @click.self="closeContent">
      <transition name="fade">
        <div class="bg-white p-6 max-w-2xl w-full rounded-lg shadow-lg transform transition-all">
          <h2 class="text-2xl font-bold mb-4">{{ selectedContent.title }}</h2>
          <div class="text-gray-700 text-justify" v-html="selectedContent.fullText"></div>
          <button @click="closeContent"
            class="mt-6 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-black hover:text-white transition">Close</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { interviews, reports } from '../data/blogContent';


const allContent = computed(() => [...interviews.value, ...reports.value]);

const selectedContent = ref(null);

const openContent = (content) => {
  selectedContent.value = content;
};

const closeContent = () => {
  selectedContent.value = null;
};

// Grouping Content By Month
const groupedContent = computed(() => {
  const groups = {};
  allContent.value.forEach(item => {
    const date = new Date(item.date);
    const month = date.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
    if (!groups[month]) groups[month] = [];
    groups[month].push(item);
  });
  return groups;
});
</script>
