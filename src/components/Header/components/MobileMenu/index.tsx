import CN from 'classnames'
import { createRef, useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { WalletDialogContext } from '@/components'

import cn from './index.module.css'

const baseClassNames = CN('block', 'py-2', 'hover:text-primary')
const defaultClassNames = CN(baseClassNames, 'text-gray-500')
const activeClassNames = CN(baseClassNames, 'text-red-500')

export const MobileMenu = (props: MobileMenuProps) => {
    const { isMenuOpened } = props
    const { walletDialogApi } = useContext(WalletDialogContext)
    const divRef = createRef<HTMLDivElement>()
    const [height, setHeight] = useState(0)
    useEffect(() => {
        setHeight(isMenuOpened ? divRef.current?.scrollHeight || 0 : 0)
    }, [isMenuOpened, setHeight])
    return (
        <nav id="mobile-menu"
             ref={divRef}
             className={CN(cn.mobileMenu, {
                 'hidden': !isMenuOpened,
             }, 'md:hidden', 'bg-gray-50', 'border-t', 'border-gray-200', 'transition-height', 'duration-300', 'ease-in-out')}
             style={{height: `${height}px`}}
        >
            <ul className="px-4 py-2">
                <li>
                    <NavLink className={({ isActive }) => isActive ? activeClassNames : defaultClassNames }
                             to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? activeClassNames : defaultClassNames }
                             to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? activeClassNames : defaultClassNames }
                             to="/team">Team</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? activeClassNames : defaultClassNames }
                             to="/roadmap">Roadmap</NavLink>
                </li>
                <li>
                    <button onClick={() => walletDialogApi.show()} className="font-bold bg-yellow-300 hover:bg-yellow-500 text-white px-4 py-2 rounded-md transition-colors duration-300">
                        Wallet Connect
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export type MobileMenuProps = {
    isMenuOpened: boolean
}