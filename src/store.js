import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        looperState: false,
        activeSounds:[]
    },
    mutations:{
        changeLopperState(state, data){
            state.looperState = data
        },
        insertActiveSound(state, data){
            state.activeSounds.push(data)
            console.log('insertActiveSound ' + state.activeSounds);
        },
        removeActiveSound(state, data){
            for(var i = state.activeSounds.length-1; i >= 0 ; i--){
                if(state.activeSounds[i] === data){
                    state.activeSounds.splice(i,1)
                }
            }
            console.log(state.activeSounds);
        }
    },
    actions:{
        activateLopper({commit}, status){
            console.log(status);
            commit('changeLopperState', status)
        },
        insertSound({commit}, data){
            console.log(data);
            commit('insertActiveSound', data)
        },
        removeSound({commit}, data){
            commit('removeActiveSound', data)
        }
    },
    getters:{
        getLooperState(state){
            return state.looperState
        }
    }
})