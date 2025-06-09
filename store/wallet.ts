type WalletStoreState = {}

const initialStateFactory = (): WalletStoreState => ({})

export const useAppStore = defineStore('wallet', {
  state: (): WalletStoreState => initialStateFactory(),
  actions: {}
})
