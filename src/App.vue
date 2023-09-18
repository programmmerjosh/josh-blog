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
<!-- Setup email subscribed page -->
<!-- Basic styling on Contact form, including responsive typography -->
<!-- Add an About page -->
<!-- Update info section (fetch from ReactJS version) -->
<!-- refactor navigation component -->
<!-- toggle navbar classes on scroll -->
<!-- scroll to top on router-link -->
<!-- Fix contact button -->
<!-- Fix js Tooltip functionality on definitions -->
<!-- Test subscribe functionality -->
<!-- Test contact form -->
<!-- handle contact form -> prevent default -->
<!-- remove unused scripts and packages -->
<!-- fix broken broken/old links and thumbnails -->
<!-- publish vue version on think-write-grow.com -->

<!-- TODOs first steps -->
<!-- ------------------------------------------------------ -->
<!-- test think-write-grow when the vue version is live -->

<!-- TODOs next steps (less important but would be nice) -->
<!-- ------------------------------------------------------ -->
<!-- split up the blog posts section -->
<!-- Put post content into a js object (seperate file) and create component that rebuilds html content for tooltips and other other styled text -->
<!-- Create an admin page where I can easily post new blogs -> This big task will have sub-tasks -->
<!-- Add a comments section -->
<!-- Add amazon affiliate marketing ads (when I have an affilate membership) -->
<!-- Add buy-me-a-coffee -->
