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
    },
    add2(state,step){
      state.count += step
    }
  },
  actions: {
    addAsync(context,step){
      setTimeout(()=>{
        context.commit('add', step)
      },1000)
    },
    addAsync2(context,step){
      setTimeout(()=>{
        context.commit('add2',step)
      },1000)
    }
  },
  modules: {
    
  },
  getters:{
    showNum(state){
      return `当前最新的数量是${state.count}`
    }
  }
}) 
