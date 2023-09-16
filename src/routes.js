import Home from "./pages/Home.vue";
import Covid19 from "./pages/Covid19.vue";
import Subscribed from "./pages/Subscribed.vue";
import About from "./pages/About.vue";

import { createRouter, createWebHistory } from "vue-router";

export default {
  router: createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/covid19",
        component: Covid19,
      },
      {
        path: "/email-subscribed-successfully",
        component: Subscribed,
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      // return desired position
      // always scroll to top
      return { top: 0 };
    },
  }),
};
