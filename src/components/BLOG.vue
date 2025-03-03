<template>
  <div class="blog-container">
    <h1>Blog NAVGUIDE</h1>

    <div v-for="(post, index) in posts" :key="index" class="blog-post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Lista de posts do blog
const posts = ref([
  {
    title: "Explorando o Campus",
    content: "Descobre os melhores lugares para estudar, relaxar e socializar na universidade!"
  },
  {
    title: "Dicas para Novos Estudantes",
    content: "Organiza o teu tempo, encontra grupos de estudo e aproveita ao máximo a tua experiência académica."
  },
  {
    title: "Eventos da Semana",
    content: "Consulta a lista de eventos e atividades a decorrer no campus esta semana."
  }
]);
</script>

<style scoped>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.blog-post {
  background: #f8f9fa;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #007bff;
}

h2 {
  color: #333;
}

p {
  color: #555;
}
</style>
