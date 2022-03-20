<template>
  <div
    class="lg:grid lg:grid-cols-3 flex flex-col justify-center items-center sm:mb-10"
  >
    <h1
      class="col-span-3 my-5 mb-10 font-bold leading-tight text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"
    >
      Live Stream
    </h1>

    <aside class="col-span-2 max-w-3xl justify-self-center self-center mx-24">
      <Tipscard>
        <tr>
          <td>
            <li>
              Paste a live audio stream link. For example use the below link:
            </li>
          </td>
        </tr>
        <tr>
          <p class="bg-gray-800/50 text-center inline-block text-xs">
            http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk
          </p>
        </tr>
        <tr>
          <li>Select the correct language or accent.</li>
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
        </tr>
      </Tipscard>
    </aside>
    <div
      class="lg:my-0 mt-10 max-w-xl font-sans rounded-lg gap-5 flex flex-col justify-center items-center"
    >
      <div class="p-3 sm:mx-10 mx-2 lg:mx-0 bg-purple-500/10 text-white">
        <div class="flex flex-col min-h-48 justify-center">
          <h2 class="font-bold mt-2 text-2xl text-center">Live Audio Stream</h2>
          <div class="mt-2">
            <div class="flex flex-col items-center justify-between">
              <div
                @click="insertStream"
                class="m-2 px-4 py-1 rounded-xl fill-current text-white font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate border-2 cursor-pointer"
              >
                This one
              </div>
              <select
                class="rounded-xl text-black m-1 p-1 border-0 shadow-none"
                name="lang"
                id="lang"
              >
                <option value="en">General English</option>
                <option value="en-US">United States - English</option>
                <option value="en-GB">United Kingdom - English</option>
                <option value="en-AU">Australia - English</option>
                <option value="en-IN">India - English</option>
                <option value="en-NZ">New Zealand - English</option>
                <option value="uk">Ukrainian</option>
                <option value="fr">French</option>
                <option value="fr-CA">Canada - French</option>
                <option value="de">German</option>
                <option value="ru">Russian</option>
                <option value="es">Spanish</option>
                <option value="es-419">Latin America - Spanish</option>
                <option value="hi">Hindi</option>
                <option value="nl">Dutch</option>
              </select>
              <input
                class="px-6 py-3 m-2 rounded-xl text-sm text-black w-full"
                type="text"
                placeholder="Paste audio stream link..."
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
          <Flashmessage class="bg-red-500" v-if="errorMessage">
            {{ this.errorMessage }}
          </Flashmessage>
          <Flashmessage class="bg-red-500" v-if="errorMsg">
            {{ this.errorMsg }}
          </Flashmessage>
        </div>
      </div>
      <div class="flex-1 mx-2 xs:mx-10 lg:mx-0">
        <textarea
          class="border border-gray-400 p-2 w-full rounded-xl h-32 xs:h-auto"
          name="transcript"
          id="transcript"
          placeholder="Your transcription will appear here while recording"
          cols="25"
          rows="8"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
const ERROR_MESSAGE =
  "Failed to use microphone. Please insure microphone connected, refresh, try again and permit the use of a microphone.";

import { ref } from "vue";
import Recorder from "../components/Recorder.vue";
import Tipscard from "../components/Tipscard.vue";
import Flashmessage from "../components/Flashmessage.vue";

export default {
  name: "Livestream",
  components: { Recorder, Tipscard, Flashmessage },

  setup() {
    const insertedStream = ref(null);
    const errorMsg = ref(null);
    const errorMessage = ref(null);

    const insertStream = () => {
      const input = document.querySelector("input").value;

      insertedStream.value = input;

      if (!document.querySelector("input").value) {
        errorMsg.value = ref("Please insert a valid audio stream link!");
      } else if (!navigator.mediaDevices.getUserMedia({ audio: true })) {
        errorMessage.value = ERROR_MESSAGE;
      }

      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: "audio/webm",
        });

        const language = document.querySelector("select").value;
        const socket = new WebSocket(
          "wss://api.deepgram.com/v1/listen?language=" + language,
          ["token", process.env.VUE_APP_DEEPGRAM_KEY]
        );

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
    };

    return {
      insertStream,
      insertedStream,
      errorMsg,
      errorMessage,
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
