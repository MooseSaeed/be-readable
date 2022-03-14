<template>
  <div class="flex flex-col mt-10 container">
    <h1 class="text-white text-center text-xl">Live Transcription</h1>
    <div @click="startRecording" class="text-white">Record</div>
  </div>
</template>

<script>
export default {
  name: "Livetranscription",
  setup() {
    const startRecording = () => {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        let mediaRecorder = new mediaRecorder(stream, {
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

        socket.onmessage = () => {
          const received = JSON.parse(message.data);
          const transcript = received.channel.alternatives[0].transcript;
          console.log(transcript);
        };
      });
    };

    return {
      startRecording,
    };
  },
};
</script>
