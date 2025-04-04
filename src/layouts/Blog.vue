<template>
  <div class="py-2"></div>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Main Content -->
    <main class="flex-grow">
      <div class="container mx-auto py-16 px-6">
        <h2 class="text-4xl text-black md:text-5xl font-bold text-center mb-10">Our Blog & Interviews</h2>

        <!-- Content Section -->
        <div v-for="(group, month) in groupedContent" :key="month" class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">{{ month }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="content in group" :key="content.id"
              :class="content.type === 'interview' ? 'bg-cyan-700 shadow-lg rounded-xl p-4 relative md:col-span-2' : 'bg-white shadow-md rounded-lg p-3 relative w-full h-20'">

              <!-- Date Display -->
              <div
                :class="content.type === 'interview' ? 'absolute top-2 right-2 text-sm text-white' : 'absolute top-2 right-2 text-sm text-black'">
                {{ content.date }}
              </div>
              <!-- Interview Display (Blue Background & White Text) -->
              <template v-if="content.type === 'interview'">
                <h3 class="text-xl font-bold mb-2 text-white">{{ content.title }}</h3>
                <p v-if="content.autors" class="text-white mb-4">{{ content.autors }}</p>
                <p class="text-white mb-4">{{ content.excerpt }}</p>
              </template>

              <!-- Weekly Report Display (Small Boxes with Blue Title) -->
              <template v-else>
                <h3 class="text-lg font-bold text-cyan-700">{{ content.title }}</h3>
              </template>

              <!-- Read More Button -->
              <button @click="openContent(content)"
                :class="content.type === 'interview' ? 'text-white font-medium hover:underline' : 'text-cyan-700 font-medium hover:underline'">Read
                more
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal for Full Content -->
    <div v-if="selectedContent" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
      @click.self="closeContent">
      <transition name="fade">
        <div class="bg-white p-6 max-w-2xl w-full rounded-lg shadow-lg transform transition-all">
          <h2 class="text-2xl font-bold mb-4">{{ selectedContent.title }}</h2>
          <div class="text-gray-700 text-justify" v-html="selectedContent.fullText"></div>
          <button @click="closeContent"
            class="mt-6 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-black hover:text-white transition">Close</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Interviews
const interviews = ref([
  {
    id: 1,
    title: "1st Interview",
    autors: "Afonso Ribeiro, Filipa Cunha & Tomás Almeida",
    excerpt: "Meeting with the president of an association.",
    fullText: `
      <p>During our interview with the president of an association, we explored ways to establish a collaborative feedback loop</strong> throughout the development of our project. They emphasized the importance of maintaining consistent communication</strong> to ensure that our solution is effectively aligned with the needs of the community we aim to serve.</p>
      <p>The association expressed a strong willingness to support us at every stage</strong>, particularly when it comes to product testing and evaluation</strong>. They offered their expertise and resources to help us conduct rigorous tests</strong>, providing feedback that would help us refine our prototype.</p>
      <p>Moreover, the president was enthusiastic about the possibility of facilitating real-time testing within supermarket environments</strong>. This approach would allow us to gather authentic, real-world insights</strong>, helping us better understand how our solution performs in practical scenarios. Such testing would also enable us to identify areas for improvement</strong> and enhance the user experience accordingly.</p>
      <p>This partnership holds great potential for the project, as it will provide us with critical feedback from experienced professionals</strong> and the opportunity to validate our solution under real conditions.</p>
    `,
    date: "2025-02-26",
    type: 'interview'
  },
  {
    id: 2,
    title: "2nd Interview",
    autors: "Ana Cláudia Vilela, João Simões & Sofia Vicente",
    excerpt: "Discussing accessibility in supermarkets.",
    fullText: `
      <p>During our interview with a supermarket chain, we presented the NavGuide project and discussed its potential impact on improving accessibility for visually impaired individuals within their stores.</p>
      <p>The representatives were highly supportive and expressed their willingness to assist us in various ways, including providing access to their facilities for real-world testing and evaluation.</p>
      <p>They also offered their collaboration to ensure the system integrates smoothly with their infrastructure, making the testing process as effective and realistic as possible.</p>
      <p>Their enthusiasm and commitment to the project demonstrate a strong partnership that will be essential for validating the system’s performance in practical, real-world environments.</p>
    `,
    date: "2025-03-05",
    type: 'interview'
  },

  {
    id: 3,
    title: "3rd Interview",
    autors: "Sofia Vicente & Ana Cláudia",
    excerpt: "Exploring how another association can assist us.",
    fullText: `
      <p>In our recent interview with another association, we focused on exploring potential areas of collaboration</strong> that could enhance our project's development. They expressed a strong interest in supporting us through continuous feedback and product testing</strong>, particularly in environments that closely mimic real-world use cases.</p>
      <p>They emphasized their willingness to participate in various testing phases</strong>, providing constructive feedback to help us identify potential improvements and enhance accessibility. Their experience working directly with the visually impaired offers valuable insights that can guide our project’s adjustments and refinement.</p>
      <p>Additionally, the association proposed setting up structured testing sessions</strong>, where users could interact with our prototype and share their experiences. This collaborative approach would allow us to gather practical and detailed feedback</strong>, ensuring our solution is as effective and user-friendly as possible.</p>
      <p>Their proactive engagement and readiness to support our testing efforts represent a crucial opportunity to align our project more closely with the needs of the community we aim to serve.</p>
    `,
    date: "2025-03-21",
    type: 'interview'
  },
  {
    id: 4,
    title: "4th Interview",
    autors: "Sofia Vicente & Ana Cláudia",
    excerpt: "Exploring new collaboration opportunities with an association.",
    fullText: `
      <p>Today, we met with the president of yet another association to discuss how they could support our project moving forward. The conversation focused heavily on how their organization could assist us by providing regular feedback</strong> and participating in various testing stages</strong>.</p>
      <p>They were particularly enthusiastic about the possibility of real-time testing within supermarket environments</strong>, as this would offer direct and relevant insights into the user experience. Their organization is keen on facilitating such sessions and providing access to individuals who would benefit most from our solution.</p>
      <p>Moreover, they proposed a structured feedback process, where their team could periodically evaluate our progress and offer constructive suggestions for improvement. Their expertise in accessibility and inclusivity would be instrumental in ensuring our solution is both practical and effective.</p>
      <p>This new collaboration offers promising opportunities for continuous enhancement of our project, ensuring it meets the real needs of the visually impaired community.</p>
    `,
    date: "2025-04-03",
    type: 'interview'
  }
]);

