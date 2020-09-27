import React from 'react';
import './resume.styles.scss';
import resume1 from './resume1.png';
import resumeWord from './resume.png';
import circle2 from './circle2.png';
const Resume = () => {
  return (
    <div className="resume" id="resume">
      <h2>Resume.</h2>
      <p className="check">
        Have a look at my Resume to see why and how i'll make your project
        better
      </p>
      <img className="resume-word" src={resumeWord} alt="resume" />
      <img className="resume1" src={resume1} alt="resume1" />
      <img className="circle2" src={circle2} alt="circle2" />
      <div className="actions">
        <div className="button">Share</div>
        <div className="button">Download</div>
      </div>
    </div>
  );
};

export default Resume;
