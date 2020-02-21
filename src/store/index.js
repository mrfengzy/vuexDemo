import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    inputValue:'aaa',
    nextId:4,
    type:'all'
  },
  mutations: {
    saveList(state,step){
      state.list = step
    },
    setInputValue(state,step){
      state.inputValue = step
    },
    addItem(state){
      const obj = {
        id: state.nextId,
        title: state.inputValue,
        done:false
      }
      state.list.push(obj)
      state.nextId ++
    },
    removeItem(state,id) {
      const i = state.list.findIndex(x => x.id === id)
      if(i !== -1){
        state.list.splice(i,1)
      }
    },
    changeStatus(state,params){
      const i = state.list.findIndex(x => x.id === params.id)
      if(i !== -1){
        state.list[i].done = params
      }
    },
    clearFinish(state,type){
      if(type == 'all'){
        state.list = state.lit
      }else if(type =='done'){
        state.list = state.list.filter(x => x.done === true)
      }else{
        state.list = state.list.filter(x => x.done === false)
      }
     
    },
    saveKey(state,step){
      state.type = step
    }
  },
  actions: {
   async getList(context){
     const {data:res} = await axios.get('/list.json')
     if(res){
       console.log(res)
       context.commit('saveList',res)
     }
   }
  },
  modules: {
    
  },
  getters:{
    getDoneNum(state){
     return state.list.filter(x => x.done === false).length
    },
    getList(state) {
      console.log(state.type)
      if(state.type === 'all'){
        return state.list
      } else if (state.type === 'unDone'){
        return state.list.filter(x => x.done === true)
      }else{
        return state.list.filter(x => x.done === false)
      }
    }
  }
}) 
