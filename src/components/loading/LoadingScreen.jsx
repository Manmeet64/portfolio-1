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
            className="prayer-icon"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm6 6.5c0-.83-.67-1.5-1.5-1.5h-3.87l1.87-3.23.13-.22c.43-.74.43-1.68.43-1.68 0-.93-.75-1.69-1.69-1.69-.93 0-1.69.76-1.69 1.69l-.03.19c-.08.56-.33 1.23-.8 1.71L8.87 9H5.5C4.67 9 4 9.67 4 10.5v8.15l3.02 3.35H19V13.85l-1-4.85zM14 20H7.5l-2-2.5V11h8.5l2 2.5V20z"
              fill="#2B7B8C"
            />
            <path 
              d="M14 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
              fill="#2B7B8C"
            />
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