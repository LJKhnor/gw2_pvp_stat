<template>
  <main class="pvp-rank-view-container">
    <PvpRank />
    <PvpRankByAccount :most-played-class="mostPlayedClass" :best-winrate-class="bestWinrateClass"/>
    <!-- <PvpRankCurrentSeason/> -->
    <PvpRankByProfessions @most-played-class="getMostPlayedClass" @best-winrate-class="getBestWinrateClass"/>
    <PvpRankByLadders />
    <!-- <PvpRankByMap/> -->
  </main>
</template>

<script lang="ts">

import { ref } from 'vue';
import PvpRank from '@/components/PvpRank.vue'
import PvpRankByProfessions from '@/components/PvpRankByProfessions.vue'
import PvpRankByAccount from '@/components/PvpRankByAccount.vue'
import PvpRankByMap from '@/components/PvpRankByMap.vue'
import PvpRankByLadders from '@/components/PvpRankByLadders.vue'
import PvpRankCurrentSeason from '@/components/PvpRankCurrentSeason.vue'

export default {
  name: 'PvpRankView',
  components: { PvpRank, PvpRankByAccount,PvpRankCurrentSeason, PvpRankByMap ,PvpRankByProfessions, PvpRankByLadders },
  setup() {
    const test = 2
    const mostPlayedClass = ref('')
    const bestWinrateClass = ref('')
    function getMostPlayedClass(value: string){
      mostPlayedClass.value = value
    }
    function getBestWinrateClass(value: string){
      console.dir(value)
      bestWinrateClass.value = value
    }
    return { test, mostPlayedClass,bestWinrateClass, getMostPlayedClass, getBestWinrateClass }
  },
}
</script>

<style>
.pvp-rank-view-container{
  background-color: darkgreen;
  margin-top: 2px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid;
}
.pvp-info-container{
  background-color: green;
  border: 2px solid;
}
.pvp-rank-title{
  position: relative;
  text-align: center;
  margin: 4%;
  border: 2px solid;
}
img{
  width: 100%;
}
.chart{
  position: relative;
  width: 100%;
}
</style>
