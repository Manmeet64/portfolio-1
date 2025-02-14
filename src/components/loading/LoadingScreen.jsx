import { motion } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen = ({ setIsLoading }) => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: 0,
        transition: { duration: 0.8, delay: 2 }
      }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <motion.div 
        className="loading-content"
        initial={{ scale: 1 }}
        animate={{ 
          scale: 0,
          transition: { duration: 0.5, delay: 1.8 }
        }}
      >
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: 0.2 }
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="sardar-icon"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Turban */}
            <path
              d="M4 12C4 8 7 5 12 5C17 5 20 8 20 12"
              stroke="#2B7B8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 11C6 11 8 9 12 9C16 9 18 11 18 11"
              stroke="#2B7B8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Face */}
            <path
              d="M9 14C9 14 10 16 12 16C14 16 15 14 15 14"
              stroke="#2B7B8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Beard */}
            <path
              d="M8 13C8 13 10 18 12 18C14 18 16 13 16 13"
              stroke="#2B7B8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Eyes */}
            <circle cx="10" cy="13" r="0.5" fill="#2B7B8C" />
            <circle cx="14" cy="13" r="0.5" fill="#2B7B8C" />
          </svg>
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 0.5, delay: 0.7 }
          }}
        >
          <motion.span className="loading-text">
            Satsrikal
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 