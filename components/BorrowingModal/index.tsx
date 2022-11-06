import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { CONTRACTS } from 'constants/contracts'
import { POOL_ABI } from 'constants/abis/poolAbi'
import { GENERICERC20_ABI } from 'constants/abis/genericerc20abi'
import { ethers } from 'ethers'
export interface Loan {
  borrowerAddress: string // not shown here
  collateralTokenAddress: string // not shown here
  collateralToken: string
  collateralAmount: number
  amtUSDCToBorrow: number
  loanDuration: string
  status: string
}

export default function GlobalLoanModal({
  loan,
  open,
  setIsOpen,
}: {
  loan: Loan
  open: boolean
  setIsOpen: Function
}) {
  const repayTokens = async (event: any) => {
    event.preventDefault()
    const { ethereum } = window
    if (ethereum) {
      const ethereum = (window as any).ethereum
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      const provider = new ethers.providers.Web3Provider(ethereum)
      const walletAddress = accounts[0] // first account in MetaMask
      const { chainId } = await provider.getNetwork()
      const POOL_CONTRACT_ADDR = CONTRACTS.pool[chainId]
      const poolContract = new ethers.Contract(
        POOL_CONTRACT_ADDR,
        POOL_ABI,
        provider,
      )

      const COLLATERAL_ADDR = CONTRACTS[loan.collateralToken][chainId]

      const borrowTokenContract = new ethers.Contract(
        CONTRACTS.borrow_token[chainId],
        GENERICERC20_ABI,
        provider,
      )

      const amountToPayoff = '10000000000000000'
      // await poolContract.amountToPayoff(
      //   await poolContract.getPositionKey(
      //     walletAddress,
      //     COLLATERAL_ADDR,
      //     borrowTokenContract.address,
      //   ),
      // )

      const position = await poolContract.positions(
        await poolContract.getPositionKey(
          walletAddress,
          COLLATERAL_ADDR,
          borrowTokenContract.address,
        ),
      )
      const signer = provider.getSigner(walletAddress)
      await borrowTokenContract.connect(signer).approve(
        POOL_CONTRACT_ADDR,
        amountToPayoff, //collateralAmount
      )

      await poolContract.connect(signer).repay(
        position.borrower, //collateralToken Address
        position.collateral, //collateralAmount
      )
    }
    setIsOpen(false) // don't delete this
  }

  return (
    <Dialog
      open={open}
      className="relative z-10"
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon
                  className="h-6 w-6 text-red-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Lend Tokens
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-md text-gray-900">Token</p>
                  <p className="text-sm text-gray-500">
                    {loan.collateralToken}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">Collateral Amount</p>
                  <p className="text-sm text-gray-500">
                    {loan.collateralAmount}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">
                    Amount of USDC to Borrow
                  </p>
                  <p className="text-sm text-gray-500">
                    {loan.amtUSDCToBorrow}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">Loan Duration</p>
                  <p className="text-sm text-gray-500">{loan.loanDuration}</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={repayTokens}
              >
                Repay
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-500 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-gray-100 hover:bg-gray-200 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
