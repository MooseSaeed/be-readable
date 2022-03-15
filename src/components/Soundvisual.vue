<template>
  <av-media
    class="self-start"
    type="frequ"
    :media="media"
    line-color="darkorange"
    :frequ-lnum="60"
  />
</template>

<script>
export default {
  name: "av-media-demo",
  data() {
    return {
      mtype: null,
      media: null,
    };
  },
  mounted() {
    const constraints = {
      audio: true,
      video: false,
    };
    navigator.mediaDevices.getUserMedia(constraints).then((media) => {
      this.media = media;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
