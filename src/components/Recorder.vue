<template>
  <tapir-widget class="bg-purple-500/10 text-white" :time="2" />
</template>

<script>
import TapirWidget from "./audiorecorder/TapirWidget.vue";
import "vue-audio-tapir/dist/vue-audio-tapir.css";

export default {
  name: "App",
  components: {
    TapirWidget,
  },
};
</script>
