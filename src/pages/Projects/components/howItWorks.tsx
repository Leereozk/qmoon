import { NavLink } from 'react-router-dom'

export const HowItWorks = () => {
    return (
        <section className="bg-neutral-950 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="relative isolate overflow-hidden lg:flex lg:gap-x-20">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:text-left">
                            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                                Learn & Earn reward
                            </h2>
                            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                                Get reward by taking lessons and testing your knowledge
                            </p>
                            <p className="mt-6 italic text-sm text-gray-500">Please read our <NavLink className="text-yellow-300 underline hover:no-underline" to="/terms-of-service">Terms of Service</NavLink> before starting. By participating in this activity, you acknowledge that you have read and agree to be bound by these terms of service.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href={"#list"}
                                    className="cursor-pointer font-bold bg-yellow-300 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-colors duration-300">Get started
                                </a>
                            </div>
                        </div>
                        <div className="mt-16 h-80 lg:mt-8 w-full hidden lg:flex">
                            <div className="relative w-full border-solid flex border-yellow-300 shadow-2xl rounded-md border-5 overflow-hidden">
                                <img
                                    alt="App screenshot"
                                    src="/courses/courses.webp"
                                    width={649}
                                    height={365}
                                    className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}