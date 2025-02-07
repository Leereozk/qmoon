import Logo from '@/assets/about/logo-clear.jpg';

export const Hero = () => {
    return (
        <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-900 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
                    <svg x="50%" y={-1} className="overflow-visible fill-yellow-300">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600">About Us</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-yellow-300 sm:text-5xl">
                                Welcome to QMoon,
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-300">
                                where learning isn’t just a task — it’s an adventure with real rewards. We’ve created a simple, fun, and engaging platform that lets you learn new things and earn while you’re at it. No complicated courses or endless lessons — just quick, interactive modules and tasks that help you grow, one step at a time.
                            </p>
                            <p className="mt-6 text-xl/8 text-gray-300">
                                As you explore, you’ll collect badges that mark your achievements, like milestones on your personal journey. Each badge is a symbol of the skills you’ve gained, motivating you to reach for new heights.
                            </p>
                            <p className="mt-6 text-xl/8 text-gray-300">
                                For companies, QMoon is the perfect launchpad to share educational content with people who are excited to learn. It’s easy to publish projects here, and even easier to connect with an audience that’s curious, engaged, and ready to discover what you offer. No complex processes — just a straightforward way to grow your brand through knowledge.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={Logo}
                        className="max-w-none sm:w-[57rem] w-[48rem]"
                    />
                </div>
            </div>
        </div>
    )
}