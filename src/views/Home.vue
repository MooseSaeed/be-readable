<template>
  <div class="flex flex-row h-full justify-center items-center mx-10">
    <div>
      <img
        class="w-20 sm:w-28 lg:w-40 animate__animated animate__bounce animate__slower animate__repeat-2"
        src="../assets/bereadable.png"
        alt=""
      />
    </div>
    <div class="flex flex-row text-4xl sm:text-6xl lg:text-9xl ml-2">
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__slow animate__repeat-1"
      >
        R
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__delay-1s animate__slow animate__repeat-1"
      >
        E
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__delay-2s animate__slow animate__repeat-1"
      >
        A
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__delay-3s animate__slow animate__repeat-1"
      >
        D
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__delay-3s animate__slow animate__repeat-1"
      >
        A
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__delay-2s animate__slow animate__repeat-1"
      >
        B
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__delay-1s animate__slow animate__repeat-1"
      >
        L
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__swing animate__slow animate__repeat-1"
      >
        E
      </p>
    </div>
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
