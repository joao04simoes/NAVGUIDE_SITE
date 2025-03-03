<template>
    <div class="page-container">
        <!-- Header -->
        <header class="nav-header ">
            <img :src="'imagensBlog/random.jpeg'" alt=" Logo NAVGUIDE" class="logo" />
            <nav class="nav-buttons">
                <button @click="scrollToTop">Início</button>
                <button @click="$router.push('/Blog')">Blog</button>
                <button @click="scrollToTeam">Team</button>

            </nav>
        </header>

        <!-- Conteúdo principal -->
        <div class="main-container" ref="headerSection">
            <h1>Bem-vindo ao NAVGUIDE</h1>
            <p>Em construção</p>

        </div>
        <div class="Team" ref="teamSection">
            <h1>Team</h1>
            <div class="TeamList">

                <div v-for="(post, index) in posts" :key="index" class="TeamPost">
                    <h2>{{ post.title }}</h2>
                    <p>Engenharia Eletrotécnica e de Computadores</p>
                    <img v-if="post.image" :src="`${post.image}`" alt="Imagem do post" />

                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';

// Reference for the Team section
const teamSection = ref(null);
const headerSection = ref(null);

// Scroll to the Team section
const scrollToTeam = () => {
    if (teamSection.value) {
        // Obtém a posição da secção e ajusta para o header fixo
        const offset = 70; // Ajuste conforme necessário
        const topPos = teamSection.value.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
};

const scrollToTop = () => {
    if (headerSection.value) {
        // Obtém a posição da secção e ajusta para o header fixo
        const offset = 100; // Ajuste conforme necessário
        const topPos = headerSection.value.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    }

};

// Lista de membros da equipa
const posts = ref([
    { title: "Ana Cláudia Vilela", image: "imagensBlog/random.jpeg" },
    { title: "João Simões", image: "imagensBlog/random.jpeg" },
    { title: "Sofia Vicente", image: "imagensBlog/random.jpeg" },
    { title: "Afonso Ribeiro", image: "imagensBlog/random.jpeg" },
    { title: "Tomás Almeida", image: "imagensBlog/random.jpeg" },
    { title: "Filipa Cunha", image: "imagensBlog/random.jpeg" }
]);
</script>
<style scoped>
/* Página */
.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: px;
    /* Espaço para o header fixo */
}

/* Header fixo no topo */
.nav-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    z-index: 1000;
}

/* Logo */
.logo {
    height: 50px;
}

/* Botões de navegação */
.nav-buttons {
    margin-right: 40px;
    display: flex;
    gap: 15px;
}

.nav-buttons button {
    padding: 10px 15px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.nav-buttons button:hover {
    background-color: #0056b3;
}

/* Conteúdo principal */
.main-container {
    text-align: center;
    margin-top: 50px;
}

.main-container button {
    margin-top: 20px;
    padding: 10px 15px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.main-container button:hover {
    background-color: #0056b3;
}

.TeamList {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    /* Centraliza os itens na linha */
}

.TeamPost {
    display: flex;
    min-width: 300px;
    flex-direction: column;
    background: #19191a;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.Team {
    display: flex;
    flex-direction: column;
}
</style>
