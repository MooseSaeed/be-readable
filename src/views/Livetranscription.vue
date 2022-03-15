<template>
  <div class="flex flex-col mt-10 container">
    <h1 class="text-white text-center text-xl">Live Transcription</h1>
    <Recorder />
  </div>
</template>

<script>
import Recorder from "../components/Recorder.vue";
export default {
  name: "Livetranscription",
  components: { Recorder },
  setup() {
    const startTranscript = () => {
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

          document.querySelector("#status").textContent = "Connected";

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
      startTranscript,
    };
  },
};
</script>
