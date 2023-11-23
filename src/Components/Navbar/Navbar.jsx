import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.5}}
        >
          Welcome, User
        </motion.span>

        <div className="socials">
          <a href="#">
            <img src="./Del-s-Portfolio/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="./Del-s-Portfolio/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="./Del-s-Portfolio/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="./Del-s-Portfolio/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
