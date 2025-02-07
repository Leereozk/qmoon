export const MenuLeft = () => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Resources</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="src/components/Footer/index.tsx" className="hover:underline">Flowbite</a>
                </li>
                <li>
                    <a href="src/components/Footer/index.tsx" className="hover:underline">Tailwind CSS</a>
                </li>
            </ul>
        </div>
    )
}