import { utils, CallOverrides, Contract, ContractInterface, Signer, providers } from 'ethers'
import { ERC20ABI, ERC20Functions } from '../../abi/erc20'
import { ReadableProvider, WriteableProvider } from '../../types'

export type ERC20Property = ERC20Functions.Name | ERC20Functions.Symbol | ERC20Functions.Version | ERC20Functions.Decimals | ERC20Functions.TotalSupply

export interface ERC20Config {
  contractAddress: string;
  gasIncreaseFactor: number;
  decimals?: number;
}

interface ContractConfig {
  addressOrName: string,
  contractInterface: ContractInterface,
  signerOrProvider: Signer | providers.Provider
}

export class ERC20Contract extends Contract {
  // interface = new utils.Interface(ERC20ABI)
  constructor({addressOrName, contractInterface, signerOrProvider}: ContractConfig) {
    super(addressOrName, contractInterface, signerOrProvider)
  }

  name () {
  }

  // Read contract data, need not sign
  private getContractFun<T extends ERC20Functions>(provider: ReadableProvider, fn: T) {
    // return new ERC20Contract(this.config.contractAddress, [this.interface.getFunction(fn)], provider)[fn]
  }

  // some contract function need sign and estimate gas fee
  private getContract<T extends ERC20Functions>(provider: WriteableProvider, fn: T) {
    // return new ERC20Contract(this.config.contractAddress, [this.interface.getFunction(fn)], provider)
  }

  public async getERC20Property(provider: ReadableProvider, fn: ERC20Property) {
    // return this.getContractFun(provider, fn)()
  }
}