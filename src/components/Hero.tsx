import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import {useEffect, useState} from "react";

const logs = [
    "initializing neural interface...",
    "loading professional profile...",
    "systems calibrated: 98.2%",
    "compiling modules...",
    "TypeScript environment ready",
    "UI subsystem online",
    "QA suite active",
    "web architecture stable",
    "UX pathways optimized",
    "coffee intake simulation complete",
    "debugging legacy code...",
    "keyboard throughput maxed",
    "creativity engine deployed",
    "cross-reality bug scan complete",
    "self-reflection module online"
];


const Hero = () => {
    const [displayed, setDisplayed] = useState<string[]>([]);

    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            if (i < logs.length) {
                setDisplayed(prev => [...prev, logs[i]]);
                i++;
            } else {
                clearInterval(id);
            }
        }, 900);
        return () => clearInterval(id);
    }, []);


    return (
        <section
            id="about"
            className="min-h-[70vh] flex items-center justify-center text-center pt-7 relative"
        >
            <motion.div
                initial={{opacity: 0, y: 18}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="w-full relative p-10 md:p-14 rounded-2xl border border-cyan-400/15
                            bg-[#0D1117]/70 backdrop-blur-xl shadow-lg shadow-cyan-500/10 overflow-hidden "
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400 rounded-t-xl"></div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.1}}
                    className="text-xs tracking-widest text-cyan-300 mb-8 font-mono"
                >
                    <TypewriterText text='[ ▣ ACCESS GRANTED ]'/>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="w-40 h-40 mb-8 mx-auto relative"
                >
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-300/70"></div>
                    <div className="absolute inset-4 border-2 rounded-xl rotate-12 border-purple-400/70"></div>
                    <div className="absolute inset-8 border-2 rounded-lg -rotate-6 border-cyan-500/70"></div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
                    <TypewriterText text="Hi, I'm Radica."/>
                </h2>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.25}}
                    className="text-lg text-gray-300 max-w-2xl mx-auto mb-15 leading-relaxed"
                >
                    Full-Stack Developer delivering fast, scalable, and user-focused web applications.
                </motion.p>

                <div className="w-full text-left bg-black/40 border border-cyan-900/40 rounded-xl p-4 font-mono text-sm h-80 overflow-hidden">
                    {displayed.map((line, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-cyan-200/80"
                        >
                            {">"} {line}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
