import { motion } from "framer-motion";
import { useRef } from "react";
import About from "../Components/About/About";
import useScrollPos from "../Components/Utility/useScrollPos";

const RouteScroll = () => {
    const containerRef = useRef(null);
    const scrollPos = useScrollPos(containerRef, false);

    return (
        <motion.main
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            transition={{ duration: 0.8 }}
            ref={containerRef}
        >
            <About scrollPos={scrollPos} />
        </motion.main>
    );
};

export default RouteScroll;
