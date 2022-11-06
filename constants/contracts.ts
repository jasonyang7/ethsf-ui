import { TokenId } from './tokens'
import { ZERO_ADDRESS } from './blockchain'

export interface Vault {
  address: string
  underlyingToken: TokenId
}

export interface Address {
  1: string
  137: string
  [key: string]: string
}

export type ContractId = 'example' | 'example2' | 'example3'

/*
* DEV: Add contract addresses below, this is chain agnostic
/*/
export const VAULTS: { [key in ContractId]: Vault } = {
  example: {
    address: ZERO_ADDRESS,
    underlyingToken: 'usdc',
  },
  example2: {
    address: ZERO_ADDRESS,
    underlyingToken: 'dai',
  },
  example3: {
    address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
    underlyingToken: 'usdte',
  },
}

export const CONTRACTS: { [key: string]: Address } = {
  multicall: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    100: '0xa6a1967bfaDc1E457403310548282F96F6eA5116',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    420: '0xa6a1967bfadc1e457403310548282f96f6ea5116',
    43114: '0x12097e9755aBf710166D0027c1a2ef7609833D74',
    80001: '0x9A548059D1931816aA7Ec2c31938D4C0254a2DB8',
    9001: '0x6C7661e66256eaEb3B06d397089cda7C025b61b3',
  },
  pool: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    100: '0x1b6C79E47FD08c238E324a1f1bcE0E0b77779D79',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    420: '0x1b6C79E47FD08c238E324a1f1bcE0E0b77779D79',
    80001: '0x653854F0309DD79637a9427683CbeFE1b5e1a953',
    9001: '0xa6a1967bfaDc1E457403310548282F96F6eA5116',
  },
  collateral: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    100: '0xDc8EC95Bc5C3B57EbdA4557A2CE6201cb916B9E9',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    420: '0xDc8EC95Bc5C3B57EbdA4557A2CE6201cb916B9E9',
    80001: '0xD603CA637fAC9490E263787E1f3AD580717Dc081',
    9001: '0xaF8804588B3A6d6FAD3764ad8610735Aee7d0d6d',
  },
  cbETH: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    100: '0xDc8EC95Bc5C3B57EbdA4557A2CE6201cb916B9E9',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    420: '0xDc8EC95Bc5C3B57EbdA4557A2CE6201cb916B9E9',
    80001: '0xD603CA637fAC9490E263787E1f3AD580717Dc081',
    9001: '0xaF8804588B3A6d6FAD3764ad8610735Aee7d0d6d',
  },
  borrow_token: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    100: '0xd7D1BB032C96bD2B071C6712fbb1d97b6dD4c557',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    420: '0xd7D1BB032C96bD2B071C6712fbb1d97b6dD4c557',
    80001: '0x4379773A0def71489BF4d0C3734CE0b66c9Ef4bd',
    9001: '0xDc8EC95Bc5C3B57EbdA4557A2CE6201cb916B9E9',
  },
}
