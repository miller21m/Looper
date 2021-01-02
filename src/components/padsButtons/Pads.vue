<template>
    <div>
        <div v-for="pad in padsType" :key="pad.value" style="display: inline-block; width: 30%">
            <app-pad :soundPath="pad.pathTitle" :soundTitle="pad.title"></app-pad>
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
                {pathTitle:"SilentStar", title:"SilentStar"},
                {pathTitle:"BassWarwickheavyfunk", title:"BassWarwickheavyfunk"},
                {pathTitle:"electriGuitarCoutry", title:"electriGuitarCoutry"},
                {pathTitle:"future_funk_beats", title:"future_funk_beats"},
                {pathTitle:"GrooveBTanggu", title:"GrooveBTanggu"},
                {pathTitle:"MazePoliticsPerc", title:"MazePoliticsPerc"},
                {pathTitle:"PAS3GROOV", title:"PAS3GROOV"},
                {pathTitle:"StompySlosh", title:"StompySlosh"},
                {pathTitle:"stutter_breakbeats", title:"stutter_breakbeats"}
                ]
        }
    }
}
</script>


<style scoped>

</style>