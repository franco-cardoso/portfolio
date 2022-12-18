import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import pfp from "./pfp.jpg";
import cert from "./cert.webp";
import "./Info.css";

const Info = () => {
    const infoRef = useRef(null);
    const infoInView = useInView(infoRef);

    return (
        <section className="info">
            <div className="infoWrapper">
            <div className="animTrigger" ref={infoRef} />
                <motion.div
                    animate={{ x: infoInView ? 0 : -400, opacity: infoInView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className="infoHeader"
                >
                    <motion.img
                        className="infoPic"
                        src={pfp}
                        alt="Profile picture"
                        animate={{ x: infoInView ? 0 : 50, opacity: infoInView ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                    <div className="infoHeaderContent">
                        <motion.h2
                            animate={{ x: infoInView ? 0 : 80, opacity: infoInView ? 1 : 0 }}
                            transition={{ duration: 0.7, delay: 1.2 }}
                        >
                            Franco Cardoso
                        </motion.h2>
                        <motion.hr
                            animate={{ /* width: infoInView ? "98%" : 0, */ opacity: infoInView ? 1 : 0 }}
                            transition={{ duration: 0.7, delay: 1.6 }}
                        />
                        <motion.div
                            animate={{ x: infoInView ? 0 : 80, opacity: infoInView ? 1 : 0 }}
                            transition={{ duration: 0.7, delay: 1.4 }}
                        >
                            <p className="infoSub" >Full Stack Web Developer</p>
                            <p className="infoSubSub">Graduated at Numen Academy</p>
                        </motion.div>
                    </div>
                </motion.div>
                

                <motion.div
                    className="infoText"
                    animate={{ opacity: infoInView ? 1 : 0, x: infoInView ? 0 : -200 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p>
                        Hello, my name is Franco and I am a full stack web developer with a passion for creating
                        beautiful and functional websites and applications. With a strong foundation in both front-end
                        and back-end development, I am able to bring projects from concept to launch with ease. My
                        skills include proficiency in languages such as <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                        <strong>JavaScript</strong>, <strong>SQL</strong>, <strong>Python</strong>, front-end frameworks
                        like <strong>React</strong>, as well as back-end services such as <strong>MongoDB</strong>{" "}
                        databases and <strong>Node.js</strong> servers.
                    </p>

                    <p>
                        Whether it's building responsive websites, developing scalable web applications, or integrating
                        with APIs, I have the skills to take on a variety of projects, as well as high adaptability when
                        learning new technologies.
                    </p>

                    <p>
                        Graduated at Numen Academy, I recieved a degree in Full Stack Web Development, backed by the
                        Argentine Atlantis University
                    </p>
                    <div className="certificate">
                        <img src={cert} alt="" width="280px" height="190px" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Info;

{
    /* <motion.div
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
</motion.div> */
}
