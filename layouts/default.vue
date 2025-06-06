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
