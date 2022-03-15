<template>
  <h1
    class="my-5 font-bold leading-tight text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"
  >
    Live Transcription
  </h1>
  <div class="mx-10 grid grid-cols-2">
    <aside>
      <h1 class="text-white text-center text-xl">Tips Card</h1>
    </aside>
    <div class="text-center font-sans rounded-lg gap-5 p-3 flex flex-col">
      <div>
        <Recorder class="rounded-xl" />
      </div>
      <div class="flex-1">
        <textarea
          class="border border-gray-400 p-2 w-full rounded-xl"
          name="transcript"
          id="transcript"
          placeholder="Your transcript will appear here while recording"
          cols="30"
          rows="5"
        ></textarea>
      </div>
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

<style scoped>
.background-animate {
  background-size: 400%;
  -webkit-animation: gradColor 3s ease infinite;
  -moz-animation: gradColor 3s ease infinite;
  animation: gradColor 3s ease infinite;
}

@keyframes gradColor {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
