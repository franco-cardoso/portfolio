import { motion } from "framer-motion"

const R = (props:any) => {
  return (
    <motion.div
      style={{ height:'100%', width:'100%' }}
      initial={{ x: 1000, opacity:0 }}
      animate={{ x: 0, opacity:1 }}
      exit={{ x: -1000, opacity:0 }}
      transition={{ duration: 0.8 }}
    >
      {props.component}
    </motion.div>
  )
}

export default R