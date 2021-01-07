<template>
    <div>
         <audio loop="true" :id="soundIndex">
                <source :src="require('../../assets/sounds/'+ soundId + '.mp3')" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
export default {
    //Receive the following props from the Recorder component 
    props:['soundId', 'soundIndex', 'soundTotalTime', 'delayTime', 'startingPoint'],
    mounted(){
        this.setSound();
    },
    methods:{
        setSound(){

            let duartion = this.soundTotalTime
            var audio = document.getElementById(this.soundIndex)
                audio.currentTime= this.startingPoint //Set the starting point (sec) of each sound 

                //How long to wait for the sound to start playing (delayTime)
                setTimeout(function(){
                    audio.play()
                    
                    //How long to play the sound
                    setTimeout(function(){
                        audio.pause()
                    }, duartion*1000)
                }, 
                this.delayTime)
        }
    }
    
}
</script>


<style scoped>

</style>