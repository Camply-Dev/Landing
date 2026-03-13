<script setup lang="ts">
import NavBar from './components/navBar.vue'
import PageLoader from './components/PageLoader.vue'
</script>

<template>
  <div class="app">
    <navBar />
    <main>
      <PageLoader />
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>