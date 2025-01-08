<template>
  <div class="pvp-info-container pvp-rank-container">
    <div class="pvp-rank-banner">{{pvpRank}}</div>
    <img :src="pvpRankLogo" alt="" class="pvp-rank-logo" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'PvpRank',
  props: [],
  setup() {
    const pvpRank = '87'
    const pvpRankLogo =
      "https://render.guildwars2.com/file/DECD0D647C9433CC2128BF2F6FE5A5185513EE59/347223.png"
    const pvpRankPoints = '152645987'

    return { pvpRank, pvpRankLogo, pvpRankPoints }
  },
}
</script>

<style>
.pvp-rank-container{
  width: 20%;
  border-radius: 20%;
}
img{
  width: 100%;
  height: 100%;
}
.pvp-rank-banner{
  position: absolute;
  font-size: 5vh;
}
</style>
