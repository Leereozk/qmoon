import { Logo } from '@/components'

import { Socials, Copyrights, MenuLeft, MenuRight, Menu } from './components'

export const Footer = () => {
    return (
        <footer className="bg-black border-t-15 border-yellow-300">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Logo />
                    </div>
                    <div className="flex">
                        <form className="flex max-w-md gap-x-4" action={'https://docs.google.com/forms/d/e/1FAIpQLScMDzrbR2BWbW36t6joCOFDtiwKJtUBA3YgC7w_hQH-_KonXg/viewform'}>
                            <label htmlFor="email-address" className="sr-only">
                                Telegram number
                            </label>
                            <input
                                id="email-address"
                                name="entry.1360515859"
                                type="text"
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
                        </form>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <Copyrights className="sm:flex sm:items-center sm:justify-between">
                    <Socials />
                </Copyrights>
            </div>
        </footer>
    )
}