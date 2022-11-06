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
    80001: '0xe52762E01066A778878cE08E55d306DfF96d8ead',
  },
  collateral: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    80001: '0x16cf61259Ddf6C159139943AD31Aa86B3A657C69',
  },
  borrow_token: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    80001: '0x08dd5c3012c4214bb02E91d37809EFDD8a154b47',
  },
  cbETH: {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    80001: '0x16cf61259Ddf6C159139943AD31Aa86B3A657C69',
  },
}
