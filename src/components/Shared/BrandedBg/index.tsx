import cn from 'classnames'

import CN from './style.module.css'

export const BrandedBg = () => {
    return (
        <div className={cn(CN.block, 'absolute', 'inset-0', '-z-10', 'overflow-hidden', 'bg-neutral-900')} style={{'backgroundImage': 'url(/pattern.png)', 'backgroundPosition': 'center', 'backgroundAttachment': 'fixed'}}>
            <svg
                aria-hidden="true"
                className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-neutral-500 opacity-20"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
            </svg>
        </div>
    )
}