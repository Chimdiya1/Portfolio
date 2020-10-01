import React from 'react'
import './projectCard.styles.scss'
import code from './code.png';
import view from './view.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';
const ProjectCard = ({item}) => {

    let styles = {
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url(${item.imgUrl})`,
    };
    return (
      <div style={styles} className="project-card">
        <div className="details">
          <h4 className="title">{item.name}</h4>
          <p className="description">{item.description}</p>
          <p className="stack">{item.stack}</p>
          <div className="links">
            <a
              href={`${item.links[0]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faEye} />
              View
            </a>
            {item.links[1]!==''?<a
              href={`${item.links[1]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FontAwesomeIcon className="icon" icon={faCode} />
              Code
            </a>:''}
            
          </div>
        </div>
      </div>
    );
}
 
export default ProjectCard;