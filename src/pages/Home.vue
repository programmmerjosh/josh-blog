<script setup>
  import TheNavigation from "../components/shared/TheNavigation.vue";
  import SignupArea from "../components/shared/SignupArea.vue";
  import TheFooter from "../components/shared/TheFooter.vue";
  import ContactForm from "../components/shared/ContactForm.vue";
  import ContactButton from "../components/shared/ContactButton.vue";
  import TheHeader from "../components/home/TheHeader.vue";
  import PageInformation from "../components/home/PageInformation.vue";
  import BlogPosts from "../components/home/BlogPosts.vue";
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
