<script setup>
  import TheNavigation from "../components/shared/TheNavigation.vue";
  import SignupArea from "../components/shared/SignupArea.vue";
  import TheFooter from "../components/shared/TheFooter.vue";
  import ContactForm from "../components/shared/ContactForm.vue";
  import ContactButton from "../components/shared/ContactButton.vue";
  import TheHeader from "../components/covid19/TheHeader.vue";
  import BlogPosts from "../components/covid19/BlogPosts.vue";
  import BuyCoffee from "../components/shared/BuyCoffee.vue";

  import { useHead } from "@vueuse/head";
  import head from "../head";

  // insert head data for the construction of the head tag
  useHead({
    title: head.titles.covid19,
    meta: head.metas.covid19,
    link: head.link,
    script: head.script,
  });
</script>

<template>
  <ContactButton />
  <TheNavigation
    :navigateOut="true"
    :showCovid19="false"
    :show-buy-me-a-coffee="true"
  />
  <TheHeader />
  <BlogPosts />
  <BuyCoffee />
  <SignupArea />
  <ContactForm />
  <TheFooter />
</template>
