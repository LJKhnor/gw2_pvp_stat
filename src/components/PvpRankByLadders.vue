<template>
  <div v-if="isDataRetrieve" class="pvp-info-container pvp-rank-ladders-container">
    <div class="pvp-rank-title">
      By Ladders
    </div>
    <div class="chart-ladders">
      <VueApexCharts type="bar" :options="options" :series="series"></VueApexCharts>
    </div>
  </div>
  <div v-else class="pvp-info-container pvp-rank-ladders-container">
    <Loader/>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import apiClient from '../axios'
import VueApexCharts from 'vue3-apexcharts'
import AuthService from '@/services/AuthService.js'
import Loader from '@/components/Loader.vue'
export default {
name:'PvpRankByLadders',
components: { VueApexCharts, Loader },
  setup() {
    const isDataRetrieve = ref(false)
    const categoriesRef = ref([] as string[])
    const seriesRef = ref({})
    const optionsRef = ref({})
    const seriesToDisplay = ref({})

    getStats()

    async function getStats(){

      const urlPvpStatRankLadders = '/pvp/stats/ladders'
      const optionsUrl = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + AuthService.getCurrentToken()
        }
      }
      try{
        const response = await apiClient.get(urlPvpStatRankLadders, optionsUrl)
        const data = response.data

        // Transformation des données pour ApexCharts
        categoriesRef.value = Object.keys(data)
        seriesRef.value = Object.values(data)

        seriesToDisplay.value = getSeries(seriesRef.value)

        optionsRef.value = {
        chart: {
          type: 'bar',
          stacked: true,
          toolbar:{
            show: false
          }
        },
        xaxis: {
          type: 'string',
          categories: categoriesRef.value
        },
        legend: {
          show: true
        },
        plotOptions: {
              bar: {
                distributed: false
              }
        },
        grid: {
          // borderColor: '#111',
          strokeDashArray: 7,
        },
      }
      isDataRetrieve.value = true
      } catch(error){
        console.error('Erreur lors de la récupération des statistiques pour les professions :', error)
      }
    }

    function getSeries(response: object){
      const wins = [] as number[]
      const losses = [] as number[]
      const desertions = [] as number[]
      const byes = [] as number[]
      const forfeits = [] as number[]

      for (const key in response){
        const data = response[key]
        for(const keyData in data){
          switch(keyData){
            case 'wins':
              wins.push(data[keyData] as number)
              break
            case 'losses':
              losses.push(data[keyData] as number)
              break
            case 'desertions':
              desertions.push(data[keyData] as number)
              break
            case 'byes':
              byes.push(data[keyData] as number)
              break
            case 'forfeits':
            forfeits.push(data[keyData] as number)
              break
          }
        }
      }
      return [
        {name: 'wins',data: wins},
        {name: 'losses',data: losses},
        {name: 'desertions',data: desertions},
        {name: 'byes',data: byes},
        {name: 'forfeits',data: forfeits}
      ]
    }
    return { options: optionsRef, series: seriesToDisplay, isDataRetrieve }
  },
}
</script>
<style>
.pvp-rank-ladders-container{
  width: 700px;
}
.chart-ladders{
  width: 700px;;
}
</style>
