import { AcademicCapIcon, GlobeAltIcon, StarIcon, SparklesIcon, BeakerIcon } from "@heroicons/react/24/outline"

const features = [
    {
        name: 'Stellar Explorer',
        description:
            ' - for completing the first quizzes and mastering basic knowledge.',
        icon: BeakerIcon,
    },
    {
        name: 'Galactic Guide',
        description:
            ' - for successfully finishing beginner courses and quizzes.',
        icon: SparklesIcon,
    },
    {
        name: 'Cosmic Expert',
        description:
            ' - for excellent results in more advanced tasks.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Universe Sentinel',
        description:
            ' - for achieving the highest success and completing all main courses.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Galactic Legend',
        description:
            ' - for outstanding achievements, leadership in learning, and consistent progress.',
        icon: StarIcon,
    },
]

export const UserBadges = () => {
    return (
        <div id={"what-is-badges"} className="overflow-hidden bg-neutral-950 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pl-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">Badge System in QMoon</h2>
                            <p className="mt-2 text-lg/8 text-gray-300">
                                Badges in QMoon are not just icons, but symbols of your progress and achievements. The higher your level, the greater the rewards and privileges you unlock.
                            </p>
                            <p className="mt-6 text-4xl font-semibold tracking-tight text-pretty text-yellow-300 sm:text-5xl">
                                How it works:
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-300">
                                Complete tasks and quizzes in the Learn&Earn service. Earn badges for correctly completed quizzes and tasks. The higher your badge level, the bigger the rewards and access to exclusive benefits such as special promotions and bonuses.
                            </p>
                        </div>
                    </div>
                    <div className="lg:pt-4 relative">
                        <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-yellow-300">
                                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                        {feature.name}
                                    </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}