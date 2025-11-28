import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "./TypewriterText.tsx";
import {FaGithub} from "react-icons/fa";

type Project = {
    title: string;
    description: string;
    tech: string[];
    github: string;
};

const projects: Project[] = [
    {
        title: "Bus Schedules App",
        description:
            "A full-stack web application for browsing and managing intercity bus lines.\n" +
            "The app provides passengers with an intuitive way to search, filter, and view available bus routes and companies, while allowing bus companies to efficiently manage their own schedules.",
        tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
        github: "https://github.com/nikolovaradica/bus-schedules-app",
    },
    {
        title: "Lifelog - Mood and Wellness Tracker",
        description:
            "Lifelog is a mobile application designed to help users track their mood and overall day to day activities. The app provides various features that allow users to monitor their well-being through daily logs, interactive calendars, and graph summaries.",
        tech: ["Flutter"],
        github: "https://github.com/nikolovaradica/lifelog-mood-and-welness-tracker",
    },
    {
        title: "Movie Platform",
        description:
            "A movie hub featuring a card-based UI where users can browse, rate, and review films, and add new movies if they can't find them already available.",
        tech: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
        github: "https://github.com/nikolovaradica/movies",
    },
    {
        title: "To Do App",
        description:
            "A frontend-only To-Do app with a clean calendar and task management interface. Users can add, delete, and mark tasks as complete, with tasks organized by category and date.",
        tech: ["JavaScript", "Vue", "HTML", "CSS"],
        github: "https://github.com/nikolovaradica/to-do-app",
    },
];

const ProjectsPanel = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0D1117]/80 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-6 md:p-8 mt-10 shadow-lg shadow-cyan-500/10"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400 rounded-t-xl"></div>

            <h3 className="text-xs text-cyan-300 font-mono tracking-widest mb-4">
                <TypewriterText text='[ PROJECTS_PANEL ]'/>
            </h3>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        onClick={() => setActiveProject(project)}
                        className="relative p-5 rounded-lg bg-[#0E1523] border border-purple-400/30 shadow-md shadow-purple-500/10 cursor-pointer overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                    >

                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 transition-all"
                                title="View GitHub Repo"
                            >
                                <FaGithub size={18}/>
                            </a>
                        </div>

                        <p className="text-gray-300 text-sm line-clamp-4 mb-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs bg-purple-500/20 border border-purple-400/40 text-purple-300 px-2 py-1 rounded"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                <>{activeProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-[#0D1117] border border-purple-500 p-8 rounded-xl max-w-lg w-full shadow-lg shadow-purple-500/20"
                        >
                            <h3 className="text-2xl text-purple-300 font-bold mb-4">{activeProject.title}</h3>
                            <p className="text-gray-300 mb-6">{activeProject.description}</p>

                            <h4 className="text-purple-200 font-semibold mb-2">Tech Used:</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {activeProject.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs bg-purple-500/20 border border-purple-400/40 text-purple-300 px-2 py-1 rounded"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <button
                                onClick={() => setActiveProject(null)}
                                className="w-full mt-4 py-2 text-center border border-purple-400 text-purple-300 rounded hover:bg-purple-400/20 transition-all"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}</>
            </AnimatePresence>
        </motion.section>
    );
};

export default ProjectsPanel;
