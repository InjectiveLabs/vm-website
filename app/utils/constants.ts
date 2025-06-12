export const ZuuContractAddress = '0xe29b2f523474e7be55A53094B321610A74286D4D'
export const testnetRpcUrl = 'https://devnet.json-rpc.injective.dev'
// 'https://k8s.testnet.json-rpc.injective.network/'

export const testnetChainConfig = {
  id: 1439,
  name: 'INJ EVM Public Testnet',
  rpcUrls: {
    default: {
      http: [testnetRpcUrl]
    }
  },
  nativeCurrency: {
    name: 'Injective',
    symbol: 'INJ',
    decimals: 18
  }
}
