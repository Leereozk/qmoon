import Empty from '@/assets/roadmap/empty.svg?react'
import Check from '@/assets/roadmap/check.svg?react'

export const RoadmapPage = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-6">Full Roadmap</h2>
                    <p className="text-lg text-gray-500 text-center">of QMoon app</p>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="tracking-wide font-semibold text-base uppercase text-gray-400">Q1 2025</p>
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t-1 border-gray-300 border-dashed"></div>
                            </div>
                            <div className="relative flex justify-start">
                                <span className="pr-5 font-bold text-xl bg-gray-50"> Launching </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="py-6 px-6 bg-white rounded-lg">
                                <ul>
                                    <li>
                                        <div className="flex items-center">
                                            {/*<Check height={20} width={20} />*/}
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Platform Launch</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Official release of the QMoon platform with full integration of wallet connections, Twitter account linking, and the first set of educational projects.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">User Acquisition Campaign</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Launch marketing campaign targeting early adopters and educational companies to bring users to the platform.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Partnerships</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Establish strategic partnerships with leading blockchain and Web3 projects to host their educational content.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">First Learn&Earn Campaign</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Introduce the first Learn&Earn campaign with interactive quizzes and badges for early users.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="tracking-wide font-semibold text-base uppercase text-gray-400">Q2 2025</p>
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t-1 border-gray-300 border-dashed"></div>
                            </div>
                            <div className="relative flex justify-start">
                                <span className="pr-5 font-bold text-xl bg-gray-50"> Improvements </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="py-6 px-6 bg-white rounded-lg">
                                <ul>
                                    <li>
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Badge System Expansion</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Introduce new badge levels and achievements tied to specific user activities such as course completion and participation in events.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Reward System Update</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Increase rewards for users based on badge progress and engagement, including access to premium content and early access to new features.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Mobile App Development</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Start the development of the QMoon mobile app for seamless access to courses and rewards on the go.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Community Engagement Initiatives</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Launch community-driven events such as webinars, AMA sessions, and live discussions with crypto industry experts.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="tracking-wide font-semibold text-base uppercase text-gray-400">Q3 2025</p>
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t-1 border-gray-300 border-dashed"></div>
                            </div>
                            <div className="relative flex justify-start">
                                <span className="pr-5 font-bold text-xl bg-gray-50"> Improvements </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="py-6 px-6 bg-white rounded-lg">
                                <ul>
                                    <li>
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Mobile App Launch</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Release QMoon’s mobile app on both iOS and Android, ensuring broader accessibility and engagement.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Launch of Exclusive Educational Content</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Partner with top crypto influencers and companies to create exclusive content for QMoon users, enhancing the platform’s value.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Advanced Gamification Features</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Introduce advanced gamification elements like leaderboards, special badges, and rare rewards for top learners and educators.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Customizable Learning Paths</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Roll out tailored learning paths for different user levels (beginner, intermediate, expert) to provide a more personalized experience.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="tracking-wide font-semibold text-base uppercase text-gray-400">Q4 2025</p>
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t-1 border-gray-300 border-dashed"></div>
                            </div>
                            <div className="relative flex justify-start">
                                <span className="pr-5 font-bold text-xl bg-gray-50"> Growth </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="py-6 px-6 bg-white rounded-lg">
                                <ul>
                                    <li>
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Global Expansion</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Expand QMoon to international markets, with multi-language support and localized content for regions such as Asia, Europe, and Latin America.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Launch of Exclusive and Custom Badges</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Roll out a collection of limited-edition and customizable badges for special achievements and community events.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Integration with Major DeFi Projects</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Integrate QMoon’s Learn&Earn system with top decentralized finance (DeFi) platforms to provide even greater incentives and rewards for users.</p>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex items-center">
                                            <Empty height={20} width={20} />
                                            <span className="pl-2 text-base font-medium leading-5 text-neutral-800">Platform Optimization and Scaling</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Focus on platform performance improvements, including faster loading times, enhanced security, and scalability for growing user base.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}