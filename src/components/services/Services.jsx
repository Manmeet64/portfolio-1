import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const textVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const listVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Full-Stack Web Development",
    desc: "Developing scalable and high-performance MERN stack applications with modern features like real-time tracking, authentication, and admin dashboards.",
  },
  {
    id: 2,
    img: "/service2.png",
    title: "AI-Powered Solutions & Automation",
    desc: "Integrating AI into applications with speech-to-text, sentiment analysis, chatbots, and smart automation to enhance business workflows.",
  },
  {
    id: 3,
    img: "/service4.png",
    title: "Product and Database Design",
    desc: "Creating scalable and high-performance MERN stack applications with modern features like real-time tracking, authentication, and admin dashboards.",
  }
];


const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="sSection right">
        <div className="modelContainer">
          <ComputerModelContainer />
        </div>
      </div>
    </div>
  );
};

export default Services;