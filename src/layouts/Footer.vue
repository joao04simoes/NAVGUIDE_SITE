<script setup></script>

<template>
    <!-- Footer Start -->
    <footer class="bg-theme-dark-blue py-10">
        <div class="container mx-auto px-5">
            <div class="grid md:grid-cols-2">
                <div class="flex flex-col md:flex-row md:space-x-12 items-center">
                    <div class="mb-10 md:mb-0">
                        <img src="/images/logo-chrome.svg" alt="Logo" />
                    </div>
                    <ul
                        class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 text-xs text-center md:text-left font-theme-heading">
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#team" v-smooth-scroll>TEAM</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#faq" v-smooth-scroll>FAQ</a>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    </footer>
    <!-- Footer End -->
</template>
