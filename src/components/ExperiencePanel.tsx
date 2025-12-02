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
            className="relative bg-[#0D1117]/70 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-6 md:p-8 mt-16 shadow-lg shadow-cyan-500/10"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400 rounded-t-xl"></div>

            <h3 className="text-xs text-cyan-300 font-mono tracking-widest mb-6">
                <TypewriterText text="[ EXPERIENCE_PANEL ]" />
            </h3>

            <div className="flex relative">
                <div className="lg:hidden relative flex flex-col items-center mr-7">
                    <div
                        className="w-[3px] bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2"/>

                    {experiences.map((_, idx) => (
                        <div
                            key={idx}
                            className="w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] absolute left-1/2 -translate-x-1/2"
                            style={{
                                top: `calc(${(idx*1.15) * (100 / experiences.length)}% )`
                            }}
                        />
                    ))}
                </div>


                <div
                    className="hidden lg:block absolute top-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 z-0 rounded-full"/>

                <div
                    className="flex-1 flex flex-col lg:flex-row lg:gap-16 space-y-20 lg:space-y-0 lg:flex-nowrap overflow-x-auto">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative flex items-start lg:flex-col lg:items-center">
                            <div
                                className="absolute -left-10 top-0 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] mb-6 lg:static lg:left-0 lg:top-auto"/>

                            <motion.div
                                whileHover={{scale: 1.03, translateY: -4}}
                                transition={{type: "spring", stiffness: 150}}
                                className="bg-[#0E1523]/60 border border-purple-400/30 rounded-xl p-6 shadow-md shadow-purple-500/10 w-full lg:w-64 lg:flex-1"
                            >
                                <h3 className="mt-3 text-xl font-semibold text-cyan-300">{exp.role}</h3>
                                <div className="mt-2 text-sm text-gray-300 opacity-80">{exp.years}</div>
                                <p className="mt-3 text-gray-400 text-sm">{exp.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ExperiencePanel;
