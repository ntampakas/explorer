import { config } from 'dotenv'
import { ethers } from 'ethers'
import pkg from 'hardhat'
const { ethers: hardhatEthers } = pkg
config()

export const DB_PATH = process.env.DB_PATH ?? ':memory:'

export const NETWORK = {
  // 'arbitrum-goerli': {
  //   provider: new ethers.providers.JsonRpcProvider(
  //     `https://arbitrum-goerli.infura.io/v3/${process.env.INFURA_KEY}`
  //   ),
  //   explorer: 'https://goerli.arbiscan.io',
  //   unirepAddress: '0x4D137bb44553d55AE6B28B5391c6f537b06C9cc3',
  // },
  // goerli: {
  //   provider: new ethers.providers.JsonRpcProvider(
  //     `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`
  //   ),
  //   explorer: 'https://goerli.etherscan.io',
  //   unirepAddress: '0x4D137bb44553d55AE6B28B5391c6f537b06C9cc3',
  // },
  // mumbai: {
  //   provider: new ethers.providers.JsonRpcProvider(
  //     `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY}`
  //   ),
  //   explorer: 'https://mumbai.polygonscan.com',
  //   unirepAddress: '0x4D137bb44553d55AE6B28B5391c6f537b06C9cc3',
  // },
  sepolia: {
    provider: new ethers.providers.JsonRpcProvider(
      `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`
    ),
    explorer: 'https://sepolia.etherscan.io',
    unirepAddress: '0x83cB6AF63eAfEc7998cC601eC3f56d064892b386',
  },
  // 'optimism-goerli': {
  //   provider: new ethers.providers.JsonRpcProvider(
  //     `https://optimism-goerli.infura.io/v3/${process.env.INFURA_KEY}`
  //   ),
  //   explorer: 'https://goerli-optimism.etherscan.io/',
  //   unirepAddress: '0x4D137bb44553d55AE6B28B5391c6f537b06C9cc3',
  // },
  fuji: {
    provider: new ethers.providers.JsonRpcProvider(
      `https://avalanche-fuji.infura.io/v3/${process.env.INFURA_KEY}`
    ),
    explorer: 'https://testnet.snowtrace.io',
    unirepAddress: '0x83cB6AF63eAfEc7998cC601eC3f56d064892b386',
  },
  // for test
  local: {
    provider: (await hardhatEthers.getSigners())[0].provider,
    unirepAddress: '0x83cB6AF63eAfEc7998cC601eC3f56d064892b386',
  },
}
