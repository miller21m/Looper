<template>
    <div class="topnav">
        <div class="leftIcon">
            <a><router-link to="/">The Lopper</router-link></a>
        </div>
        <a class="rightButton">STOP</a>
        <a class="rightButton">PLAY</a>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.topnav{
    position: absolute;
    width: 100%;
    height: 60px;
    background: blue;
    font-weight: bold;
    top: 0px;
    left: 0px;
}
.leftIcon a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  margin-top: 10px;
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
    padding: 10px 12px;
    font-size: 16px;
    margin-top: 10px;
    margin-right: 10px;
}

.rightButton:hover{
    background: white;
    color: black;
}

</style>