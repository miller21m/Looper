<template>
    <div>
        <div v-for="pad in padsType" :key="pad.value" style="display: inline-block; width: 30%">
            <app-pad :soundPath="pad.pathTitle" :soundTitle="pad.title" :soundimg="pad.imgSrc"></app-pad>
        </div>
    </div>
</template>

<script>
import Pad from './Pad.vue'
export default {
    components:{
        appPad: Pad
    },
    data(){
        return{
            padsType: [
                {pathTitle:"SilentStar", title:"SILENT STAR", imgSrc: 'silentStar'},
                {pathTitle:"BassWarwickheavyfunk", title:"BASS WAR WICK HEAVY FUNK" , imgSrc: 'bassGuitar'},
                {pathTitle:"electriGuitarCoutry", title:"ELECTRIC GUITAR COUNTRY" , imgSrc: 'electricGuitar'},
                {pathTitle:"future_funk_beats", title:"FUTURE FUNK BEATS" , imgSrc: 'futureFunk'},
                {pathTitle:"GrooveBTanggu", title:"GROOVE B TANGGU" , imgSrc: 'bTanggu'},
                {pathTitle:"MazePoliticsPerc", title:"MAZE POLITICS PERC" , imgSrc: 'maze'},
                {pathTitle:"PAS3GROOV", title:"PAS 3 GROOV" , imgSrc: 'groov'},
                {pathTitle:"StompySlosh", title:"STOMPY SLOSH" , imgSrc: 'slosh'},
                {pathTitle:"stutter_breakbeats", title:"STUTTER BREAKBEATS" , imgSrc: 'beats'}
                ]
        }
    }
}
</script>


<style scoped>


</style>