<template>
  <div class="flex flex-row h-full justify-center items-center mx-10 my-52">
    <div>
      <img
        class="w-20 sm:w-28 lg:w-40 animate__animated animate__bounce animate__slower"
        src="../assets/bereadable.png"
        alt=""
      />
    </div>
    <div class="flex flex-row text-4xl sm:text-6xl lg:text-9xl ml-2">
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__faster"
      >
        R
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__delay-1s animate__faster"
      >
        E
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__delay-2s animate__faster"
      >
        A
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__delay-1s animate__faster"
      >
        D
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__delay-2s animate__faster"
      >
        A
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__delay-1 animate__faster"
      >
        B
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__delay-2s animate__faster"
      >
        L
      </p>
      <p
        class="text-white sm:ml-2 animate__animated animate__flash animate__faster"
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
:root {
  --animate-delay: 0.5s;
}
</style>
