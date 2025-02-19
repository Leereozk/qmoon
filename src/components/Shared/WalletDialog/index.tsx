import { Dialog, DialogTitle, DialogBackdrop, DialogPanel, CloseButton } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import Freighter from '@/assets/wallets/freighter.svg?react'
import Metamask from '@/assets/wallets/metamask.svg?react'
import Albedo from '@/assets/wallets/albedo.svg?react'
import Bullx from '@/assets/wallets/bullx.svg?react'

import { WalletDialogContext } from './context'

export const WalletDialog = () => {
    const { isOpened, walletDialogApi } = useContext(WalletDialogContext)
    return (
        <Dialog open={isOpened} onClose={walletDialogApi.hide} className="relative z-100">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="absolute right-0 top-0 pr-2 pt-2">
                            <CloseButton className="cursor-pointer text-gray-400 hover:text-blue-500">
                                <XMarkIcon width={24} height={24} />
                            </CloseButton>
                        </div>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <DialogTitle as="h2" className="text-center font-bold text-xl text-gray-900">
                                Connect Wallet
                            </DialogTitle>
                            <div className="mt-8 grid grid-cols-2 gap-4 justify-items-center">
                                <button className="flex justify-center cursor-pointer w-full p-3 bg-neutral-50 rounded-lg border border-neutral-50 hover:border-sky-300">
                                    <Albedo height={"24px"} />
                                </button>
                                <button className="flex justify-center cursor-pointer w-full p-3 bg-neutral-50 rounded-lg border border-neutral-50 hover:border-sky-300">
                                    <Bullx height={"24px"} />
                                </button>
                                <button className="flex justify-center cursor-pointer w-full p-3 bg-neutral-50 rounded-lg border border-neutral-50 hover:border-sky-300">
                                    <Freighter height={"24px"} />
                                </button>
                                <button className="flex justify-center cursor-pointer w-full p-3 bg-neutral-50 rounded-lg border border-neutral-50 hover:border-sky-300">
                                    <Metamask height={"24px"} />
                                </button>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-500">
                                    By connecting your wallet, you agree to <br />our  <NavLink className="underline" to="/terms-of-service">Terms of Use</NavLink> and <NavLink className="underline" to="/privacy-policy">Privacy Policy</NavLink>
                                </p>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
