import React, { useState } from 'react'
import BorrowingModal, { Loan } from 'components/BorrowingModal'
import { CONTRACTS } from 'constants/contracts'
import { POOL_ABI } from 'constants/abis/poolAbi'
import { ethers } from 'ethers'

let loans: Loan[] = [
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

export default function BorrowingPage() {
  const [currentlySelectedLoan, setCurrentlySelectedLoan] = useState(loans[0])
  const [isViewingLoan, setIsViewingLoan] = useState(false)

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

      loans = []

      for (let i = 0; i < (await poolContract.numBorrows()); i++) {
        let borrower = await poolContract.borrows(i)
        const position = await poolContract.positions(
          await poolContract.getPositionKey(
            borrower,
            CONTRACTS.collateral[chainId],
            CONTRACTS.borrow_token[chainId],
          ),
        )
        console.log(position)

        let curStatus = ''
        if (position.isActive) {
          curStatus = 'Active'
        } else if (position.isFilled) {
          curStatus = 'Filled'
        } else if (position.isSettled) {
          curStatus = 'Settled'
        } else {
          curStatus = 'Error'
        }

        var a = new Date(position.expiryTime.toNumber() * 1000)
        let dateStr = a.toLocaleDateString('en-US') + ' '
        dateStr += a.toLocaleTimeString('en-US')

        const loan: Loan = {
          borrowerAddress: position.borrower,
          collateralTokenAddress: position.collateral,
          collateralToken: 'cbETH',
          collateralAmount: position.collateralAmount.toNumber(),
          amtUSDCToBorrow: position.borrowAmount.toNumber(),
          loanDuration: dateStr,
          status: curStatus,
        }
        loans.push(loan)
      }
      console.log('items in loans' + loans.length)
      // setIsOpen(false) // don't delete this
    }
  }

  ;(async () => await lendTokens())()

  return (
    <div className="px-4 sm:px-6 lg:px-8">
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
                    <BorrowingModal
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
