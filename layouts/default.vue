<script lang="ts" setup>
const authStore = useAuthStore()
await authStore.init()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main>
      <UContainer class="mt-16">
        <slot />
      </UContainer>
    </main>
  </div>
</template>
