import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid'
import { ethers } from 'ethers'
import { CONTRACTS } from 'constants/contracts'
import { POOL_ABI } from 'constants/abis/poolabi'
import { GENERICERC20_ABI } from 'constants/abis/genericerc20abi'
import { chain } from 'lodash'
const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floy.dmiles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function NewLoan({ setIsOpen }: { setIsOpen: Function }) {
  const { ethereum } = window
  // if (ethereum) {
  //   const provider = ethers.getDefaultProvider()
  //   const POOL_CONTRACT_ADDR = '0x1b6C79E47FD08c238E324a1f1bcE0E0b77779D79'
  //   const poolContract = new ethers.Contract(
  //     POOL_CONTRACT_ADDR,
  //     POOL_ABI,
  //     provider,
  //   )
  // }

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
      const COLLATERAL_ADDR = CONTRACTS.collateral[chainId]
      const collateralTokenContract = new ethers.Contract(
        COLLATERAL_ADDR,
        GENERICERC20_ABI,
        provider,
      )

      const signer = provider.getSigner(walletAddress)
      await collateralTokenContract.connect(signer).approve(
        POOL_CONTRACT_ADDR,
        '100', //collateralAmount
      )

      await poolContract.connect(signer).create(
        COLLATERAL_ADDR, //collateralToken Address
        '100', //collateralAmount
        '10', //borrowAmount
        '1000000000000', //expiryTime
      )
    }
    // event.preventDefault()
    // console.log('hi')
    // console.log(event)
    // console.log(event.target.token.value)
    // console.log(event.target.amount.value)

    // const data = {
    //   token: event.target.token.value, // Name of Token
    //   amount: event.target.amount.value,
    //   _requestedBorrowAmount: event.target.interest.value,
    //   _expiryTime: event.target.duration.value,
    // }
    // console.log(data)
  }

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    onSubmit={handleSubmit}
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-indigo-700 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            New Loan
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-indigo-300">
                            Create your loan here.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pt-6 pb-5">
                            <fieldset>
                              <legend className="text-sm font-medium text-gray-900">
                                Token
                              </legend>
                              <div className="mt-2 space-y-5">
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-5 items-center">
                                    <input
                                      id="privacy-public"
                                      name="token"
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      defaultChecked
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy-public"
                                      className="font-medium text-gray-900"
                                    >
                                      Token 1
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-5 items-center">
                                      <input
                                        id="privacy-private-to-project"
                                        name="token"
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm">
                                      <label
                                        htmlFor="privacy-private-to-project"
                                        className="font-medium text-gray-900"
                                      >
                                        Token 2
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-5 items-center">
                                      <input
                                        id="privacy-private-to-project"
                                        name="token"
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm">
                                      <label
                                        htmlFor="privacy-private-to-project"
                                        className="font-medium text-gray-900"
                                      >
                                        Token 3
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <div>
                              <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Amount of Tokens
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="project-name"
                                  id="project-name"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <fieldset>
                              <legend className="text-sm font-medium text-gray-900">
                                Interest Rate
                              </legend>
                              <div className="mt-2 space-y-5">
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-5 items-center">
                                    <input
                                      id="privacy-public"
                                      name="interest"
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      defaultChecked
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy-public"
                                      className="font-medium text-gray-900"
                                    >
                                      10% APY
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-5 items-center">
                                      <input
                                        id="privacy-private-to-project"
                                        name="interest"
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm">
                                      <label
                                        htmlFor="privacy-private-to-project"
                                        className="font-medium text-gray-900"
                                      >
                                        15% APY
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset>
                              <legend className="text-sm font-medium text-gray-900">
                                Loan Duration
                              </legend>
                              <div className="mt-2 space-y-5">
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-5 items-center">
                                    <input
                                      id="privacy-public"
                                      name="duration"
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      defaultChecked
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy-public"
                                      className="font-medium text-gray-900"
                                    >
                                      4 Weeks
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-5 items-center">
                                      <input
                                        id="privacy-private-to-project"
                                        name="duration"
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm">
                                      <label
                                        htmlFor="privacy-private-to-project"
                                        className="font-medium text-gray-900"
                                      >
                                        8 Weeks
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-5 items-center">
                                      <input
                                        id="privacy-private"
                                        name="duration"
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm">
                                      <label
                                        htmlFor="privacy-private"
                                        className="font-medium text-gray-900"
                                      >
                                        16 Weeks
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
