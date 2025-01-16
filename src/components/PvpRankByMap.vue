<template>
  <div class="pvp-info-container pvp-rank-map-container">
    <div class="pvp-rank-title">
      By map
    </div>
    <div class="chart">
      <VueApexCharts type="bar" :options="options" :series="series"></VueApexCharts>
    </div>
  </div>
</template>
<script lang="ts">
import VueApexCharts from 'vue3-apexcharts'
export default {
name:'PvpRankByMap',
components: { VueApexCharts },
  setup() {
    const response = {}
    const series = [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }]
    const options = {
      chart: {
              height: 350,
              type: 'bar',
      },
      labels: getCategories(),
      legend: {
        show: true
      },
    }
    function getCategories(){
      const categories = []
      for(const key in response){
        categories.push(key)
      }
      return categories
    }
    return { options, series }
  },
}
</script>
<style>
.pvp-rank-map-container{
  width: 350px;
  border-radius: 20%;
}
</style>
