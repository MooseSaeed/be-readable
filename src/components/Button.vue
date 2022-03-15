<template>
  <button
    class="font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 text-white rounded-full py-2 px-8 text-xs"
  >
    <slot />
  </button>
</template>

<script>
export default {};
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
