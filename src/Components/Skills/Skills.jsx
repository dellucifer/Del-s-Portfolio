import { useRef } from 'react'
import './Skills.scss'
import { animate, motion, useInView } from 'framer-motion'

const Skills = () => {
    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

    const variants = {
        initial: {
            x: -200,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

  return (
    <motion.div className='skills' ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>Your VISION<br/> My CODE &lt;/&gt;</p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color: "orange"}}>Your Goal,</motion.b> My Action,</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color: "orange"}}>Our</motion.b> Achievement</h1>
                <button>What I do?</button>
            </div>
        </motion.div>

        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Programming</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A at aut perspiciatis dolorem nulla facere quisquam sed, amet, earum recusandae molestias nihil temporibus modi id similique ipsa aspernatur quasi odit.</p>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A at aut perspiciatis dolorem nulla facere quisquam sed, amet, earum recusandae molestias nihil temporibus modi id similique ipsa aspernatur quasi odit.</p>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Technologies</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A at aut perspiciatis dolorem nulla facere quisquam sed, amet, earum recusandae molestias nihil temporibus modi id similique ipsa aspernatur quasi odit.</p>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Soft Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A at aut perspiciatis dolorem nulla facere quisquam sed, amet, earum recusandae molestias nihil temporibus modi id similique ipsa aspernatur quasi odit.</p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills
