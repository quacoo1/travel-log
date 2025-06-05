<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],

  htmlAttrs: {
    lang: 'en',
  },
})

const title = 'Travel Log'
const description = 'Simple travel log built with nuxt.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
