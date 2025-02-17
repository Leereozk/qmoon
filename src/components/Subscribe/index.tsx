export const Subscribe = () => {
    return (
        <div className="relative isolate overflow-hidden bg-neutral-950 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:max-w-none max-w-2xl mx-auto">
                    <div className="mx-auto max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-semibold tracking-tight text-white">Stay informed</h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Subscribe to not miss the start
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your telegram"
                                autoComplete="email"
                                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                            <button
                                type="submit"
                                className="flex-none cursor-pointer font-bold bg-yellow-300 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-colors duration-300"
                            >
                                Join wait list
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
        </div>
    )
}