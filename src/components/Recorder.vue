<template>
  <tapir-widget class="bg-gray-100" :time="2" />
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
