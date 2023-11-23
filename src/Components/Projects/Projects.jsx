import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Projects = () => {
  const items = [
    {
      id: 1,
      title: "Del's Code Editor",
      img: "/Del-s-Portfolio/Priyanshu.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores exercitationem fugit nam nulla porro, voluptatum tenetur. Aliquid, odit labore voluptatum repellat dolorem sequi maiores.",
    },
    {
      id: 2,
      title: "Apni Dukaan",
      img: "/Del-s-Portfolio/Priyanshu.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores exercitationem fugit nam nulla porro, voluptatum tenetur. Aliquid, odit labore voluptatum repellat dolorem sequi maiores.",
    },
    {
      id: 3,
      title: "AMS",
      img: "/Del-s-Portfolio/ams.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores exercitationem fugit nam nulla porro, voluptatum tenetur. Aliquid, odit labore voluptatum repellat dolorem sequi maiores.",
    },
    {
      id: 4,
      title: "Project 4",
      img: "/Del-s-Portfolio/Priyanshu.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores exercitationem fugit nam nulla porro, voluptatum tenetur. Aliquid, odit labore voluptatum repellat dolorem sequi maiores.",
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
      <section>
        <motion.div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Project Link</button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  };

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
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
