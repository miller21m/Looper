<template>
    <div>
        <div v-for="pad in padsType" :key="pad" style="display: inline-block; width: 30%">
            <app-pad></app-pad>
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
            padsType: [1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>


<style scoped>

</style>