import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        looperState: false, //The status of the looper (PLAY / STOP)
        activeSounds:[] //Array that will store all the active/activated sounds 
    },
    mutations:{
        //Change the looperState (PLAY/STOP)(data = true/false)
        changeLopperState(state, data){
            state.looperState = data
        },

        //Track the active/activated sounds in order Synchronize the 
        //sounds and insert to activeSounds array
        insertActiveSound(state, data){ 
            state.activeSounds.push(data)
        },

        //Remove the active/activated sounds that were turned off by the user
        //and remove from the activeSounds array
        removeActiveSound(state, data){
            for(var i = state.activeSounds.length-1; i >= 0 ; i--){
                //Search the selected sound and remove
                if(state.activeSounds[i] === data){
                    state.activeSounds.splice(i,1)
                }
            }
        }
    },
    actions:{
        //Dispatching 'activate Lopper' in order to PLAY/STOP the lopper receive status -> true / false
        //From the user by pressing play/stop button
        activateLopper({commit}, status){
            commit('changeLopperState', status)
        },

        //Dispatching 'insert Sound' in order to insert the selected sound into the array receiving
        //the object of the selected sound to be played
        insertSound({commit}, data){
            commit('insertActiveSound', data)
        },

        //Dispatching 'remove Sound' in order to remove the selected sound from the array receiving
        //the object of the selected sound to be remove
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