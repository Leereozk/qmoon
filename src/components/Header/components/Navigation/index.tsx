import CN from 'classnames'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { WalletDialogContext } from '@/components'

const baseClassNames = CN('hover:text-primary', 'font-semibold', 'transition-colors', 'duration-300')
const defaultClassNames = CN(baseClassNames, 'text-gray-300')
const activeClassNames = CN(baseClassNames, 'text-yellow-300')

import cn from './index.module.css'

export const Navigation = () => {
    const { walletDialogApi } = useContext(WalletDialogContext)

    return (
        <nav className="hidden md:block">
            <ul className={CN('flex', 'space-x-8', cn.list)}>
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
                {/*<li>*/}
                {/*    <NavLink className={({ isActive }) => isActive ? activeClassNames : defaultClassNames }*/}
                {/*             to="/projects">Projects</NavLink>*/}
                {/*</li>*/}
                <li>
                    <button onClick={() => walletDialogApi.show()} className="cursor-pointer font-bold bg-yellow-300 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-colors duration-300">
                        Wallet Connect
                    </button>
                </li>
            </ul>
        </nav>
    )
}