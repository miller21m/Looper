<template>
    <div>
        
        <div class="recordButton onButton" v-if="!record" @click="startRecord">
            Record On
        </div>

        <!-- display recording is acive -->
        <div class="blob" v-if="record"></div>

        <div class="recordButton offButton" v-if="record" @click="stopRecord">
            Record Off
        </div>

        <div class="recordButton playButton" v-if="playButton" @click="playRecord">
            Play
        </div>

        <div v-for="sound in this.soundRecords" :key="sound.value">
            <single-record 
            :soundId = "sound.id" 
            :soundIndex = "sound.index"
            :soundTotalTime= "sound.totalTime"
            :delayTime = "sound.delay"
            :startingPoint = "sound.startingPoint">
            </single-record>
        </div>

    </div>
</template>

<script>
import SingleRecord from './SingleRecord.vue'
export default {
    components:{
        SingleRecord: SingleRecord,//Component of single sound (object) to be played
    },
    data(){
        return{
            record: false, //The record status (on -> true / off -> false)
            playButton: false, 
            soundRecords: undefined //Will contain the recorded sound array of objects to be played
        }
    },
    methods:{
        startRecord(){
            this.record = !this.record

            //dispatch 'activeRecord' in order to active the record pass True (from the store)
            this.$store.dispatch('activeRecord', true)
        },
        stopRecord(){
            this.record = !this.record
            this.playButton = true

            //dispatch 'activeRecord' in order to active the record pass False (from the store)
           this.$store.dispatch('activeRecord', false)
        },

        //Play the recorded mix
        playRecord(){
            this.soundRecords = this.$store.getters.getRecordSound
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.recordButton{
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    border: 1px solid white;
    -moz-border-radius: 35px;
    border-radius: 35px; 
    padding: 6px 22px;
    font-size: 16px;
    margin-top: 10px;
    margin-right: 10px;
}

.onButton{
    background: #38b000;
    font-family: 'Poppins';
    color: black;
}

.onButton:hover{
    background: #38b000;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.offButton{
    background: #d90429;
    font-family: 'Poppins';
    color: black;
}

.offButton:hover{
    background: #d90429;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.playButton{
    background: #38b000;
    font-family: 'Poppins';
    color: black;
}

.playButton:hover{
    background: #38b000;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.blob {
	background: black;
	border-radius: 50%;
	margin: 10px;
	height: 20px;
	width: 20px;
}

.blob {
	background: #38b000;
	border-radius: 50%;
	margin: 10px;
	height: 20px;
	width: 20px;

	box-shadow: 0 0 0 0 #38b000;
	transform: scale(1);
	animation: bit 2s infinite;
}

@keyframes bit {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
</style>