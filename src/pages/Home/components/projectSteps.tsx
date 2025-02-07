const features = [
    {
        name: 'Create an Account',
        description:
            'Connect your cryptocurrency wallet to ensure the security of your data and account and add social links about your project',
    },
    {
        name: 'Fill out the form',
        description:
            'Fill out the form to add a new project. You need to describe your project, add classes and plan a budget.',
    },
    {
        name: 'Pass moderation',
        description:
            'You will need to wait a few hours until our moderators finish checking the form.',
    },
    {
        name: 'Check in projects list',
        description:
            'Once our moderators have finished their work, you will be able to find your project on the projects list page of our application.',
    },
]

export const ProjectSteps = () => {
    return (
        <div id={'for-project'} className="overflow-hidden bg-neutral-950 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">How QMoon can help projects?</h2>
                    <p className="mt-6 text-4xl font-semibold tracking-tight text-pretty text-yellow-300 sm:text-5xl">
                        All you need is just fill form about your project
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-300">
                        Our platform specializes in providing users with information about your project. Sharing information has never been easier.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-yellow-300">
                                    <div className="absolute top-0 left-0 flex size-10 items-center text-center justify-center rounded-lg bg-indigo-600">
                                        <div className="text-white text-base/7">{ index + 1 }</div>
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}