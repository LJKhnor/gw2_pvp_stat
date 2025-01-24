<template>
  <main class="pvp-rank-view-container">
    <PvpRank />
    <PvpRankByAccount/>
    <!-- <PvpRankCurrentSeason/> -->
    <PvpRankByProfessions/>
    <PvpRankByLadders />
    <!-- <PvpRankByMap/> -->
  </main>
</template>

<script lang="ts">
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
    return { test }
  },
}
</script>

<style>
.pvp-rank-view-container{
  background-color: darkgreen;
  margin: 2%;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid;
}
.pvp-info-container{
  background-color: green;
  margin: 2%;
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
