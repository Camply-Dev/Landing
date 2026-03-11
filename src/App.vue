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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>