import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUser } from "@/stores/user";
import { isAuthPage } from "@/utils/auth";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RecoveryView from "@/views/RecoveryView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/recovery",
    name: "recovery",
    component: RecoveryView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("to", to);
  const userStore = useUser();

  if (isAuthPage(to.path)) {
    if (userStore.getUser) {
      next({ path: "/" });
    }
  } else {
    if (!userStore.getUser) {
      next({ path: "/login" });
    }
  }

  next();
});

export default router;
