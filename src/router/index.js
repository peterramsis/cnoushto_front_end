import { createMemoryHistory, createRouter } from 'vue-router';
import AppComponent from '../App.vue';
import Register from '@/views/register.vue';
import Home from '@/views/home.vue';
import PageNotFound from '@/components/component/not-found.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/register', name: "register", component: Register },
  { path: "/:pathMatch(.*)*", component: PageNotFound }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;