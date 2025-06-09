import { TurnkeyWalletSessionException } from '@injectivelabs/exceptions'
import type { ThrownException } from '@injectivelabs/exceptions'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log(error, context)
    console.warn(error, context, (error as any)?.stack)
  }

  const errorHandler = (error: ThrownException) => {
    const sharedWalletStore = useSharedWalletStore()

    if (error.name === TurnkeyWalletSessionException.errorClass) {
      sharedWalletStore.logout()
    }

    console.error(error.toCompactError())
    console.warn(error.toObject())
  }

  return {
    provide: {
      onError: errorHandler
    }
  }
})
