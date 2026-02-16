import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import {  FaWordpress, FaMobileAlt, FaShoppingCart, FaGavel } from 'react-icons/fa';

// Helper function to get icons based on project title/tech
const getProjectIcon = (title: string) => {
  if (title.includes("Fruits")) return <FaShoppingCart className="text-success display-4" />;
  if (title.includes("Auction")) return <FaGavel className="text-primary display-4" />;
  if (title.includes("Navio")) return <FaWordpress className="text-info display-4" />;
  return <FaMobileAlt className="text-secondary display-4" />;
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-5 fw-bold text-uppercase"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }} // Staggered animation
              viewport={{ once: true }}
            >
              <div className="glass-card h-100 p-4 d-flex flex-column">
                <div className="mb-4 text-center">
                  {getProjectIcon(project.title)}
                </div>
                
                <h4 className="fw-bold text-center mb-2">{project.title}</h4>
                <div className="text-center mb-3">
                    <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3">{project.category}</span>
                </div>
                
                <p className="text-muted text-center flex-grow-1">
                  {project.description}
                </p>

                <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                  {project.tech.map((t, i) => (
                    <span key={i} className="small fw-bold text-secondary border rounded px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;