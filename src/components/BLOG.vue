<template>
  <div class="pageContainer">
    <header class="nav-header ">
      <img :src="'imagensBlog/random.jpeg'" alt=" Logo NAVGUIDE" class="logo" />
      <h1 class="nav-title">Blog NAVGUIDE</h1>
      <nav class="nav-button">
        <button @click="$router.push('/')">Website</button>
      </nav>
    </header>
    <div class="blog-container">

      <div class="blogList">
        <div v-for="(post, index) in posts" :key="index" class="blog-post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <img v-if="post.image" :src="`${post.image}`" alt="Imagem do post" />

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Lista de posts do blog
const posts = ref([
  {
    title: "semana 1",
    content: "Não fizemos nada",
    image: "imagensBlog/random.jpeg"
  },
  {
    title: "semana 2",
    content: "Não fizemos nada",
    image: "imagensBlog/random.jpeg"
  },
  {
    title: "semana 3",
    content: "Não fizemos nada",
    image: "imagensBlog/random.jpeg"
  },
  {
    title: "semana 3",
    content: "Não fizemos nada",
    image: "imagensBlog/random.jpeg"
  },
  {
    title: "semana 3",
    content: "Não fizemos nada",
    image: "imagensBlog/random.jpeg"
  }
]);
</script>

<style scoped>
.blog-container {
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;

}

.blogList {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* Centraliza os itens na linha */
}

.blog-post {
  display: flex;
  min-width: 300px;
  flex-direction: column;
  background: #f8f9fa;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
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

.pageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: px;
  /* Espaço para o header fixo */
}

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  z-index: 1000;

}

.nav-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.logo {
  height: 50px;
}

.nav-button {

  font-size: 14px;
  background-color: #161719;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 30px;


}

.nav-button:hover {
  background-color: #0056b3;
}
</style>
