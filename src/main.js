import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import Routes from "./routes";

const head = createHead();
const app = createApp(App);

app.use(head).use(Routes.router).mount("#app");
