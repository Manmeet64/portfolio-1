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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();
  const containerRef = useRef();
  const isInView = useInView(containerRef, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setError(true);
          setSuccess(false);
        }
      );
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
                required
              />
            </motion.div>

            <motion.div variants={variants} className={styles.inputGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                name="user_message"
                className={styles.textarea}
                placeholder="Write your message..."
                required
              />
            </motion.div>

            <motion.button variants={variants} className={styles.button}>
              Send Message
            </motion.button>

            {success && (
              <motion.span variants={variants} className={styles.message}>
                Message sent successfully!
              </motion.span>
            )}
            {error && (
              <motion.span variants={variants} className={styles.message}>
                Something went wrong. Please try again.
              </motion.span>
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
