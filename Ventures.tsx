import React from 'react';
import { motion } from 'framer-motion';
import { ventures } from '../data';
import { FaYoutube, FaShoppingBag } from 'react-icons/fa';

const Ventures: React.FC = () => {
  return (
    <section id="ventures" className="py-5">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-5 fw-bold text-uppercase"
        >
          My <span className="text-danger">Ventures</span>
        </motion.h2>
        
        <div className="row g-4 justify-content-center">
          {ventures.map((v, index) => (
            <motion.div 
              key={v.id} 
              className="col-md-6 col-lg-5"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass-card h-100 p-5 text-center position-relative">
                {/* Decorative Background Icon */}
                <div className="position-absolute top-0 end-0 opacity-10 p-3">
                   {v.name.includes("Cooking") ? <FaYoutube size={100} /> : <FaShoppingBag size={100} />}
                </div>

                <div className={`display-3 mb-3 ${v.color}`}>
                   {v.name.includes("Cooking") ? <FaYoutube /> : <FaShoppingBag />}
                </div>

                <h3 className="fw-bold">{v.name}</h3>
                <p className="text-muted mt-3">{v.description}</p>
                
                <a 
                  href={v.link} 
                  target="_blank" 
                  className={`btn mt-4 rounded-pill px-4 ${v.name.includes("Cooking") ? "btn-danger" : "btn-primary"}`}
                >
                  Visit {v.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;