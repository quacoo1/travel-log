<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui'

defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  extendedLabel?: boolean
}>()

const authStore = useAuthStore()
const { loading, user } = storeToRefs(authStore)

const dropdownMenu = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'sign out',
      icon: 'solar:logout-2-line-duotone',
      to: '/dashboard/sign-out',
    },
  ],
])
</script>

<template>
  <UDropdownMenu v-if="!loading && user" :items="dropdownMenu">
    <UButton
      :size="size"
      variant="ghost" color="neutral" :avatar="{
        src: user.image || undefined,
        alt: user.name,
      }"
    >
      {{ user.name }}
    </UButton>
  </UDropdownMenu>

  <UButton
    v-else
    :loading="loading" loading-icon="svg-spinners:180-ring-with-bg"
    trailing-icon="bytesize:github" :size="size" :disabled="loading" :ui="{ trailingIcon: 'animate-none' }"
    :trailing="true" :leading="false" @click="authStore.signIn"
  >
    Sign in{{ extendedLabel ? ' with github' : '' }}
  </UButton>
</template>
