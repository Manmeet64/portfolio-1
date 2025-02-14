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
        window.open("/Resume-1.pdf", "_blank");
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

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
                    Hey,
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
                    <motion.h2 variants={awardVariants}>
                        Full-Stack Developer | AI & Product Enthusiast
                    </motion.h2>
                    <motion.p variants={awardVariants}>
                        I am passionate about creating industry-level solutions
                        that make life easier and drive positive change. I craft
                        scalable applications that blend innovation with impact.
                        Let's build the future, one line of code at a time!
                    </motion.p>
                    <motion.div variants={awardVariants} className="awardList">
                        <motion.div
                            variants={awardVariants}
                            className="awardIcon"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 12L3 17M8 12L3 7M8 12H16M16 12L21 7M16 12L21 17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                        <motion.div
                            variants={awardVariants}
                            className="awardIcon"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 2V8M12 16V22M2 12H8M16 12H22"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                        <motion.div
                            variants={awardVariants}
                            className="awardIcon"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 12L11 15L16 9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
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
                {/* FOLLOW */}
                <motion.div
                    variants={socialVariants}
                    initial="initial"
                    animate="animate"
                    className="socialLinks"
                >
                    <motion.a
                        href="https://www.instagram.com/_manmeet.s_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={socialVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Instagram size={24} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/manmeet-singh-5a8548211/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={socialVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                        href="https://github.com/Manmeet64"
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
