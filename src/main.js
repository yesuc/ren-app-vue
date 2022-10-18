import { createApp } from "vue";
import vuetify from "ren-app-vue/src/plugins/vuetify";
import { loadFonts } from "ren-app-vue/src/plugins/webfontloader";
import App from "ren-app-vue/src/components/core/App";
import store from "ren-app-vue/src/store/index";

console.log(store)
loadFonts();

// Initialize Vue Instance
createApp(App).use(store).use(vuetify).mount("#app");