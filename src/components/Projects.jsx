import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Computer, 
  Eye, 
  X,
  Code,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      shortDescription: 'Full-stack e-commerce platform with payment integration',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'Full Stack',
      liveUrl: 'https://food-del-rust.vercel.app',
      githubUrl: 'https://github.com/Varshith-092006/food-del',
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for product management',
        'Responsive design for all devices'
      ]
    },
    {
  id: 2,
  title: 'Chat Application',
  description: 'A real-time one-to-one chat application with instant messaging, typing indicators, and a clean responsive interface.',
  shortDescription: 'One-to-one real-time chat with modern UI',
  image: '💬',
  technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  category: 'Real-time',
  liveUrl: 'https://chat-app-omega-olive.vercel.app',
  githubUrl: 'https://github.com/Varshith-092006/chat-app',
  features: [
    'Real-time one-to-one messaging',
    'Typing indicators',
    'Message seen/delivered status',
    'User authentication',
    'Profile management',
    'Responsive design with Tailwind CSS'
  ]
}
,
    {
  id: 3,
  title: 'Weather App',
  description: 'A sleek and responsive weather application that fetches real-time weather data using a public API, displaying temperature, humidity, and conditions based on user location or input.',
  shortDescription: 'Real-time weather data with clean UI',
  image: '🌤️',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
  category: 'Web App',
  liveUrl: 'https://varshith-092006.github.io/weather',
  githubUrl: 'https://github.com/Varshith-092006/weather',
  features: [
    'Real-time weather data',
    'Search by city name',
    'Temperature, humidity, and condition display',
    'Dynamic weather icons',
    'Geolocation support',
    'Responsive user interface'
  ]
},
    {
  id: 4,
  title: 'Tic Tac Toe Game',
  description: 'A classic two-player Tic Tac Toe game built with HTML, CSS, and JavaScript. It features interactive UI, game state tracking, and win/draw detection.',
  shortDescription: 'Classic 2-player Tic Tac Toe game',
  image: '❌⭕',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  category: 'Game',
  liveUrl: 'https://varshith-092006.github.io/tictactoe',
  githubUrl: 'https://github.com/Varshith-092006/tictactoe',
  features: [
    'Two-player local gameplay',
    'Win and draw detection',
    'Interactive UI with animations',
    'Game reset functionality',
    'Responsive layout for all devices',
    'Minimal and clean design'
  ]
}
,
   {
  id: 5,
  title: 'To-Do List App',
  description: 'A modern to-do list application built with React, offering a seamless user experience with task creation, editing, completion, and persistent local storage.',
  shortDescription: 'Task management with React and local storage',
  image: '✅',
  technologies: ['React', 'JavaScript', 'CSS'],
  category: 'Web App',
  liveUrl: 'https://todos-kohl-eta.vercel.app',
  githubUrl: 'https://github.com/Varshith-092006/todos',
  features: [
    'Add, edit, and delete tasks',
    'Mark tasks as completed',
    'Persistent storage using localStorage',
    'Component-based architecture',
    'Responsive and accessible UI',
    'Filter by all / active / completed'
  ]
}
,
    {
  id: 6,
  title: 'Music Player',
  description: 'A stylish music player built using HTML, CSS, and JavaScript. It supports play/pause, skip tracks, progress tracking, and volume control with a responsive user interface.',
  shortDescription: 'Stylish web-based music player with JS controls',
  image: '🎵',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  category: 'Frontend',
  liveUrl: 'https://spotify-1cos.onrender.com',
  githubUrl: 'https://github.com/Varshith-092006/spotify',
  features: [
    'Play, pause, next, and previous controls',
    'Track progress bar with seeking',
    'Volume control',
    'Animated UI and cover art display',
    'Responsive design for all devices',
    'Playlist support with local audio files'
  ]
}
,
{
  id: 7,
  title: 'Emergency Service Locator App',
  description: 'A real-time emergency service locator application that helps users find nearby hospitals, police stations, and fire stations based on their location. Built with geolocation, maps, and a robust backend.',
  shortDescription: 'Real-time locator for nearby emergency services',
  image: '🚨',
  technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'Socket.io'],
  category: 'Map Based',
  liveUrl: 'https://emergency-service-pink.vercel.app',
  githubUrl: 'https://github.com/Varshith-092006/Emergency-Service',
  features: [
    'Live location tracking with Geolocation API',
    'Map interface with service pins (Leaflet)',
    'Search for nearby hospitals, police, and fire stations',
    'Real-time updates using Socket.io',
    'User authentication and emergency request system',
    'Responsive and mobile-first design'
  ]
}

  ];

const categories = ['All', 'Full Stack', 'Web App', 'Frontend', 'Game', 'Real-time', 'Map Based'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </motion.div>

      <motion.div
        className="category-filter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card enhanced-card diagonal-slide ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              layout
            >
              <div className="project-preview-container">
                <div className={`project-preview ${index % 2 === 0 ? 'preview-left' : 'preview-right'}`}> 
                  {/* Replace with actual image or screenshot if available */}
                  <div className="preview-placeholder">
                    <span role="img" aria-label="preview">{project.image}</span>
                  </div>
                </div>
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>{project.image}</span>
                  </div>
                  <div className="project-overlay">
                    <motion.button
                      className="view-btn"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="project-links">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Computer size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-image">
                    <span>{selectedProject.image}</span>
                  </div>
                  <div className="modal-info">
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-category">{selectedProject.category}</p>
                    <p className="modal-description">{selectedProject.description}</p>
                  </div>
                </div>

                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    View Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Computer size={18} />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 