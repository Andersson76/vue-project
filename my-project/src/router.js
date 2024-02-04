import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Weather from "./components/Weather.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/weather", component: Weather },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
