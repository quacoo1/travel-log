import { createAuthClient } from 'better-auth/vue'

const authClient = createAuthClient()

export const useAuthStore = defineStore('authStore', () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null)

  async function init() {
    const data = await authClient.useSession(useFetch)
    session.value = data
  }
  const loading = computed(() => session.value?.isPending)

  const user = computed(() => session.value?.data?.user)

  async function signIn() {
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/dashboard',
      errorCallbackURL: '/error',
    })
  }

  async function signOut() {
    await authClient.signOut()
    navigateTo('/')
  }
  return { loading, init, signIn, user, signOut }
})
