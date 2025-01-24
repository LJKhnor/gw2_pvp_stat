<template>
  <div v-if="isDataRetrieve" class="pvp-info-container pvp-rank-container">
    <div class="pvp-rank-banner">
      {{pvpRank}}
    </div>
    <div class="pvp-rank-logo">
      <img :src="pvpRankLogo" alt=""  />
    </div>
  </div>
  <div v-else class="pvp-info-container pvp-rank-container">
    <Loader/>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import apiClient from '../axios'
import AuthService from '@/services/AuthService.js'
import Loader from '@/components/Loader.vue'
export default {
  name: 'PvpRank',
  components:{Loader},
  props: [],
  setup() {
    const isDataRetrieve = ref(false)
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
      isDataRetrieve.value = true
    }

    return { pvpRank, pvpRankLogo, pvpRankPoints, isDataRetrieve }
  },
}
</script>

<style>
.pvp-rank-container{
  width: 20%;
}
.pvp-rank-banner{
  position: relative;
  font-size: 5vh;
}
.pvp-rank-logo{
  width: 100%;
}
</style>
