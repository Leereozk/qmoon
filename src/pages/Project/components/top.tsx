import { BrandedBg } from '@/components'

export const Top = () => {
    return (
        <article className="relative isolate overflow-hidden px-6 py-24 sm:px-16">
            <BrandedBg />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500 font-bold">Feb 05, 2025</time>
                    <a href="#" className="relative z-10 rounded-full bg-yellow-300 hover:bg-yellow-500 px-3 py-1.5 font-medium text-black font-bold">Reward: 1.5 USDT</a>
                </div>
                <div className="bjm relative">
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-gray-300 sm:text-5xl">
                        <span className="absolute inset-0"></span>Boost your conversion rate
                    </h2>
                    <p className="mt-5 text-sm text-gray-400">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                        totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem
                        placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</p>
                </div>
                <p className="mt-6 italic text-sm text-gray-600">Please read our <a href={"#"} className="text-yellow-300 underline hover:no-underline">Terms of Service</a> before starting. By participating in this activity, you acknowledge that you have read and agree to be bound by these terms of service.</p>
            </div>
        </article>
    )
}