import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import { coinbaseWallet, hooks as coinbaseWalletHooks } from 'connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from 'connectors/metaMask'
import { hooks as networkHooks, network } from 'connectors/network'
import { hooks as walletConnectHooks, walletConnect } from 'connectors/walletConnect'
import { hooks as gnosisSafeHooks, gnosisSafe } from 'connectors/gnosisSafe'

import { getName } from 'utils/web3'

const connectors: [MetaMask | WalletConnect | CoinbaseWallet | Network | GnosisSafe, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
  [gnosisSafe, gnosisSafeHooks],
]

interface LayoutProps {
  children: JSX.Element
}
export default function Provider({ children }: LayoutProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <>{children}</>
    </Web3ReactProvider>
  )
}
