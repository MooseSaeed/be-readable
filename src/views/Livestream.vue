<template>
  <h1
    class="col-span-3 my-5 mb-10 font-bold leading-tight text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"
  >
    Live Stream
  </h1>
  <div class="grid lg:grid-cols-2 flex-col">
    <aside class="max-w-3xl justify-self-center self-center">
      <Tipscard>
        <tr>
          <td>
            <li>Connect microphone to your device.</li>
          </td>
        </tr>
        <tr></tr
      ></Tipscard>
    </aside>
    <div
      class="lg:mr-10 lg:my-0 w-full lg:w-auto my-10 max-w-xl font-sans rounded-lg gap-5 flex flex-col lg:justify-self-auto justify-self-center mx xs:mx-5 lg:mx-0"
    >
      <div class="p-3 sm:mx-10 mx-2 lg:mx-0 bg-purple-500/10 text-white">
        <div class="flex flex-col items-center">
          <h2 class="font-bold mt-2 text-2xl">Live Stream Audio</h2>
          <div class="mt-2">
            <div class="flex flex-row items-center justify-center">
              <div
                @click="theWholeThing"
                class="m-2 px-4 py-1 rounded-xl fill-current text-white font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate border-2 cursor-pointer"
              >
                This one
              </div>
              <input
                class="p-3 rounded-xl text-sm text-black w-fit"
                type="text"
                placeholder="Paste your live stream link here..."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 mx-2 xs:mx-10 lg:mx-0">
        <textarea
          class="border border-gray-400 p-2 w-full rounded-xl h-32 xs:h-auto"
          name="transcript"
          id="transcript"
          placeholder="Your transcript will appear here while recording"
          cols="25"
          rows="8"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Recorder from "../components/Recorder.vue";
import Tipscard from "../components/Tipscard.vue";

export default {
  name: "Livestream",
  components: { Recorder, Tipscard },

  // Open connection to Deepgram

  setup() {
    const theWholeThing = () => {
      const val = document.querySelector("input").value;
    };

    return {
      theWholeThing,
    };
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
