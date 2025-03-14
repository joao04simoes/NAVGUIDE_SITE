<template>
    <section class="container mx-auto px-5 py-12">
        <h1 class="text-3xl font-bold text-center mb-8">Blog</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="post in posts" :key="post.id" class="bg-white shadow-lg rounded-lg p-5">
                <h2 class="text-xl font-semibold">{{ post.title }}</h2>
                <p class="text-gray-600 mt-2">{{ post.content }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const posts = ref([
    { id: 1, title: 'Primeiro Post', content: 'Conteúdo completo do primeiro post...' },
    { id: 2, title: 'Segundo Post', content: 'Conteúdo completo do segundo post...' },
    { id: 3, title: 'Terceiro Post', content: 'Conteúdo completo do terceiro post...' }
]);
</script>
