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
            <li>
              Paste a live audio stream link. For example use the below link:
            </li>
          </td>
        </tr>
        <tr>
          <li>'http://lyd.nrk.no/nrk_radio_alltid_nyheter_aac_h'</li>
        </tr>
        <tr>
          <li>Click on 'This one' button.</li>
        </tr>
        <tr>
          <li>Allow browser to use your microphone.</li>
        </tr>
        <tr>
          <li>Use a good quality microphone for the best results.</li>
        </tr>
        <tr>
          <li>
            Insure microphone is close to the speakers while stream is playing.
          </li>
        </tr></Tipscard
      >
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
                @click="insertStream"
                class="m-2 px-4 py-1 rounded-xl fill-current text-white font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate border-2 cursor-pointer"
              >
                This one
              </div>
              <input
                class="p-3 rounded-xl text-sm text-black w-fit"
                type="text"
                placeholder="Paste audio live stream link here..."
              />
            </div>
            <figure>
              <audio
                v-show="insertedStream"
                controls
                :src="insertedStream"
                type="audio/mpeg"
                class="mx-auto w-60"
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </div>
          <p class="text-sm text-red-500">{{ this.errorMsg }}</p>
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
import { ref } from "vue";
import Recorder from "../components/Recorder.vue";
import Tipscard from "../components/Tipscard.vue";

export default {
  name: "Livestream",
  components: { Recorder, Tipscard },
  data() {
    return {
      errorMsg: null,
    };
  },

  setup() {
    const insertedStream = ref(null);
    const errorMsg = ref(null);

    const insertStream = () => {
      const input = document.querySelector("input").value;

      insertedStream.value = input;

      if (!document.querySelector("input").value) {
        errorMsg.value = ref("Please insert a valid audio stream link!");
      } else {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          const mediaRecorder = new MediaRecorder(stream, {
            mimeType: "audio/webm",
          });

          const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
            "token",
            "3a4223f5d972ea4cef3cd118b7d94751b0dd7a93",
          ]);

          socket.onopen = () => {
            mediaRecorder.addEventListener("dataavailable", (event) => {
              socket.send(event.data);
            });

            mediaRecorder.start(250);
          };

          socket.onmessage = (message) => {
            const received = JSON.parse(message.data);
            const transcript = received.channel.alternatives[0].transcript;
            if (transcript && received.is_final) {
              document.querySelector("#transcript").textContent +=
                transcript + " ";
            }
          };
        });
      }
    };

    return {
      insertStream,
      insertedStream,
      errorMsg,
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
