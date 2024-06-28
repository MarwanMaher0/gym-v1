import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "./interceptors/axios";

const app = createApp(App);

app.use(router);

app.mount("#app");
