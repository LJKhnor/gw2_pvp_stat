<template>
  <div v-if="isDataRetrieve" class="pvp-info-container pvp-rank-account-container">
    <div class="pvp-rank-title">
      By Account
    </div>
    <div class="chart">
      <VueApexCharts type="pie" :options="options" :series="series"></VueApexCharts>
    </div>
  </div>
  <div v-else class="pvp-info-container pvp-rank-account-container">
    <Loader/>
  </div>
</template>
<script lang="ts">
import VueApexCharts from 'vue3-apexcharts';

import { ref } from 'vue'
import apiClient from '../axios'
import AuthService from '@/services/AuthService.js'
import Loader from '@/components/Loader.vue'

export default {
  name: 'PvpRankByAccountView',
  components: { VueApexCharts, Loader },
  setup() {
    const isDataRetrieve = ref(false)
    const categoriesRef = ref([] as string[])
    const seriesRef = ref({})
    const optionsRef = ref({})

    getStats()


    async function getStats(){
      const urlPvpStatRank = '/pvp/stats/account'
      const optionsUrl = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + AuthService.getCurrentToken()
        }
      }
      try{
        const response = await apiClient.get(urlPvpStatRank, optionsUrl)
        const data = response.data

        // Transformation des données pour ApexCharts
        categoriesRef.value = Object.keys(data);
        seriesRef.value = Object.values(data);

        optionsRef.value = {
          chart: {
            type: 'pie',
            stacked: true
          },
          labels: categoriesRef.value,
          legend: {
            show: true
          },

          // fill: {
          //   colors: ['#F44336', '#E91E63', '#9C27B0']
          // }
        }
        isDataRetrieve.value = true
      } catch(error){
        console.error('Erreur lors de la récupération des statistiques pour le compte :', error)
      }
    }

    return { options: optionsRef, series: seriesRef, isDataRetrieve }
  },
}
</script>
<style>
.pvp-rank-account-container{
  width: 350px;
}
</style>
