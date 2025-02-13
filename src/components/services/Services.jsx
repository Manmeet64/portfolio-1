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
    title: "Full Stack Development",
    desc: "Building end-to-end web applications",
  },
  {
    id: 2,
    img: "/service2.png",
    title: "UI/UX Design",
    desc: "Creating intuitive user experiences",
  },
  {
    id: 3,
    img: "/service3.png",
    title: "API Integration",
    desc: "Seamless third-party integrations",
  },
  {
    id: 4,
    img: "/service4.png",
    title: "Database Design",
    desc: "Optimized data architecture solutions",
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
