import "./work.scss";
import React from 'react'
import { motion, useScroll, useTransform, easeOut  } from "framer-motion";

export const Work = () => {
    const { scrollYProgress } = useScroll({});
    const y = useTransform(scrollYProgress, [0, 1], [-700, 1000], { ease: easeOut });

  return (
    <div className="work">
        <motion.div className="text" style={{y}}>
            <a>What I Did?</a>
        </motion.div>
    </div>
  )
}

export default Work;

