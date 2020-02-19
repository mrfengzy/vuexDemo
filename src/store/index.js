import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state, step){
      state.count += step
    },
    reduce(state,step) {
      state.count -= step
    }
  },
  actions: {
  },
  modules: {
    
  },
  getters:{
    
  }
}) 
