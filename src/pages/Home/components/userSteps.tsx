import { BrandedBg } from '@/components'

export const UserSteps = () => {
    return (
        <div id={"for-user"} className="py-24 sm:py-32 relative">
            <BrandedBg />
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-indigo-600">How user can interact with QMoon?</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-300 sm:text-5xl">
                    Five simple steps to get you'r reward
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-5 sm:grid-rows-3 lg:grid-rows-2">
                    <div className="relative row-start-1 sm:row-start-1 sm:grid-cols-1 lg:row-span-2 lg:col-start-1">
                        <div className="absolute inset-px rounded-lg bg-yellow-300 shadow-md shadow-neutral-700"></div>
                        <div className="relative flex h-full flex-col overflow-hidden">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    1. Create an Account
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • Connect your cryptocurrency wallet to ensure the security of your data and account.
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • Link your Twitter account for additional authentication and participation in promotions.
                                </p>
                            </div>
                            <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src="/home/step1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <div className="relative row-start-2 sm:row-start-1 sm:grid-cols-2 lg:row-start-1 lg:col-start-2">
                        <div className="absolute inset-px rounded-lg bg-yellow-300 shadow-md shadow-neutral-700"></div>
                        <div className="relative flex h-full flex-col overflow-hidden">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">2. Choose a Project to Study</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • Go to the “Active Activities” section.
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • Find the project you’d like to study and select it. Each project includes educational materials to help you learn all the important details.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <div className="relative row-start-4 sm:row-start-2 sm:grid-cols-1 lg:row-start-2 lg:col-start-2">
                        <div className="absolute inset-px rounded-lg bg-yellow-300 shadow-md shadow-neutral-700"></div>
                        <div className="relative flex h-full flex-col overflow-hidden">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">4. Take the Quiz</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • After studying the material, proceed to the quiz. Answer questions based on what you learned.
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • Prepare to earn <a className="text-black cursor-pointer font-semibold underline hover:no-underline" href={"#what-is-badges"}>badges</a> for correctly answered quizzes.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <div className="relative row-start-3 sm:row-start-2 sm:grid-cols-2 lg:row-start-1 lg:col-start-3">
                        <div className="absolute inset-px rounded-lg bg-yellow-300 shadow-md shadow-neutral-700"></div>
                        <div className="relative flex h-full flex-col overflow-hidden">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"> 3. Study the Material</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • Go through all the lessons and review the project materials. You’ll gain valuable knowledge that will help you in the quiz.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <div className="relative row-start-5 sm:row-start-3 sm:grid-cols-1 lg:row-start-2 lg:col-start-3">
                        <div className="absolute inset-px rounded-lg bg-yellow-300 shadow-md shadow-neutral-700"></div>
                        <div className="relative flex h-full flex-col overflow-hidden">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">5. Receive Your Reward</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    • After successfully completing the quiz, depending on how many correct answers you provide, you will receive a reward. This could include tokens, exclusive benefits, or other privileges.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}