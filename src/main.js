import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify/lib";
import App from "ren-app-vue/src/components/core/App";
import createStore from "ren-app-vue/src/store/index";

Vue.config.productionTip = false;

Vue.use(Vuex);

// Vuetify Config
Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    dark: true,
  }
});

// Initialize Vuex Store
const store = createStore();

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
