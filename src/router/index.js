import { createRouter, createWebHistory } from "vue-router";
import Livetranscription from "../views/Livetranscription.vue";
import Livestream from "../views/Livestream.vue";

const routes = [
  {
    path: "/livetranscription",
    name: "Livetranscription",
    component: Livetranscription,
  },
  {
    path: "/livestream",
    name: "Livestream",
    component: Livestream,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
