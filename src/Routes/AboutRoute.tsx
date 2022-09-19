
import About from "../Components/About/About";
import { motion } from "framer-motion";

const AboutRoute = (props:any) => {

  return (
    <motion.div
      style={{ position: "relative", height:'100%', width:'100%' }}
      initial={{ right: -1000, opacity:0 }}
      animate={{ right: 0, opacity:1 }}
      exit={{ left: -1000, opacity:0 }}
      transition={{ duration: 0.8 }}
    >
      <About />
    </motion.div>
  );
};

export default AboutRoute;
