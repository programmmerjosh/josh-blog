import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import Home from "./Home.vue";

const head = createHead();
const app = createApp(Home);

app.use(head).mount("#home");
