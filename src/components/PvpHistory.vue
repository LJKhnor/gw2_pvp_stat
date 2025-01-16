<template>
  <div class="pvp-info-container">
    <table class="match-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Carte</th>
          <th>Résultat</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(match, index) in response" :key="index">
          <td>{{ match.date }}</td>
          <td>{{ match.map }}</td>
          <td :class="{ victory: match.result === 'Victory', defeat: match.result === 'Defeat' }">
            {{ match.result }}
          </td>
          <td>{{ match.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
export default {
  name:'PvpHistory',
  setup(){
    const response = [
        {
          date: "2025-01-01",
          map: "Dust II",
          result: "Victory",
          type: "Ranked",
        },
        {
          date: "2025-01-02",
          map: "Mirage",
          result: "Defeat",
          type: "Unranked",
        }
      ]


      return { response }
  }
}
</script>
<style>
.pvp-rank-container{
  width: 20%;
}
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
  color: green;
  font-weight: bold;
}

.defeat {
  color: red;
  font-weight: bold;
}
</style>
