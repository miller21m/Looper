<template>
    <div class="dashbordContent"> 
        <app-pads class="padsStyle"></app-pads>
    </div>
</template>

<script>
import Pads from '../components/padsButtons/Pads.vue'
export default {
    components:{
        appPads: Pads
    }
    
}
</script>

<style scoped>
.dashbordContent{
    height: 1200px;
    /* border: 1px solid black; */
}

.padsStyle{
    padding-top: 200px;
    margin-left: 100px;
}
</style>