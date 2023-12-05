import "./about.scss"
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll({
  });
  const y = useTransform(scrollYProgress, [0, 1], [320, -2000]);

  return (
    <div className="about">
      <div className="contentContainer">
        <motion.div className="titleContainer" style={{y}}>
          <a>About me</a>
        </motion.div>
        <motion.div className="textContainer" style={{y}}>
          <p> 
          My qualifications include a strong academic background, real-world experience, 
          and a recent degree in computer science with a focus on data analytics. 
          I've completed my undergraduate studies by obtaining a bachelor's degree 
          in computer science with a data analytics specialty. 
          I am a committed professional that approaches problems with an open mind 
          and a passion for applying data-driven insights to solve real-world problems. 
          My experience in computer science has given me the information 
          and abilities I need to contribute significantly to the data analytics industry.
          </p>
        </motion.div>
        
        <div className="imageContainer" style={{y}}>
          <img 
              src="./about.png" 
              alt="aboutPic" 
          />
        </div>
      </div>
      <img
        src="./arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onClick={() => { window.location.href = './#Skills'; }}
      />
  </div>
  )
}

export default About
