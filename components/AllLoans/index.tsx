import React, { useState } from 'react'
import NewLoan from 'components/NewLoan'
import GlobalLoanModal, { Loan } from 'components/GlobalLoanModal'
import { CONTRACTS } from 'constants/contracts'
import { POOL_ABI } from 'constants/abis/poolAbi'
import { GENERICERC20_ABI } from 'constants/abis/genericerc20abi'
import { ethers } from 'ethers'

const loans: Loan[] = [
  {
    borrowerAddress: '0xborrower address1',
    collateralTokenAddress: '0xcollateral token address1',
    collateralToken: 'cbETH',
    collateralAmount: 1.25,
    amtUSDCToBorrow: 1234,
    loanDuration: '4 Weeks',
    status: 'Pending',
  },
  {
    borrowerAddress: '0xborrower address2',
    collateralTokenAddress: '0xcollateral token address2',
    collateralToken: 'cbETH',
    collateralAmount: 1.5,
    amtUSDCToBorrow: 124,
    loanDuration: '8 Weeks',
    status: 'Pending',
  },
  {
    borrowerAddress: '0xborrower address3',
    collateralTokenAddress: '0xcollateral token address3',
    collateralToken: 'cbETH',
    collateralAmount: 2.25,
    amtUSDCToBorrow: 345,
    loanDuration: '16 Weeks',
    status: 'Pending',
  },
]

export default function AllLoans() {
  const [currentlySelectedLoan, setCurrentlySelectedLoan] = useState(loans[0])
  const [isViewingLoan, setIsViewingLoan] = useState(false)
  const [isCreatingLoan, setIsCreatingLoan] = useState(false)

  const lendTokens = async () => {
    // event.preventDefault()
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

      for (let i = 0; i < (await poolContract.numBorrows()); i++) {
        // for (let i = 0; i < 1; i++) {
        let borrower = await poolContract.borrows(i)
        const position = await poolContract.positions(
          await poolContract.getPositionKey(
            borrower,
            CONTRACTS.collateral[chainId],
            CONTRACTS.borrow_token[chainId],
          ),
        )
        console.log(position)
      }

      // setIsOpen(false) // don't delete this
    }
  }

  lendTokens()

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-3 flex flex-col items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          onClick={() => setIsCreatingLoan(!isCreatingLoan)}
        >
          Borrow
        </button>
        {isCreatingLoan && <NewLoan setIsOpen={setIsCreatingLoan} />}
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Collateral Token
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Collateral Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Amount of USDC to Borrow
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Loan Duration
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {loans.map((loan) => (
                    <tr
                      key={loan.borrowerAddress + loan.collateralTokenAddress}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        {/* <div className="flex items-center"> */}
                        {/* <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                          </div> */}
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {loan.collateralToken}
                          </div>
                        </div>
                        {/* </div> */}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {loan.collateralAmount}
                        </div>
                        {/* <div className="text-gray-500">{person.department}</div> */}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {loan.amtUSDCToBorrow}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {loan.loanDuration}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                          Pending
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => {
                            setIsViewingLoan(!isViewingLoan)
                            setCurrentlySelectedLoan(loan)
                          }}
                        >
                          View<span className="sr-only">test button value</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {isViewingLoan && (
                    <GlobalLoanModal
                      loan={currentlySelectedLoan}
                      open={isViewingLoan}
                      setIsOpen={setIsViewingLoan}
                    />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
