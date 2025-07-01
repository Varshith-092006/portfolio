import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const interests = [
    { icon: <Code />, title: 'Coding', description: 'Building amazing web applications' },
    { icon: <Coffee />, title: 'Coffee', description: 'Fuel for late night coding sessions' },
    { icon: <Heart />, title: 'Learning', description: 'Always exploring new technologies' }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="about-description">
              <p>
                I'm a passionate Full Stack Developer with over 3 years of experience 
                creating digital solutions that make a real impact. I love turning 
                complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I believe in writing clean, maintainable 
                code and staying up-to-date with the latest industry trends.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="image-wrapper">
              <div className="about-image-placeholder">
                <User size={120} />
              </div>
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="interests-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>What I Love</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className={`interest-card enhanced-card ${index % 3 === 0 ? 'card-hover-left' : index % 3 === 1 ? 'card-hover-up' : 'card-hover-right'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 