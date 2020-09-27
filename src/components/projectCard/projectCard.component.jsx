import React from 'react'
import './projectCard.styles.scss'
import code from './code.png';
import view from './view.png';
const ProjectCard = ({item}) => {

    let styles = {
      'backgroundImage': `url(${item.imgUrl})`,
    };
    return (
      <div style={styles} className="project-card">
        <div className="details">
          <h4 className="title">{item.name}</h4>
          <p className="description">{item.description}</p>
          <p className="stack">{item.stack}</p>
          <div className="links">
            <a href={`${item.links[0]}`}>
              <img src={view} alt="view" /> View
            </a>
            <a href={`${item.links[1]}`}>
              {' '}
              <img src={code} alt="code" />
              Code
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default ProjectCard;