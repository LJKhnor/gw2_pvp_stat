<template>
  <div class="pvp-info-container pvp-rank-container">
    <div class="pvp-rank-banner">{{pvpRank}}</div>
    <img :src="pvpRankLogo" alt="" class="pvp-rank-logo" />
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import apiClient from '../axios'
import AuthService from '@/services/AuthService.js'
export default {
  name: 'PvpRank',
  props: [],
  setup() {
    const pvpRank = ref(0)
    const pvpRankLogo = ref('')
    const pvpRankPoints = ref(0)
    const urlPvpStatRank = '/pvp/stats/rank'
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + AuthService.getCurrentToken()
        }
      }

    getStats()


    async function getStats(){
      const response = await apiClient.get(urlPvpStatRank, options)
      pvpRank.value = response.data.rank
      pvpRankLogo.value = response.data.logo
      pvpRankPoints.value = response.data.rankPoints
    }

    return { pvpRank, pvpRankLogo, pvpRankPoints }
  },
}
</script>

<style>
.pvp-rank-container{
  width: 20%;
  border-radius: 20%;
}
img{
  width: 100%;
  height: 100%;
}
.pvp-rank-banner{
  position: absolute;
  font-size: 5vh;
}
</style>
