<template>
  <div class="pvp-info-container pvp-rank-map-container">
    <div class="pvp-rank-title">
      By map
    </div>
    <div class="chart">
      <VueApexCharts type="bar" :options="options" :series="series" :legend="legend" :xaxis="xaxis"></VueApexCharts>
    </div>
  </div>
</template>
<script lang="ts">
import VueApexCharts from 'vue3-apexcharts'
export default {
name:'PvpRankByMap',
components: { VueApexCharts },
  setup() {
    const series = [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }]
    const options = {
      chart: {
              height: 350,
              type: 'bar',
            }
    }
    const legend= {
              show: true
            }

    const xaxis = {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
    return { options, series, xaxis, legend }
  },
}
</script>
<style>
.pvp-rank-map-container{
  width: 350px;
  border-radius: 20%;
}
.pvp-rank-title{
  position: relative;
  top: 1vh;
  left: 5vw;
}
</style>
