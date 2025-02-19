export const TeamPage = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8 grid grid-cols-1 gap-20 xl:grid-cols-3">
                    <div className="mx-auto max-w-2xl lg:px-0">
                        <h2 className="ayk font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our team</h2>
                        <p className="mt-6 text-lg/8 text-gray-600">All our co-founders have strong knowledge base about crypto and finance world</p>
                    </div>
                    <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
                        <li>
                            <img alt="QMoon - Anna"
                                 src="/team/anna_12_2024.jpeg"
                                 className="aspect-3/2 w-full rounded-2xl object-cover" />
                            <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">Anna</h3>
                            <p className="text-base/7 text-gray-600">CEO</p>
                            <p className="mt-4 text-base/7 text-gray-600">
                                • Raised $3M for a decentralized finance project.<br/>
                                • Expanded the company into international markets, significantly increasing global presence.<br/>
                                • Built a strong network of strategic partnerships, securing key collaborations with top industry players.<br/>
                                • Expert in both fundraising and managing cross-functional teams in high-growth environments.
                            </p>
                        </li>
                        <li>
                            <img alt="QMoon - Mike"
                                 src="/team/mike_04_2023.jpg"
                                 className="aspect-3/2 w-full rounded-2xl object-cover" />
                            <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">Mike</h3>
                            <p className="text-base/7 text-gray-600">CBDO</p>
                            <p className="mt-4 text-base/7 text-gray-600">
                                • Increased trading volume by 200% at a leading crypto exchange through effective business development.<br/>
                                • Expert in bridging traditional finance with decentralized technologies, enhancing market reach.<br/>
                                • Proven ability to scale businesses across fintech and crypto sectors.<br/>
                                • Strong track record in negotiating high-value collaborations with blockchain projects and financial institutions.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
