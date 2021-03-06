
export const proxyABI: any = {
  'constant': false,
  'inputs': [
    {
      'name': 'dest',
      'type': 'address'
    },
    {
      'name': 'howToCall',
      'type': 'uint8'
    },
    {
      'name': 'calldata',
      'type': 'bytes'
    }
  ],
  'name': 'proxy',
  'outputs': [
    {
      'name': 'success',
      'type': 'bool'
    }
  ],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}

export const proxyAssertABI: any = {
  'constant': false,
  'inputs': [
    {
      'name': 'dest',
      'type': 'address'
    },
    {
      'name': 'howToCall',
      'type': 'uint8'
    },
    {
      'name': 'calldata',
      'type': 'bytes'
    }
  ],
  'name': 'proxyAssert',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}
