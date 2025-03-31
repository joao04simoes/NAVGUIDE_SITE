<script setup>
import Intro from "../sections/Introduction.vue";
import Description from "../sections/Description.vue";
import Countdowns from "../sections/Countdowns.vue";
import Testemonials from "../sections/Testemonials.vue";
import Wecomein from "../sections/Wecomein.vue";
import Technology from "../sections/Technology.vue";
import Beneficiaries from "../sections/Beneficiaries.vue";
import team from "../sections/team.vue";
import Partners from "../sections/Partners.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import pdf from "../sections/pdf.vue";
</script>

<template>
    <Header />
    <div class="py-2"></div>
    <Intro />
    <Description />
    <Countdowns />
    <Testemonials />
    <Wecomein />
    <Technology />
    <Beneficiaries />
    <pdf />

    <team />
    <Partners />

    <Footer />

</template>


