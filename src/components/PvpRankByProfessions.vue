<template>
  <div class="pvp-info-container pvp-rank-professions-container">
    <div class="pvp-rank-title">
      By professions
    </div>
    <div class="chart">
      <VueApexCharts type="bar" :options="options" :series="series" :legend="legend" :xaxis="xaxis"></VueApexCharts>
    </div>
  </div>
</template>
<script lang="ts">
import VueApexCharts from 'vue3-apexcharts'
export default {
name:'PvpRankByProfessions',
components: { VueApexCharts },
  setup() {
    const response = {
      "elementalist": {
      "wins": 3,
      "losses": 7,
      "desertions": 0,
      "byes": 0,
      "forfeits": 0
    },
      "guardian": {
        "wins": 6,
        "losses": 15,
        "desertions": 0,
        "byes": 0,
        "forfeits": 0
    }
    }
    const series = [{
      name: 'wins',
      data: [3,6]
    },
    {
      name: 'losses',
      data: [7,15]
    },
    {
      name: 'desertions',
      data: [0,0]
    },
    {
      name: 'byes',
      data: [0,0]
    },
    {
      name: 'forfeits',
      data: [0,0]
    }]
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

      return ['elementalist', 'guardian']
    }
    return { options, series }
  },
}
</script>
<style>
.pvp-rank-professions-container{
  width: 350px;
  border-radius: 20%;
}
.pvp-rank-title{
  position: relative;
  top: 1vh;
  left: 5vw;
}
</style>
