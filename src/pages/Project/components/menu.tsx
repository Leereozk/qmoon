import CN from 'classnames'
import { useState, useCallback } from "react"

import { CheckCircleIcon } from "@heroicons/react/24/outline"

const baseClassNames = CN('flex', 'gap-x-3', 'rounded-md', 'p-2', 'pl-3', 'text-sm', 'font-semibold')
const activeClassNames = CN(baseClassNames, 'bg-gray-50', 'text-indigo-600')
const defaultClassNames = CN(baseClassNames, 'color-gray-700', 'hover:bg-gray-50', 'hover:color-indigo-600')

const readed = [0]

export const Menu = (props: MenuProps) => {
    const { onChange } = props
    const [activePage, setActivePage] = useState<number>(0)

    const onMenuClicked = useCallback((id: number) => {
        setActivePage(id)
        onChange(id)
        if (readed.indexOf(id) === -1) {
            readed.push(id)
        }
    }, [setActivePage])

    return (
        <div className="bg-white p-2 max-w-3xs w-full">
            <nav aria-label="Sidebar" className="flex flex-1 flex-col">
                <ul role="list" className="mx-2 acm">
                    <li>
                        <a href="#" className={activePage === 0 ? activeClassNames : defaultClassNames} onClick={() => onMenuClicked(0)}>
                            1. Bitcoin: The Digital Gold of the Modern Era
                            {readed.indexOf(0) !== -1 && (<span aria-hidden="true" className="text-green-700 font-semibold">
                                <CheckCircleIcon width={19} />
                            </span>)}
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className={activePage === 1 ? activeClassNames : defaultClassNames}  onClick={() => onMenuClicked(1)}>
                            2. How Bitcoin Works: Understanding Blockchain and Mining
                            {readed.indexOf(1) !== -1 && (<span aria-hidden="true" className="text-green-700 font-semibold">
                                <CheckCircleIcon width={19} />
                            </span>)}
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className={activePage === 2 ? activeClassNames : defaultClassNames}  onClick={() => onMenuClicked(2)}>
                            3. Bitcoin vs. Traditional Money: Key Differences and Advantages
                            {readed.indexOf(2) !== -1 && (<span aria-hidden="true" className="text-green-700 font-semibold">
                                <CheckCircleIcon width={19} />
                            </span>)}
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className={activePage === 3 ? activeClassNames : defaultClassNames}  onClick={() => onMenuClicked(3)}>
                            4. The History of Bitcoin: From Whitepaper to Global Adoption
                            {readed.indexOf(3) !== -1 && (<span aria-hidden="true" className="text-green-700 font-semibold">
                                <CheckCircleIcon width={19} />
                            </span>)}
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className={activePage === 4 ? activeClassNames : defaultClassNames}  onClick={() => onMenuClicked(4)}>
                            5. Bitcoin Security: Wallets, Private Keys, and Safe Storage
                            {readed.indexOf(4) !== -1 && (<span aria-hidden="true" className="text-green-700 font-semibold">
                                <CheckCircleIcon width={19} />
                            </span>)}
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className={activePage === 5 ? activeClassNames : defaultClassNames}  onClick={() => onMenuClicked(5)}>
                            6. The Future of Bitcoin: Regulation, Innovation, and Mass Adoption
                            {readed.indexOf(5) !== -1 && (<span aria-hidden="true" className="text-green-700 font-semibold">
                                <CheckCircleIcon width={19} />
                            </span>)}
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className={activePage === 6 ? activeClassNames : defaultClassNames}  onClick={() => onMenuClicked(6)}>
                            Pass the quiz!
                        {readed.indexOf(6) !== -1 && (<span aria-hidden="true" className="text-green-700 font-semibold">
                                <CheckCircleIcon width={19} />
                            </span>)}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export type MenuProps = {
    onChange: (id: number) => void
}
