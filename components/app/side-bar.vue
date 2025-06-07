<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const isSidebarOpen = useCookie<boolean>('_sidebarOpenStatus')
isSidebarOpen.value = (typeof isSidebarOpen.value === 'undefined') ? true : isSidebarOpen.value

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

const toolTopText = computed(() => isSidebarOpen.value ? 'expand' : 'colapse')

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Locations',
      description: 'Find Previously visited locations',
      icon: 'solar:map-linear',
      to: '/dashboard',
    },
    {
      label: 'Add Location',
      description: 'Add new visited location',
      icon: 'solar:map-point-add-linear',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'solar:logout-linear',
      to: '/dashboard/sign-out',
    },
  ],
])
</script>

<template>
  <UCard class="rounded-none transition-all" :class="[isSidebarOpen ? 'w-64' : 'w-13']" variant="subtle" :ui="{ body: 'sm:p-2 p-2' }">
    <div class="flex justify-end mb-4">
      <UTooltip :text="toolTopText">
        <UButton icon="solar:sidebar-minimalistic-linear" variant="ghost" size="lg" color="neutral" @click="toggleSidebar" />
      </UTooltip>
    </div>
    <UNavigationMenu :ui="{ link: 'text-base', linkLeadingIcon: 'size-6' }" orientation="vertical" :collapsed="!isSidebarOpen" :items="items" class="data-[orientation=vertical]:w-full" />
  </UCard>
</template>
