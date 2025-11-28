import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import SkillsPanel from "./components/SkillsPanel";
import ProjectsPanel from "./components/ProjectsPanel";
import EducationPanel from "./components/EducationPanel";
import ExperiencePanel from "./components/ExperiencePanel.tsx";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <Header onHamburgerClick={() => setSidebarOpen((prev) => !prev)} isSidebarOpen={sidebarOpen} />

            <div className="relative flex">
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

                <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:ml-60 flex justify-center">
                    <div className="w-full max-w-6xl space-y-10">
                        <Hero />
                        <ProjectsPanel />
                        <EducationPanel />
                        <ExperiencePanel />
                        <SkillsPanel />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
