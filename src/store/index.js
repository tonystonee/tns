import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: "",
    endpoint: 'http://localhost:8888',
    refresh_token: "",
  },
  getters: {
    access_token(state) {
      return state.access_token;
    },
    endpoint(state) {
      return state.endpoint;
    },
    refresh_token(state) {
      return state.refresh_token;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
