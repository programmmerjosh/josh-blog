<script setup>
  import { useHead } from "@vueuse/head";
  import head from "./head";
  import body from "./body";

  // insert head data for the construction of the head tag
  useHead({
    title: head.titles.home,
    meta: head.metas.home,
    link: head.link,
    script: head.script,
  });

  body.appendScriptsToBody();
</script>

<template>
  <router-view></router-view>
</template>

<!-- DONEs -->
<!-- ------------------------------------------------------ -->
<!-- Footer Copyright year -< dynamic -->
<!-- Fix routes/navigation (e.g link to Covid-19 page) -->
<!-- Split Covid19 html into components and assign components to Covid19 page -->

<!-- TODOs first steps -->
<!-- ------------------------------------------------------ -->
<!-- Navbar JS scroll effect on background color -->
<!-- Update info section (fetch from ReactJS version) -->
<!-- Fix js Tooltip functionality on definitions -->
<!-- Test subscribe functionality -->
<!-- Test contact form -->
<!-- Styling on Contact form -->

<!-- TODOs next steps (less important but would be nice) -->
<!-- ------------------------------------------------------ -->
<!-- Create an admin page where I can easily post new blogs -> This big task will have sub-tasks -->
<!-- Add a comments section -->
<!-- Add amazon affiliate marketing ads (when I have an affilate membership) -->
<!-- Add buy-me-a-coffee -->
