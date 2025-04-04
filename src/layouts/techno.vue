<script setup>
import { ref } from "vue";
import { Cpu, Database, Smartphone, FileText } from 'lucide-vue-next'; // Icons for each section

const sections = ref([
    {
        title: "UWB Localization System",
        description: "The UWB localization system is responsible for accurately determining the user's position within the supermarket. It consists of:",
        subsections: [
            {
                subtitle: "Hardware",
                points: [
                    "4 fixed UWB modules for triangulation reference.",
                    "1 mobile UWB module to measure distance to fixed anchors via UWB signals.",
                    "5 batteries for powering the modules.",
                    "5 ESP32 modules (Mauser 096-7620) for communication handling."
                ]
            },
            {
                subtitle: "Software",
                points: [
                    "Localization algorithm: TDoA (Time Difference of Arrival).",
                    "Communication handling with the mobile phone.",
                    "Data processing for accurate positioning."
                ]
            }
        ],
        icon: Cpu
    },
    {
        title: "Supermarket Structure Database",
        description: "A central database that stores all the mapping, object locations, and promotions. It includes:",
        subsections: [
            {
                subtitle: "Features",
                points: [
                    "Mapping allocation for all objects and promotions.",
                    "State machine to handle map requests.",
                    "User authentication mechanism.",
                    "Real-time data updates for product availability.",
                    "Cloud-based infrastructure for scalability."
                ]
            }
        ],
        icon: Database
    },
    {
        title: "Mobile App",
        description: "The mobile application serves as the user interface and control system. It includes:",
        subsections: [
            {
                subtitle: "Features",
                points: [
                    "Communication with UWB TAG for localization.",
                    "Path optimization algorithm for efficient navigation.",
                    "User-friendly interface with voice guidance.",
                    "Product search and route planning functionalities.",
                    "Integration with supermarket promotions."
                ]
            }
        ],
        icon: Smartphone
    }
]);
</script>

<template>
  <div class="py-2"></div>

  <!-- Introductory Box -->
  <section class="bg-cyan-700 py-10 px-6 text-white">
    <div class="container mx-auto text-center ">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 uppercase">Technology Overview</h1>
      <p class="text-lg max-w-5xl mx-auto">
        The NavGuide system is a cutting-edge navigation solution designed to provide visually impaired individuals with precise, real-time guidance in supermarkets. Combining UWB localization, a database, and a mobile app, 
        it offers accurate positioning, dynamic route planning, and auditory assistance, enhancing accessibility, independence, and convenience for users.</p>
    </div>
  </section>

  <!-- Technology Sections -->
  <section class="bg-gray-100 py-16 px-6">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div 
        v-for="section in sections" 
        :key="section.title" 
        class="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-xl hover:scale-105 transform duration-300"
      >
        <div class="flex items-center mb-4">
          <component :is="section.icon" class="w-10 h-10 text-cyan-600 mr-3" />
          <h2 class="text-3xl font-bold">{{ section.title }}</h2>
        </div>
        <p class="text-gray-700 mb-6">{{ section.description }}</p>

        <div v-for="sub in section.subsections" :key="sub.subtitle" class="mb-4">
          <h3 class="text-xl font-semibold text-cyan-700 mb-2">{{ sub.subtitle }}</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li v-for="(point, index) in sub.points" :key="index">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

<!-- Requirements Section -->
<section class="bg-gray-100 py-16 px-6 min-h-screen">
  <div class="container mx-auto text-center mb-12">
    <h2 class="text-3xl md:text-5xl font-bold text-black mb-10 uppercase">System Requirements</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

      <!-- Application Requirements Box -->
      <div class="bg-white shadow-xl rounded-xl p-6 transition hover:shadow-2xl transform duration-300">
        <h3 class="text-3xl font-bold mb-6 text-cyan-700">Application</h3>
        <div class="space-y-2 text-center text-gray-700">
          <p> Allows the user to upload a shopping list.</p>
          <p> Communicates with the supermarket server to obtain shopping list information.</p>
          <p> Provides auditory commands to guide the user to products.</p>
          <p> Ensures compatibility with various mobile devices.</p>
        </div>
      </div>

      <!-- System Requirements Box -->
      <div class="bg-white shadow-xl rounded-xl p-6 transition hover:shadow-2xl transform duration-300">
        <h3 class="text-3xl font-bold mb-4 text-cyan-700">System</h3>
        <div class="space-y-2 text-center text-gray-700">
          <p>Stores a map with desired products marked and their arrangement.</p>
          <p>Calculates the user’s location with accuracy below 30 cm using UWB.</p>
          <p>Draws routes to each product in real-time and recalculates the route if the user deviates from the planned path.</p>
          <p>Calculates the exit route when needed.</p>
          <p>The system’s response time must be below 500ms.</p>
          <p>Operates for at least 24 hours without requiring battery recharge.</p>
          <p>Communication between devices must be secure.</p>
        </div>
      </div>

    </div>
    <!-- Hardware and Software Requirements Box -->
    <div class="grid grid-cols-1 gap-12 mt-12">
      <div class="bg-white shadow-xl rounded-xl p-6 transition hover:shadow-2xl transform duration-300">
        
        <!-- Hardware Requirements -->
        <div class="mb-6">
          <h4 class="text-3xl font-bold text-cyan-700 mb-4">Hardware</h4>
          <div class="space-y-2 text-center text-gray-700">
            <p>The system must use UWB anchors installed in the supermarket.</p>
            <p>The user must have a smartphone with Bluetooth Low Energy (BLE) and a wearable UWB tag.</p>
            <p>The UWB modules must be powered by rechargeable batteries.</p>
            <p>A computer is required to act as an operational server.</p>
          </div>
        </div>

        <!-- Software Requirements -->
        <div>
          <h4 class="text-3xl font-bold text-cyan-700 mb-4">Software</h4>
          <div class="space-y-2 text-center text-gray-700">
            <p>The application must be developed as a WebApp.</p>
            <p>Server configuration must be properly set up.</p>
            <p>Implementation of localization, triangulation, and navigation algorithms.</p>
          </div>
        </div>
      </div>
    </div>
       <!-- Optional Requirements Box -->
       <div class="grid grid-cols-1 gap-12 mt-12">
      <div class="bg-white shadow-xl rounded-xl p-6 transition hover:shadow-2xl transform duration-300">
        <h3 class="text-3xl font-bold mb-4 text-cyan-700">Optional</h3>
        <div class="space-y-2 text-center text-gray-700">
          <p>The system should calculate the optimal route for products, ensuring a more efficient path.</p>
        </div>
      </div>
    </div>

  </div>
</section>



  <!-- Miro Flowchart Viewer -->
  <section class="bg-gray-100 py-16 px-6">
    <div class="container mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold text-black mb-10 uppercase">Flowchart</h2>
      <div class="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg overflow-auto">
        <iframe 
          width="100%" 
          height="600" 
          src="https://miro.com/app/live-embed/uXjVIIeSDdo=/?moveToViewport=-4434,-2361,10083,4450&embedId=154317880712" 
          frameborder="0" 
          scrolling="no" 
          allow="fullscreen; clipboard-read; clipboard-write" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
