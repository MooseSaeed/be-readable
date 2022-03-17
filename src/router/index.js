import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Livetranscription from "../views/Livetranscription.vue";
import Livestream from "../views/Livestream.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      enterClass: "animate__animated animate__slideInDown",
      leaveClass: "animate__animated animate__slideOutUp",
    },
  },
  {
    path: "/livetranscription",
    name: "Livetranscription",
    component: Livetranscription,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/livestream",
    name: "Livestream",
    component: Livestream,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
