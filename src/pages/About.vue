<script setup>
  import TheNavigation from "../components/shared/TheNavigation.vue";
  import TheFooter from "../components/shared/TheFooter.vue";
  import AboutUs from "../components/about/AboutUs.vue";

  import { useHead } from "@vueuse/head";
  import head from "../head";

  // insert head data for the construction of the head tag
  useHead({
    title: head.titles.about,
    meta: head.metas.about,
    link: head.link,
    script: head.script,
  });
</script>

<template>
  <TheNavigation
    :navigateOut="true"
    :showAbout="false"
    :showSubscribe="false"
  />
  <AboutUs />
  <TheFooter />
</template>
