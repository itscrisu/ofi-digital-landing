import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VideoBackground from "vue-responsive-video-background-player";
import "./assets/css/main.css";

Vue.component("video-background", VideoBackground);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
