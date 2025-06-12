import { defineStore } from 'pinia'

type AppStoreState = {}

const initialStateFactory = (): AppStoreState => ({})

export const useAppStore = defineStore('app', {
  state: (): AppStoreState => initialStateFactory(),
  actions: {}
})
