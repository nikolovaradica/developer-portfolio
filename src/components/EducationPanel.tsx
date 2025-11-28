import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText.tsx";

const education = [
    {
        degree: "Master of Science in Software Engineering",
        school: "Faculty of Computer Science and Engineering",
        years: "2025 - present",
        badge: "MSc",
        gpa: ""
    },
    {
        degree: "Bachelor of Science in Software Engineering and Information Technologies",
        school: "Faculty of Computer Science and Engineering",
        years: "2021 - 2025",
        badge: "BSc",
        gpa: "9.4 / 10.0"
    }
];

const EducationPanel = () => {
    return (
        <motion.section
            id="education"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0D1117]/70 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-6 md:p-8 mt-10 shadow-lg shadow-cyan-500/10"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400 rounded-t-xl"></div>

            <h3 className="text-xs text-cyan-300 font-mono tracking-widest mb-4">
                <TypewriterText text='[ EDUCATION_PANEL ]'/>
            </h3>

            <div className="flex relative">
                <div className="relative flex flex-col items-center mr-7">
                    <div className="w-[3px] bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full flex-1" />
                </div>

                <div className="flex-1 flex flex-col space-y-20">
                    {education.map((item) => (
                        <div key={item.badge} className="relative flex items-start">
                            <div className="absolute -left-10 top-0 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />

                            <motion.div
                                whileHover={{ scale: 1.03, translateX: 6 }}
                                transition={{ type: "spring", stiffness: 150 }}
                                className="bg-[#0E1523]/60 border border-purple-400/30 rounded-xl p-6 shadow-md shadow-purple-500/10 w-full"
                            >
                <span className="px-3 py-1 text-sm rounded bg-purple-500/20 border border-purple-400/40 text-purple-300">
                  {item.badge}
                </span>

                                <h3 className="mt-3 text-xl font-semibold text-cyan-300">
                                    {item.degree}
                                </h3>

                                <p className="text-gray-400">{item.school}</p>

                                <div className="mt-4 flex flex-col gap-1 text-sm text-gray-300">
                                    <span className="opacity-80">Years: {item.years}</span>
                                    {item.gpa && <span className="opacity-80">GPA: {item.gpa}</span>}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default EducationPanel;
