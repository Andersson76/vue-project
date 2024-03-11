import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Weather from "./views/Weather.vue";
import AudioPlayerPage from "./views/AudioPlayerPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/weather", component: Weather },
  { path: "/weather/:player", component: AudioPlayerPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
