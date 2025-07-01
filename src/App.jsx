import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import { 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import './App.css';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('[name="about"]');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="nav-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="home" smooth={true} duration={500}>
              <span className="logo-text">Portfolio</span>
            </Link>
          </motion.div>

          <div className="nav-links">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  offset={-80}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <main className="main-content">
        <Element name="home">
          <Hero />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </main>

      {/* Floating Auto-Scroll Button */}
      <button className="auto-scroll-btn" onClick={scrollToAbout} aria-label="Scroll to About">
        <ChevronDown size={32} />
      </button>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect with me</h3>
            <div className="social-links">
              <motion.a
                href="https://github.com/Varshith-092006"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/varshith-kolli/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/KolliVarshith?t=hbas-LwhfyPBBnZjoR7nUA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </div>
          
          <div className="footer-section">
            <p>&copy; 2024 Portfolio. Built with React & Framer Motion</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
