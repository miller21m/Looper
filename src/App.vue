<template>
  <div class="mainScreen">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/header/AppHeader.vue'
export default {
  components:{
    appHeader: AppHeader
  }
}
</script>

<style scoped>
.mainScreen{
  background: url('~@/assets/backgroubnd/waveBackground.svg');
}


</style>