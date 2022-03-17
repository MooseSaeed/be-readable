<template>
  <div class="flex flex-row h-full justify-center items-center">
    <div><img src="../assets/bereadable.png" alt="" /></div>
    <p class="text-9xl text-white ml-2">R</p>
    <p class="text-9xl text-white ml-2">E</p>
    <p class="text-9xl text-white ml-2">A</p>
    <p class="text-9xl text-white ml-2">D</p>
    <p class="text-9xl text-white ml-2">A</p>
    <p class="text-9xl text-white ml-2">B</p>
    <p class="text-9xl text-white ml-2">L</p>
    <p class="text-9xl text-white ml-2">E</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
