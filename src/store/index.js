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
  mutations: {
    setAccessToken (state, token) {
      state.access_token = token;
    },
    setRefreshToken (state, token) {
      state.refresh_token = token;
    }
  },
  actions: {
    setAccessToken (context, token) {
      context.commit('setAccessToken', token);
    },
    setRefreshToken (context, token) {
      context.commit('setRefreshToken', token);
    }
  },
  modules: {}
});
