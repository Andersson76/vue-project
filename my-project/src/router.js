import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Weather from "./views/Weather.vue";

const routes = [
  { component: Home, path: "/" },
  { component: Weather, path: "/weather" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
