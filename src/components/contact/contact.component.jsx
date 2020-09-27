import React from 'react';
import './contact.styles.scss';
import github from './github.svg';
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact.</h2>
      <p className="check">
        My contact details so we can work on that project of yours
      </p>
      <div className="content">
        <div className='words'>
          <p className="tagline">Want to work with me?</p>
          <h4>Let's Create Magic</h4>
          <p className="search">
            I am actively searching for opportunities and would love to know how
            I can Improve your product with my skills.
          </p>
        </div>
        <div className='contact-details'>
          <div className="icons">
            <a href="rgeg">
              <img src={github} alt="github" />
            </a>
            <a href="rgeg">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="rgeg">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <a className='shoot' href="mailto:fortunechimdiya@gmail.com">Shoot me an email</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
