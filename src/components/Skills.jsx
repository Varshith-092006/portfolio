import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code />,
      skills: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', level: 80, color: '#3178C6' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' },
        { name: 'Vue.js', level: 75, color: '#4FC08D' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server />,
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Python', level: 80, color: '#3776AB' },
        { name: 'Express.js', level: 85, color: '#000000' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'PostgreSQL', level: 70, color: '#336791' }
      ]
    },
    {
      title: 'Design & Tools',
      icon: <Palette />,
      skills: [
        { name: 'Figma', level: 80, color: '#F24E1E' },
        { name: 'Git', level: 85, color: '#F05032' },
        { name: 'Docker', level: 70, color: '#2496ED' },
        { name: 'AWS', level: 65, color: '#FF9900' },
        { name: 'Framer Motion', level: 85, color: '#0055FF' }
      ]
    }
  ];

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        {/* Floating Skills Background */}
        <div className="floating-skills">
          <div className="floating-skill">React</div>
          <div className="floating-skill">Node.js</div>
          <div className="floating-skill">TypeScript</div>
          <div className="floating-skill">Python</div>
          <div className="floating-skill">MongoDB</div>
          <div className="floating-skill">AWS</div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={`skill-category enhanced-card ${categoryIndex % 2 === 0 ? 'card-hover-left' : 'card-hover-right'}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: false, amount: 0.3 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>

                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="skill-tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <span>{skill.name} - {skill.level}% proficiency</span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            {[
              'REST APIs', 'GraphQL', 'Redux', 'Next.js', 'Tailwind CSS',
              'Sass', 'Webpack', 'Jest', 'Cypress', 'CI/CD',
              'Responsive Design', 'PWA', 'SEO', 'Performance Optimization'
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 