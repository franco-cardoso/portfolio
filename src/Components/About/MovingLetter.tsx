import { useState } from "react";
import { motion } from "framer-motion";

const MovingLetter = (props: { letter: string }) => {
  const [hover, setHover] = useState(false);
  const letterMotion = {
    hover: {
      y: [0, -80],
      //color: ['rgb(88 88 87)','rgb(0, 255, 255)']
    },
  };

  return (
    <motion.div
       className="movingLetter"
      /*onMouseEnter={() => {
        setHover(true);
        setTimeout(() => {
          setHover(false);
        }, 250);
      }}
      onMouseLeave={() => setHover(false)} */
      whileHover="hover"
      style={{ display: "inline-block" }}
    >
      <motion.div
        variants={letterMotion}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 350,
        }}
      >
        {props.letter}
      </motion.div>

      {/* <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 800, bounceDamping: 20 }}
        dragElastic={0.7}
        style={{color:'#00ffff'}}
      >
        {props.letter}
      </motion.div> */}

      {/* <motion.div drag >
        {props.letter}
      </motion.div> */}
    </motion.div>
  );
};

export default MovingLetter;
