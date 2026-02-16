import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="container">
        
        {/* Animated Name */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-2 fw-bold mb-3"
        >
          Hi, I'm <span className="text-gradient">{personalData.name}</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lead text-muted mb-4 fs-3"
        >
          {personalData.role}
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="d-flex justify-content-center gap-4 mb-5"
        >
          <a href={`https://${personalData.linkedin}`} target="_blank" className="text-dark fs-2 hover-scale"><FaLinkedin /></a>
          <a href="#" className="text-dark fs-2 hover-scale"><FaGithub /></a>
          <a href={`mailto:${personalData.email}`} className="text-dark fs-2 hover-scale"><FaEnvelope /></a>
        </motion.div>

        {/* Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-sm fw-bold me-3">
            View Work
          </a>
          <a href="#contact" className="btn btn-outline-dark btn-lg rounded-pill px-5 py-3 fw-bold">
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;