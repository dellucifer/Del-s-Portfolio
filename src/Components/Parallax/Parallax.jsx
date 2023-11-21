import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({ type }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      className="parallax"
      ref = {ref}
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{y: yText}}>
        {type === "skills" ? "Know my Skills" : "My Projects"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yBg, backgroundImage: `url(${type==='skills' ? '/planets.png' : '/sun.png'})`}} className="planets"></motion.div>
      <motion.div style={{x: yText}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
