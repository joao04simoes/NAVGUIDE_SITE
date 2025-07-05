<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const mobileNav = ref(false);
const showButtons = ref(false);
const typedText = ref(""); // For typewriter effect
const fullText = "Empowering visually impaired individuals with real-time navigation in supermarkets."; // Subtitle text

// Scroll function
const scrollToSection = (id) => {
  const offset = 100; // 👈 Adjust based on your navbar height

  const scrollWithOffset = () => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (router.currentRoute.value.path !== "/") {
    router.push('/').then(() => {
      setTimeout(() => {
        scrollWithOffset();
      }, 300);
    });
  } else {
    scrollWithOffset();
  }

  mobileNav.value = false;
};


// Typewriter effect function
const startTyping = () => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index];
      index++;
    } else {
      clearInterval(interval);
      showButtons.value = true; // Show buttons after subtitle finishes typing
    }
  }, 25); // Adjust speed here (lower is faster)
};

// Start animations when component loads
onMounted(() => {
  startTyping();
});
</script>

<template>
  <section id="intro" class="h-[80vh] flex flex-col items-center justify-center text-center bg-cyan-700 text-white">

    <!-- Static Title -->
    <h1 class="text-5xl md:text-7xl font-extrabold uppercase">
      NAVGUIDE
    </h1>

    <!-- Typewriter Subtitle Effect -->
    <p class="text-lg md:text-xl mt-4 max-w-5xl">
      {{ typedText }}
    </p>

    <!-- Buttons Fade In After Typing Completes -->
    <transition name="fade-up" appear>
      <div v-if="showButtons" class="mt-8 flex space-x-4">
        <router-link
          class="px-8 py-4 bg-cyan-900 border-white text-white text-xl font-medium rounded-full hover:bg-white hover:text-black transition"
          to="/" @click.native="scrollToSection('pdf')">Learn More</router-link>

        <a href="#blog"
          class="px-9 py-4 border border-white text-white text-xl font-medium rounded-full hover:bg-white hover:text-black transition">
          Blog
        </a>
      </div>
    </transition>

  </section>
</template>

<style>
/* Smooth Fade & Slide Up Animation */
.fade-up-enter-active {
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
