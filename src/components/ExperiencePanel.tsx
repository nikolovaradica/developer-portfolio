import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText.tsx";

const experiences = [
    {
        role: "Web Developer Intern",
        years: "April 2024 - June 2024",
        description: "Worked on frontend and backend features."
    },
    {
        role: "QA Intern",
        years: "July 2024 - September 2024",
        description: "Tested web applications, reported bugs, and created test plans."
    },
    {
        role: "QA Engineer",
        years: "October 2024 - Present",
        description: "Responsible for automated testing and other quality assurance processes."
    }
];

const ExperiencePanel = () => {
    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0D1117]/70 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-6 md:p-8 mt-16 shadow-lg shadow-cyan-500/10 overflow-x-auto"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400 rounded-t-xl"></div>

            <h3 className="text-xs text-cyan-300 font-mono tracking-widest mb-6">
                <TypewriterText text="[ EXPERIENCE_PANEL ]"/>
            </h3>

            <div className="relative flex gap-16 min-w-max items-start">
                <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 z-0" />

                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative flex flex-col items-center z-10 top-4 mb-4">
                        <div className="w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] mb-6" />

                        <motion.div
                            whileHover={{ scale: 1.03, translateY: -4 }}
                            transition={{ type: "spring", stiffness: 150 }}
                            className="bg-[#0E1523]/60 border border-purple-400/30 rounded-xl p-6 shadow-md shadow-purple-500/10 w-72 flex-shrink-0"
                        >
                            <h3 className="mt-3 text-xl font-semibold text-cyan-300">
                                {exp.role}
                            </h3>

                            <div className="mt-2 text-sm text-gray-300 opacity-80">
                                {exp.years}
                            </div>

                            <p className="mt-3 text-gray-400 text-sm">{exp.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default ExperiencePanel;