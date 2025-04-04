<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';


const isMenuOpen = ref(false);

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
    <nav id="maintec"
        class="bg-white shadow-lg rounded-full mx-auto mt-6 max-w-6xl px-6 py-3 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <img src="/images/Logo NavGuide sem texto.png" alt="Logo" class="h-14 w-14" />
            <span class="text-lg font-bold text-cyan-600">NAVGUIDE</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
            <router-link to="/" class="text-cyan-600 font-medium">Home</router-link>
            <router-link to="/" @click.native="scrollToSection('pdf')"
                class="text-gray-500 hover:text-cyan-600 transition">What is NavGuide</router-link>
            <router-link to="/" @click.native="scrollToSection('tecSol')"
                class=" text-gray-500 hover:text-cyan-600 transition">Technology</router-link>
            <router-link to="/" @click.native="scrollToSection('team')"
                class="text-gray-500 hover:text-cyan-600 transition">Team</router-link>
            <router-link to="/" @click.native="scrollToSection('partners')"
                class=" text-gray-500 hover:text-cyan-600 transition">Partners</router-link>


        </div>

        <!-- Blog -->
        <a href="#blog"
            class="hidden md:block bg-cyan-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Blog
        </a>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen"
            class="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden">
            <router-link to="/" class="text-cyan-600 font-medium">Home</router-link>
            <router-link to="/" @click.native="scrollToSection('pdf')"
                class="text-gray-500 hover:text-cyan-600 transition">What is NavGuide</router-link>
            <router-link to="/" @click.native="scrollToSection('technology')"
                class=" text-gray-500 hover:text-cyan-600 transition">Technology</router-link>
            <router-link to="/" @click.native="scrollToSection('team')"
                class="text-gray-500 hover:text-cyan-600 transition">Team</router-link>
            <router-link to="/" @click.native="scrollToSection('partners')"
                class=" text-gray-500 hover:text-cyan-600 transition">Partners</router-link>
        </div>
    </nav>
</template>
