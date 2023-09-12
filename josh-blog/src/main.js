import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Covid19 from "./pages/Covid19.vue";
import Subscribed from "./pages/Subscribed.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: Home,
    },
    {
      path: "/covid19",
      component: Covid19,
    },
    {
      path: "/subscribed",
      component: Subscribed,
    },
  ],
});
const head = createHead();
const app = createApp(App);

app.use(head).use(router).mount("#app");
