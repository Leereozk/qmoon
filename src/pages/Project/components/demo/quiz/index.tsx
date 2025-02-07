import { useState, useMemo, useCallback } from 'react'

import { Step1 } from './step1'
import { Step2 } from './step2'
import { Step3 } from './step3'
import { Step4 } from './step4'
import { Finish } from './finish'
import { Steps } from '../../list'

const list = [
    Step1,
    Step2,
    Step3,
    Step4,
    Finish
]

export const Quiz = () => {
    const [activePageId, setActivePageId] = useState<number>(0)
    const ActivePage = useMemo(() => {
        return list[activePageId]
    }, [activePageId])

    const moveForward = useCallback(() => {
        if (activePageId < 4) {
            setActivePageId(activePageId + 1)
        }
    }, [setActivePageId, activePageId])

    return (
        <form>
            <div className="space-y-12">
                <div className="">
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Quiz</h1>
                    <p className="mt-6 text-xl/8 text-gray-700">Aliquet nec orci mattis amet quisque ullamcorper
                    neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat
                    egestas.</p>
                </div>
                <div className="pb-12">
                    <div className="mt-10 space-y-10">
                        <Steps length={list.length} active={activePageId} />
                        <ActivePage />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                {activePageId !== 4 && (<button
                    type="button"
                    onClick={() => moveForward()}
                    className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Next
                </button>)}
            </div>
        </form>
    )
}