// Weekly Reports (4 Reports Per Month)
const reports = ref([
  {
    id: 4,
    title: "Weekly Report 1",
    fullText: "<p>The project officially started, building upon the tasks initiated last semester and expanding our network by reaching out to key partners, including supermarket chains and associations supporting the visually impaired. We began developing this website while finalizing our project proposal, which is scheduled for presentation next week. Throughout this process, our biweekly meetings with the project advisor have proven invaluable, as their insights and suggestions have helped us enhance the proposal's quality and clarity. Additionally, this week marked our attendance at the first seminar led by Miguel Gonçalves from Magma Studio, providing us with fresh perspectives and inspiration for the journey ahead.</p>",
    date: "2025-02-14",
    type: 'report'
  },
  {
    id: 5,
    title: "Weekly Report 2",
    fullText: "<p>We completed and submitted the project proposal along with the planned timeline for its development. This week, the focus was on contacting companies and scheduling interviews to gather insights about the needs in the field. We created a set of questions to guide the interviews, which allowed us to collect more precise data for further analysis. We continued working on the website development and started researching the materials required for the project, within the given budget.</p>",
    date: "2025-02-21",
    type: 'report'
  },
  {
    id: 6,
    title: "Weekly Report 3",
    fullText: "<p>During this week, we continued reaching out to companies and scheduling several meetings, particularly with retail chain managers and associations for the visually impaired. Additionally, we began researching the materials/components that seem suitable for developing the first prototype of the project. We also had a meeting with our advisor, where we outlined the next steps for the development of our project.</p>",
    date: "2025-02-28",
    type: 'report'
  },
  {
    id: 7,
    title: "Weekly Report 4",
    fullText: "<p>Throughout the week, we collected the responses from the interviews conducted for further data analysis. These interviews also helped us better understand what improvements could be made to our project, based on insights from professionals working in the field. These interviews can be accessed in the Interviews section of our blog.</p>",
    date: "2025-03-07",
    type: 'report'
  },
  {
    id: 8,
    title: "Weekly Report 5",
    fullText: "<p>Significant progress was made this week as we successfully initiated the first round of real-time testing within a supermarket environment. The results provided us with valuable insights regarding usability and accessibility improvements. Additionally, we continued to enhance our website, ensuring that it remains user-friendly and aligned with our project's evolving requirements. Further meetings were scheduled with associations to maintain a steady flow of feedback.</p>",
    date: "2025-03-14",
    type: 'report'
  },
  {
    id: 9,
    title: "Weekly Report 6",
    fullText: "<p>  During this week, the team compiled a list of the materials needed for the development of the prototype and created a list of project requirements. These included functional and non-functional requirements, as well as hardware and software requirements. They are available in the section Technology of our website.</p>",
    date: "2025-03-21",
    type: 'report'
  },
  {
    id: 10,
    title: "Weekly Report 7",
    fullText: "<p>  During this week, the team compiled a list of the materials needed for the development of the prototype and created a list of project requirements. These included functional and non-functional requirements, as well as hardware and software requirements. They are available in the section Technology of our website.</p>",
    date: "2025-03-28",
    type: 'report'
  },
  {
    id: 11,
    title: "Weekly Report 8",
    fullText: "<p> In addition to the meeting with the team’s advisor—during which the next steps of the project were discussed, and a brief evaluation of the materials and requirements list was carried out—the team also began developing the project’s pitch deck. This serves as an improved version of the project proposal submitted during the first few weeks but now includes an overview of the project’s state of the art, progress made so far, challenges faced, individual contributions from each team member, and an updated task schedule.</p>",
    date: "2025-04-04 ",
    type: 'report'
  },
]);

const allContent = computed(() => [...interviews.value, ...reports.value]);

const selectedContent = ref(null);

const openContent = (content) => {
  selectedContent.value = content;
};

const closeContent = () => {
  selectedContent.value = null;
};

// Grouping Content By Month
const groupedContent = computed(() => {
  const groups = {};
  allContent.value.forEach(item => {
    const date = new Date(item.date);
    const month = date.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
    if (!groups[month]) groups[month] = [];
    groups[month].push(item);
  });
  return groups;
});
</script>
