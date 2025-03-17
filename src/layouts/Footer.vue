<script setup>
import { ref } from 'vue';
const year = ref(new Date().getFullYear());
</script>

<template>
    <!-- Footer Start -->
    <footer class="bg-theme-dark-blue py-10 text-white">
        <div class="container mx-auto px-5">
            <div class="grid md:grid-cols-3 gap-8 text-center md:text-left justify-center">
                <!-- Logo / Nome do Projeto - Centralizado -->
                <div class="md:col-span-3 flex flex-col items-center">
                    <h2 class="text-xl font-bold">NAVGUIDE</h2>
                    <p class="text-sm mt-2">Facilitando a navegação para pessoas com deficiência visual.</p>
                </div>

                <!-- Links Úteis (Comentado)
                <div class="flex flex-col space-y-2 md:items-start">
                    <h3 class="font-semibold">Links</h3>
                    <router-link to="/" class="hover:text-gray-400 transition">Início</router-link>
                    <router-link to="/about" class="hover:text-gray-400 transition">Sobre Nós</router-link>
                    <router-link to="/contact" class="hover:text-gray-400 transition">Contato</router-link>
                </div>

                Redes Sociais (Comentado)
                <div class="flex flex-col space-y-2 md:items-start">
                    <h3 class="font-semibold">Siga-nos</h3>
                    <div class="flex space-x-4 justify-center md:justify-start">
                        <a href="https://twitter.com" target="_blank" class="hover:text-gray-400 transition">🐦 Twitter</a>
                        <a href="https://linkedin.com" target="_blank" class="hover:text-gray-400 transition">🔗 LinkedIn</a>
                    </div>
                </div> -->
            </div>

            <!-- Copyright -->
            <div class="mt-8 text-center text-sm border-t border-gray-500 pt-4">
                © {{ year }} NAVGUIDE. Todos os direitos reservados.
            </div>
        </div>
    </footer>
    <!-- Footer End -->
</template>
