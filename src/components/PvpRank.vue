<template>
  <div v-if="isDataRetrieve" class="pvp-info-container pvp-rank-container">
    <div class="pvp-rank-logo-container">
      <!-- Badge (pvpRank) -->
      <div class="pvp-rank-badge">
        {{ pvpRank }}
      </div>
      <!-- Logo -->
      <img class="pvp-rank-logo" :src="pvpRankLogo" alt="Logo" />
    </div>
  </div>
  <div v-else class="pvp-info-container pvp-rank-container">
    <Loader/>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import apiClient from '../axios'
import AuthService from '@/services/AuthService.js'
import Loader from '@/components/Loader.vue'
export default {
  name: 'PvpRank',
  components:{Loader},
  props: [],
  setup() {
    const isDataRetrieve = ref(false)
    const pvpRank = ref(0)
    const pvpRankLogo = ref('')
    const pvpRankPoints = ref(0)
    const urlPvpStatRank = '/pvp/stats/rank'
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + AuthService.getCurrentToken()
        }
      }

    getStats()


    async function getStats(){
      const response = await apiClient.get(urlPvpStatRank, options)
      pvpRank.value = response.data.rank
      pvpRankLogo.value = response.data.logo
      pvpRankPoints.value = response.data.rankPoints
      isDataRetrieve.value = true
    }

    return { pvpRank, pvpRankLogo, pvpRankPoints, isDataRetrieve }
  },
}
</script>

<style>
.pvp-info-container{
  margin: 1%;
}
.pvp-rank-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pvp-rank-logo-container {
  position: relative; /* Nécessaire pour positionner le badge */
  display: inline-block; /* Permet de bien contenir l'image et le badge */
}

.pvp-rank-logo {
  width: 100px; /* Ajuste la taille selon tes besoins */
  height: 100px;
  border-radius: 50%; /* Ajoute un effet circulaire si nécessaire */
  object-fit: cover; /* Gère le remplissage de l'image */
}

.pvp-rank-badge {
  position: absolute; /* Place le badge au-dessus de l'image */
  top: 10px; /* Ajuste la position verticale */
  left: 20%; /* Centrage horizontal */
  transform: translateX(-50%); /* Centre réellement le badge */
  background-color: var(--color-background); /* Couleur de fond du badge */
  color: white; /* Couleur du texte du badge */
  padding: 5px 10px; /* Ajoute de l'espace autour du texte */
  border-radius: 12px; /* Ajoute un effet arrondi pour un style badge */
  font-size: 14px; /* Taille du texte */
  font-weight: bold; /* Met le texte en gras */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Ajoute une légère ombre */
  z-index: 10; /* S'assure que le badge est au-dessus de l'image */
}
</style>
