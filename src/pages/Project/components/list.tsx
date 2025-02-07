import Checked from '@/assets/quiz/checked.svg?react'

export const Steps = (props: ListProps) => {
    const { active, length } = props

    return (
        <nav aria-label="Progress">
            <ol role="list" className="items-center flex mb-6">
                {Array.from(Array(length)).map((item, index) => {
                    if (index < active) {
                        return (
                            <li key={index} className={index !== length - 1 ? 'pr-8 sm:pr-20 relative' : 'relative'}>
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="h-0.5 w-full bg-indigo-600"></div>
                                </div>
                                <a href="#"
                                   className="relative flex size-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
                                    <span className="size-5 text-white flex"><Checked/></span>
                                </a>
                            </li>
                        )
                    }
                    if (index > active) {
                        return (
                            <li key={index} className={index === length - 1 ? 'relative' : 'pr-8 sm:pr-20 relative'}>
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="h-0.5 w-full bg-gray-200"></div>
                                </div>
                                <a href="#" className="bjm relative flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                                    <span aria-hidden="true" className="size-2.5 rounded-full aoa bjx"></span>
                                </a>
                            </li>
                        )
                    }
                    return (
                        <li key={index} className={index === length - 1 ? 'relative' : 'pr-8 sm:pr-20 relative'}>
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="h-0.5 w-full bg-gray-200"></div>
                            </div>
                            <a href="#" aria-current="step" className="relative flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                                <span aria-hidden="true" className="size-2.5 rounded-full bg-indigo-600"></span>
                            </a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export type ListProps = () => {
    active: number
    length: number
}