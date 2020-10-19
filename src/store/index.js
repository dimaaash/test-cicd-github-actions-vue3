import { createStore } from "vuex";

export default createStore({
  state: {
    woot: {
      isOpened: false
    }
  },
  mutations: {
    TOGGLE_OPENED(state) {
      state.woot.isOpened = !state.woot.isOpened;
    }
  },
  actions: {},
  modules: {}
});
