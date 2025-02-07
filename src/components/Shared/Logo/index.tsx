import { Link } from 'react-router-dom'

import LogoImg from '@/assets/home/logo-text.svg?react';

export const Logo = () => {
    return (
        <Link to={'/'} className="flex items-center text-primary hover:text-secondary">
            <LogoImg width={'132px'} height={'24px'}/>
        </Link>
    )
}
