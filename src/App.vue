<template>
  <header>
    <div class="wrapper">
      <NavBar msg="GW2 PvP Stats" />
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/pvpstats">Pvp Stats</RouterLink>
        <RouterLink to="/history">Pvp Historique</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
  }
}

</style>
