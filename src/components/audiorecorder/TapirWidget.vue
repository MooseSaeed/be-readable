<template>
  <div class="flex flex-col items-center">
    <h2 class="font-bold mt-2 text-2xl">Record Audioo</h2>
    <div class="mt-2">
      <div class="text-sm">{{ instructionMessage }}</div>
      <div class="flex flex-row items-center justify-center">
        <icon-button
          class="mx-auto rounded-full h-14 w-14 fill-current text-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate cursor-pointer rounded-50 border-2 m-4 p-2"
          v-if="recording"
          name="stop"
          @click="toggleRecording"
        />
        <icon-button
          class="mx-auto rounded-full h-14 w-14 fill-current text-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate cursor-pointer rounded-50 border-2 m-4 p-2"
          v-else
          name="mic"
          @click="toggleRecording"
        />

        <Flashmessage class="bg-red-500" v-if="mediaNotSupported">
          Please insure that a microphone is connected to your device
        </Flashmessage>

        <Button v-if="!visualizeAudio" @click="toggleVisual"
          >Visualize Audio</Button
        >

        <div v-if="visualizeAudio">
          <div v-if="!mediaNotSupported" class="m-0 w-44 overflow-hidden flex">
            <Soundvisual class="self-start" />
          </div>
        </div>
      </div>
    </div>

    <div>{{ recordedTime }}</div>
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
    <Flashmessage class="bg-green-600" v-if="successMessage">{{
      successMessage
    }}</Flashmessage>
    <Flashmessage class="bg-red-500" v-if="errorMessage">{{
      errorMessage
    }}</Flashmessage>
    <figure>
      <audio
        controls
        :src="recordedAudio"
        type="audio/mpeg"
        class="mx-auto w-60"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  </div>
</template>

<script>
import IconButton from "./IconButton.vue";
import Recorder from "./lib/recorder";
import convertTimeMMSS from "./lib/utils";
import Soundvisual from "../../components/Soundvisual.vue";
import Button from "../../components/Button.vue";
import Flashmessage from "../../components/Flashmessage.vue";

const INSTRUCTION_MESSAGE = "Click on the mic icon to start recording.";
const INSTRUCTION_MESSAGE_STOP = "Click icon again to stop recording.";
const ERROR_MESSAGE =
  "Failed to use microphone. Please insure microphone connected, refresh, try again and permit the use of a microphone.";
const SUCCESS_MESSAGE = "Successfully recorded message!";
const MP3_FORMAT = "mp3";

export default {
  name: "TapirWidget",
  props: {
    // in minutes
    time: { type: Number, default: 1 },
    bitRate: { type: Number, default: 128 },
    sampleRate: { type: Number, default: 44100 },

    // callback functions
    afterRecording: { type: Function },
    successfulUpload: { type: Function },
    failedUpload: { type: Function },
  },
  data() {
    return {
      recording: false,
      recordedAudio: null,
      recordedBlob: null,
      recorder: null,
      successMessage: null,
      errorMessage: null,
      instructionMessage: INSTRUCTION_MESSAGE,
      mediaNotSupported: false,
      visualizeAudio: false,
      lang: "",
    };
  },

  computed: {
    recordedTime() {
      if (this.time && this.recorder?.duration >= this.time * 60) {
        this.toggleRecording();
      }
      return convertTimeMMSS(this.recorder?.duration);
    },
  },
  components: {
    IconButton,
    Soundvisual,
    Button,
    Flashmessage,
  },

  mounted() {
    if (!navigator.mediaDevices) {
      this.mediaNotSupported = true;
    }
  },

  beforeUnmount() {
    if (this.recording) {
      this.stopRecorder();
    }
  },
  methods: {
    toggleRecording() {
      this.recording = !this.recording;
      if (this.recording) {
        this.initRecorder();
      } else {
        this.stopRecording();
      }
    },

    toggleVisual() {
      if (!this.errorMessage) {
        this.visualizeAudio = !this.visualizeAudio;
      } else {
        this.errorMessage = ERROR_MESSAGE;
      }
    },

    initRecorder() {
      this.recorder = new Recorder({
        micFailed: this.micFailed,
        bitRate: this.bitRate,
        sampleRate: this.sampleRate,
        format: MP3_FORMAT,
      });
      this.startTranscript();
      this.recorder.start();

      this.successMessage = null;
      this.errorMessage = null;
      this.instructionMessage = INSTRUCTION_MESSAGE_STOP;
    },

    startTranscript() {
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
    },

    stopRecording() {
      this.recorder.stop();
      const recordList = this.recorder.recordList();
      this.recordedAudio = recordList[0].url;
      this.recordedBlob = recordList[0].blob;
      if (this.recordedAudio) {
        this.successMessage = SUCCESS_MESSAGE;
        this.instructionMessage = null;
      }
      if (this.afterRecording) {
        this.afterRecording();
      }
      this.visualizeAudio = false;
    },

    micFailed() {
      this.recording = false;
      this.instructionMessage = INSTRUCTION_MESSAGE;
      this.errorMessage = ERROR_MESSAGE;
    },
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
