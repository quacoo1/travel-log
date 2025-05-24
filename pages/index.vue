<script setup lang="ts">
import { UContainer } from '#components'
</script>

<template>
  <UContainer>
    <div class="relative isolated mt-8 py-20">
      <div class="absolute bg-black/10 -z-10 inset-0" />
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Travel Log
        </h1>
        <p class="mt-8 max-w-2xl mx-auto text-pretty text-muted sm:text-lg">
          Keep track of you travels and adventures. Add locations, photos, and notes to create a digital journal of you journeys.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <UButton trailing-icon="hugeicons:github-01" size="xl">
            Sign in with github
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
