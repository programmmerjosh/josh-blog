import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css";
import "./assets/motivation.min.css";

import App from "./App.vue";
import Routes from "./routes";

const head = createHead();
const app = createApp(App);

app.use(head).use(Routes.router).mount("#app");
