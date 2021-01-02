<template>
    <div class="topnav">
        <div class="leftIcon">
            <a><router-link to="/">The Lopper</router-link></a>
        </div>
        <a class="rightButton"  
        @click="changeStateStop"
        v-if="this.$store.getters.getLooperState">
        STOP
        </a>

        <a class="rightButton" 
        @click="changeStateOn"
        v-if="!(this.$store.getters.getLooperState)">
        PLAY
        </a>
        </div>
</template>

<script>
export default {
    methods:{
        changeStateStop(){
            this.$store.dispatch('activateLopper', false)
        },
        changeStateOn(){
            this.$store.dispatch('activateLopper', true)
        }
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.topnav{
    position: absolute;
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.377);
    font-weight: bold;
    top: 0px;
    left: 0px;
    font-family: 'Poppins';
}
.leftIcon a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  margin-top: 5px;
  margin-left: 20px;
  text-decoration: none;
  font-size: 22px;

}
.rightButton{
    float: right;
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

.rightButton:hover{
    background: greenyellow;
    color: black;
}

</style>