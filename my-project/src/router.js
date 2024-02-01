import { createRouter, createWebHistory } from "vue-router";
import EnterButton from "./components/EnterButton.vue";
import Weather from "./components/Weather.vue";

const routes = [
  { path: "/", component: EnterButton },
  { path: "/weather", component: Weather },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
