<template>
    <div>
        <!-- Loop through all the padsType and select single pad each time -->
        <div 
        v-for="pad in padsType" 
        :key="pad.value" 
        class="padsContainer">
        <!-- Passing soundPath soundTitle and soundImgTitle using props to the child component -->
            <app-pad :soundPath="pad.pathTitle" :soundTitle="pad.title" :soundimg="pad.imgSrc"></app-pad>
        </div>
    </div>
</template>

<script>
import Pad from './Pad.vue'
export default {
    components:{
        appPad: Pad//A component that displays/include single pad
    },
    data(){
        return{
            //Store all the sounds/images/titles in array of objects
            padsType: [
                {pathTitle:"SilentStar", title:"SILENT STAR", imgSrc: 'silentStar'},
                {pathTitle:"Bassheavyfunk", title:"BASS HEAVY FUNK" , imgSrc: 'bassGuitar'},
                {pathTitle:"electriGuitar", title:"ELECTRIC GUITAR" , imgSrc: 'electricGuitar'},
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
.padsContainer{
    display: inline-block; 
    width: 30%;
}

@media screen and (max-width: 1264px){
}

@media screen and (max-width: 1140px){
}

@media screen and (max-width: 960px){
    .padsContainer{
        width: 33%;
    }
}

@media screen and (max-width: 768px){
    .padsContainer{
        width: 48%;
    }
}

@media screen and (max-width: 576px){
    
}

@media screen and (max-width: 320px){
    .padsContainer{
        display: inline;
    }
}

</style>