<template>
  <tapir-widget class="p-8 bg-purple-500/10 text-white" :time="10" />
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
