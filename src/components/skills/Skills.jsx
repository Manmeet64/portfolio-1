import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Skills.module.css";

const skillsData = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "HTML/CSS", level: 85 },
    { name: "Redux", level: 82 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "REST API", level: 85 },
    { name: "GraphQL", level: 80 },
  ],
  databases: [
    { name: "MongoDB", level: 92 },
    { name: "PostgreSQL", level: 88 },
    { name: "MySQL", level: 85 },
    { name: "Redis", level: 82 },
    { name: "Firebase", level: 80 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 88 },
    { name: "AWS", level: 85 },
    { name: "Webpack", level: 82 },
    { name: "Jest", level: 80 },
  ]
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
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className={styles.skillsList}>
              {skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  className={styles.skillItem}
                  variants={variants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                >
                  <div className={styles.skillInfo}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div 
                      className={styles.progress}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) }}
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
