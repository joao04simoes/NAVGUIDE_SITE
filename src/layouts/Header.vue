<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const mobileNav = ref(false);
const router = useRouter();

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
};

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
    <!-- Navbar -->
    <div class="container mx-auto px-5">
        <header class="flex justify-between py-6 items-center">
            <!-- Logo -->

            <div class="flex items-center">
                <img src="/images/LogoNavGuide.png" alt="NAVGUIDE Logo" class="h-12 md:h-16 object-contain">
            </div>

            <!-- Botão Menu Mobile -->
            <button @click="toggleMobileNav" type="button" class="md:hidden focus:outline-none">
                <svg viewBox="0 0 24 24" class="h-8 w-8 text-white">
                    <path fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z">
                    </path>
                </svg>
            </button>

            <!-- Menu Desktop -->
            <nav class="hidden md:flex items-center">
                <ul class="flex space-x-10 font-medium items-center">
                    <li class="uppercase hover:text-theme-secondary transition duration-200">
                        <router-link to="/" @click.native="scrollToSection('team')">TEAM</router-link>
                    </li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200">
                        <router-link to="/" @click.native="scrollToSection('tecSol')">SOLUTION</router-link>
                    </li>
                    <li>
                        <router-link to="/blog" class="uppercase bg-theme-secondary px-6 py-2 text-white rounded shadow-md 
                hover:bg-white border-2 border-transparent hover:border-theme-secondary 
                hover:text-theme-secondary cursor-pointer transition duration-200 
                flex items-center h-10">
                            BLOG
                        </router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileNav"
        class="fixed top-0 left-0 w-full h-screen bg-theme-dark-blue flex flex-col items-center justify-center z-50">
        <!-- Botão para fechar -->
        <button @click="toggleMobileNav" class="absolute top-5 right-5">
            <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Links do menu -->
        <ul class="text-white text-3xl space-y-8 text-center">
            <li>
                <a @click="scrollToSection('team')" class="cursor-pointer hover:text-gray-400 transition">TEAM</a>
            </li>
            <li>
                <a @click="scrollToSection('tecSol')" class="cursor-pointer hover:text-gray-400 transition">SOLUTION</a>
            </li>
            <li>
                <router-link to="/blog" class="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
                    BLOG
                </router-link>
            </li>
        </ul>
    </div>
</template>
