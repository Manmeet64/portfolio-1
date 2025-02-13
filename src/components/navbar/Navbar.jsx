import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  Mail, 
  Menu, 
  X,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', icon: <Home size={20} />, href: '#home' },
    { title: 'About', icon: <User size={20} />, href: '#about' },
    { title: 'Experience', icon: <Briefcase size={20} />, href: '#experience' },
    { title: 'Skills', icon: <Code2 size={20} />, href: '#skills' },
    { title: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home">MS</a>
        </motion.div>

        <div className={styles.navContent}>
          {/* Desktop Navigation */}
          <ul className={styles.navItems}>
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.href} className={styles.navLink}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </motion.li>
            ))}
          </ul>

          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div 
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? 0 : '100%'
          }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
