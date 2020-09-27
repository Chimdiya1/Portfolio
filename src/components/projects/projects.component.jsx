import React from 'react';
import './projects.styles.scss'
import circle from './Group5.png';
import project from './PROJECTS.png';
import ProjectCard from '../projectCard/projectCard.component';
const Projects = () => {
    return (
      <div className="projects" id="projects">
        <h2>Projects.</h2>
        <p className="check">Check out some projects I've worked on</p>
        <img className="circle" src={circle} alt="circle" />
        <img className="project" src={project} alt="project" />
        <div className="project-grid">
          <ProjectCard color="red" image="blogysc.jpg" />
          <ProjectCard color="blue" />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    );
}
 
export default Projects;