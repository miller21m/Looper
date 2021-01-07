<template>
    <div class="dashbordContent"> 
        <app-recorder class="recorderStyle"></app-recorder>
        <app-pads class="padsStyle"></app-pads>
    </div>
</template>

<script>
import Pads from '../components/padsButtons/Pads.vue'
import Recorder from '../components/recorder/Recorder.vue'
export default {
    components:{
        appPads: Pads, //A component that displays/include all the 9 pads
        appRecorder: Recorder//Conmponent for the record buttons (Record On / Record Off/ play)
    }
    
}
</script>

<style scoped>
.dashbordContent{
    height: 1000px;
}

.recorderStyle{
    display: flex;
    padding-top:120px ;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.padsStyle{
    padding-top: 50px;
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

    .dashbordContent{
    height: 1300px;
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