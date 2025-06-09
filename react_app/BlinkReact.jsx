import '@dialectlabs/blinks/index.css'

// The URLs in blinkApiUrl must be direct Blink provider URLs and not interstitials or website urls with actions.json

/**
 * Important: This component must be wrapped with <WalletProvider />
 * and <WalletModalProvider /> in your application.
 */

import { Blink, useBlink, useBlinksRegistryInterval } from '@dialectlabs/blinks'
import { useBlinkSolanaWalletAdapter } from '@dialectlabs/blinks/hooks/solana'

const App = () => {
  // URL of your endpoint (blink provider)
  const blinkApiUrl = '...'

  // Initiates adapter
  const { adapter } = useBlinkSolanaWalletAdapter(
    '<YOUR_RPC_URL_OR_CONNECTION>'
  )

  // Fetches the blink from the provided URL
  const { blink, isLoading } = useBlink({ url: blinkApiUrl })

  if (isLoading) return null

  return <Blink blink={blink} adapter={adapter} />
}
