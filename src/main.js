import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import HeaderApp from "@/components/layouts/header.vue";
import FooterApp from "@/components/layouts/footer.vue";
import ButtonApp from "@/components/component/button.vue";
import router from './router';

const pinia = createPinia();

const app = createApp(App);
app.component("header-app", HeaderApp);
app.component("button-app", ButtonApp);
app.component("footer-app", FooterApp);
app.use(pinia);
app.use(router);
app.mount("#app");
