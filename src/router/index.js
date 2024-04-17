import { createWebHistory , createRouter } from 'vue-router';
import AppComponent from '../App.vue';
import Register from '@/views/register.vue';
import Home from '@/views/home.vue';
import PageNotFound from '@/components/component/not-found.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
            title: "الرئيسية",
            requiresAuth: false,
     },
  },
  {
    path: '/register',
    name: "register",
    component: Register,
    meta: {
            title: "التسجيل",
            requiresAuth: false,
        },
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? "الرئيسية";
  next();
});

export default router;