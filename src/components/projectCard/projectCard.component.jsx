import React from 'react'
import './projectCard.styles.scss'

const ProjectCard = (prop) => {

    let styles = {
      'backgroundImage': `url(https://res.cloudinary.com/chimdia/image/upload/v1600986454/portfolio/blogysc.jpg)`,
    };
    return (
      <div style={styles} className="project-card">
        <div className='details'>
          <h4 className="title">Culux</h4>
          <p className="description">Real Estate listings Platform</p>
          <p className="stack">React + Redux + SASS + Firebase</p>
          <div className='links'> 
            <p>View</p>
            <p>Code</p>
          </div>
        </div>
      </div>
    );
}
 
export default ProjectCard;