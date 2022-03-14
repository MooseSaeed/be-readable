<template>
  <div class="container">
    <div class="ui" id="js-ui">
      <nav class="scene_nav">
        <ol class="scene_nav_list">
          <li
            class="scene_nav_item"
            v-for="(route, index) in maxScene"
            :key="route"
          >
            <router-link
              :to="route.routeis"
              class="scene_nav_button"
              @click="scene = index"
              :class="{ 'o-active': scene === index }"
            >
              <p>{{ route.title }}</p>
            </router-link>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scene: 0,
      maxScene: [
        {
          index: 1,
          title: "Live Transcription",
          routeis: "/livetranscription",
        },
        { index: 2, title: "Audio Converter", routeis: "/audoconverter" },
      ],
    };
  },

  mounted() {
    setTimeout(() => {
      this.scene = this.maxScene - 2;
    }, 1000);
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.scene_nav {
  position: relative;
}
.scene_nav_list {
  display: flex;
  margin: 0;
  padding: 0;
  transform: scaleY(0.6);
}
.scene_nav_item {
  display: block;
}
.scene_nav_item:nth-child(even) {
  transform: scaleY(-1);
}

.scene_nav_item:nth-child(even) p {
  transform: scaleY(-1);
}

.scene_nav_item:not(:first-child) {
  margin-left: -8px;
}
.scene_nav_button {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 50px;
  margin: 0;
  padding: 0;
  border: none;
  background: #0a7896;
  outline: none;
  cursor: pointer;
  transition: 500ms;
  -webkit-clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
  clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
}
.scene_nav_button.o-active {
  width: 12rem;
  background: #64fafa;
}
.scene_nav_button:hover {
  background: #64fafa;
}
</style>
