import React from 'react';
import { project } from '../json/projects';
import Project from '../components/Project';

function Portfolio() {
  return (
    <div className="content-section">
      {project.map((proj) => (
        <Project project={proj} key={proj.name} />
      ))}
    </div>
  );
}

export default Portfolio;
