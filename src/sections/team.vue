<script setup>
import teamMembers from "../data/teamMembers";
</script>

<template>
    <!-- Team Section Start -->
    <div id="team" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Meet Our Team</h2>
                <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7">Our dedicated team works
                    hard to bring you the best experience. Get to know them!</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="member in teamMembers" :key="member.id" class="shadow-lg rounded-lg p-6 text-center">
                    <div class="flex justify-center mt-6">
                        <img :src="member.photo" class="w-24 h-24 rounded-full" />
                    </div>
                    <h3 class="text-2xl font-theme-heading font-medium mt-4">{{ member.name }}</h3>
                    <p class="text-md font-theme-content text-theme-grayish-blue mt-2">{{ member.role }}</p>
                    <p class="text-sm font-theme-content text-theme-grayish-blue mt-2">{{ member.bio }}</p>
                </div>
            </div>
        </section>
    </div>
    <!-- Team Section End -->
</template>