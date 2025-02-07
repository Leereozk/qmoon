import { CTA, UserSteps, Hero, UserBadges,  ProjectSteps } from './components'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <CTA />
            <ProjectSteps />
            <UserSteps />
            <UserBadges />
        </>
    )
}
