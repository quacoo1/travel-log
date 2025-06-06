<script lang="ts" setup>
defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  extendedLabel?: boolean
}>()
const authStore = useAuthStore()
const { loading } = storeToRefs(authStore)
</script>

<template>
  <UButton :loading="loading" loading-icon="svg-spinners:180-ring-with-bg" trailing-icon="bytesize:github" :size="size" @click="authStore.signIn">
    Sign in{{ extendedLabel ? ' with github' : '' }}
  </UButton>
</template>
