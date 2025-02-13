import { motion } from "motion/react";
import "./hero.css";
import { Download, Send } from 'lucide-react';

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Robert!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Top Rated Designer</motion.h2>
          <motion.p variants={awardVariants}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div>
        </motion.div>
      </div>

      {/* Center Image Container */}
      <motion.div 
        className="imageContainer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="heroImage">
          <img src="/hero.png" alt="Profile" />
        </div>
      </motion.div>

      <div className="hSection right">
        {/* Moved tagline to top */}
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle tagline"
        >
          Turning Ideas
          <br />
          <span>Into Reality</span>
        </motion.h2>
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* Action Buttons at bottom */}
        <motion.div 
          className="actionButtons"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.a 
            href="/resume.pdf" 
            className="actionButton resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Resume</span>
            <Download size={20} />
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="actionButton contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact</span>
            <Send size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;