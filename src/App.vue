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

<style>
  section,
  div {
    max-width: 100%;
  }
</style>
