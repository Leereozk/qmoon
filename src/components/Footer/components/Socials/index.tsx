import Facebook from '@/assets/socials/facebook.svg?react'
import Twitter from '@/assets/socials/twitter.svg?react'
import Discord from '@/assets/socials/discord.svg?react'

export const Socials = () => {
    return (
        <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <Discord className="w-4 h-4" />
                <span className="sr-only">Discord community</span>
            </a>
            <a href="//x.com/qmoonapp?s=21" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter page</span>
            </a>
        </div>
    )
}