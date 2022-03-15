import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./tailwind.css";
import AudioVisual from "vue-audio-visual";

createApp(App).use(router).use(AudioVisual).mount("#app");
