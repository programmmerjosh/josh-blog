<script setup>
  import TheNavigation from "../components/subscribed/TheNavigation.vue";
  import ThankYou from "../components/subscribed/ThankYou.vue";
  import TheFooter from "../components/shared/TheFooter.vue";

  import { useHead } from "@vueuse/head";
  import head from "../head";

  // insert head data for the construction of the head tag
  useHead({
    title: head.titles.thanks,
    meta: head.metas.thanks,
    link: head.link,
    script: head.script,
  });
</script>

<template>
  <TheNavigation />
  <ThankYou />
  <TheFooter />
</template>
