import { useState } from "react";
import { motion } from "framer-motion";

const MovingLetter = (props: { letter: string }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: "inline-block" }}
    >
      <motion.div
        style={{ position: "relative" }}
        initial={{ y: 0 }}
        animate={{
          y: hover ? -80 : 0,
        }}
      >
        {props.letter}
      </motion.div>
    </div>
  );
};

export default MovingLetter;
