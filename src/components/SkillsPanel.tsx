import { motion } from "framer-motion";
import { FaReact, FaDocker, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaJs, FaCode } from "react-icons/fa";
import TypewriterText from "./TypewriterText.tsx";

const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot" },
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs/> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Playwright" },
    { name: "CI/CD Basics", icon: <FaCode/> },
];

const SkillsPanel = () => {
    return (
        <motion.section
            id="skills"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="relative bg-[#0D1117]/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 md:p-8 mt-10 shadow-lg shadow-cyan-500/10"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400 rounded-t-xl"></div>

            <h3 className="text-xs text-cyan-300 font-mono tracking-widest mb-4">
                <TypewriterText text='[ SKILLS_PANEL ]'/>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{scale: 1.05, boxShadow: "0 0 12px #c084fc"}}
                        className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#0E1523] border border-purple-400/30 cursor-pointer shadow-md shadow-purple-500/10"
                    >
                        {skill.icon && (
                            <div className="text-2xl mb-1 text-cyan-300">{skill.icon}</div>
                        )}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsPanel;
