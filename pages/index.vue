<script setup lang="ts">
import { web3Broadcaster } from '@shared/WalletService'
import { getInjectiveAddress } from '@injectivelabs/sdk-ts'
import { ZuuContractAddress } from '@/app/utils/constants'
import { prepareMintTransaction } from '@/app/services/web3'

const walletStore = useWalletStore()
const sharedWalletStore = useSharedWalletStore()

function connectMetamask() {
  walletStore.connect()
}

async function sendTx() {
  const data = await prepareMintTransaction({
    injectiveAddress: sharedWalletStore.injectiveAddress
  })

  try {
    const tx = await web3Broadcaster.sendTransaction({
      tx: data as any,
      address: sharedWalletStore.address
    })

    console.log(tx)
  } catch (error) {
    console.error('Error sending transaction:', error)
  }
}
</script>

<template>
  <div>
    <!-- <UButton @click="connectMetamask">Connect!</UButton> -->

    <WalletTurnkey />

    <div class="flex items-center flex-col">
      <span>Connected Address:</span>
      <pre>{{ sharedWalletStore.injectiveAddress }}</pre>
      <pre>{{ sharedWalletStore.address }}</pre>
      <span>Connected Address:</span>
      <pre>{{ ZuuContractAddress }}</pre>
      <pre>{{ getInjectiveAddress(ZuuContractAddress) }}</pre>
    </div>
    <!-- code for blink goes here -->
    <UButton @click="sendTx">Send tx!</UButton>
  </div>
</template>
