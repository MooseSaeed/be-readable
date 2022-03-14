import { createRouter, createWebHistory } from "vue-router";
import Livetranscription from "../views/Livetranscription.vue";

const routes = [
  {
    path: "/livetranscription",
    name: "Livetranscription",
    component: Livetranscription,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
