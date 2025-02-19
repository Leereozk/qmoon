import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, WalletDialogProvider, WalletDialog } from './components'


import {
    HomePage,
    AboutPage,
    TeamPage,
    RoadmapPage,
    ProjectsPage,
    ProjectPage,
    PrivacyPolicy,
    TermsOfService,
    NotFound,
} from './pages'
import './App.css'

function App() {
    return (
        <>
            <WalletDialogProvider>
                <BrowserRouter>
                    <Header />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/roadmap" element={<RoadmapPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/project" element={<ProjectPage />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-of-service" element={<TermsOfService />} />
                            <Route path='*' element={<NotFound/>} />
                        </Routes>
                    </main>
                    <Footer />
                    <WalletDialog />
                </BrowserRouter>
            </WalletDialogProvider>
        </>
    )
}

export default App
