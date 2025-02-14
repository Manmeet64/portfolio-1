import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import emailjs from "@emailjs/browser";
import ContactSvg from "./ContactSvg";
import styles from "./Contact.module.css";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    user_username: '',
    user_email: '',
    user_message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  const formRef = useRef();
  const containerRef = useRef();
  const isInView = useInView(containerRef, { margin: "-100px" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.user_username.trim() !== '' && 
           formData.user_email.trim() !== '' && 
           formData.user_message.trim() !== '';
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          ...formData,
          to_email: "2023.manmeets@isu.ac.in"
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({
        user_username: '',
        user_email: '',
        user_message: ''
      });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer} ref={containerRef}>
      <div className={styles.contentWrapper}>
        <motion.div 
          className={styles.formSection}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className={styles.form}
            variants={variants}
          >
            <motion.h1 variants={variants} className={styles.title}>
              Let's keep in <span>touch</span>
            </motion.h1>
            
            <motion.div variants={variants} className={styles.inputGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="user_username"
                className={styles.input}
                placeholder="John Doe"
                value={formData.user_username}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div variants={variants} className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="user_email"
                className={styles.input}
                placeholder="john@example.com"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div variants={variants} className={styles.inputGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                name="user_message"
                className={styles.textarea}
                placeholder="Write your message..."
                value={formData.user_message}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.button 
              variants={variants} 
              className={`${styles.button} ${!isFormValid() || isSubmitting ? styles.disabled : ''}`}
              disabled={!isFormValid() || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {success && (
              <motion.div 
                variants={variants} 
                className={`${styles.message} ${styles.success}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {error && (
              <motion.div 
                variants={variants} 
                className={`${styles.message} ${styles.error}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>
        </motion.div>

        <motion.div 
          className={styles.imageSection}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '100%',
            height: '100%'
          }}>
            <ContactSvg />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
