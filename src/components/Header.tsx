import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

type HeaderProps = {
    onHamburgerClick: () => void;
    isSidebarOpen: boolean;
};

const Header = ({ onHamburgerClick, isSidebarOpen }: HeaderProps) => {
    // const [theme, setTheme] = useState<"dark" | "light">(
    //     (localStorage.getItem("theme") as "dark" | "light") || "dark"
    // );
    //
    // useEffect(() => {
    //     const root = document.documentElement;
    //     root.classList.remove("dark");
    //     if (theme === "dark") root.classList.add("dark");
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-4 md:top-6 z-50 mx-4 md:mx-12 p-4 md:p-6 bg-[#071018]/50 backdrop-blur-md rounded-xl shadow-lg shadow-cyan-500/20 border border-cyan-400/20"
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold neon-text">Radica Nikolova</h1>
                </div>

                <div className="flex items-center gap-3">
                  {/*  <div className="flex items-center gap-2">*/}
                  {/*      {[*/}
                  {/*          { icon: <FaMoon />, key: "dark" },*/}
                  {/*          { icon: <FaSun />, key: "light" },*/}
                  {/*      ].map((item) => {*/}
                  {/*          const isActive = theme === item.key;*/}
                  {/*          return (*/}
                  {/*              <button*/}
                  {/*                  key={item.key}*/}
                  {/*                  onClick={() => setTheme(item.key as "dark" | "light")}*/}
                  {/*                  className={`*/}
                  {/*  p-2 rounded-lg transition-all*/}
                  {/*  ${isActive ? "bg-cyan-500/20 shadow-[0_0_8px_#22d3ee]" : "hover:bg-cyan-400/10"}*/}
                  {/*`}*/}
                  {/*                  aria-label={`Switch to ${item.key} mode`}*/}
                  {/*              >*/}
                  {/*                  <span className={`text-cyan-300 text-sm md:text-base`}>{item.icon}</span>*/}
                  {/*              </button>*/}
                  {/*          );*/}
                  {/*      })}*/}
                  {/*  </div>*/}

                    <div className="md:hidden">
                        <button
                            onClick={onHamburgerClick}
                            className="p-2 border border-gray-700 rounded-md bg-gray-900 text-cyan-300"
                            aria-label="Toggle menu"
                        >
                            {isSidebarOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-2 h-[2px] w-full bg-cyan-400/50 rounded-full" />
        </motion.header>
    );
};

export default Header;
