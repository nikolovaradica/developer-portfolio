import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
    text: string;
    speed?: number;
    className?: string;
}

const TypewriterText = ({ text, speed = 80, className = "" }: Props) => {
    const [out, setOut] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            setOut(text.slice(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(id);
                setDone(true);
            }
        }, speed | 80);

        return () => clearInterval(id);
    }, [text, speed]);

    return (
        <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {out}
            <>{!done && <span className="inline-block animate-blink ml-1">|</span>}</>
        </motion.span>
    );
};

export default TypewriterText;
