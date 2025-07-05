<template>
  <section class="bg-gray-100 text-black py-20 px-6">
    <div class="max-w-screen-xl mx-auto text-center">
      <!-- Section Title -->
      <h2 class="text-6xl font-bold text-black mb-6 uppercase">
        Explore Our Documents
      </h2>
      <p class="text-lg text-gray-600 mb-12">
        Scroll through our official documents below to learn more about our work.
      </p>
    </div>

    <!-- PDFs in 3 columns -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- First PDF -->
      <div>
        <div class="bg-[#106D8F] text-white text-center py-2 rounded-full mb-4 shadow-md">
          <h3 class="text-lg font-semibold">Project Proposal</h3>
        </div>
        <iframe
          src="/joao.simoes/NAVGUIDE/images/PIC.pdf"
          class="w-full h-[500px] border-2 border-gray-300 shadow-lg rounded-lg"
          frameborder="0"
        ></iframe>
      </div>

      <!-- Second PDF -->
      <div>
        <div class="bg-[#106D8F] text-white text-center py-2 rounded-full mb-4 shadow-md">
          <h3 class="text-lg font-semibold">Mid Pitch Deck</h3>
        </div>
        <iframe
          src="/joao.simoes/NAVGUIDE/images/MID PITCH DECK.pdf"
          class="w-full h-[500px] border-2 border-gray-300 shadow-lg rounded-lg"
          frameborder="0"
        ></iframe>
      </div>

      <!-- Third PDF -->
      <div>
        <div class="bg-[#106D8F] text-white text-center py-2 rounded-full mb-4 shadow-md">
          <h3 class="text-lg font-semibold">Final Pitch Deck</h3>
        </div>
        <iframe
          src="/joao.simoes/NAVGUIDE/images/FINAL%20PITCH%20DECK.pdf"
          class="w-full h-[500px] border-2 border-gray-300 shadow-lg rounded-lg"
          frameborder="0"
        ></iframe>
      </div>
    </div>

    <!-- Download Pamphlet Button -->
    <div class="mt-12 text-center">
      <a
        href="/joao.simoes/NAVGUIDE/images/Panfleto NavGuide.pdf"
        download
        class="inline-block bg-[#106D8F] hover:bg-[#0b5c77] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
      >
        📄 Download Our Pamphlet
      </a>
    </div>
  </section>
</template>
