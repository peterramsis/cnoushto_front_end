import { createApp } from "vue";
import "@/assets/scss/global.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import HeaderApp from "@/components/layouts/header.vue";
import FooterApp from "@/components/layouts/footer.vue";
import ButtonApp from "@/components/component/button.vue";
import SliderApp from "@/components/component/slider.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import router from "./router";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.component("header-app", HeaderApp);
app.component("button-app", ButtonApp);
app.component("footer-app", FooterApp);
app.component("slider-app", SliderApp);
app.component("Bootstrap5Pagination", Bootstrap5Pagination);

app.use(router);
app.use(LoadingPlugin);
app.mount("#app");
