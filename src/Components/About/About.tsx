import { scrollPosContext } from "../../Routes/Main";
import "./About.css";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5 } from "react-icons/si";
import { useContext, useRef, useState } from "react";
import MovingLetter from "./MovingLetter";
import useWindowSize from "../Utility/useWindowSize";

const About = () => {
  const scrollContext: any = useContext(scrollPosContext);
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef);
  const { width } = useWindowSize();
  console.log(scrollContext);

  return (
    <motion.div className="container">
      {/*prettier-ignore*/}
      <div className="textWrapper">
        <motion.div className="textContainer" >
          <motion.div style={{ transform: `translate(${scrollContext.scrollPos * 1500}px)`, pointerEvents: 'auto' }}>

            <h1 className="aboutTitle" >Hello,<br />I'm Franco</h1>

            {width >= 780 && (<p className="aboutText">I'm a frontend web developer based in Argentina,<br/> focused on&nbsp;
                <span className="funkySpan">
                  <MovingLetter letter='r' />
                  <MovingLetter letter='e' />
                  <MovingLetter letter='a' />
                  <MovingLetter letter='c' />
                  <MovingLetter letter='t' />
                  <MovingLetter letter='i' />
                  <MovingLetter letter='v' />
                  <MovingLetter letter='e' />
                </span>
              &nbsp;frameworks.</p>)}

              {width < 780 && (
                <p className="aboutText">I'm a frontend web developer based in Argentina, focused on <span className="funkySpan">reactive</span> frameworks</p>
              )}

            <div className="skillsetIcons">
              <SiHtml5 size={40} color="#f16528" className="aboutIcons" />
              <SiCss3 size={40} color="#0096d1" className="aboutIcons" />
              <SiJavascript size={40} color="#ceb200" className="aboutIcons" />
              <SiTypescript size={40} color="#0096d1" className="aboutIcons" />
              <FaReact size={40} color="rgb(93, 221, 255)" className="aboutIcons" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="info">
        <motion.div
          className="infoTextWrapper"
          initial={{ backdropFilter: "brightness(0.1)" }}
          animate={{
            backdropFilter: `brightness(${
              scrollContext.scrollPos >= 0.5 ? 1 : 0.1
            })`,
          }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <AnimatePresence>
            <motion.div
              className="infoTextAnim"
              animate={{
                x: scrollContext.scrollPos >= 0.5 ? 100 : -600,
                //opacity: infoInView ? 1 : 0,
                filter:
                  scrollContext.scrollPos >= 0.5 ? "opacity(1)" : "opacity(0)",
              }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div>
                <h1
                  className="aboutTitle"
                  style={{ textAlign: "start" }}
                  ref={infoRef}
                >
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
          </AnimatePresence>
        </motion.div>
      </div>

      {/* <motion.div
        className="end"
        style={{ filter: `brightness(${scrollContext.scrollPos})` }}
      >
        sdfasf
      </motion.div> */}
    </motion.div>
  );
};

export default About;