<template>
    <div class="dashbordContent"> 
        <app-pads class="padsStyle"></app-pads>
    </div>
</template>

<script>
import Pads from '../components/padsButtons/Pads.vue'
export default {
    components:{
        appPads: Pads //A component that displays/include all the 9 pads
    }
    
}
</script>

<style scoped>
.dashbordContent{
    height: 1000px;
}

.padsStyle{
    padding-top: 200px;
    margin-left: 100px;
}

@media screen and (max-width: 1264px){
    .padsStyle{
        margin-left: 50px;
    }
}

@media screen and (max-width: 1140px){
    .padsStyle{
        margin-left: 0px;
    }
}

@media screen and (max-width: 960px){
    
}

@media screen and (max-width: 768px){
    .padsStyle{
    padding-top: 80px;
    }
}

@media screen and (max-width: 576px){
    
}

@media screen and (max-width: 320px){
.dashbordContent{
    height: 2000px;
}
}
</style>