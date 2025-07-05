import { ref } from 'vue';
export const interviews = ref([
  {
    id: 1,
    title: "1st Interview - Collaboration with an Association",
    autors: "Members present: Afonso Ribeiro, Filipa Cunha, Sofia Vicente & Tomás Almeida",
    excerpt: "Brief description: Meeting with the president of an association.",
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
    title: "2nd Interview - Supermarket Partnership",
    autors: "Members present: Ana Cláudia Vilela, João Simões & Sofia Vicente",
    excerpt: "Brief description: Discussing accessibility in supermarkets.",
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
    title: "3rd Interview - Engaging with a Second Association for Inclusive Development",
    autors: "Members present: Sofia Vicente & Ana Cláudia",
    excerpt: "Brief description: Exploring how another association can assist us.",
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
    title: "4th Interview - New Association Partnership: Real-World Testing & Continuous Feedback",
    autors: "Members present: Sofia Vicente & Ana Cláudia",
    excerpt: "Brief description: Exploring new collaboration opportunities with an association.",
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

export const reports = ref([
  {
    id: 5,
    title: "Kick-off & Strategic Partnerships",
    subtitle: "Weekly Report 1",
    fullText: `
  <div>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Project kickoff:</strong> We officially started the project, building upon tasks initiated last semester.</li>
      <li><strong>Network expansion:</strong> We reached out to key partners such as supermarket chains and associations supporting the visually impaired.</li>
      <li><strong>Website development:</strong> Initial work began on this platform while we also finalized our <strong>project proposal</strong>.</li>
      <li><strong>Advisor meetings:</strong> Our biweekly meetings with our project advisors provided valuable feedback, helping us improve the <strong>clarity and quality</strong> of the proposal.</li>
      <li><strong>Seminar participation:</strong> We attended our first external seminar, led by <strong>Miguel Gonçalves from Magma Studio </strong>, which offered <strong>fresh perspectives</strong> and inspiration for the journey ahead.</li>
    </ul>
  </div>
`
    ,
    date: "2025-02-14",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr1.jpg'
  },
  {
    id: 6,
    title: "Proposal Submission & Interview",
    subtitle: "Weekly Report 2",
    fullText: `
    <div>
        <ul class="list-disc list-inside space-y-2">
        <li><strong>Proposal submitted:</strong> We completed and submitted the <strong>project proposal</strong> along with the planned timeline for its development.</li>
        <li><strong>Company outreach:</strong> This week, the focus was on contacting companies and scheduling <strong>interviews</strong> to gather insights about the needs in the field.</li>
        <li><strong>Interview preparation:</strong> We created a set of questions to guide the interviews, allowing us to collect more precise data for further analysis.</li>
        <li><strong>Website development:</strong> We continued working on the platform and began <strong>researching the materials</strong> required for the project, within the given budget.</li>
        </ul>
    </div>`
    , date: "2025-02-21",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr2.png',
    file: '/joao.simoes/NAVGUIDE/images/Project Proposal.pdf'
  },
  {
    id: 7,
    title: "Initial Prototyping and Meetings with Partners",
    subtitle: "Weekly Report 3",
    fullText: `
    <div>
        <ul class="list-disc list-inside space-y-2">
        <li><strong>Stakeholder outreach:</strong> We continued reaching out to companies and scheduled several meetings, especially with <strong>retail chain managers</strong> and <strong>associations for the visually impaired</strong>.</li>
        <li><strong>Prototype research:</strong> We began researching <strong>materials and components</strong> suitable for developing the first prototype.</li>
        <li><strong>Advisor meeting:</strong> We met with our <strong>project advisor</strong> to outline the <strong>next steps</strong> for development.</li>
        </ul>
    </div>
    `
    ,
    date: "2025-02-28",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr3.jpg'
  },
  {
    id: 8,
    title: "Analyzing Feedback from Key Interviews",
    subtitle: "Weekly Report 4",
    fullText: `
    <div class="space-y-6">
        <ul class="list-disc list-inside space-y-2">
        <li><strong>Response collection:</strong> We gathered feedback from all <strong>conducted interviews</strong> for further data analysis.</li>
        <li><strong>Insight extraction:</strong> The interviews helped us <strong>identify potential improvements</strong> to our project, based on input from <strong>field professionals</strong>.</li>
        <li><strong>Availability:</strong> All interviews are available in the <strong>Interviews section</strong> of our blog.</li>
        </ul>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <img src="/joao.simoes/NAVGUIDE/images/int1.JPG" alt="Interview 1" class="rounded shadow-md" />
        <img src="/joao.simoes/NAVGUIDE/images/int2.JPG" alt="Interview 2" class="rounded shadow-md" />
        <img src="/joao.simoes/NAVGUIDE/images/int3.jpg" alt="Interview 3" class="rounded shadow-md" />
        </div>
    </div>
`
    ,
    date: "2025-03-07",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr4.jpg'
  },

  {
    id: 10,
    title: "Solution Requirements & Materials List",
    subtitle: "Weekly Report 5",
    fullText: "<p>  During this week, the team compiled a list of the materials needed for the development of the prototype and created a list of project requirements. These included functional and non-functional requirements, as well as hardware and software requirements. They are also available in the section Technology of our website.</p>",
    date: "2025-03-21",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr5.jpg'
  },
  {
    id: 11,
    title: "Advancing Prototyping & Team Coordination",
    subtitle: "Weekly Report 6",
    fullText: `
        <div>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Advisor meeting:</strong> We held a meeting with the team’s advisor to discuss the <strong>next development steps</strong> and conduct a brief evaluation of the <strong>materials and requirements list</strong>.</li>
            <li><strong>Pitch deck development:</strong> The team began creating the <strong>project’s pitch deck</strong>, serving as an improved version of the initial proposal submitted during the early weeks.</li>
            <li><strong>Updated content:</strong> The pitch deck includes an <strong>overview of the project’s state, progress made so far</strong>, <strong>challenges faced</strong>, <strong>contributions from each team member</strong>, and an <strong>updated task schedule</strong>.</li>
            <li><strong>Prototype:</strong> The DWM3001CDK was our choice because it includes several features that made the project easier and more versatile. It offers <strong>±10 cm positioning accuracy</strong>, includes a <strong>USB connection</strong> that allows power and configuration directly from a PC, and integrates its own <strong>microcontroller</strong>, eliminating the need for additional hardware for processing.</li>
            </ul>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4">
        <img src="/joao.simoes/NAVGUIDE/images/pr1.jpg" alt="Interview 1" class="rounded shadow-md" />
        </div>
`,
    date: "2025-03-28",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr6.jpg'
  },
  {
    id: 12,
    title: "Developing the Pitch Deck",
    subtitle: "Weekly Report 7",
    fullText: `
    <div>
        <ul class="list-disc list-inside space-y-2">
        <li><strong>Internal alignment:</strong> Following the previous evaluations, the team aligned on the key components that the pitch deck should include and the narrative to convey.</li>
        <li><strong>Pitch deck structure:</strong> We organized the deck into sections that highlight the <strong>problem statement</strong>, <strong>solution and prototype concept</strong>, <strong>stakeholder feedback</strong>, and <strong>market context</strong>.</li>
        <li><strong>Content refinement:</strong> Each section was enriched with visuals, mockups, and updated text to reflect the latest progress and team insights.</li>
        <li><strong>Final touches:</strong> We reviewed the pitch to ensure coherence and started preparing to share it with external stakeholders for validation.</li>
        </ul>
    </div>`,
    date: "2025-04-04 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr7.jpg'
  },
  {
    id: 13,
    title: "Preparation for Final Exams",
    subtitle: "Weekly Report 9",
    fullText: "This week, the team was preparing for the final exams of the course units taught in the third term. ",
    date: "2025-04-11 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr8.jpg'
  },
  {
    id: 14,
    title: "Exams Week",
    subtitle: "Weekly Report 10",
    fullText: "This week, the team had exams for the course units — Electronic Systems and Computer Networks and Internet — for which preparation was carried out the previous week.",
    date: "2025-04-18 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr9.jpg'
  },
  {
    id: 15,
    title: "Building the Server & Route Algorithm",
    subtitle: "Weekly Report 11",
    fullText: `
    <div>
        <ul class="list-disc list-inside space-y-2">
        <li><strong>Server development:</strong> The team focused on building the <strong>server</strong>, which by the end of the week already contained a detailed map of a sample supermarket and the <strong>locations of products</strong> on the shelves.</li>
        <li><strong>Route algorithm implementation:</strong> We implemented the route algorithm that generates a <strong>path from the supermarket entrance</strong> to the location of a selected product.</li>
        <li><strong>Optimization:</strong> The algorithm was designed to <strong>calculate the most efficient path</strong> with the lowest possible computational cost, allowing the user to collect all necessary products and reach the final destination.</li>
        </ul>
    </div>
    `,
    date: "2025-04-25 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr11.jpg'
  },

  {
    id: 16,
    title: "Pitch Deck Presentation to Professors",
    subtitle: "Weekly Report 12",
    fullText: "The team presented the pitch deck that had already been prepared and submitted to Professor Pedro Vitor. The presentation took place in an auditorium of the Civil Engineering building and brought together members of the other teams, also supervised by Professor Pedro Vitor and Professor João Marafuz Gaspar, who also presented their projects.",
    date: "2025-05-02 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr12.jpg'
  },
  {
    id: 17,
    title: "Connecting Web App with Server",
    subtitle: "Weekly Report 13",
    fullText: `
  <div>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Web app development:</strong> We started developing the <strong>web application</strong> that supports our project and communicates with the server.</li>
      <li><strong>API integration:</strong> By the end of the week, the web app was already <strong>communicating successfully via API</strong> with the server.</li>
      <li><strong>Product list retrieval:</strong> The app can now <strong>receive the full list of products</strong> available in the supermarket for the user to build their shopping list.</li>
      <li><strong>Optimized route:</strong> Once the user submits their list, the server sends back the <strong>optimized route</strong> to collect all the necessary products.</li>
    </ul>

    <!-- Link para o Miro -->
    <div class="mt-6">
      <a
        href="https://miro.com/app/live-embed/uXjVIIeSDdo=/?moveToViewport=-4434,-2361,10083,4450&embedId=154317880712"
        target="_blank"
        class="inline-block bg-cyan-700 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-900 transition"
      >
        🔗 View Miro Flowchart
      </a>
    </div>
  </div>
`,
    date: "2025-05-09 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr13.jpg'
  },
  {
    id: 18,
    title: "UWB Testing and BLE Integration",
    subtitle: "Weekly Report 14",
    fullText: `
    <div>
        <ul class="list-disc list-inside space-y-2">
        <li><strong>UWB boards received:</strong> The <strong>Ultra-Wideband (UWB)</strong> boards arrived, enabling us to begin testing with USB-connected boards.</li>
        <li><strong>Distance testing:</strong> A stable connection was established between two UWB boards, and <strong>distance data</strong> was successfully obtained via USB.</li>
        <li><strong>BLE setup:</strong> We also established a <strong>Bluetooth Low Energy (BLE)</strong> connection with the boards, preparing for dual communication.</li>
        <li><strong>Integration challenge:</strong> <strong>Simultaneous USB and BLE</strong> operation was not yet functional by the end of the week, so testing will continue to resolve the conflict.</li>
        </ul>
    </div>
`,
    date: "2025-05-16 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr14.jpg'
  },
  {
    id: 19,
    title: "Planning Next Prototype Milestones",
    subtitle: "Weekly Report 15",
    fullText: `
        <div>
        <ul class="list-disc list-inside space-y-2 mb-8">
            <li><strong>Supervisor meeting:</strong> We met with the supervisors to evaluate the <strong>prototype’s feasibility</strong> based on progress made so far.</li>
            <li><strong>Next steps defined:</strong> The team outlined the upcoming development goals, including the <strong>user positioning and location system</strong> and its integration into the mobile app.</li>
            <li><strong>Web app improvements:</strong> Additional updates were planned to enhance the web platform supporting the project.</li>
            <li><strong>Communication material:</strong> We began preparing promotional materials such as a <strong>video</strong> and a <strong>poster</strong> for presentation at <strong>EletroDay</strong>.</li>
        </ul>

        <!-- Two-column layout -->
        <div class="flex flex-col lg:flex-row gap-6 items-start">
        <!-- Texto com largura reduzida -->
        <div class="lg:w-2/5 bg-cyan-100 border-l-4 border-cyan-600 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-bold text-cyan-800 mb-4">📌 Solution Overview</h3>
            <p class="text-gray-800 mb-4">
            UWB uses extremely short and wide-band radio pulses, allowing for highly accurate <strong>time-of-flight measurements</strong> between devices. This enables the calculation of distances to fixed points within the supermarket.
            </p>
            <p class="text-gray-800 mb-4">
            With <strong>two distance measurements</strong> between a moving point and fixed anchors, we can perform <strong>trilateration</strong> to estimate the user's position. In cases of ambiguity, the correct position is determined based on the <strong>physical boundaries</strong> of the map.
            </p>
            <p class="text-gray-800">
            Once the location is known, we developed a <strong>Python algorithm</strong> that calculates the <strong>optimal route</strong> to visit a list of products in the space, while respecting obstacles (e.g., shelves) and non-traversable zones. The algorithm uses a method to determine the <strong>shortest path</strong> between points, taking into account the actual movement cost and an estimate of the remaining cost to the destination—thus ensuring <strong>efficient navigation</strong> through the space.
            </p>
        </div>

        <!-- Vídeo mais largo -->
        <div class="lg:w-3/5 w-full">
            <video controls class="w-full rounded shadow-lg">
            <source src="/images/video prototipo.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>
        </div>
        </div>
        `,

    date: "2025-05-23 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr15.jpg'
  },
  {
    id: 20,
    title: "Upgrades to Sensors and Web App UI",
    subtitle: "Weekly Report 16",
    fullText: "Some upgrades were made, particularly regarding the sensors in our prototype. Several adjustments were also made to the web app, especially in terms of design.",
    date: "2025-05-30 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr16.jpg'
  },
  {
    id: 21,
    title: "Finalizing Localization & Filming Presentation Video",
    subtitle: "Weekly Report 17",
    fullText: `
        <div class="flex flex-col lg:flex-row gap-6 items-start">
        <!-- Texto à esquerda -->
        <div class="lg:w-1/2 text-gray-800">
            <p>
            The team had a meeting with their supervisor, Professor João Marafuz Gaspar, during which they planned the localization part of the algorithm, which had some errors, and discussed the necessary support materials to demonstrate the prototype at Eletroday.
            </p>
            <p class="mt-4">
            The project's partners were also contacted to invite them to attend the presentation day. Finally, we carried out the filming for the development of the final presentation video of the prototype.
            </p>
        </div>

        <!-- Vídeo à direita -->
        <div class="lg:w-2/5 w-full">
            <video controls class="w-full rounded shadow-lg">
            <source src="/images/v4.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>
        </div>
        `,
    date: "2025-06-06 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr17.jpg'
  },
  {
    id: 22,
    title: "Prototype Testing and Performance Evaluation",
    subtitle: "Weekly Report 18",
    fullText: `
        <div>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Advisor meeting:</strong> We held a meeting with the team’s advisor to discuss the <strong>next development steps</strong> and conduct a brief evaluation of the <strong>materials and requirements list</strong>.</li>
            <li><strong>Pitch deck development:</strong> The team began creating the <strong>project’s pitch deck</strong>, serving as an improved version of the initial proposal submitted during the early weeks.</li>
            <li><strong>Updated content:</strong> The pitch deck includes an <strong>overview of the project’s state, progress made so far</strong>, <strong>challenges faced</strong>, <strong>contributions from each team member</strong>, and an <strong>updated task schedule</strong>.</li>
            <li><strong>Prototype testing:</strong> We conducted <strong>lab tests</strong> to evaluate the <strong>UWB localization accuracy</strong>, confirming an average error of less than 15 cm. We also tested the system in a real supermarket layout, validating the <strong>navigation algorithm's ability</strong> to guide users through the product list.</li>
            <li><strong>Validation metrics:</strong> We measured the <strong>success rate of navigation</strong>, the <strong>users’ ability to complete tasks independently</strong>, and ran a <strong>satisfaction survey</strong> with target users to assess usability. These metrics helped us fine-tune the localization and guidance system.</li>
            <li><strong>Prototype hardware:</strong> The <strong>DWM3001CDK</strong> was our choice because it includes several features that made the project easier and more versatile. It offers <strong>±10 cm positioning accuracy</strong>, includes a <strong>USB connection</strong> that allows power and configuration directly from a PC, and integrates its own <strong>microcontroller</strong>, eliminating the need for additional hardware for processing.</li>
        </ul>
        </div>
        <div class="pt-6 flex justify-center">
        <img src="/images/mt1.jpg" alt="Metrics & Testing" class="max-w-xs w-full rounded shadow-md" />
        </div>

        `,
    date: "2025-06-13",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/w18.jpg'


  },
  {
    id: 23,
    title: "Wrapping Up Communication Materials",
    subtitle: "Weekly Report 19",
    fullText: "Last and this week,  the team created and submitted the communication materials that had been developed the previous week, and there were no further advancements on the prototype, as it was the week dedicated to final exam preparation.",
    date: "2025-06-20 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr19.jpg'
  },
  {
    id: 24,
    title: "Exam Week",
    subtitle: "Weekly Report 20",
    fullText: "This week, the project was on standby as it was exam week for all team members.",
    date: "2025-06-27 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr9.jpg'
  },
  {
    id: 25,
    title: "Final Preparations for Eletroday",
    subtitle: "Weekly Report 21",
    fullText: "Last week the team was working on developing the flyers about the project to distribute to the public at Eletroday. They were also putting the final touches on the web app. Lastly, they were organizing all the necessary materials to present and promote the project at Eletroday.",
    date: "2025-07-04 ",
    type: 'report',
    image: '/joao.simoes/NAVGUIDE/images/wr25.jpg'
  },

]);