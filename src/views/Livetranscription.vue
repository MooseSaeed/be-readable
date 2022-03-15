<template>
  <h1 class="text-white text-center text-xl">Live Transcription</h1>
  <div class="text-center font-sans rounded-lg gap-5 p-3 flex flex-col">
    <div>
      <Recorder />
    </div>
    <div class="flex-1">
      <textarea
        class="border border-gray-400 p-2 w-full"
        name="transcript"
        id="transcript"
        placeholder="Your transcript will appear here while recording"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  </div>
</template>

<script>
import Recorder from "../components/Recorder.vue";

export default {
  name: "Livetranscription",
  components: { Recorder },
  setup() {
    return {};
  },
};
</script>
