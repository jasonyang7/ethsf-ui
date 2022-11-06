import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ethers } from 'ethers'
import { CONTRACTS } from 'constants/contracts'
import { POOL_ABI } from 'constants/abis/poolabi'
import { GENERICERC20_ABI } from 'constants/abis/genericerc20abi'

export interface Loan {
  asset: string
  title: string
  department: string
  email: string
  role: string
  image: string
}

export default function LendModal({
  loan,
  open,
  setIsOpen,
}: {
  loan: Loan
  open: boolean
  setIsOpen: Function
}) {
  const handleSubmit = async (event: any) => {
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

      const BORROW_TOKEN_ADDR = CONTRACTS.borrow_token[chainId]
      const borrowTokenContract = new ethers.Contract(
        BORROW_TOKEN_ADDR,
        GENERICERC20_ABI,
        provider,
      )

      const signer = provider.getSigner(walletAddress)
      await borrowTokenContract.connect(signer).approve(
        POOL_CONTRACT_ADDR,
        '100', //collateralAmount
      )

      await poolContract.connect(signer).fill(
        walletAddress, //borrower address
        CONTRACTS.collateral[chainId], //collateral token address
      )
    }
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
                  <p className="text-sm text-gray-500">{loan.asset}</p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">Collateral Amount</p>
                  <p className="text-sm text-gray-500">{loan.title}</p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">Date</p>
                  <p className="text-sm text-gray-500">12/12/1212</p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">Status</p>
                  <p className="text-sm text-gray-500">Open</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-500 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-gray-100 hover:bg-gray-200 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
