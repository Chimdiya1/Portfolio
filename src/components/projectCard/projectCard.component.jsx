import React from 'react'
import './projectCard.styles.scss'
import code from './code.png';
import view from './view.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';
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
              <FontAwesomeIcon className='icon' icon={faEye} />View
            </a>
            <a href={`${item.links[1]}`}>
              {' '}
              <FontAwesomeIcon className='icon' icon={faCode} />
              Code
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default ProjectCard;