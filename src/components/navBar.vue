<script setup lang="ts">
import { Icon } from '@iconify/vue'

</script>

<template>
    <nav>
      <img src="/img/logoAnimated.svg" alt="Camply" class="logo">
      <div class="nav-links">
        <RouterLink to="/"><Icon icon="fluent:home-20-filled" width="24" height="24" /><h5>Home</h5></RouterLink>
        <RouterLink to="/services"><Icon icon="fluent:box-checkmark-20-filled" width="24" height="24" /><h5>Services</h5></RouterLink>
        <a href="https://discord.gg/devfr" target="_blank"><Icon icon="ic:baseline-discord" width="24" height="24" /><h5>Discord</h5></a>
      </div>
    </nav>
</template>

<style scoped>
nav {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: var(--spacing-md) 0;
}

nav img {
    width: 100px;
    height: 100px;
}

nav .nav-links {
    display: flex;
    gap: var(--spacing-2xl);
}

nav .nav-links a {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}
</style>