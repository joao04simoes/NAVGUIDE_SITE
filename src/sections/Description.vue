<script setup>
</script>

<template>
    <!-- Highlight Section Start -->
    <div class="bg-black text-white py-20 px-6 md:px-16">
        <div class="container mx-auto text-center">
            <!-- Main Heading -->
            <h1 class="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
                Visually Impared people struggle to navigate in supermarkets independently
            </h1>

            <!-- Content Grid -->
            <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
                <!-- YouTube Video -->
                <div class="w-full md:w-1/2">
                    <iframe 
                        class="w-full h-64 md:h-96 rounded-lg shadow-lg" 
                        src="https://www.youtube.com/embed/UjDeAFG5njk"
                        title="Official Teaser" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>

                <!-- Description -->
                <div class="w-full md:w-1/2 text-left">
                    <h2 class="text-2xl md:text-5xl font-bold mb-4">
                        Our solution
                    </h2>
                    <p class="text-lg text-gray-300 leading-relaxed">
                        NavGuide uses an Ultra-Wideband (UWB) technology for real-time, precise location tracking, 
                        a voice-guided navigation allows users to move freely inside supermarkets and absolute
                        mobile app with an intuitive interface provides product identification and store layout guidance.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Highlight Section End -->
</template>
