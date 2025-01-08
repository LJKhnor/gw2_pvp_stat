<template>
  <div class="pvp-info-container pvp-rank-account-container">
    <div class="pvp-rank-title">
      By Account
    </div>
    <div class="chart">
      <VueApexCharts type="pie" :options="options" :series="series"></VueApexCharts>
    </div>
  </div>
</template>
<script lang="ts">
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'PvpRankByAccountView',
  components: { VueApexCharts },
  setup() {
    const response = {
      "aggregate": {
        "wins": 6,
        "losses": 14,
        "desertions": 0,
        "byes": 0,
        "forfeits": 0
    },
    }
    const series = [6,14,0,0,0]
    const options = {
      chart: {
        type: 'bar',
        stacked: true
      },
      labels: getCategories(),
      legend: {
        show: true
      },
    }
    function getCategories(){

      return ['wins', 'losses', 'desertions', 'byes','forfeits']
    }
    return { options, series }
  },
}
</script>
<style>
.pvp-rank-account-container{
  width: 350px;
  border-radius: 20%;
}
.pvp-rank-title{
  position: relative;
  top: 1vh;
  left: 5vw;
}
</style>
