import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const Hero = () => {
  const { displayText: typingName } = useTypingAnimation('Varshith Kolli', 150, 1000);
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1.2 }
    },
    hover: {
      y: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-greeting" variants={letterVariants}>
            <span className="wave">👋</span> Hello, I'm
          </motion.div>
          
          <motion.h1 className="hero-title" variants={letterVariants}>
            <span className="gradient-text typing-text">{typingName}</span>
            <span className="typing-cursor">|</span>
          </motion.h1>
          
          <motion.h2 className="hero-subtitle" variants={letterVariants}>
            Full Stack Developer
          </motion.h2>
          
          <motion.p className="hero-description" variants={letterVariants}>
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code and innovative solutions that make a difference.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={letterVariants}>
            <motion.a
              href="/KolliHimaragaVarshithResume.pdf"
              download
              className="btn btn-primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
            
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                className="btn btn-secondary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Mail size={18} />
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.04, rotate: 2 }}
        >
          <div className="image-container">
            <div className="profile-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="floating-card card-1">
              <img src="/src/assets/react.svg" alt="React" style={{ width: 36, height: 32 }} />
            </div>
            <div className="floating-card card-2">
              <img src="/public/vite.svg" alt="Vite" style={{ width: 32, height: 32 }} />
            </div>
            <div className="floating-card card-3">
              <span>JS</span>
            </div>
            <div className="floating-card card-4">
              <span role="img" aria-label="HTML5">📄</span>
            </div>
            <div className="floating-card card-5">
              <span role="img" aria-label="CSS3">🎨</span>
            </div>
            <div className="floating-card card-6">
              <span role="img" aria-label="Node.js">🌐</span>
            </div>
            <div className="floating-card card-7">
              <span role="img" aria-label="Git">🔺</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Link to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
          <span>Scroll to explore</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 