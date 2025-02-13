import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  const education = [
    {
      school: "University Name",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      year: "2019-2023",
      description: "Relevant coursework in Data Structures, Algorithms, and Web Development",
    },
    {
      school: "High School Name",
      degree: "High School",
      field: "Science & Mathematics",
      year: "2017-2019",
      description: "Graduated with distinction in Computer Science",
    },
  ];

  const experience = [
    {
      company: "Tech Company",
      position: "Frontend Developer",
      year: "2023-Present",
      description: "Working on building scalable web applications using React and Next.js",
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      company: "Startup Name",
      position: "Software Developer Intern",
      year: "2022-2023",
      description: "Developed and maintained full-stack applications",
      skills: ["JavaScript", "Python", "MongoDB"],
    },
  ];

  const cards = [
    {
      title: "Web Development",
      image: "/web-dev.jpg", // Add your image paths
      description: "Creating responsive and interactive web applications",
    },
    {
      title: "UI/UX Design",
      image: "/ui-ux.jpg",
      description: "Designing intuitive user interfaces",
    },
    {
      title: "Backend Development",
      image: "/backend.jpg",
      description: "Building robust server-side applications",
    },
  ];

  return (
    <div className={styles.about}>
      <div className={styles.timelineContainer}>
        <div className={styles.section}>
          <div className={styles.contentSide}>
            <motion.div 
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Education</h1>
            </motion.div>

            <div className={styles.timeline}>
              <motion.div 
                className={styles.timelineLine}
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5 }}
              />
              
              <div className={styles.timelineSection}>
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineDate}>{edu.year}</div>
                      <h3>{edu.school}</h3>
                      <h4>{edu.degree} in {edu.field}</h4>
                      <p>{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, rotate: -10, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ 
              opacity: { duration: 1 },
              y: { duration: 1 },
              rotate: { duration: 6, repeat: Infinity, ease: "linear" }
            }}
          >
            <img src="public\p4.jpg" alt="Education" />
          </motion.div>
        </div>

        <div className={styles.section}>
          <div className={styles.contentSide}>
            <motion.div 
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Experience</h1>
            </motion.div>

            <div className={styles.timeline}>
              <motion.div 
                className={styles.timelineLine}
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5 }}
              />
              
              <div className={styles.timelineSection}>
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineDate}>{exp.year}</div>
                      <h3>{exp.company}</h3>
                      <h4>{exp.position}</h4>
                      <p>{exp.description}</p>
                      <div className={styles.skills}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className={styles.skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, rotate: 10, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ rotate: [10, -10, 10] }}
            transition={{ 
              opacity: { duration: 1 },
              y: { duration: 1 },
              rotate: { duration: 6, repeat: Infinity, ease: "linear" }
            }}
          >
            <img src="/experience.png" alt="Experience" />
          </motion.div>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`${styles.card} card`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.cardImage}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
