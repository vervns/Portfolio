import "./hero.scss";
import { motion } from "framer-motion";
import React, { useEffect, useState  } from "react";

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const parallaxOffset = scrollY * 0.5; 
    
    useEffect(() => {
      const textContainer = document.querySelector(".textContainer");
      const imageContainer = document.querySelector(".imageContainer");
  
      if (textContainer) {
        textContainer.style.transform = `translateX(${parallaxOffset}px)`;
      }
  
      if (imageContainer) {
        imageContainer.style.transform = `translateX(-${parallaxOffset}px)`;
      }
    }, [parallaxOffset]);
  

    useEffect(() => {
        const delay = 10000;
        setTimeout(() => {
            const slidingTextContainer2 = document.querySelector(".slidingTextContainer2");
            if (slidingTextContainer2) {
                slidingTextContainer2.style.opacity = 1;
            }
        }, delay);
    }, []);

    const handleDownload = () => {
        const fileName = "Verga Nathanael - CV.pdf";
        const link = document.createElement("a");
        link.href = `${fileName}`;
        link.download = fileName;
        link.click();
    };

    return (
        <div className="hero">
            <div className="contentContainer">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{ duration: 1 }}
                    className="textContainer"
                    >
                    <a>Data Analyst / {"<coder>"}</a>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }} 
                        className="button"
                    >
                        <button onClick={handleDownload}>Download CV</button>
                    </motion.div>
                </motion.div>

                <div className="slidingTextContainer">
                    <span>&nbsp;Verga Nathanael &mdash;</span>
                </div>
                <div
                    className="slidingTextContainer2"
                >
                    <span>&nbsp;Verga Nathanael &mdash;</span>
                </div>

                <div className="imageContainer">
                    <motion.img 
                        src="./hero1.png" 
                        alt="profilePic" 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
