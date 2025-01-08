<template>
  <div class="pvp-info-container pvp-rank-ladders-container">
    <div class="pvp-rank-title">
      By Ladders
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
    const series = [{
      name: 'wins',
      data: [4,2]
    },
    {
      name: 'losses',
      data: [10,4]
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

      return ["ranked",
      "unranked"]
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
