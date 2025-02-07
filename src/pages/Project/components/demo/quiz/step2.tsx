export const Step2 = () => {
    return (
        <fieldset>
            <p className="mt-1 text-sm/6 text-gray-600">2. What is the maximum supply of Bitcoin?</p>
            <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                    <input
                        defaultChecked
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                        A) 21 million coins
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                        B) 100 million coins
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                        C) 50 million coins
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                        D) Unlimited supply
                    </label>
                </div>
            </div>
        </fieldset>
    )
}