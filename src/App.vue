<script setup lang="ts">
import NavBar from './components/navBar.vue'
</script>

<template>
  <div>
    <navBar />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - (100px + var(--spacing-md) * 2));
}
</style>