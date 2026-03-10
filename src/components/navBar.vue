<script setup lang="ts">

</script>

<template>
    <nav>
      <img src="/img/logo.svg" alt="Camply" class="logo">
      <div class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
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
</style>