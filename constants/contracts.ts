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
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    43114: '0x12097e9755aBf710166D0027c1a2ef7609833D74',
    80001: '0x22b5Ec130b65EF85C83cF9e6bEa5ac8e76bea5db',
  },
  pool: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    80001: '0x1b6C79E47FD08c238E324a1f1bcE0E0b77779D79',
  },
  collateral: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    80001: '0xaF8804588B3A6d6FAD3764ad8610735Aee7d0d6d',
  },
  borrow_token: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    80001: '0xd7D1BB032C96bD2B071C6712fbb1d97b6dD4c557',
  },
  cbETH: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    80001: '0xaF8804588B3A6d6FAD3764ad8610735Aee7d0d6d',
  },
}
