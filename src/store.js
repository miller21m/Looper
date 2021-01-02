import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        looperState: false
    },
    mutations:{
        changeLopperState(state, data){
            state.looperState = data
        }
    },
    actions:{
        activateLopper({commit}, status){
            console.log(status);
            commit('changeLopperState', status)
        }
    },
    getters:{
        getLooperState(state){
            return state.looperState
        }
    }
})