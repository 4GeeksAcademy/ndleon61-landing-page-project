import React from 'react';
import '../projectCard/projectCard.css';

const ProjectCard = ({ title, description, image, link }) => (
  <div className="card">
    <img src={image} alt={title} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
    <div className="card-footer">
      <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        View
      </a>
    </div>
  </div>
);

export default ProjectCard;