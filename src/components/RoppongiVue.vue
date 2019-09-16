<template>
  <div>
    <lottie-animation
      path="roppongivueanime.json"
      :loop="false"
      :height="null"
      :width="null"
      class="cover"
      @AnimControl="setAnimController"
      ref="lottie"
    />
  </div>
</template>

<style lang="scss" scoped>
.cover {
  object-fit: cover;
  height: 98vh;
  width: 100%;
  box-sizing: border-box;
}
</style>

<script>
export default {
  name: "RoppongiVue",
  data() {
    return {
      isFinished: false
    };
  },
  watch: {
    isFinished(_new) {
      if (_new) {
        window.location.href = "https://roppongi-vue.connpass.com/";
      }
    }
  },
  methods: {
    setAnimController(anim) {
      let animloop = () => {
        if (anim.isPaused) {
          this.isFinished = true;
          return;
        }
        window.requestAnimationFrame(animloop);
      };
      animloop();
    }
  }
};
</script>
