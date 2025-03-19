<template>
    <section id="pdf" class="bg-gray-100 text-black py-20 px-6">
        <div class="max-w-6xl mx-auto text-center">
            <!-- Title -->
            <h2 class="text-3xl md:text-5xl font-bold text-black mb-6 uppercase">
                Explore Our Document
            </h2>
            <p class="text-lg text-gray-600 mb-6">
                Scroll through our official document below to learn more about our work.
            </p>
        </div>

        <!-- PDF Viewer -->
        <div class="max-w-5xl mx-auto">
            <iframe src="https://web.tecnico.ulisboa.pt/joao.simoes/NAVGUIDE/images/PIC.pdf"
                class="w-full h-[500px] border-2 border-gray-300 shadow-lg rounded-lg"></iframe>
        </div>
    </section>
</template>

<iframe :src="pdfUrl" class="w-full h-[500px]" frameborder="0"></iframe>
