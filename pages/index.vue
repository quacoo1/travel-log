<script setup lang="ts">
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>

<template>
  <UContainer class="mt-16">
    <div class="relative isolated py-20 border border-accented border-dashed">
      <div class="absolute -z-10 inset-0" />
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance md:text-7xl">
          Travel Log
        </h1>
        <p class="mt-8 max-w-2xl mx-auto text-pretty text-muted sm:text-lg">
          Keep track of you travels and adventures. Add locations, photos, and notes to create a digital journal of you journeys.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <UButton v-if="user" to="/dashboard" size="xl">
            Start Logging
          </UButton>
          <AuthButton v-else size="xl" extended-label />
        </div>
      </div>
    </div>
  </UContainer>
</template>
