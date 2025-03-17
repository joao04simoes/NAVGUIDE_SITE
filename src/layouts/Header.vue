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
            <div class="font-bold text-lg">
                NAVGUIDE
            </div>

            <!-- Menu Toggler (Mobile) -->
            <button @click="toggleMobileNav" type="button" class="flex md:hidden focus:outline-none">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                    <path fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z">
                    </path>
                </svg>
            </button>

            <!-- Desktop Menu -->
            <nav class="hidden md:flex items-center">
                <ul class="flex space-x-10 font-medium">
                    <li class="uppercase hover:text-theme-secondary transition duration-200">
                        <router-link to="/" @click.native="scrollToSection('team')">TEAM</router-link>
                    </li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200">
                        <router-link to="/" @click.native="scrollToSection('tecSol')">SOLUTION</router-link>
                    </li>
                    <li
                        class="uppercase bg-theme-secondary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200 flex items-center">
                        <router-link to="/blog">BLOG</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileNav"
        class="absolute z-30 top-0 left-0 w-full h-full bg-theme-dark-blue flex flex-col items-center justify-center px-5">
        <button @click="toggleMobileNav()" type="button" class="absolute top-5 right-5 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-x text-white" viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>

        <ul class="text-white text-lg space-y-6 text-center">
            <li>
                <router-link to="/" @click.native="scrollToSection('team')"
                    class="hover:text-theme-secondary transition duration-200">TEAM</router-link>
            </li>
            <li>
                <router-link to="/" @click.native="scrollToSection('tecSol')"
                    class="hover:text-theme-secondary transition duration-200">SOLUTION</router-link>
            </li>
            <li
                class="bg-theme-secondary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200">
                <router-link to="/blog">BLOG</router-link>
            </li>
        </ul>
    </div>
</template>
