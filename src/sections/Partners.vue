<script setup>
import { ref } from "vue";

const partners = ref([
  {
    image: "/joao.simoes/NAVGUIDE/images/logo_ist.png",
    website: "https://tecnico.ulisboa.pt/pt/",
  },
  {
    image: "/joao.simoes/NAVGUIDE/images/logo_auchan.png",
    website: "https://www.auchan.pt/",
  },
  {
    image: "/joao.simoes/NAVGUIDE/images/apec_logo.jpg",
    website: "https://www.apec.org.pt/",
  },
  {
    image: "/joao.simoes/NAVGUIDE/images/bengalamágica_logo2.png",
    website: "https://www.bengalamagica.pt/",
  },
  {
    image: "/joao.simoes/NAVGUIDE/images/APD logo.png",
    website: "https://www.apd.org.pt/",
  }
  
]);

const directToPartner = (url) => {
  window.open(url, "_blank"); // Abre numa nova aba
};
</script>

<template>
  <section class="bg-gray-100 mb-16 py-10 overflow-hidden">
    <div class="container mx-auto text-center mb-6">
      <h2 class="text-6xl font-bold text-black mb-12 uppercase">
        Our Partners
      </h2>
    </div>

    <div id="partners" class="marquee">
      <div class="marquee-inner">
        <!-- Repeat logos enough times to prevent cutting -->
        <div v-for="(partner, index) in [...partners, ...partners, ...partners]" :key="index" class="marquee-item">
          <img :src="partner.image" @click="directToPartner(partner.website)" class="logo-img cursor-pointer" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.marquee-inner {
  display: flex;
  align-items: center;
  gap: 3rem;
  min-width: fit-content;
  animation: scrollLeft 20s linear infinite;
}

.marquee-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  height: 80px;
  width: auto;
  object-fit: contain;
}

/* Scrolling animation */
@keyframes scrollLeft {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-33.333%);
  }
}
</style>
