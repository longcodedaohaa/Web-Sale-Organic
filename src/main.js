import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstap from "bootstrap/dist/js/bootstrap.bundle.js";

const app = createApp(App);

app.use(router);
app.use(bootstap);
app.mount("#app");
