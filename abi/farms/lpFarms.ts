import { utils, ContractInterface} from 'ethers'

const LPFarmABI: Exclude<ContractInterface, utils.Interface> = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'pid',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Deposit',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'previousOwner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'pid',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Withdraw',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'rewardUser',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_allocPoint',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_lpToken',
        'type': 'address'
      },
      {
        'internalType': 'bool',
        'name': '_withUpdate',
        'type': 'bool'
      }
    ],
    'name': 'add',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'bytes32',
        'name': 'c__0x5f5fe6a3',
        'type': 'bytes32'
      }
    ],
    'name': 'c_0x5f5fe6a3',
    'outputs': [],
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_amountToWithdraw',
        'type': 'uint256'
      }
    ],
    'name': 'calcRedemptionFee',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'deposit',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'getLPFarmsInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'lpStakePeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lpRedemptionFeeRate',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lpTotalAllocPoint',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lpStartBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lpActualRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lpOneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lpInitRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lpSendRewards',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'lpRedemptionFeeReceiver',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'lpRewardToken',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'getReward',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'getRewardPerBlock',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'getUserInfo',
    'outputs': [
      {
        'internalType': 'uint256[]',
        'name': 'stakeAmounts',
        'type': 'uint256[]'
      },
      {
        'internalType': 'uint256[]',
        'name': 'rewardAmounts',
        'type': 'uint256[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_rewardToken',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_redemptionFeeReceiver',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_rewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_startBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_stakePeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_maxHalvingYears',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_redemptionFeeRate',
        'type': 'uint256'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'massUpdatePools',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'maxHalvingYears',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'oneYearBlockNum',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'pendingReward',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'poolInfo',
    'outputs': [
      {
        'internalType': 'contract IERC20Upgradeable',
        'name': 'lpToken',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'allocPoint',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lastRewardBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'accRewardPerShare',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'poolLength',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'redemptionFeeRate',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'redemptionFeeReceiver',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'renounceOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'rewardPerBlock',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'rewardToken',
    'outputs': [
      {
        'internalType': 'contract IERC20Upgradeable',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_allocPoint',
        'type': 'uint256'
      },
      {
        'internalType': 'bool',
        'name': '_withUpdate',
        'type': 'bool'
      }
    ],
    'name': 'set',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      }
    ],
    'name': 'setOneYearBlockNum',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_rewardPerBlock',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardPerBlock',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_rewardToken',
        'type': 'address'
      }
    ],
    'name': 'setRewardToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_stakePeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_redemptionFeeRate',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_redemptionFeeReceiver',
        'type': 'address'
      }
    ],
    'name': 'setStakeSetting',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'stakePeriod',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'startBlock',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'totalAllocPoint',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'contract IERC20Upgradeable',
        'name': 'tokenAddress',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'updatePool',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'userInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'rewardDebt',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'userOperateTimestamp',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]

const enum LPFarmFunctions {
  ADD = 'add',
  CALCREDEMPTIONFEE = 'calcRedemptionFee',
  DEPOSIT = 'deposit',
  GETLPFARMSINFO = 'getLPFarmsInfo',
  GETREWARD = 'getReward',
  GETREWARDPERBLOCK = 'getRewardPerBlock',
  GETUSERINFO = 'getUserInfo',
  INITIALIZE = 'initialize',
  ONEYEARBLOCKNUM = 'oneYearBlockNum',
  PENDINGREWARD = 'pendingReward',
  POOLINFO = 'poolInfo',
  POOLLENGTH = 'poolLength',
  REDEMPTIONFEERATE = 'redemptionFeeRate',
  REWARDPERBLOCK = 'rewardPerBlock',
  REWARDTOKEN = 'rewardToken',
  STARTBLOCK = 'startBlock',
  TOTALALLOCPOINT = 'totalAllocPoint',
  WITHDRAW = 'withdraw'
}

const enum LPFarmEvents {
  OwnershipTransferred = 'OwnershipTransferred',
  Deposit = 'Deposit',
  Withdraw = 'Withdraw',
  RewardUser = 'rewardUser',
}

export {
  LPFarmABI,
  LPFarmFunctions,
  LPFarmEvents
}
