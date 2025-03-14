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
            <div>
                <router-link to="/">
                    <img src="/images/logo-chrome.svg" alt="Site Logo">
                </router-link>
            </div>

            <!-- Menu Toggler (Mobile) -->
            <button @click="toggleMobileNav" type="button" class="flex md:hidden focus:outline-none">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                    <path fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                    </path>
                </svg>
            </button>

            <!-- Desktop Menu -->
            <nav class="hidden md:flex">
                <ul class="space-x-10 font-theme-heading font-medium flex flex-row">
                    <li class="uppercase hover:text-theme-secondary transition duration-200">
                        <router-link to="/" @click.native="scrollToSection('team')">TEAM</router-link>
                    </li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200">
                        <router-link to="/" @click.native="scrollToSection('faq')">FAQ</router-link>
                    </li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200">
                        <router-link to="/" @click.native="scrollToSection('subscribe')">SUBSCRIBE</router-link>
                    </li>
                    <li
                        class="uppercase bg-theme-secondary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200">
                        <router-link to="/blog">BLOG</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileNav" class="absolute z-30 top-0 left-0 w-full h-full bg-theme-dark-blue px-5 py-12">
        <div class="flex justify-between items-center">
            <img src="/images/logo-bookmark-white.svg" alt="Logo">
            <button @click="toggleMobileNav()" type="button" class="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-x text-white" viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>
        <ul class="uppercase text-white text-md tracking-widest flex flex-col mt-14 text-center">
            <li
                class="hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue">
                <router-link to="/" @click.native="scrollToSection('features')">Features</router-link>
            </li>
            <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue">
                <router-link to="/" @click.native="scrollToSection('faq')">FAQ</router-link>
            </li>
            <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue">
                <router-link to="/" @click.native="scrollToSection('subscribe')">Subscribe</router-link>
            </li>
            <li
                class="bg-transparent border-2 rounded px-6 py-2 mt-6 w-full cursor-pointer hover:text-theme-secondary transition duration-200">
                <router-link to="/" @click.native="scrollToSection('download-section')">Download</router-link>
            </li>
        </ul>
        <div class="flex justify-center items-end h-52">
            <ul class="flex space-x-8">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                        class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer"
                        viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                        class="bi bi-twitter text-white hover:text-theme-secondary transition duration-200 cursor-pointer"
                        viewBox="0 0 16 16">
                        <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277z" />
                    </svg>
                </li>
            </ul>
        </div>
    </div>
</template>
