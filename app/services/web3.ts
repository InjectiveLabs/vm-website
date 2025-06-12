import { BigNumberInBase } from '@injectivelabs/utils'
import { getEthereumAddress } from '@injectivelabs/sdk-ts'
import { http, toHex, encodeFunctionData, createPublicClient } from 'viem'
import { ZuuContractAbi } from '@/app/data/abi'
import {
  testnetRpcUrl,
  testnetChainConfig,
  ZuuContractAddress
} from '@/app/utils/constants'

const estimateGas = async ({
  abi,
  args,
  address,
  functionName
}: {
  abi: any[]
  args: any[]
  functionName: string
  address: `0x${string}`
}) => {
  const client = createPublicClient({
    chain: testnetChainConfig,
    transport: http(testnetRpcUrl)
  })

  return await client.estimateContractGas({
    abi,
    args,
    address,
    functionName,
    account: address
  })
}

export const getFeeGasEstimate = async () => {
  const client = createPublicClient({
    chain: testnetChainConfig,
    transport: http(testnetRpcUrl)
  })

  // const { maxFeePerGas, maxPriorityFeePerGas } =
  //   await client.estimateFeesPerGas()

  const gas = await client.getGasPrice()

  // Eip1559FeesNotSupportedError: Chain does not support EIP-1559 fees.
  console.log({ gas })

  return new BigNumberInBase(gas.toString()).times(3).toFixed()
}

export const prepareMintTransaction = async ({
  injectiveAddress
}: {
  injectiveAddress: string
}) => {
  // const gas = await estimateGas({
  //   abi: ZuuContractAbi,
  //   args: [getEthereumAddress(injectiveAddress), 100_000_000],
  //   address: getEthereumAddress(injectiveAddress) as any,
  //   functionName: 'mint'
  // })

  // console.log('Estimated gas for minting:', gas)
  // console.log(
  //   'gas with buffer',
  //   new BigNumberInBase(gas.toString()).times(10).toFixed()
  // )

  return {
    to: ZuuContractAddress,
    from: getEthereumAddress(injectiveAddress),
    data: encodeFunctionData({
      abi: ZuuContractAbi,
      functionName: 'mint',
      args: [
        getEthereumAddress(injectiveAddress), // recipient address
        100_000_000
      ]
    }),
    type: toHex(0),
    value: toHex(0),
    // gas: toHex(gas),
    gasLimit: toHex(10_000_000),
    gasPrice: toHex(160_000_000), // 0.16
    chainId: toHex(testnetChainConfig.id)
  }
}
