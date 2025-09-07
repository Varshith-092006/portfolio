import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'kollivarshith123@gmail.com',
      link: 'mailto:kollivarshith123@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 9491148245',
      link: 'tel:+919491148245'
    },
    {
      icon: <MapPin />,
      title: 'Location',
      value: 'Guntur, Andhra Pradesh',
      link: null
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Send email using EmailJS or your preferred service
    try {
      // For now, we'll simulate the email sending
      // In a real implementation, you would integrate with EmailJS, Formspree, or your backend
      const emailData = {
        to_email: 'kollivarshith123@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Email would be sent to kollivarshith123@gmail.com with data:', emailData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-availability">
              <h4>Availability</h4>
              <p>I'm currently available for freelance work and full-time opportunities.</p>
              <div className="availability-status">
                <span className="status-dot available"></span>
                <span>Available for new projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.name && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.name}
                  </motion.span>
                )}
              </div>

              <div className="form-group">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.email && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.span>
                )}
              </div>

              <div className="form-group">
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.subject && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.subject}
                  </motion.span>
                )}
              </div>

              <div className="form-group">
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  rows="5"
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.message && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.span>
                )}
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isSubmitting ? (
                  <motion.div
                    className="loading-spinner"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus && (
                <motion.div
                  className={`submit-status ${submitStatus}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message sent successfully!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again.</span>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 