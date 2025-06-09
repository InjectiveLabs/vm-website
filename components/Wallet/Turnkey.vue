<script lang="ts" setup>
import { WalletConnectStatus } from '@shared/types'

const route = useRoute()
const router = useRouter()
const sharedWalletStore = useSharedWalletStore()
const { $onError } = useNuxtApp()

onMounted(() => {
  handleGoogleOAuth()
})

function connectTurnkey() {
  sharedWalletStore.connectTurnkeyGoogle().catch((error) => {
    console.log(error)
  })
}

function handleGoogleOAuth() {
  if (sharedWalletStore.isUserConnected) {
    return
  }

  if (!route.hash) {
    return
  }

  const params = new URLSearchParams(route.hash.substring(1))
  const idToken = params.get('id_token')

  if (!idToken) {
    return
  }

  router.replace({ hash: '' })

  sharedWalletStore
    .initTurnkeyGoogle(idToken)
    .catch($onError)
    .finally(() => {
      sharedWalletStore.walletConnectStatus = WalletConnectStatus.idle
    })
}
</script>

<template>
  <div>
    <UButton @click="connectTurnkey">Connect turnkey!</UButton>

    <pre>{{ { aaa: sharedWalletStore.injectiveAddress } }}</pre>
  </div>
</template>
