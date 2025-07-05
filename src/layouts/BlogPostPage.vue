<template>
<div class="container mx-auto py-16 px-6" v-if="contentItem">
    <!-- BOTÃO VOLTAR -->
    <button @click="goBack" class="mb-6 text-cyan-700 hover:underline font-medium">
      ← Back to Blog
    </button>

    <!-- TÍTULO E DATA -->
    <h1 class="text-4xl font-bold mb-4">{{ contentItem.title }}</h1>
    <p class="mb-6 text-gray-600">{{ contentItem.date }}</p>

    <!-- CONTEÚDO PRINCIPAL -->
    <div class="text-gray-700 text-justify mb-8" v-html="contentItem.fullText"></div>

  <!-- BOTÃO DE DOWNLOAD para o Weekly Report 2 (id: 6) -->
<div v-if="contentItem.id === 6" class="mt-6">
  <a
    href="/files/Project Proposal.pdf"
    download
    class="inline-block bg-cyan-700 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-900 transition"
  >
    📄 Download Project Proposal
  </a>
</div>

<!-- BOTÕES DE DOWNLOAD para o Weekly Report 5 (id: 9) -->
<div v-if="contentItem.id === 10" class="mt-6 space-y-4">
  <a
    href="/images/Lista_requisitos_GR06.pdf"
    download
    class="inline-block bg-cyan-700 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-900 transition"
  >
    📄 Download Solution Requirements
  </a>
  <br />
  <a
    href="/images/Lista_Material_GR06.pdf"
    download
    class="inline-block bg-cyan-700 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-900 transition"
  >
    📄 Download Materials List
  </a>
</div>


     <!-- SE NÃO HOUVER CONTEÚDO -->
</div>
<div v-else class="text-center text-gray-600 py-20">
  <p>Content not found.</p>
</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { interviews, reports } from '../data/blogContent';

const route = useRoute();
const router = useRouter();

const contentItem = computed(() => {
  const postId = parseInt(route.params.id, 10);
  return [...interviews.value, ...reports.value].find(item => item.id === postId);
});

const goBack = () => {
  router.push('/blog');
};
</script>
