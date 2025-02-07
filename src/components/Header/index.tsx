import { useCallback, useState } from 'react'

import { Logo } from '@/components'

import { MobileMenuButton, Navigation, MobileMenu } from './components'

export const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    const onMobileMenuToggle = useCallback(() => {
        setIsMenuOpened(!!isMenuOpened ? false : true)
    }, [isMenuOpened])

    return (
        <header className="shadow-neutral-900 bg-black shadow-sm sticky top-0 z-50">
            <div className="container flex mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 items-center justify-between px-4">
                <Logo />
                <MobileMenuButton onMobileMenuToggle={onMobileMenuToggle} />
                <Navigation />
            </div>
            <MobileMenu isMenuOpened={isMenuOpened} />
        </header>
    )
}
