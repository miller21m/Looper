<template>
    <div>
        <div :class="{singlePad: true, beat: on}">
            <div class="padTitle">{{soundTitle}}</div>
            <img class="soundImg" :src="require('../../assets/soundIcons/' + soundimg + '.png')" alt="">
            <div>
                <div class="button"
                style="background: #38b000;"
                @click="playAudio(); activeOn()"
                v-if="!on">
                ON
                </div>

                <div class="button"
                style="background: #d90429;"
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
    background: linear-gradient(to right, red, purple);
    height: 150px;
    width: 70%;
    display: inline-block;
    border: 1px solid white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    border: 1px solid white;
    -moz-border-radius: 35px;
    border-radius: 35px; 
    padding: 2px 5px 2px 5px;
}

.button:hover{
    transform: scale(1.1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.beat {
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	/* transform: scale(1); */
	animation: pulse 1.5s infinite;
}

@keyframes pulse {
	0% {
		/* transform: scale(0.95); */
		box-shadow: 0 0 0 0 rgba(2, 158, 36, 0.486);
	}

	70% {
		/* transform: scale(0.97); */
		box-shadow: 0 0 0 10px rgba(2, 158, 36, 0.486);
	}

	100% {
		/* transform: scale(0.95); */
		box-shadow: 0 0 0 0 rgba(2, 158, 36, 0.486);
	}
}

@media screen and (max-width: 1264px){
    .padTitle{
        font-size: 14px;
    }
}

@media screen and (max-width: 1140px){
    .singlePad{
        margin:0px 50px 30px 100px;
    }

      .padTitle{
        font-size: 13px;
    }
}

@media screen and (max-width: 960px){
    .singlePad{
        margin: 0px 0px 30px 50px;
    }

     .padTitle{
        font-size: 12px;
    }
}

@media screen and (max-width: 768px){
    .singlePad{
    margin: 0px 0px 30px 75px;
}
}

@media screen and (max-width: 576px){
    .singlePad{
        margin: 0px 0px 30px 15px;
        width: 95%;
    }

    .padTitle{
        font-size: 11px;
    }
}

@media screen and (max-width: 320px){
    .singlePad{
        margin: 0px 0px 30px 5px;
    }
}
</style>