<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { isRouteLoading } from '../router'
import Logo from './loader/logo.vue'
import LogoAnimated from './loader/logoAnimated.vue'

const route = useRoute()

const loaderComponentByRoute = {
  home: LogoAnimated,
  services: Logo,
} as const satisfies Record<string, Component>

type LoaderRouteName = keyof typeof loaderComponentByRoute

const loaderComponent = computed<Component>(() => {
  const name = route.name as LoaderRouteName | null
  return name ? loaderComponentByRoute[name] : Logo
})
</script>

<template>
  <Transition name="loader-fade">
    <div v-if="isRouteLoading" class="page-loader">
      <component :is="loaderComponent" class="loader-icon" />
    </div>
  </Transition>
</template>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loader-icon {
  width: 200px;
  height: 200px;
}

.loader-fade-leave-active {
  transition: opacity 0.25s ease;
}

.loader-fade-leave-to {
  opacity: 0;
}
</style>
