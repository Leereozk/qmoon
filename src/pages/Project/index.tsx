import { Top, Content } from './components'

export const ProjectPage = () => {
    return (
        <div className="bg-white" id={"list"}>
            <Top />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Content />
            </div>
        </div>
    )
}