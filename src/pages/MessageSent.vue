<script setup>
  import TheNavigation from "../components/shared/TheNavigation.vue";
  import MessageUser from "../components/shared/MessageUser.vue";
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
  <TheNavigation
    :navigateOut="true"
    :showAbout="false"
    :showSubscribe="false"
    :showCovid19="false"
  />
  <MessageUser>
    Thank you for your message. It has been sent successfully.
  </MessageUser>
  <TheFooter />
</template>
