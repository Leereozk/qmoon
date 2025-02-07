import { useMemo, PropsWithChildren, useState } from 'react'

import { WalletDialogContext } from './context'

export const WalletDialogProvider = (props: PropsWithChildren) => {
    const { children } = props
    const [isOpened, setIsOpened] = useState<boolean>(false)

    const value = useMemo(() => ({
        isOpened,
        walletDialogApi: {
            hide: () => {
                setIsOpened(false)
            },
            show: () => {
                setIsOpened(true)
            },
        }
    }), [isOpened, setIsOpened])
    return <WalletDialogContext.Provider value={value}>{children}</WalletDialogContext.Provider>
}