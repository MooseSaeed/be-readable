<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="cardStyle">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ["dataImage"],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`,
      };
    },
  },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 100);
    },
  },
};
</script>

<style>
@media screen and (max-width: 1024px) {
  .card {
    transform: none !important;
  }
}

.card {
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-wrap {
  transform: perspective(200rem);
  transform-style: preserve-3d;
}
.card-wrap:hover .card-info {
  transform: translateY(0);
}

.card-wrap:hover .card-info,
.card-wrap:hover .card-info p {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info:after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  transform: translateY(0);
}

.card-wrap:hover .card {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-box-shadow: -7px -5px 15px 5px #85e7ff, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px;
  box-shadow: -7px -5px 15px 5px #85e7ff, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px;
  border-radius: 0.75rem;
}
</style>
