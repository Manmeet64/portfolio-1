import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    x: 0,
    opacity: 0,
  },
};

const textVariants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: 0,
    opacity: 0,
  },
};

const childTextVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { 
    margin: "-50px",
    once: true
  });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        exit="exit"
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        exit="exit"
        className="pText"
      >
        <motion.h1 variants={childTextVariants}>{item.title}</motion.h1>
        <motion.p variants={childTextVariants}>{item.desc}</motion.p>
        <motion.button variants={childTextVariants} className="projectButton">
          <span>Live</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7 17L17 7M17 7H7M17 7V17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // Add cursor functionality
  const cursorRef = useRef(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start start", "end end"],
  });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length],
    { 
      damping: 20,
      stiffness: 90,
      mass: 1
    }
  );

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onMouseEnter = () => {
      setIsCursorVisible(true);
    };

    const onMouseLeave = () => {
      setIsCursorVisible(false);
    };

    // Add listeners to all project images
    const projectImages = document.querySelectorAll('.pImg');
    projectImages.forEach(img => {
      img.addEventListener('mouseenter', onMouseEnter);
      img.addEventListener('mouseleave', onMouseLeave);
    });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      projectImages.forEach(img => {
        img.removeEventListener('mouseenter', onMouseEnter);
        img.removeEventListener('mouseleave', onMouseLeave);
      });
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="portfolio" ref={ref}>
      <div 
        ref={cursorRef} 
        className={`cursor-dot ${isCursorVisible ? 'active' : ''}`}
      />
      <motion.div 
        className="pList" 
        style={{ x: xTranslate }}
        initial={false}
      >
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;