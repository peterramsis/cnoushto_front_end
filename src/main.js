import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import HeaderApp from "@/components/layouts/header.vue";

const pinia = createPinia();

const app = createApp(App);
app.component("header-app", HeaderApp);
app.use(pinia);

app.mount("#app");
