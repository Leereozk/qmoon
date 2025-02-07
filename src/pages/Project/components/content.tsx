import { useCallback, useState, useMemo } from 'react'
import { Menu } from './menu'
import { Lesson1, Lesson2, Lesson3, Lesson4, Lesson5, Quiz } from './demo'

const list = [
    Lesson1,
    Lesson2,
    Lesson3,
    Lesson4,
    Lesson5,
    Quiz
]
export const Content = () => {
    const [activeId, setActiveId] = useState<number>(0)

    const onChange = useCallback((id: number) => {
        setActiveId(id)
    }, [setActiveId])

    const ActiveElement = useMemo(() => {
        return list[activeId]
    }, [activeId])

    return (
        <div className="relative isolate overflow-hidden bg-white py-24 lg:overflow-visible">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="opacity-20 absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto flex max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:gap-y-10">
                <div className="lg:mx-auto lg:w-full lg:max-w-7xl">
                    <div className="lg:pr-4">
                        <ActiveElement />
                    </div>
                </div>
                <div className="-mt-12 -ml-12 px-12 py-1 lg:sticky lg:top-4">
                    <div className="ring-1 shadow-xl ring-gray-400/10">
                        <Menu onChange={onChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}