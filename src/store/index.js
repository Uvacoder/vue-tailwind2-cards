import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({

  // state == data || need mutation to manipulate it
  state () {
    return {
      count: 0
    }
  },

  // To manipulate data
  mutations: {
    increment (state) {
      state.count++
    }
  },

  // Actions == method
  actions: {

  },

  // getters == computed
  getters: {

  }

})