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

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add magnetic attraction near interactive elements
      const interactiveElements = document.querySelectorAll('button, a, .project-card, .floating-card, .nav-link');
      let magnetic = false;
      
      interactiveElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < 100) {
          magnetic = true;
        }
      });
      
      setIsMagnetic(magnetic);
      
      // Add particles on movement
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          color: isHovering ? '#f59e0b' : '#3b82f6'
        };
        setParticles(prev => [...prev, newParticle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 1000);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .project-card, .floating-card, .nav-link');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isHovering]);

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isMagnetic ? 'magnetic' : ''}`}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 3.5 : isMagnetic ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      
      {/* Particle trails */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            boxShadow: `0 0 10px ${particle.color}`
          }}
          initial={{ 
            scale: 1, 
            opacity: 1,
            x: 0,
            y: 0
          }}
          animate={{ 
            scale: 0,
            opacity: 0,
            x: (Math.random() - 0.5) * 50,
            y: -30
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );
};

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
      {/* Custom Cursor */}
      <CustomCursor />
      
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
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
            <p>&copy; 2024 Varshith Kolli. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
