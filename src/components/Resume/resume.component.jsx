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
        Have a look at my Resume to see what value I have to offer
      </p>
      <img className="resume-word" src={resumeWord} alt="resume" />
      <img className="resume1" src={resume1} alt="resume1" />
      <img className="circle2" src={circle2} alt="circle2" />
      <div className="actions">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vRs-iHEhoQXHtjKtxkxfopePTAJRLaQ141us7-fOm13K3L48IoaEqSAxUtYzfg0cpU3HPUKuKSYabBz/pub"
          className="button"
        >
          Share
        </a>
        <a
          href="./resume.pdf"
          download="Chimdia-Anyiam-Resume"
          className="button"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Resume;
