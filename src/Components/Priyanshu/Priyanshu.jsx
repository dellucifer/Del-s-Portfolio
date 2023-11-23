import React from "react";
import "./Priyanshu.scss";
import { motion } from 'framer-motion'

const Priyanshu = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: "10%"
        },
        animate: {
            x: "-80%",
            transition: {
                repeat: Infinity,
                duration: 20,
            }
        },
    }

  return (
    <div className="priyanshu">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Priyanshu Choudhary</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer and Cybersecurity Enthusiast</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Wanna see my Projects?</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="/Del-s-Portfolio/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
        Content Creator Content Writer
      </motion.div>

      <div className="imageContainer">
        <img src="/Del-s-Portfolio/Priyanshu.png" alt="" />
      </div>
    </div>
  );
};

export default Priyanshu;
