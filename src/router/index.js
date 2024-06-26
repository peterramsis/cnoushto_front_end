import { createWebHistory, createRouter } from "vue-router";

import Register from "@/views/register.vue";
import Login from "@/views/login.vue";
import Home from "@/views/home.vue";
import Profile from "@/views/user/profile.vue";
import ShowTopic from "@/views/topic/show.vue";
import Topics from "@/views/topic/topics.vue";
import YourTopics from "@/views/topic/your_topic.vue";
import FavoriteTopic from "@/views/topic/favorite.vue";
import PageNotFound from "@/components/component/not-found.vue";
import about from "@/views/about.vue";
import { useTopicStore } from "@/stores/modules/topic";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "الرئيسية",
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "التسجيل",
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "تسجيل الدخول",
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: "الملف الشخصى",
      requiresAuth: true,
    },
  },
  {
    path: "/topic/:id/:name",
    name: "topic",
    component: ShowTopic,
    meta: {
      requiresAuth: true,
      title: "topic",
    },
  },

  {
    path: "/topics/:id/:name",
    name: "topics",
    component: Topics,
    meta: {
      requiresAuth: true,
      title: "category",
    },
  },
  {
    path: "/your_topics",
    name: "your_topics",
    component: YourTopics,
    meta: {
      requiresAuth: true,
      title: "مواضعيك",
    },
  },
  {
    path: "/about",
    name: "about",
    component: about,
    meta: {
      requiresAuth: true,
      title: "عن الموقع",
    },
  },

  {
    path: "/favorites",
    name: "favorites",
    component: FavoriteTopic,
    meta: {
      requiresAuth: true,
      title: "المواضيع المفضلة",
    },
  },

  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const topicStore = useTopicStore();
  // document.title = to.meta.title ?? "الرئيسية";

  if (to.meta.title == "topic") {
    document.title = to.params.name;
  } else if (to.meta.title == "category") {
    document.title = to.params.name;
  } else {
    document.title = to.meta.title;
  }

  const token = localStorage.getItem("token");
  const isAuthenticated = token !== null && token !== "";

  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next("/login");
    }
  } else {
    // Non-protected route, allow access
    if (isAuthenticated && to.path === "/login") {
      // If the user is already authenticated and tries to access the login page, redirect to home
      next("/");
    } else {
      next();
    }
  }
});

export default router;
