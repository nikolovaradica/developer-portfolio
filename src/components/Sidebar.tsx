import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { FaHome, FaCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

const LINKS = [
    { id: "about", label: "[ ABOUT ]", icon: <FaHome size={16} /> },
    { id: "projects", label: "[ PROJECTS ]", icon: <FaProjectDiagram size={16} /> },
    { id: "education", label: "[ EDUCATION ]", icon: <FaGraduationCap size={16} /> },
    { id: "skills", label: "[ SKILLS ]", icon: <FaCode size={16} /> },
];

type SidebarProps = {
    open: boolean;
    setOpen;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { root: null, rootMargin: "-90% 0px -40% 0px", threshold: 0 }
        );

        LINKS.forEach((link) => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNav = (id: string) => {
        setOpen(false);
        scroller.scrollTo(id, { duration: 700, smooth: "easeInOutQuart", offset: -80 });
    };

    return (
        <>
            <motion.aside
                className={`
        fixed top-36 bottom-6 left-6 md:left-12 w-48
        bg-[#071018]/50 backdrop-blur-md
        rounded-xl border border-cyan-400/20
        shadow-lg shadow-cyan-500/20
        p-6 flex flex-col gap-4
        transform transition-transform z-40

        ${open ? "flex" : "hidden"}
        md:flex                    
        ${open ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"}
    `}
                initial={{x: "-100%"}}
                animate={{x: 0}}
                transition={{type: "spring", stiffness: 200, damping: 30}}
            >
                <nav className="flex flex-col gap-4 justify-between h-full">
                    {LINKS.map((link) => {
                        const isActive = active === link.id;
                        return (
                            <button
                                key={link.id}
                                onClick={() => handleNav(link.id)}
                                className={`
                  relative flex items-center gap-2 py-2 px-2 rounded-md
                  text-left w-full transition-all text-sm
                  ${isActive ? "text-cyan-300 font-semibold" : "text-gray-300 hover:text-cyan-400"}
                `}
                            >
                <span className={`${isActive ? "text-cyan-400" : "text-gray-400"}`}>
                  {link.icon}
                </span>
                                {link.label}

                                {isActive && (
                                    <motion.span
                                        layout
                                        className="absolute left-0 bottom-0 h-0.5 bg-cyan-400 rounded"
                                        animate={{width: "100%"}}
                                        transition={{type: "spring", stiffness: 200, damping: 20}}
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>
            </motion.aside>

            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
