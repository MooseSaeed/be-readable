<template>
  <div class="fixed bottom-0 left-0 right-0">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
}
</style>
