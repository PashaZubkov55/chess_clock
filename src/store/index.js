import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gamerMin:1,
    gamerSec:10,
    gamer2Min:1,
    gamer2Sec:10
  },
  getters:{
    gamerMin(state){
      return  state.gamerMin
    },
    gamerSec(state){
      return  state.gamerSec
    },
    gamer2Min(state){
      return  state.gamer2Min
    },
    gamer2Sec(state){
      return  state.gamer2Sec
    },
  },
  mutations: {
    setGamerMin(state, payload){
        state.gamerMin = payload
    },
    setGamerSec(state, payload){
      state.gamerSec = payload
    },
    setGamer2Min(state, payload){
      state.gamer2Min = payload
    },
    setGamer2Sec(state, payload){
      state.gamer2Sec = payload
    },
  },
  actions: {
  },
 
})
