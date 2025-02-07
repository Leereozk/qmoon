export const MobileMenuButton = (props: MobileMenuButtonProps) => {
    const { onMobileMenuToggle } = props
    return (
        <div className="md:hidden">
            <button id="menu-toggle"
                    onClick={(e) => onMobileMenuToggle()}
                    className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>
        </div>
    )
}

export type MobileMenuButtonProps = {
    onMobileMenuToggle: () => void
}