import "./About.css";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5 } from "react-icons/si";
import { useRef, useContext } from "react";
import useWindowSize from "../Utility/useWindowSize";
import Info from "./Info";
import useScrollPos from "../Utility/useScrollPos";
import MovingLettersWord from "./MovingLettersWord";
import { LangContext } from "../../App";

const About = () => {
  const { width } = useWindowSize();
  const containerRef = useRef(null);
  const scrollPos = useScrollPos(containerRef);
  const language:any = useContext(LangContext);

  return (
    <motion.div className="container" ref={containerRef}>
      {/*prettier-ignore*/}
      <div className="textWrapper">
        <motion.div className="textContainer" >
          <motion.div style={{ transform: `translate(${scrollPos * 1500}px)`, pointerEvents: 'auto' }}>

          {language.lang === 'english' && (<>
          <h1 className="aboutTitle" >Hello,<br />I'm Franco</h1>
            <p className="aboutText">
              <span>I'm a frontend web developer based in Argentina,<br/> focused on&nbsp;</span>
                <span className="movingLtrsSpan">{ width < 780 ? (<span className="funkySpan">reactive</span>) : (<MovingLettersWord word='reactive' />) }</span>
              <span>&nbsp;frameworks.</span>
            </p>
          </>)}

          {language.lang === 'spanish' && (<>
          <h1 className="aboutTitle" >Hola,<br />soy Franco</h1>
            <p className="aboutText">
              <span>Soy un desarrollador web de frontend basado en Argentina.<br/> enfocado en frameworks&nbsp;</span>
                <span className="movingLtrsSpan">{ width < 780 ? (<span className="funkySpan">reactivos</span>) : (<MovingLettersWord word='reactivos' />) }</span>
            </p>
          </>)}
            

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

      <Info />
    </motion.div>
  );
};

export default About;
