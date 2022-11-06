import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export interface Loan {
  asset: string,
  title: string,
  department: string,
  email: string,
  role: string,
  image: string,
}

export default function LendModal({ loan, open, setIsOpen }: { loan: Loan, open: boolean, setIsOpen: Function }) {
  return (
    <Dialog open={open} className="relative z-10" onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Lend Tokens
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-md text-gray-900">
                    Token
                  </p>
                  <p className="text-sm text-gray-500">
                    {loan.asset}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">
                    Collateral Amount
                  </p>
                  <p className="text-sm text-gray-500">
                    {loan.title}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">
                    Date
                  </p>
                  <p className="text-sm text-gray-500">
                    12/12/1212
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-md text-gray-900">
                    Status
                  </p>
                  <p className="text-sm text-gray-500">
                    Open
                  </p>
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
