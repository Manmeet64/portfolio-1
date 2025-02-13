import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  const education = [
    {
      school: "ITM Skills University",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      year: "2023-2027",
      description: "Achieved a 9.7 CGPA in the first semester and received prizes in public speaking.",
    },
    {
      school: "Don Bosco Senior Secondary School, Nerul",
      degree: "High School",
      field: "Science & Mathematics (PCM + Computer Science)",
      year: "2012-2023",
      description: "Runner-up in high school football, bronze medalist in long jump (DSO), and district-level athlete in Shot Put and Athletics.",
    },
  ];
  
  const experience = [
    {
      company: "Lets Upgrade",
      position: "Web Development Intern",
      year: "Dec 2024",
      description: "Optimized database indexing, boosting query performance by 30%. Configured Apache, Kafka, and Redis to enhance system efficiency by 25%. Developed strategies that increased platform retention by 20% and growth rate by 15%.",
      skills: ["Database Optimization", "Apache", "Kafka", "Redis", "Web Development"],
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
            <img src="public\education.jpeg" alt="Education" />
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
            <img src="/google1.jpeg" alt="Experience" />
          </motion.div>
        </div>
      </div>

      {/* <div className={styles.cardsContainer}>
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
      </div> */}
    </div>
  );
};

export default About;