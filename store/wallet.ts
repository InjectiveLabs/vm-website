import { defineStore } from 'pinia'

type WalletStoreState = {}

const initialStateFactory = (): WalletStoreState => ({})

export const useWalletStore = defineStore('wallet', {
  state: (): WalletStoreState => initialStateFactory(),
  actions: {
    async connect() {
      const sharedWalletStore = useSharedWalletStore()

      await sharedWalletStore.connectMetamask()
    }
  }
})
