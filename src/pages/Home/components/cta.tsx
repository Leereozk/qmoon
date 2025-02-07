import { BrandedBg } from '@/components'

export const CTA = () => {
    return (
        <div className="mx-auto relative" id={"start"}>
            <BrandedBg />
            <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:px-16">
                <h2 className="text-center text-base/7 font-semibold text-indigo-600">Start to use QMoon now</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-300 sm:text-5xl">
                    Elevate your mind
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a className="text-black cursor-pointer rounded-md bg-yellow-300 hover:bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold" href={"#for-project"}>For Project</a>
                    <a className="text-black cursor-pointer rounded-md bg-yellow-300 hover:bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold" href={"#for-user"}>For User</a>
                </div>
                <svg viewBox="0 0 1024 1024" aria-hidden="true" width={'64rem'} height={'64rem'} className="opacity-20 absolute top-1/2 left-1/2 -z-10 translate-z-1" style={{'transform': 'translateX(-50%)','maskImage': 'radial-gradient(closest-side, white, transparent)'}}>
                    <circle r="512" cx="512" cy="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                            fillOpacity="0.7"></circle>
                    <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                            <stop stopColor="#7775D6"></stop>
                            <stop offset="1" stopColor="#E935C1"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}