<template>
    <div>
        <div class="singlePad">
            <div class="padTitle">{{soundTitle}}</div>
            <img :src="require('../../assets/soundIcons/' + soundimg + '.png')" alt="">
            <div>
                <div class="button"
                style="background: green;"
                @click="playAudio(); activeOn()"
                v-if="!on">
                ON
                </div>

                <div class="button"
                style="background: red;"
                @click="stopAudio(); activeOff()"
                v-if="on">
                OFF
                </div>
            </div>

            <audio loop="true" :id="soundPath">
                <source :src="require('../../assets/sounds/'+ soundPath + '.mp3')" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>

<script>
export default {
    props:['soundPath', 'soundTitle', 'soundimg'],
    data(){
        return{
            on: false
        }
    },
    methods:{
        activeOn(){
            //Change the state of the sound -> ON 
            this.on=true
            console.log('Im on ' +  this.on);
            //Check if the global state of the looper is true(active) and if the sound is ON then play the sound
            if(this.on && this.$store.getters.getLooperState){ 
                var audio = document.getElementById(this.soundPath)

                //Call dispatch 'insertSound' in order to push the new selected sound to the active sounds array
                this.$store.dispatch('insertSound', audio)
                console.log(this.$store.state.activeSounds[0].currentTime);

                //Getting the active sound in the first index of the array in order to sync the new activated sound
                audio.currentTime=this.$store.state.activeSounds[0].currentTime
                audio.play()
            } 
        },
        activeOff(){
            //Change the state of the sound false -> stop playing the selected sound 
            this.on = false 
            console.log('Im off ' + this.on);
        },
        playAudio(){
            console.log('Playing');
            var audio = document.getElementById(this.soundPath)

            //Chck if the the selected sound is ON and the looper is ON then play the selected sounds
            if(this.on && this.$store.getters.getLooperState){
                //Call dispatch 'insertSound' in order to push the new selected sound to the active sounds array
                this.$store.dispatch('insertSound', audio)

                //Getting the active sound in the first index of the array in order to sync the new activated sound
                audio.currentTime=this.$store.state.activeSounds[0].currentTime
                audio.play()  
            } 
        },
        stopAudio(){
            console.log('Stop');
            var audio = document.getElementById(this.soundPath)

            //Call dispatch 'removeSound' in order to remove the selected sound
            // we want to turn off from the active sounds array
            this.$store.dispatch('removeSound', audio)
            audio.pause()
            
        },

    },
    watch:{
        //Watching if the looper is PLAY-> true or STOP -> flase 
        '$store.state.looperState'(value){
            //If the looper is actived the user press (PLAY) then call playAudio Function
            if(value){
                this.playAudio()
            }else{
                //If the looper is turndOff the user press (STOP) then call stopAudio Function
                this.stopAudio()
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.singlePad{
    text-align: center;
    margin:0px 100px 30px 100px;
    background: turquoise;
    height: 150px;
    width: 70%;
    display: inline-block;
    border: 1px solid black;
    -moz-border-radius: 15px;
    border-radius: 15px; 
    font-family: 'Poppins';
}

.padTitle{
    margin-top: 20px;
}

.button{
    margin: 20px 2px 0px 2px;
    display: inline-block;
    width: 35%;
    border: 1px solid black;
    -moz-border-radius: 35px;
    border-radius: 35px; 
    padding: 2px 5px 2px 5px;
}
</style>