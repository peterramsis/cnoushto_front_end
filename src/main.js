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
import LineHead from "@/components/component/line_head.vue";
import LastFiveTopic from "@/components/component/topic/last_five_topic_category.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import router from "./router";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const pinia = createPinia();
import VueLazyLoad from "vue3-lazyload";
const app = createApp(App);
app.use(pinia);
app.component("header-app", HeaderApp);
app.component("button-app", ButtonApp);
app.component("footer-app", FooterApp);
app.component("slider-app", SliderApp);
app.component("LastFiveTopic", LastFiveTopic);
app.component("Bootstrap5Pagination", Bootstrap5Pagination);
app.component("LineHead", LineHead);

app.use(VueLazyLoad, {
  // options...
});

app.use(router);
app.use(LoadingPlugin);
app.mount("#app");
