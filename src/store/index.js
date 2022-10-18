import { createStore } from "vuex";

// Store modules
import backend from "ren-app-vue/src/store/backend";

// Export index.js store as object for testing purposes
export const index = {
  state: {},
  modules: {
    backend,
  },
  getters: {},
  mutations: {},
  actions: {},
};

const store = createStore(index);
export default store;
