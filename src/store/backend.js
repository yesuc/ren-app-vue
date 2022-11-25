export default {
  state: {
    baseUri: "localhost:49160",
  },
  getters: {
    BACKEND_BASE_URI(state) {
      return state.baseUri;
    },
  },
  mutations: {
    BACKEND_BASE_URI_SET(state, value) {
      state.baseUri = value;
    },
  },
  actions: {},
};
