import { createContext } from 'react'

export const WalletDialogContext = createContext<{
    isOpened: boolean,
    walletDialogApi: {
        hide: () => void,
        show: () => void,
    }
}>({
    isOpened: false,
    walletDialogApi: {
        hide: () => {},
        show: () => {},
    }
})
