<template>
  <div
    class="lg:grid lg:grid-cols-3 flex flex-col justify-center items-center sm:mb-10"
  >
    <h1
      class="col-span-3 my-5 mb-10 font-bold leading-tight text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"
    >
      Live Transcription
    </h1>

    <aside class="col-span-2 max-w-3xl justify-self-center self-center mx-5">
      <Tipscard>
        <tr>
          <td>
            <li>Connect microphone to your device.</li>
          </td>
        </tr>
        <tr>
          <li>Allow the browser to use your microphone.</li>
        </tr>
        <tr>
          <li>Select the correct language or accent.</li>
        </tr>
        <tr>
          <li>Click on the mic icon to start recording.</li>
        </tr>
        <tr>
          <li>Use a good quality microphone for the best results.</li>
        </tr>
        <tr>
          <li>When you finish, press again on the stop icon.</li>
        </tr>
        <tr>
          <li>Listen to your recording through the audio player.</li>
        </tr>
        <tr>
          <li>
            Download recording by pressing on the three dots within audio
            player.
          </li>
        </tr>
      </Tipscard>
    </aside>
    <div
      class="lg:my-0 mt-10 max-w-xl font-sans rounded-lg gap-5 flex flex-col justify-center items-center"
    >
      <div>
        <Recorder class="rounded-xl" />
      </div>
      <div class="flex-1 mx-10">
        <textarea
          class="border border-gray-400 p-2 rounded-xl"
          name="transcript"
          id="transcript"
          placeholder="Your transcription will appear here while recording"
          cols="30"
          rows="6"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Recorder from "../components/Recorder.vue";
import Tipscard from "../components/Tipscard.vue";

export default {
  name: "Livetranscription",
  components: { Recorder, Tipscard },
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
