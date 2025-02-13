import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "HTML5", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Neo4j", level: 65 },
        { name: "Python", level: 85 },
        { name: "C++", level: 85 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Linux", level: 70 },
      ]
    },
    {
      title: "Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "System Design", level: 60 },
        { name: "Computer Networking", level: 60 },
      ]
    }
  ];
  

  return (
    <div className={styles.skills}>
      <div className={styles.wrapper}>
        <motion.div 
          className={styles.textContainer}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Skills & Expertise</h1>
          <p>Crafting digital experiences with modern technologies</p>
        </motion.div>

        <div className={styles.categoriesContainer}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              className={styles.category}
              key={categoryIndex}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h2>{category.title}</h2>
              <div className={styles.skillsList}>
                {category.skills.map((skill, index) => (
                  <motion.div 
                    className={styles.skillItem}
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={styles.skillInfo}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div 
                        className={styles.progress}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
