<template>
  <div class="pvp-history-container">
    <h1 class="pvp-history-title">Historique</h1>
    <PvpHistory/>
  </div>
</template>
<script lang="ts">
import PvpHistory from '@/components/PvpHistory.vue';
export default{
  name:'PvpHistoryView',
  components:{PvpHistory}
}

</script>
<style>
.pvp-history-container{
  background-color: darkgreen;
  margin: 2%;
  padding: 2%;
  border: 2px solid;
}
.pvp-info-container{
  background-color: green;
  margin: 2%;
  border: 2px solid;
}
.pvp-history-title{
  text-align: center;
}
</style>
