import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        looperState: false, //The status of the looper (PLAY / STOP)
        activeSounds:[], //Array that will store all the active/activated sounds 
        record: false,//Status of recrod (On/Off)
        recordStartTime: 0, //Store the starting time of the record
        recordSound:[] //Array of objects that will store(track) all the active/activated sounds to be played
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

            //If the user select record
            if(state.record){

                //if we don't have any sound in the recordSound array
                //Then push the new record with startingPoint 0 
                if(state.recordSound.length === 0){
                    state.recordSound.push(
                        {id: data.id, 
                        startTime: Date.now(), 
                        startingPoint: 0,
                        delay: Date.now() - state.recordStartTime,
                        endTime: 0, 
                        totalTime: 0, 
                        index: data.id + "id"}
                        )
                }else{
                    //if we have sound in the recordSound array
                    //Then push the new (object) record with and calcultate the new startingPoint
                    //based on the startingPoint of the first sound in the array 
                    //The startingPoint divided by 8 in order to set the starting point between 0-8 sec (Length of each sound)
                    state.recordSound.push(
                        {id: data.id, 
                        startTime: Date.now(), 
                        startingPoint: ((Date.now() - state.recordSound[0].startTime)/1000)/8,
                        delay: Date.now() - state.recordStartTime,
                        endTime: 0, 
                        totalTime: 0, 
                        index: data.id + "id"}
                        )
                }
            }
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

            for(var j = state.recordSound.length-1; j >= 0 ; j--){
                //Search in the recordSound array the selected sound that we want to stop
                //and insert the end time 
                if(state.recordSound[j].id === data.id){
                    state.recordSound[j].endTime = Date.now()
                    j=0;
                }
            }
        },


        //Change the record State (Record On)(data = true)
        startRecord(state, data){
            state.record = data
            state.recordStartTime = Date.now()
        },


        //Change the record State (Record Off)(data = false)
        stopRecord(state){
            for(var j = state.recordSound.length-1; j >= 0 ; j--){
                //if sound still active and the user select to stop the record then 
                //Insert end time of the sound
                if(state.recordSound[j].endTime === 0){
                    state.recordSound[j].endTime = Date.now()
                }
                //calculate the total time of the sound to be played in the record
                state.recordSound[j].totalTime = (state.recordSound[j].endTime - state.recordSound[j].startTime)/1000
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
        },

        //Dispatching 'activeRecord' in order to active the record mode
        //if data = TRUE then 'startRecord', data = FALSE then 'stopRecord' 
        activeRecord({commit}, data){
            if(data === false){
                commit('stopRecord', data)
            }else{
                commit('startRecord', data)
            }
            

        }
    },
    getters:{
        getLooperState(state){
            return state.looperState
        },

        //Return the recordSound array to be played
        getRecordSound(state){
            return state.recordSound
        }
    }
})