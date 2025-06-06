<script setup lang="ts">
const route = useRoute()
const error = route.query.error || 'an unknown error occured'
</script>

<template>
  <div>
    <UAlert icon="solar:danger-triangle-line-duotone" variant="subtle" color="error" :ui="{ icon: 'size-6', title: 'text-md items-center' }">
      <template #title>
        Oh no {{ error }}
      </template>
    </UAlert>
    <div class="mt-8">
      <UButton to="/" icon="solar:arrow-left-bold">
        Home
      </UButton>
    </div>
  </div>
</template>
