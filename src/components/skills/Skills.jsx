import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Skills.module.css";

const skillsData = {
    Languages: [
        { name: "Python", level: 85 },
        { name: "C++", level: 85 },
        { name: "Java", level: 70 },
    ],
    frontend: [
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "HTML5", level: 90 },
    ],
    backend: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "GraphQL", level: 75 },
    ],
    databases: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 70 },
        { name: "Neo4j", level: 65 },
    ],
    tools: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Linux", level: 70 },
    ],
    concepts: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "System Design", level: 60 },
        { name: "Computer Networking", level: 60 },
    ],
};

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div className={styles.skills} ref={ref}>
            <motion.div
                className={styles.skillsTitle}
                variants={variants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5 }}
            >
                <h2>Skills & Expertise</h2>
                <p>Technologies I work with</p>
            </motion.div>

            <div className={styles.skillsContainer}>
                {Object.entries(skillsData).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        className={styles.skillCategory}
                        variants={variants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3>
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </h3>
                        <div className={styles.skillsList}>
                            {skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    className={styles.skillItem}
                                    variants={variants}
                                    initial="initial"
                                    animate={isInView ? "animate" : "initial"}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1 + skillIndex * 0.05,
                                    }}
                                >
                                    <div className={styles.skillInfo}>
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className={styles.progressBar}>
                                        <motion.div
                                            className={styles.progress}
                                            initial={{ width: 0 }}
                                            animate={
                                                isInView
                                                    ? {
                                                          width: `${skill.level}%`,
                                                      }
                                                    : { width: 0 }
                                            }
                                            transition={{
                                                duration: 1,
                                                delay:
                                                    index * 0.1 +
                                                    skillIndex * 0.05,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
