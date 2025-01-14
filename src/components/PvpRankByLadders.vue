<template>
  <div class="pvp-info-container pvp-rank-ladders-container">
    <div class="pvp-rank-title">
      By Ladders
    </div>
    <div class="chart">
      <VueApexCharts type="bar" :options="options" :series="series"></VueApexCharts>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import apiClient from '../axios'
import VueApexCharts from 'vue3-apexcharts'
import AuthService from '@/services/AuthService.js'
export default {
name:'PvpRankByProfessions',
components: { VueApexCharts },
  setup() {
    const response = {
        "ranked": {
        "wins": 4,
        "losses": 10,
        "desertions": 0,
        "byes": 0,
        "forfeits": 0
      },
      "unranked": {
        "wins": 2,
        "losses": 4,
        "desertions": 0,
        "byes": 0,
        "forfeits": 0
      }
    }
    const professionsCategories = getCategories()
    const series = getSeries()
    const options = {
      chart: {
        type: 'bar',
        stacked: true
      },
      xaxis: {
        type: 'string',
        categories: getCategories()
      },
      legend: {
        show: true
      },
      plotOptions: {
            bar: {
              distributed: false
            }
      }
    }
    function getCategories(){
      const categories = []
      for(const key in response){
        categories.push(key)
      }
      return categories
    }

    function getSeries(){
      const wins = []
      const losses = []
      const desertions = []
      const byes = []
      const forfeits = []
      for (const key in professionsCategories){
        const pc = professionsCategories[key as keyof typeof professionsCategories]
        const panel = response[pc as keyof typeof response]
        for (const keyPanel in panel){
          const value = panel[keyPanel as keyof typeof panel]
          switch (keyPanel){
            case 'wins':
              wins.push(value)
              break
            case 'losses':
              losses.push(value)
              break
            case 'desertions':
              desertions.push(value)
              break
            case 'byes':
              byes.push(value)
              break
            case 'forfeits':
              forfeits.push(value)
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

    return { options, series }
  },
}
</script>
<style>
.pvp-rank-ladders-container{
  width: 350px;
  border-radius: 20%;
}
.pvp-rank-title{
  position: relative;
  top: 1vh;
  left: 5vw;
}
</style>
