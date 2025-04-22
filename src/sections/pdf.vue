<template>
    <section class="bg-gray-100 text-black py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Section Title -->
        <h2 class="text-6xl font-bold text-black mb-6 uppercase">
          Explore Our Documents
        </h2>
        <p class="text-lg text-gray-600 mb-12">
          Scroll through our official documents below to learn more about our work.
        </p>
      </div>
  
      <!-- PDFs Side-by-Side with Titles -->
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-6">
        <!-- First PDF Block -->
        <div class="w-full md:w-1/2">
          <div class="bg-[#106D8F] text-white text-center py-2 rounded-full mb-4 shadow-md">
            <h3 class="text-lg font-semibold">Project Proposal</h3>
          </div>
          <iframe
            src="/joao.simoes/NAVGUIDE/images/PIC.pdf"
            class="w-full h-[500px] border-2 border-gray-300 shadow-lg rounded-lg"
            frameborder="0"
          ></iframe>
        </div>
  
        <!-- Second PDF Block -->
        <div class="w-full md:w-1/2">
          <div class="bg-[#106D8F] text-white text-center py-2 rounded-full mb-4 shadow-md">
            <h3 class="text-lg font-semibold">Mid Pitch Deck</h3>
          </div>
          <iframe
            src="/joao.simoes/NAVGUIDE/images/MID PITCH DECK.pdf"
            class="w-full h-[500px] border-2 border-gray-300 shadow-lg rounded-lg"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </section>
  </template>
  