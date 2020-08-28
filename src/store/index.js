import Vue from "vue";
import Vuex from "vuex";
import * as home from "./home";
import * as host from "./host";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    host,
  },
});

export default store;
