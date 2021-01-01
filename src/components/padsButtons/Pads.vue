<template>
    <div>
        <div v-for="pad in padsType" :key="pad" style="display: inline-block; width: 30%">
            <app-pad :soundPath="pad.path" :soundTitle="pad.title"></app-pad>
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
                {path:'../../assets/sounds/SilentStar.mp3', title:"SilentStar"},
                {path:'../../assets/sounds/BassWarwickheavyfunk.mp3', title:"BassWarwickheavyfunk"},
                {path:"../../assets/sounds/electriGuitarCoutry.mp3", title:"electriGuitarCoutry"},
                {path:"../../assets/sounds/future_funk_beats.mp3", title:"future_funk_beats"},
                {path:"../../assets/sounds/GrooveBTanggu.mp3", title:"GrooveBTanggu"},
                {path:"../../assets/sounds/MazePoliticsPerc.mp3", title:"MazePoliticsPerc"},
                {path:"../../assets/sounds/PAS3GROOV.mp3", title:"PAS3GROOV"},
                {path:"../../assets/sounds/StompySlosh.mp3", title:"StompySlosh"},
                {path:"../../assets/sounds/stutter_breakbeats.mp3", title:"stutter_breakbeats"}
                ]
        }
    }
}
</script>


<style scoped>

</style>