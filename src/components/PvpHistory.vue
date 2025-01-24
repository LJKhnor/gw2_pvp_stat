<template>
  <div v-if="isDataRetrieve" class="pvp-info-container">
    <table class="match-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Carte</th>
          <th>Résultat</th>
          <th>Type</th>
          <th>Saison</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in values" :key="index">
          <td>{{ game.started }}</td>
          <td>{{ game.map_id }}</td>
          <td :class="{ victory: game.result === 'Victory', defeat: game.result === 'Defeat' }">
            {{ game.result }}
          </td>
          <td>{{ game.rating_type }}</td>
          <td>{{ game.season }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="pvp-info-container">
    <!-- Loader -->
    <Loader />
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import apiClient from '../axios'
import AuthService from '@/services/AuthService.js'
import Loader from '@/components/Loader.vue'
export default {
  name:'PvpHistory',
  components: {Loader},
  setup(){
    const values = ref([] as object[])
    const isDataRetrieve = ref(false)
    const urlPvpStatHistory = '/pvp/stats/history'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + AuthService.getCurrentToken()
      }
    }

    getStats()


    async function getStats(){
      const response = await apiClient.get(urlPvpStatHistory, options)

      for(const key in response.data){
        values.value.push(response.data[key])
      }
      isDataRetrieve.value = true
    }

    return { values, isDataRetrieve }
  }
}
</script>
<style>
.pvp-info-container {
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}


.match-table {
  width: 100%;
  border-collapse: collapse;
}

.match-table th,
.match-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.match-table th {
  background-color: #f4f4f4;
  color: #2c3e50;
}

.victory {
  color: black;
  font-weight: bold;
}

.defeat {
  color: red;
  font-weight: bold;
}

</style>
