<template>
  <div v-if="isDataRetrieve" class="pvp-info-container pvp-rank-account-container">
    <div class="pvp-rank-title">
      By Account
    </div>
    <div class="content">
      <div class="chart">
        <VueApexCharts type="pie" :options="options" :series="series"></VueApexCharts>
      </div>
      <div class="additional-data">
        <div class="winrate">Taux de victoire : {{ winrate }} %</div>
        <div class="most-played-map">Carte la plus jouée : {{ mostPlayedMap }}</div>
        <div class="most-played-class">Classe la plus jouée : <strong :style="getClassColor(mostPlayedClass)">{{ mostPlayedClass }}</strong> </div>
        <div class="most-played-class-winning">Classe avec le meilleur taux de victoire : <strong :style="getClassColor(bestWinrateClass)">{{ bestWinrateClass }}</strong> </div>
      </div>
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
  props: ['mostPlayedClass', 'bestWinrateClass'],
  setup() {
    const isDataRetrieve = ref(false)
    const categoriesRef = ref([] as string[])
    const seriesRef = ref({})
    const optionsRef = ref({})
    const winrate = ref(0)
    const mostPlayedMap = ref('')

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
        winrate.value = getWinrate(data)
        mostPlayedMap.value = getMostPlayedMap()
        isDataRetrieve.value = true
      } catch(error){
        console.error('Erreur lors de la récupération des statistiques pour le compte :', error)
      }
    }

    function getWinrate(data: object){
      let wins = data.wins + data.byes
      let losses = data.losses + data.forfeits
      return (wins / (wins + losses) * 100).toFixed(2)
    }
    function getMostPlayedMap(){
      return 'aucune donnée'
    }
    function getClassColor(value: string){
      switch(value){
        case 'elementalist':
          return 'color: red'
          break
        case 'engineer':
          return 'color: orange'
          break
        case 'guardian':
          return 'color: lightblue'
          break
        case 'mesmer':
          return 'color: rose'
          break
        case 'necromancer':
          return 'color: green'
          break
        case 'ranger':
          return 'color: yellow'
          break
        case 'revenant':
          return 'color: grey'
          break
        case 'thief':
          return 'color: brown'
          break
        case 'warrior':
          return 'color: lightorange'
          break
        default:
          return 'color: var(--color-theme)'
          break
      }
    }
    return { options: optionsRef, series: seriesRef, isDataRetrieve, winrate, mostPlayedMap, getClassColor }
  },
}
</script>
<style>
.pvp-rank-account-container{
  width: auto;
}
.content{
  display: flex;
  width: auto;
  margin: 2px;
}
.chart{
  width: 25%;
  margin: 2px;
}
.additional-data{
  width: 100%;
  margin: 2px;
}
</style>
