import { motion } from "framer-motion";

const ContactRoute = () => {
  return (
    <motion.div
      style={{ position: "relative" }}
      initial={{ right: -1000, opacity:0 }}
      animate={{ right: 0, opacity:1 }}
      exit={{ left: -1000, opacity:0 }}
      transition={{ duration: 0.8 }}
    >
      contact
    </motion.div>
  );
};

export default ContactRoute;
