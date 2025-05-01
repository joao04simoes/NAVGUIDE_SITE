<template>
    <div class="flex flex-col h-[480px]">
        <!-- Conteúdo principal -->
        <main class="flex-grow flex flex-col justify-center items-center text-center p-10">
            <h1 class="text-4xl font-bold text-red-600 mb-4">404 - Página não encontrada</h1>
            <p class="mb-6">O link que seguiste não existe.</p>
            <router-link to="/" class="text-blue-600 underline">Voltar à página principal</router-link>
        </main>
    </div>
</template>