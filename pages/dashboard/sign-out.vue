<script setup lang="ts">
const authStore = useAuthStore()

onMounted(() => authStore.signOut())
</script>

<template>
  <UCard>
    <div class="flex justify-center">
      <UIcon size="52" name="svg-spinners:180-ring-with-bg" />
    </div>
  </UCard>
</template>
