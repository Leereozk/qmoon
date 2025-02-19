import { NavLink } from 'react-router-dom'

export const MenuRight = () => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <NavLink className="hover:underline" to="/privacy-policy">Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink className="underline" to="/terms-of-service">Terms &amp; Conditions</NavLink>
                </li>
            </ul>
        </div>
    )
}