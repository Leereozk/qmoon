import { useContext } from 'react'
import { WalletDialogContext } from '@/components'

export const Finish = () => {
    const { walletDialogApi } = useContext(WalletDialogContext)

    return (
        <div>
            <button
                onClick={() => walletDialogApi.show()}
                className="cursor-pointer font-bold bg-yellow-300 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-colors duration-300">Login to collect reward
            </button>
        </div>
    )
}