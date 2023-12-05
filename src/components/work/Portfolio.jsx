import "./portfolio.scss";
import React from 'react'

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Machine Learning & Data Mining",
    img: "./portfolio1.png",
    desc: "This system uses Natural Language Processing (NLP) methods to create a dependable system that can spot false reviews on e-commerce websites.",
    githubUrl: "https://github.com/vervns/Fake-Review-Detector",
  },
  {
    id: 2,
    title: "Real Time System",
    img: "./portfolio2.png",
    desc: "A real-time stock trading system that simulates several traders and stocks in stock trading activities. Giving traders a dynamic environment where they can post buy orders in reaction to changes in stock prices.",
    githubUrl:"https://github.com/vervns/Real-time-automated-stock-trading-system",
  },
  {
    id: 3,
    title: "Responsive Website",
    img: "./portfolio3.png",
    desc: "My personal portfolio website built with React Js. A showcase of my skills, projects, and experiences in the computing world.",
    githubUrl: "https://github.com/vervns/Portfolio",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" style={{ border: "4px solid white", borderRadius: "10px" }}/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
              <button>See Code</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <a>My Works</a>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
