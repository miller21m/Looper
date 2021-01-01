<template>
    <div>
        <div class="singlePad">
            <div class="padTitle">{{soundTitle}}</div>

            <div>
                <div class="button" style="background: green;" @click="playAudio">Play</div>
                <div class="button" style="background: red;"  @click="stopAudio">Stop</div>
            </div>

            <audio id="audio-player">
                <!-- <source :src="require(`../../assets/sounds/${soundTitle}.mp3`)" type="audio/mpeg"> -->
                <source :src="require(`../../assets/sounds/${soundTitle}.mp3`)" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>

<script>
export default {
    props:['soundPath', 'soundTitle'],
    data(){
        return{
            isPlaying: false
        }
    },
    methods:{
        playAudio(){
            console.log('Playing');
            var audio = document.getElementById("audio-player")
            this.isPlaying = true
            audio.play()   
            
            
        },
        stopAudio(){
            console.log('Stop');
            var audio = document.getElementById("audio-player")
            audio.pause()
            this.isPlaying= false
        }
    },
    watch:{
        isPlaying(){
            if(this.isPlaying){
                this.playAudio();
            }
            else{
                this.stopAudio();
            }
        }
    },
    computed:{
    }
}
</script>

<style scoped>
.singlePad{
    text-align: center;
    margin:0px 100px 30px 100px;
    height: 150px;
    width: 70%;
    display: inline-block;
    border: 1px solid black;
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