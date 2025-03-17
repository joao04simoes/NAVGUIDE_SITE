<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const mobileNav = ref(false);

const scrollToSection = (id) => {
    if (router.currentRoute.value.path !== "/") {
        router.push('/').then(() => {
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        });
    } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    mobileNav.value = false;
};
</script>

<template>
    <!-- Hero Section Start -->
    <div id="project-intro" class="relative bg-cover bg-center bg-no-repeat text-white"
        style="background-image: url('/images/Imagem inicio.jpg');">
        <!-- Overlay (Optional, for better readability) -->
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>

        <section class="py-32 text-center relative z-10">
            <div class="w-full md:w-3/5 mx-auto">
                <h1 class="text-5xl md:text-7xl font-bold uppercase">NavGuide</h1>
                <p class="text-xl md:text-2xl mt-4 font-light tracking-wide">
                    Empowering visually impaired individuals with real-time navigation in supermarkets.
                </p>
                <div class="mt-8 flex justify-center space-x-4">
                    <div
                        class="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition">
                        <router-link to="/" @click="scrollToSection('tecSol')">Learn More</router-link>
                    </div>
                    <div
                        class="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition">
                        <router-link to="/blog">BLOG</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
