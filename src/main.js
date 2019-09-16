import Vue from "vue";
import LottieAnimation from "./libs/lottie-vuejs-master"; // import lottie-vuejs

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(LottieAnimation); // add lottie-animation to your global scope

new Vue({
  render: h => h(App)
}).$mount("#app");
