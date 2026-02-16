import React from 'react';
import { experience } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-uppercase">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="list-group shadow-sm">
              {experience.map((exp) => (
                <div key={exp.id} className="list-group-item p-4 border-start border-5 border-primary">
                  <div className="d-flex w-100 justify-content-between flex-column flex-md-row">
                    <h5 className="mb-1 fw-bold text-primary">{exp.role}</h5>
                    <small className="text-muted fw-bold">{exp.date}</small>
                  </div>
                  <p className="mb-1 fw-semibold">{exp.company}</p>
                  <p className="mb-0 text-muted mt-2">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;