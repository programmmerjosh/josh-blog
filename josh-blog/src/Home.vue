<script setup>
  import TheNavigation from "./components/TheNavigation.vue";
  import TheHeader from "./components/TheHeader.vue";
  import ContactButton from "./components/ContactButton.vue";
  import PageInformation from "./components/PageInformation.vue";
  import BlogPosts from "./components/BlogPosts.vue";
  import SignupArea from "./components/SignupArea.vue";
  import TheFooter from "./components/TheFooter.vue";
  import ContactForm from "./components/ContactForm.vue";

  import { useHead } from "@vueuse/head";
  import head from "./head";
  import body from "./body";

  // insert head data for the construction of the head tag
  useHead({
    title: head.title,
    meta: head.meta,
    link: head.link,
    script: head.script,
  });

  body.appendScriptsToBody();
</script>

<template>
  <ContactButton />
  <TheNavigation />
  <TheHeader />
  <PageInformation />
  <BlogPosts />
  <SignupArea />
  <ContactForm />
  <TheFooter />
</template>
