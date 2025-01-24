<template>
  <!-- Loader -->
  <div class="loader-container">
    <div class="loader"></div>
    <p>Chargement des données...</p>
  </div>
</template>
<script lang="ts">
</script>
<style>
/* Styles pour le loader */
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.loader {
  border: 4px solid #f3f3f3; /* Couleur de fond */
  border-top: 4px solid #3498db; /* Couleur principale */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}</style>
