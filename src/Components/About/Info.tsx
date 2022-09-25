import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import './About.css'

const Info = () => {
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef);

  return (
    <div className="info">
      <motion.div
        className="infoTextWrapper"
        initial={{ backdropFilter: "brightness(0.1)" }}
        animate={{
          backdropFilter: `brightness(${infoInView ? 1 : 0.1})`,
        }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <AnimatePresence>
          {infoInView && (
            <motion.div
              className="infoTextAnim"
              initial={{ x: -600, filter: "opacity(0)" }}
              animate={{ x: 0, filter: "opacity(1)" }}
              exit={{ x: -600, filter: "opacity(0)" }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div>
                <h1 className="aboutTitle" style={{ textAlign: "start" }}>
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p
                  className="aboutText"
                  style={{
                    color: "#fff",
                    textAlign: "start",
                    margin: "10px 0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  quia, vero molestias accusamus voluptate ipsum dolore numquam
                  reiciendis?
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          style={{ width: "300px", height: "300px", position: "absolute" }}
          ref={infoRef}
        ></div>
      </motion.div>
    </div>
  );
};

export default Info;
