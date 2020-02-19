import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(){
      this.count += 1
    },
    reduce() {
      this.count -= 1
    }
  },
  actions: {
  },
  modules: {
    
  },
  getters:{
    
  }
}) 
