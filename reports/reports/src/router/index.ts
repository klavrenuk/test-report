import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import Login from '@/views/Login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
