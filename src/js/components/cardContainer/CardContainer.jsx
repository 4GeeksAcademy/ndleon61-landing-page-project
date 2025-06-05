import React from 'react';
import '../cardContainer/cardContainer.css'
import ProjectCard from '../projectCard/ProjectCard';
import projects from '../../data/data';

const CardContainer = () => {
  return (
    <div id="cards">
    {projects.map(project => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </div>
  )
};

export default CardContainer;