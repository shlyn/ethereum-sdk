import { BigNumberish, BigNumber, utils, Contract, CallOverrides } from 'ethers'
import { ERC20ABI } from '../abi/erc20'
import { ReadableProvider, WriteableProvider } from '../types'

export enum ERC20Functions {
  Name = 'name',
  Symbol = 'symbol',
  Version = 'version',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  Approve = 'approve',
  TransferFrom = 'transferFrom',
  BalanceOf = 'balanceOf',
  Transfer = 'transfer',
  ApproveAndCall = 'approveAndCall',
  Allowance = 'allowance'
}

export type ERC20Property = ERC20Functions.Name | ERC20Functions.Symbol | ERC20Functions.Version | ERC20Functions.Decimals | ERC20Functions.TotalSupply

export enum ERC20Events {
  Transfer = 'Transfer',
  Approval = 'Approval'
}

declare class ERC20Contract extends Contract {
  name: () => Promise<string>;
  symbol: () => Promise<string>;
  version: () => Promise<string>;
  decimals: () => Promise<number>;
  totalSupply: () => Promise<BigNumber>;
  balanceOf: (owner: string) => Promise<BigNumber>;
  allowance: (owner: string, spender: string) => Promise<BigNumber>;
  approve: (spender: string, value: BigNumberish) => Promise<boolean>;
  transferFrom: (from: string, to: string, value: BigNumberish) => Promise<boolean>;
  transfer: (to: string, value: BigNumberish) => Promise<boolean>;
  approveAndCall: (spender: string, value: BigNumberish, extraData: string) => Promise<boolean>;
}

export interface ERC20ContractConfig {
  contractAddress: string;
  gasIncreaseFactor: number;
  decimals: number | null;
}

export class ERC20Model {
  private config: ERC20ContractConfig;
  private interface = new utils.Interface(ERC20ABI)

  constructor(config: ERC20ContractConfig) {
    this.config = config
  }

  // Read contract data, need not sign
  private getContractFun<T extends ERC20Functions>(provider: ReadableProvider, fn: T) {
    return new ERC20Contract(this.config.contractAddress, [this.interface.getFunction(fn)], provider)[fn]
  }

  // some contract function need sign and estimate gas fee
  private getContract<T extends ERC20Functions>(provider: WriteableProvider, fn: T) {
    return new ERC20Contract(this.config.contractAddress, [this.interface.getFunction(fn)], provider)
  }

  public async getERC20Property(provider: ReadableProvider, fn: ERC20Property) {
    return this.getContractFun(provider, fn)()
  }

  public async getERC20Decimals(provider: ReadableProvider) {
    return this.config.decimals || this.getERC20Property(provider, ERC20Functions.Decimals)
  }

  public async balanceOf(provider: ReadableProvider, address: string) {
    const balance = await this.getContractFun(provider, ERC20Functions.BalanceOf)(address)
    const decimals = await this.getERC20Decimals(provider)
    return utils.formatUnits(balance, decimals)
  }

  public async allowance(provider: ReadableProvider, owner: string, spender: string) {
    const allowanceAmount = await this.getContractFun(provider, ERC20Functions.Allowance)(owner, spender)
    const decimals = await this.getERC20Decimals(provider)
    return utils.formatUnits(allowanceAmount, decimals)
  }

  public async approve(provider: WriteableProvider, spender: string, value: string) {
    const decimals = await this.getERC20Decimals(provider)
    const amount = utils.parseUnits(value, decimals)

    const contract = this.getContract(provider, ERC20Functions.Approve).connect(await provider.getSigner())
    const estimateGas = await contract.estimateGas.approve(spender, amount)
    const overrides: CallOverrides = {
      gasLimit: estimateGas.mul(this.config.gasIncreaseFactor)
    }
    return contract.approve(spender, amount, overrides)
  }

  /**
   * @TODO:
   * transferFrom: (from: string, to: string, value: BigNumberish) => Promise<boolean>;
   * transfer: (to: string, value: BigNumberish) => Promise<boolean>;
   * approveAndCall: (spender: string, value: BigNumberish, extraData: string) => Promise<boolean>;
   */
}