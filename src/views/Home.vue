<template>
  <div class="flex flex-row h-full justify-center items-center">
    <div>
      <img
        class="animate__animated animate__bounce animate__slower animate__infinite"
        src="../assets/bereadable.png"
        alt=""
      />
    </div>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-2s animate__slower animate__repeat-2"
    >
      R
    </p>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-3s animate__slower animate__repeat-2"
    >
      E
    </p>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-4s animate__slower animate__repeat-2"
    >
      A
    </p>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-5s animate__slower animate__repeat-2"
    >
      D
    </p>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-5s animate__slower animate__repeat-2"
    >
      A
    </p>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-4s animate__slower animate__repeat-2"
    >
      B
    </p>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-3s animate__slower animate__repeat-2"
    >
      L
    </p>
    <p
      class="text-9xl text-white ml-2 animate__animated animate__swing animate__delay-2s animate__slower animate__repeat-2"
    >
      E
    </p>
  </div>
</template>

<script>
import "animate.css";
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
