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
    <nav class="bg-white shadow-lg rounded-full mx-auto mt-6 max-w-6xl px-6 py-3 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <img src="/images/Logo NavGuide sem texto.png" alt="Logo" class="h-14 w-14" />
            <span class="text-lg font-bold text-cyan-700">NAVGUIDE</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
            <router-link to="/" class="text-cyan-600 font-medium">Home</router-link>
            <router-link to="/" @click.native="scrollToSection('pdf')"
                class="text-gray-500 hover:text-cyan-600 transition">What
                is NavGuide</router-link>
            <router-link to="/" @click.native="scrollToSection('team')"
                class="text-gray-500 hover:text-cyan-600 transition">Team</router-link>
            <router-link to="/" @click.native="scrollToSection('partners')" class=" text-gray-500 hover:text-cyan-600
                transition">Partners</router-link>

            <!-- Dropdown 
            <div class="relative group">
                <button class="text-gray-500 hover:text-cyan-600 transition flex items-center">
                    Pages
                    <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div class="absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-36 py-2">
                    <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Page 1</a>
                    <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Page 2</a>
                </div>
            </div>-->
        </div>

        <!-- Blog -->
        <a href="#blog"
            class="hidden md:block bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition">
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
                class="text-gray-500 hover:text-cyan-600 transition">What
                is NavGuide</router-link>
            <router-link to="/" @click.native="scrollToSection('team')"
                class="text-gray-500 hover:text-cyan-600 transition">Team</router-link>
            <router-link to="/" @click.native="scrollToSection('partners')" class=" text-gray-500 hover:text-cyan-600
                transition">Partners</router-link>
        </div>
    </nav>
</template>
