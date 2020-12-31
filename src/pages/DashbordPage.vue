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
    height: 900px;
    border: 1px solid black;
    margin: 100px 30px 0px 30px;
}

.padsStyle{
    border: 1px solid red;
}
</style>