<template>
  <div>
    <lottie-animation
      path="roppongivueanime.json"
      :loop="false"
      :height="null"
      :width="null"
      class="cover"
      @AnimControl="setAnimController"
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
  methods: {
    setAnimController(anim) {
      const watch = (obj, propName, fnc) => {
        Object.defineProperty(obj, propName, {
          set: newValue => fnc(newValue)
        });
      };
      watch(anim, "isPaused", flg => {
        if (flg) {
          window.location.href = "https://roppongi-vue.connpass.com/";
        }
      });
    }
  }
};
</script>
