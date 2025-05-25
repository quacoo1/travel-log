<script setup lang="ts">
import { UButton } from '#components'
</script>

<template>
  <header class="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-default px-4">
    <UButton variant="ghost" icon="hugeicons:maps-location-02" color="neutral" to="/">
      Travel Log
    </UButton>
    <div class="flex items-center space-x-2">
      <AppThemeToggle />
      <UButton trailing-icon="hugeicons:github-01" size="lg">
        Sign In
      </UButton>
    </div>
  </header>
</template>
