import { motion } from "motion/react";
import "./hero.css";
import { Download, Send, Instagram, Linkedin, Github } from "lucide-react";

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

const socialVariants = {
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
  const handleResumeClick = (e) => {
    e.preventDefault();
    // Open resume PDF in a new tab
    window.open('/Resume-1.pdf', '_blank');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hero" id="home">
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
          <span>I'm Manmeet Singh!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Full-Stack Developer | AI & Product Enthusiast</motion.h2>
          <motion.p variants={awardVariants}>
          I am a Full-Stack Developer passionate about creating industry-level solutions that make life easier and drive positive change. With expertise in AI and real-world product functionalities, I craft scalable applications that blend innovation with impact. Let's build the future, one line of code at a time!
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/fullstack.png" alt="" />
            <motion.img variants={awardVariants} src="/ai.png" alt="" />
            <motion.img variants={awardVariants} src="/product.png" alt="" />
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
          <img src="/hero.jpg" alt="Profile" />
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
          Building Smarter Tech,
          <br />
          <span>Enhancing Lives.</span>
        </motion.h2>
        {/* Updated social links section */}
        <motion.div
          variants={socialVariants}
          initial="initial"
          animate="animate"
          className="socialLinks"
        >
          <motion.a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
          </motion.a>
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
            onClick={handleResumeClick}
          >
            <span>Resume</span>
            <Download size={20} />
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="actionButton contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
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